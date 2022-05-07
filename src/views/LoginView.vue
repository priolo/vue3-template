<template>
  <div class="login-container">

    <v-card class="card">

      <v-card-header>
        <v-card-header-text>
          <v-card-title>{{ t("pag.login.title") }}</v-card-title>
          <v-card-subtitle>{{ t("pag.login.subtitle") }}</v-card-subtitle>
        </v-card-header-text>
      </v-card-header>

      <v-card-text>
        <v-text-field :label='t("pag.login.username")' v-model="auth.username" />
        <v-text-field :label='t("pag.login.password")' type="password" v-model="auth.password" />
        <v-btn @click="auth.login">{{t("pag.login.signin")}}</v-btn>
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
import { useI18n } from 'vue-i18n'


// HOOKS
const auth = useAuthStore()
const { t } = useI18n()
</script>
