<template>
  <div class="login-container">
    <v-card class="card">
      <v-card-header>
        <v-card-header-text>
          <v-card-title>Sign up</v-card-title>
          <v-card-subtitle>Effettua il tuo login... dai!</v-card-subtitle>
        </v-card-header-text>
      </v-card-header>

      <v-card-text>
        <v-text-field label="Username" v-model="auth.username" />

        <v-text-field
          label="Password"
          type="password"
          v-model="auth.password"
        />

        <v-btn @click="auth.login">Login</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>


<style scoped>
/* .app :deep(.v-application__wrap) {
  justify-content: center;
  align-items: center;
} */
.login-container {
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  display: flex;
}
.card {
  width: 300px;
}
</style>


<script setup>
import { useAuthStore } from "@/stores/auth";

// HOOKS
const auth = useAuthStore();
</script>
