<template>
    <UApp>
        <div class="min-h-screen grid grid-cols-[18rem_1fr]">
            <aside
                class="block shrink-0 h-screen sticky top-0 border-r border-r-primary-600"
            >
                <UNavigationMenu
                    :items="items"
                    orientation="vertical"
                    class="px-4 py-6"
                />
            </aside>
            <main>
                <NuxtPage />
            </main>
        </div>
    </UApp>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { navMenuItems } from "./navMenuItems";

const items = ref<NavigationMenuItem[]>(navMenuItems);
</script>
