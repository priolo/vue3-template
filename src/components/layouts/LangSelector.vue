<template>
	<v-menu v-model="isOpen">

		<template v-slot:activator="{ props }">
			<v-btn v-bind="props">
				{{ i18n.global.locale }}
			</v-btn>
		</template>


		<v-list>
			<v-list-item v-for="lang in i18n.global.availableLocales" :key="lang" @click="() => onClickLang(lang)">
				<v-list-item-title>{{ lang.toUpperCase() }}</v-list-item-title>
			</v-list-item>
		</v-list>

	</v-menu>
</template>


<script setup>
import { ref } from "vue"
import { useLayoutStore } from "@/stores/layout";
import i18n from '@/plugins/i18n';


// HOOKS
const layout = useLayoutStore();
const isOpen = ref(false)

// HANDLERS
const onClickLang = (lang) => {
	isOpen.value = false
	i18n.global.locale = lang
}

</script>
