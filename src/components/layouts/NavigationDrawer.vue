<template>

  <v-navigation-drawer v-model="layout.drawer" bottom temporary>

    <v-list>

      <v-list-item
        v-for="(item, index) in layout.menu"
        :key="index"
        :value="item"
        active-color="primary"
        :to="item.path"
      >
        <v-list-item-avatar start>
          <v-icon :icon="item.icon" />
        </v-list-item-avatar>
        <v-list-item-title v-text="t(item.text)" />
      </v-list-item>

    </v-list>

  </v-navigation-drawer>
</template>

<style scoped>
</style>

<script setup>
import { useLayoutStore } from "@/stores/layout";
import { useI18n } from 'vue-i18n'

// HOOKS
const layout = useLayoutStore();
const { t } = useI18n()

// HANDLERS
</script>
