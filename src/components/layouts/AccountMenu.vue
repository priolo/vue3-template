<template>
  <v-menu anchor="start" v-model="layout.menuAccountIsOpen">
  
    <template v-slot:activator="{ props }">
      <v-btn variant="text" icon="mdi-account-circle " v-bind="props" />
    </template>

    <v-list>
      <v-list-subheader>{{ auth.user.email }}</v-list-subheader>

      <v-list-item @click="auth.settings">
        <v-list-item-icon start icon="mdi-cog" />
        <v-list-item-title>{{t("dialog.account.settings")}}</v-list-item-title>
      </v-list-item>

      <v-list-item @click="auth.logout">
        <v-list-item-icon start icon="mdi-logout" />
        <v-list-item-title>{{t("dialog.account.logout")}}</v-list-item-title>
      </v-list-item>

      <v-divider />

      <v-list-item>
        <v-switch :checked="layout.theme == 'dark'" @change="layout.themeToggle" label="Dark" hide-details></v-switch>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style scoped>
</style>

<script setup>
import { useAuthStore } from "@/stores/auth"
import { useLayoutStore } from "@/stores/layout"
import { useI18n } from 'vue-i18n'

// HOOKS
const auth = useAuthStore()
const layout = useLayoutStore()
const { t } = useI18n()
</script>
