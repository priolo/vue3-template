<template>
  USERS  
</template>


<script setup>
import { useLayoutStore } from "@/stores/layout";
import { onMounted } from "vue";
const layout = useLayoutStore()

onMounted(() => {
  layout.title = "pag.users.title"
})
</script>
