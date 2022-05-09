<template>
  <BodyForm>
    <ListDocs />
    <template #footer>
      <v-spacer />
      <v-btn color="primary">
        {{t("pag.docs.list.btt_new")}}
      </v-btn>
    </template>
  </BodyForm>
</template>

<script setup>
import ListDocs from "./ListDocs"
import BodyForm from "@/components/layouts/BodyForm"
import { useLayoutStore } from "@/stores/layout"
import { onMounted } from "vue"

import { useI18n } from 'vue-i18n'
const { t } = useI18n()


// HOOKS
const layout = useLayoutStore()


// LIFECYCLE
onMounted(() => {
  layout.title = t("pag.docs.title")
})


</script>
