<template>
  <v-table>

    <thead>
      <tr>
        <th>
          {{ t("pag.docs.list.title_doc") }}
        </th>
        <th>
          {{ t("pag.docs.list.author") }}
        </th>
        <th>
          {{ t("pag.docs.list.link") }}
        </th>
        <th class="action-cell">
          {{ t("pag.docs.list.actions") }}
        </th>
      </tr>
    </thead>

    <tbody>
      <tr class="row" v-for="(doc, index) in docs.all" :key="doc.id" @click.stop="e => onClickRow(doc)">
        <td>{{ doc.title }}</td>
        <td>{{ users.getById(doc.author_id)?.username }}</td>
        <td>{{ doc.link }}</td>
        <td>
          <v-btn variant="plain" icon="mdi-delete" @click.stop="onClickDelete" />
        </td>
      </tr>
    </tbody>

  </v-table>
</template>

<style scope>
.action-cell {
  text-align: center;
}

.row {
  cursor: pointer;
}
</style>

<script setup>
import { useDocsStore } from "@/stores/docs"
import { useUsersStore } from "@/stores/users"
import { onMounted } from "vue";
import { useI18n } from 'vue-i18n'
import { useRouter } from "vue-router";
const { t } = useI18n()


// HOOKS
const docs = useDocsStore()
const users = useUsersStore()
const router = useRouter()

// HANDLERS
const onClickDelete = e => {
  console.log("delete")
}
const onClickRow = doc => {
  router.push({ 
    name: "doc", 
    params: { id: doc.id },
  })
}

// LIFECYCLE
onMounted(() => {
  docs.fetchAll()
  users.feacAllIfNotExists()
})

</script>
