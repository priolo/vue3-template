<template>
  <BodyForm v-if="docs.select!=null">

    <v-card class="card">

      <v-card-text>
        <v-text-field :label='t("pag.docs.detail.title_field")' v-model="docs.select.title"/>
        <v-text-field :label='t("pag.docs.detail.desc")' v-model="docs.select.desc"/>
        <v-text-field :label='t("pag.docs.detail.link")' v-model="docs.select.link"/>
      </v-card-text>

    </v-card>


    <template #footer>

      <v-spacer />
      <v-btn @click="onCancel">
        {{ t("pag.docs.detail.cancel") }}
      </v-btn>
      <v-btn @click="onSave" color="primary">
        {{ t("pag.docs.detail.save") }}
      </v-btn>

    </template>

  </BodyForm>
</template>

<style scope>
.action-cell {
  text-align: center;
}
</style>

<script setup>
import BodyForm from "@/components/layouts/BodyForm";
import { useDocsStore } from "@/stores/docs"
import { useLayoutStore } from "@/stores/layout"
import { onMounted } from "vue";
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from "vue-router";
const { t } = useI18n()


// HOOKS
const route = useRoute()
const router = useRouter()
const docs = useDocsStore()
const layout = useLayoutStore()


// HANDLERS
const onCancel = () => {
  router.go(-1)
}
const onSave = () => {
  docs.save()
  router.go(-1)
}


// LIFECYCLE
onMounted(() => {
  layout.title = t("pag.docs.detail.title_new")
  const docId = route.params.id
  docs.fetchById(docId)
})

</script>
