<template>
  <v-app-bar color="primary" prominent>

    <v-app-bar-nav-icon
      variant="text"
      @click.stop="onDrawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>My files</v-toolbar-title>

    <v-spacer />

    <AccountMenu />

  </v-app-bar>
</template>

<style scoped>
</style>

<script setup>
import { useLayoutStore } from "@/stores/layout";
import AccountMenu from "./AccountMenu";

// HOOKS
const layout = useLayoutStore();

// HANDLERS
const onDrawer = () => {
  layout.toggleDrawer()
}
</script>
