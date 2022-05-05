<template>
  <v-list>
    <v-list-item
      v-for="(doc, index) in docs.all"
      :key="index"
      :value="doc"
      active-color="primary"
    >
      <v-list-item-title v-text="doc.title" />
    </v-list-item>
  </v-list>
</template>

<script setup>
import { useDocsStore } from "@/stores/docs";
import { useLayoutStore } from "@/stores/layout";
import { onMounted } from "vue";


// HOOKS
const docs = useDocsStore()
const layout = useLayoutStore()


// LIFECYCLE
onMounted(() => {
  docs.fetchAll()
  layout.title = "Documents"
})


</script>
