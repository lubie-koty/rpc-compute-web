<template>
    <div class="flex flex-col items-center justify-center w-full h-full">
        <h1 class="font-bold mb-5">
            {{ formLabels[route.params.operation as string]!.label }}
        </h1>
        <UCard class="w-1/2 h-1/4">
            <UForm
                :schema="operationSchema"
                :state="operationState"
                class="space-y-4"
                @submit="onSubmit"
            >
                <div class="flex justify-between items-center">
                    <UFormField
                        :name="
                            operationType === binaryOperation
                                ? 'firstNumber'
                                : 'number'
                        "
                    >
                        <div class="flex items-center space-x-2">
                            <div class="flex items-center">
                                <!-- <UIcon name="ph:hash" class="text-base mr-1" /> -->
                                <span class="text-base">
                                    {{
                                        formLabels[
                                            route.params.operation as string
                                        ]!.args[0]
                                    }}
                                </span>
                            </div>

                            <div>
                                <UInput
                                    v-if="operationType === binaryOperation"
                                    v-model="
                                        (operationState as typeof binaryState)
                                            .firstNumber
                                    "
                                    type="number"
                                />

                                <UInput
                                    v-else
                                    v-model="
                                        (operationState as typeof unaryState)
                                            .number
                                    "
                                    type="number"
                                />
                            </div>
                        </div>
                    </UFormField>

                    <UFormField
                        v-if="operationType === binaryOperation"
                        name="secondNumber"
                    >
                        <div class="flex items-center space-x-2">
                            <div class="flex items-center">
                                <!-- <UIcon name="ph:hash" class="text-base mr-1" /> -->
                                <span class="text-base">
                                    {{
                                        formLabels[
                                            route.params.operation as string
                                        ]!.args[1]
                                    }}
                                </span>
                            </div>

                            <UInput
                                v-model="
                                    (operationState as typeof binaryState)
                                        .secondNumber
                                "
                                type="number"
                            />
                        </div>
                    </UFormField>
                </div>

                <UButton icon="ph:calculator" type="submit"> Compute </UButton>
            </UForm>

            <template #footer>
                <div class="flex gap-2">
                    <span>Computed result:</span>
                    <template v-if="operationInProgress">
                        <UIcon
                            name="tabler:loader-2"
                            class="text-base text-primary animate-spin"
                        />
                    </template>
                    <template v-else>
                        <span class="font-bold">{{
                            result ?? "No operation executed"
                        }}</span>
                    </template>
                </div>
            </template>
        </UCard>
    </div>
</template>

<script setup lang="ts">
import type { OperationResponse } from "@/types";
import { formLabels } from "@/consts/form-info";
import * as v from "valibot";

const manyNumbersOperation = ["add", "sub", "mul", "div", "rms", "gm"];

const route = useRoute();
const result = ref<number | undefined>();
const operationInProgress = ref<boolean>(false);
const clientMode = useState<string>("client-mode");

const unaryOperation = Symbol();
const unarySchema = v.object({
    number: v.pipe(v.number()),
});
const unaryState = reactive({
    number: 0,
});

const binaryOperation = Symbol();
const binarySchema = v.object({
    firstNumber: v.pipe(v.number()),
    secondNumber: v.pipe(v.number()),
});
const binaryState = reactive({
    firstNumber: 0,
    secondNumber: 0,
});

const operationType = computed<symbol>(() => {
    const { serviceName, operation } = route.params;
    if (
        serviceName === "complex" &&
        ["sqrt", "abs"].includes(operation as string)
    ) {
        return unaryOperation;
    }
    return binaryOperation;
});

const operationState = computed<typeof binaryState | typeof unaryState>(() => {
    return operationType.value === binaryOperation ? binaryState : unaryState;
});

const operationSchema = computed<typeof binarySchema | typeof unarySchema>(
    () => {
        return operationType.value === binaryOperation
            ? binarySchema
            : unarySchema;
    },
);

const operationRequest = computed(() => {
    const { operation } = route.params;
    if (manyNumbersOperation.includes(operation as string)) {
        return {
            numbers: [binaryState.firstNumber, binaryState.secondNumber],
        };
    }
    return operationType.value === binaryOperation
        ? {
              firstNumber: binaryState.firstNumber,
              secondNumber: binaryState.secondNumber,
          }
        : { number: unaryState.number };
});

const getOperationResult = async () => {
    const { operation } = route.params;
    try {
        const response = await useFetch<OperationResponse>(
            `/api/${clientMode.value}-${operation}`,
            {
                body: JSON.stringify(operationRequest.value),
            },
        );
        result.value = response.data.value?.result;
    } catch (error) {
        console.error(error);
    }
};

const onSubmit = async () => {
    operationInProgress.value = true;
    await getOperationResult();
    operationInProgress.value = false;
};
</script>
