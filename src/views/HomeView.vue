<template>
  <HelloWorld />
</template>


<script setup>
import HelloWorld from '../components/HelloWorld.vue';
import { useLayoutStore } from "@/stores/layout";
import { onMounted } from "vue";
const layout = useLayoutStore()

onMounted(() => {
  layout.title = "pag.home.title"
})
</script>