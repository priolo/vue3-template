<template>
  <v-main>
    <div class="container">
      <div class="space" v-if="!layout.isMobile" />
      <div :class="layout.isMobile ? 'mobile-on' : 'mobile-off'">
        <router-view />
      </div>
      <div class="space" v-if="!layout.isMobile" />
    </div>
  </v-main>
</template>


<style scoped>
.container {
  display: flex;
  height: 100%;
}

.space {
  flex: 1 1 auto;
}

.mobile-off {
  flex: 0 0 auto;
  min-width: 600px;
}

.mobile-on {
  flex: 1 1 auto;
}
</style>


<script setup>
import { useLayoutStore } from '@/stores/layout';
const layout = useLayoutStore()
</script>
