<template>
  <v-main>
    <div class="container">
      <div class="space" />
      <div class="content">
        <router-view />
      </div>
      <div class="space" />
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

.content {
  flex: 0 0 auto;
  min-width: 600px;
}
</style>


<script setup>
</script>
