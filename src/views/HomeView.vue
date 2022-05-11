<template>
  <!-- <HelloWorld /> -->
  <div class="box" @click="onClick" :class="{ open: isOpen }" />
  <div>{{layout.size}}</div>
</template>

<style scope>
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  transition: width 2s, height 2s, background-color 2s, transform 2s;
}

.open {
  background-color: #FFCCCC;
  width: 200px;
  height: 200px;
  transform: rotate(180deg);
}
</style>

<script setup>
import HelloWorld from '../components/HelloWorld.vue';
import { useLayoutStore } from "@/stores/layout";
import { onMounted, ref } from "vue"
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const layout = useLayoutStore()

let isOpen = ref(false)

const onClick = () => {
  isOpen.value = !isOpen.value
}


onMounted(() => {
  layout.title = t("pag.home.title")
})
</script>