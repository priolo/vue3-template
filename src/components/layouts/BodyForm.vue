<template>
  <div class="container">
    <div class="body">
      <slot />
    </div>
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 15px;
}
.body {
  flex: 1 1 auto;
}
.footer {
  display: flex;
  flex: 0 1 auto;
  padding: 15px;
}
</style>


<script setup>
</script>
