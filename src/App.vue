<template>
  <v-app :theme="layout.theme">

    <MsgBox />

    <template v-if="auth.isLogged">
      <AppBar />
      <NavigationDrawer />
      <MainBody />
      <MainFooter />
    </template>

    <LoginView v-else />

  </v-app>
</template>


<style scoped>
</style>


<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useLayoutStore } from "@/stores/layout";
import MainBody from "@/components/layouts/MainBody";
import AppBar from "@/components/layouts/AppBar";
import NavigationDrawer from "@/components/layouts/NavigationDrawer";
import MainFooter from "@/components/layouts/MainFooter";
import MsgBox from "@/components/MsgBox";
import LoginView from "@/views/LoginView";

// HOOKS
const auth = useAuthStore()
const layout = useLayoutStore()

// HANDLERS

// LIFECYCLE
onMounted(()=>auth.fetchCurrentUser())

</script>
