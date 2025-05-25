<template>
    <UApp>
        <div class="min-h-screen grid grid-cols-[18rem_1fr]">
            <aside
                class="block shrink-0 h-screen sticky top-0 border-r border-r-neutral-700 bg-neutral-800"
            >
                <div class="relative flex flex-col h-full px-4 py-6">
                    <div class="flex-1">
                        <UNavigationMenu
                            :items="items"
                            orientation="vertical"
                        />
                    </div>
                    <div class="self-end w-full">
                        <div class="flex items-center justify-between">
                            <UButton
                                :color="
                                    clientMode === ServiceClientType.GRPC
                                        ? 'info'
                                        : 'warning'
                                "
                                icon="vaadin:connect"
                                variant="outline"
                                @click="toggleClientMode"
                            >
                                {{ clientMode.toUpperCase() }}
                            </UButton>
                        </div>
                    </div>
                </div>
            </aside>
            <main>
                <NuxtPage />
            </main>
        </div>
    </UApp>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { navMenuItems } from "@/consts/nav-menu";
import { ServiceClientType } from "./consts/services";

const items = ref<NavigationMenuItem[]>(navMenuItems);

const clientMode = useState<string>(
    "client-mode",
    () => ServiceClientType.GRPC,
);

const toggleClientMode = () => {
    clientMode.value =
        clientMode.value === ServiceClientType.GRPC
            ? ServiceClientType.HTTP
            : ServiceClientType.GRPC;
};
</script>
