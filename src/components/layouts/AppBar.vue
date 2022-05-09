<template>
  <v-app-bar color="primary" prominent>

    <v-app-bar-nav-icon variant="text" @click.stop="onDrawer"></v-app-bar-nav-icon>

    <v-toolbar-title>{{ layout.title }}</v-toolbar-title>

    <v-spacer />

    <LangSelector />

    <AccountMenu />

  </v-app-bar>
</template>

<style scoped>
</style>

<script setup>
import { useLayoutStore } from "@/stores/layout";
import AccountMenu from "./AccountMenu";
import LangSelector from "./LangSelector.vue";

// HOOKS
const layout = useLayoutStore();

// HANDLERS
const onDrawer = () => {
  layout.toggleDrawer()
}

</script>
