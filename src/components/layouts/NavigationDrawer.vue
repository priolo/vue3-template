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
        <v-list-item-title v-text="item.text" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
</style>

<script setup>
import { useLayoutStore } from "@/stores/layout";

// HOOKS
const layout = useLayoutStore();

// HANDLERS
</script>
