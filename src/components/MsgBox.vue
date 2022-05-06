<template>
  <v-dialog 
    v-model="layout.msgbox.isOpen"
    click:outside="layout.dialogClose"
  >
   
    <v-card>

      <v-card-title :class="layout.msgBoxClassColorFromType">
        {{layout.msgbox.options.title}}
      </v-card-title>

      <v-card-text>
        {{layout.msgbox.options.text}}
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" block @click="layout.dialogClose">
          {{layout.msgbox.options.labelClose}}
        </v-btn>
      </v-card-actions>

    </v-card>

  </v-dialog>
</template>


<style scoped>
.footer {
  flex: 0 1 auto;
}
</style>


<script setup>
import { useLayoutStore } from "@/stores/layout"

const layout = useLayoutStore()
</script>
