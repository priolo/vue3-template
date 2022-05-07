<template>
  <v-container>
    I18N: {{t('pag.home.body')}} 
  </v-container>
</template>


<script setup>
//import i18n from '@/plugins/i18n';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
