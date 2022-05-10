import { defineStore } from 'pinia'
import ajax from "@/plugins/AjaxService"
import { DIALOG_TYPES, useLayoutStore } from './layout';
import i18n from '@/plugins/i18n';


export const useDocsStore = defineStore('docs', {

	state: () => ({

		// tutti i DOCS
		all: [],

		select: null,
	}),

	getters: {
		// getList: () => {
		// 	const { getSearchUrl, getSorted } = getStoreRoute()
		// 	let users = [...state.all]

		// 	let txt = getSearchUrl("search").trim().toLowerCase()
		// 	if (txt.length > 0) {
		// 		users = users.filter(user =>
		// 			user.username.toLowerCase().indexOf(txt) != -1
		// 			|| user.email.toLowerCase().indexOf(txt) != -1
		// 		)
		// 	}
		// 	users = getSorted({ items: users })
		// 	return users
		// },
		// canSave: () => {
		// 	const { select: user, selectOrigin: original } = state
		// 	return user && !utils.isEqualDeep(user, original)
		// },
		// getById: () => {
		// 	return state.all.find(user => user.id == id)
		// }
	},

	actions: {

		// recupera tutti i DOCS
		async fetchAll() {
			const data = await ajax.get(`docs`);
			this.all = data
			//store.setQueryUrl(document.location.search)
		},

		// recupero un documento tramite id
		async fetchById(id) {
			const data = await ajax.get(`docs/${id}`) 
			this.select = data
		},


		// inizio 
		async edit(doc) {
			if (!doc) doc = {
				title: "",
				desc: "",
				link: "",
				author_id: null,
			}
			this.inEdit = doc
		},

		async save() {
			const layout = useLayoutStore()
			if (!this.select) return false

			// validation
			// const errs = validateAll()
			// if (errs.length > 0) return false

			// ajax
			if (!this.select.id) {
				await ajax.post(`docs`, this.select);
			} else {
				await ajax.put(`docs/${this.select.id}`, this.select);
			}

			// feedback
			layout.dialogOpen({ 
				type: DIALOG_TYPES.SUCCESS, 
				text: i18n.global.t("dialog.feedback.create"), 
				modal: false 
			})

		},

		// destroy: async (state, user, store) => {
		// 	const { dialogOpen } = getStoreLayout()
		// 	if (!user) return

		// 	const res = await dialogOpen({
		// 		type: DIALOG_TYPES.WARNING,
		// 		title: i18n.t("dialog.feedback.delete.confirm.title"),
		// 		text: i18n.t("dialog.feedback.delete.confirm.text"),
		// 		labelOk: i18n.t("dialog.feedback.delete.confirm.yes"),
		// 		labelCancel: i18n.t("dialog.feedback.delete.confirm.no"),
		// 	})
		// 	if (!res) return

		// 	await ajax.delete(`users/${user.id}`);
		// 	dialogOpen({ type: DIALOG_TYPES.SUCCESS, text: i18n.t("dialog.feedback.delete.success"), modal: false })

		// 	store.fetchAll()
		// },

	},
})
