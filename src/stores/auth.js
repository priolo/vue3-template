import { defineStore } from 'pinia'
import ajax from "@/plugins/AjaxService"


export const useAuthStore = defineStore('auth', {

	state: () => ({
		user: null, //{ id:<???>, username:<string>, has_to_change_password:<bool>, role:<???> }
		token: "",//Cookies.get('token'),

		username: "admin",
		oldpassword: "",
		password: "secret",
		repassword: "",
		isChangePasswordOpen: false,
	}),

	getters: {
		isLogged() {
			return this.user != null && this.token != null
		}
	},

	actions: {

		// get alla USER
		async fetchAll() {
			const data = await ajax.get(`docs`);
			//all.setAll(data)
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