<template>

  <v-app>

    <template v-if="auth.isLogged">
    <AppBar />

    <NavigationDrawer />

    <MainBody />

    <MainFooter />
    </template>

    <template v-else>
      DIODO
    </template>

  </v-app>

</template>


<style scoped>
</style>


<script setup>
import { useAuthStore } from "@/stores/auth";
import MainBody from "@/components/layouts/MainBody";
import AppBar from "@/components/layouts/AppBar";
import NavigationDrawer from "@/components/layouts/NavigationDrawer";
import MainFooter from "@/components/layouts/MainFooter"


// HOOKS
const auth = useAuthStore();

// HANDLERS
</script>
