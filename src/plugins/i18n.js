import { createI18n } from 'vue-i18n'
import en from "@/locales/en"
import it from "@/locales/it"


export default createI18n({
	legacy: false, // Vuetify does not support the legacy mode of vue-i18n
	locale: 'en',
	fallbackLocale: 'en',
	messages: { en, it },
})


