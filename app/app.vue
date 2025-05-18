<template>
    <UApp>
        <UNavigationMenu :items="items" class="w-full justify-center" />
        <NuxtPage />
    </UApp>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { navMenuItems } from "./navMenuItems";

const items = ref<NavigationMenuItem[]>(navMenuItems);
</script>
