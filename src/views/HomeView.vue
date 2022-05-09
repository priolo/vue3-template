<template>
  <HelloWorld />
</template>


<script setup>
import HelloWorld from '../components/HelloWorld.vue';
import { useLayoutStore } from "@/stores/layout";
import { onMounted } from "vue"
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const layout = useLayoutStore()

onMounted(() => {
  layout.title = t("pag.home.title")
})
</script>