import { defineStore } from 'pinia'
import ajax from "@/plugins/AjaxService"


export const useDocsStore = defineStore('docs', {

	state: () => ({
		all: [],
		dialogEditIsOpen: false,
		select: null,
		selectOrigin: null,
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

		// get alla DOCS
		async fetchAll() {
			const data = await ajax.get(`docs`);
			this.all = data
			//store.setQueryUrl(document.location.search)
		},

		// edit: async (user) => {
		// 	if (!user) user = {
		// 		username: "",
		// 		email: "",
		// 		role: USER_ROLES.CUSTOMER
		// 	}
		// 	store.setSelect(user)
		// 	resetAll()
		// 	store.setDialogEditIsOpen(true)
		// },

		// save: async (state, _, store) => {
		// 	const { dialogOpen } = getStoreLayout()
		// 	const { select: user } = state
		// 	if (!user) return false

		// 	// validation
		// 	const errs = validateAll()
		// 	if (errs.length > 0) return false

		// 	// ajax
		// 	if (!user.id) {
		// 		await ajax.post(`users`, user);
		// 	} else {
		// 		await ajax.put(`users/${user.id}`, user);
		// 	}

		// 	// feedback
		// 	store.setDialogEditIsOpen(false)
		// 	store.setSelect(null)
		// 	dialogOpen({ type: DIALOG_TYPES.SUCCESS, text: i18n.t("dialog.feedback.create"), modal: false })

		// 	// update users list
		// 	store.fetchAll()
		// },

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

export const USER_ROLES = {
	ADMIN: "admin",
	WRITER: "writer",
	CUSTOMER: "customer",
}