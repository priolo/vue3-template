<template>
  <v-app>

    <AppBar />

    <NavigationDrawer />

    <MainBody />

    <MainFooter />

  </v-app>

</template>


<style scoped>
</style>


<script setup>
import { useLayoutStore } from "@/stores/layout";
import MainBody from "@/components/layouts/MainBody";
import AppBar from "@/components/layouts/AppBar";
import NavigationDrawer from "@/components/layouts/NavigationDrawer";
import MainFooter from "@/components/layouts/MainFooter"


// HOOKS
const layout = useLayoutStore();

// HANDLERS
const onDrawer = () => {
  layout.toggleDrawer();
}
</script>
