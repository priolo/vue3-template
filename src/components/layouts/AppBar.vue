<template>
  <v-app-bar color="primary" prominent>

    <v-app-bar-nav-icon
      variant="text"
      @click.stop="onDrawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>My files</v-toolbar-title>

    <v-spacer />

    <v-menu anchor="start">
      <template v-slot:activator="{ props }">
        <v-btn variant="text" icon="mdi-account-circle " v-bind="props" />
      </template>
      <v-list>
        <v-list-subheader>{{auth.user.email}}</v-list-subheader>
         <v-list-item @click="auth.logout">
          <v-list-item-avatar start>
            <v-icon icon="mdi-logout" />
          </v-list-item-avatar>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
        <v-list-item @click="auth.logout">
          <v-list-item-avatar start>
            <v-icon icon="mdi-logout" />
          </v-list-item-avatar>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

  </v-app-bar>
</template>

<style scoped>
</style>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { useLayoutStore } from "@/stores/layout";

// HOOKS
const layout = useLayoutStore();
const auth = useAuthStore();

// HANDLERS
const onDrawer = () => {
  layout.toggleDrawer();
};
</script>
