<template>
    <div class="flex flex-col items-center justify-center w-1/2 h-1/2">
        <UCard>
            <template #header>
                <UBadge>
                    {{ route.params.serviceName }}
                    {{ route.params.operation }}</UBadge
                >
            </template>

            <UForm
                :schema="operationSchema"
                :state="operationState"
                :label="formLabels[route.params.operation as string]!.label"
                class="space-y-4"
                @submit="onSubmit"
            >
                <UFormField
                    :label="
                        formLabels[route.params.operation as string]!.args[0]
                    "
                    :name="
                        operationType === binaryOperation
                            ? 'firstNumber'
                            : 'number'
                    "
                >
                    <UInput
                        v-if="operationType === binaryOperation"
                        v-model="
                            (operationState as typeof binaryState).firstNumber
                        "
                    />
                    <UInput
                        v-else
                        v-model="(operationState as typeof unaryState).number"
                    />
                </UFormField>

                <UFormField
                    v-if="operationType === binaryOperation"
                    :label="
                        formLabels[route.params.operation as string]!.args[1]
                    "
                    name="secondNumber"
                >
                    <UInput
                        v-model="
                            (operationState as typeof binaryState).secondNumber
                        "
                    />
                </UFormField>

                <UButton type="submit"> Compute </UButton>
            </UForm>
        </UCard>
    </div>
</template>

<script setup lang="ts">
import * as v from "valibot";
import type { FormSubmitEvent } from "@nuxt/ui";
import { formLabels } from "./consts";

const route = useRoute();

const unaryOperation = Symbol();
const unarySchema = v.object({
    number: v.pipe(v.number()),
});
const unaryState = reactive({
    number: 0,
});
type UnarySchema = v.InferOutput<typeof unarySchema>;

const binaryOperation = Symbol();
const binarySchema = v.object({
    firstNumber: v.pipe(v.number()),
    secondNumber: v.pipe(v.number()),
});
const binaryState = reactive({
    firstNumber: 0,
    secondNumber: 0,
});
type BinarySchema = v.InferOutput<typeof binarySchema>;

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

const onSubmit = async (event: FormSubmitEvent<UnarySchema | BinarySchema>) => {
    console.log(event);
};
</script>
