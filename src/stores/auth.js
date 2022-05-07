import { defineStore } from 'pinia'
import ajax from "@/plugins/AjaxService"
import { useLayoutStore, DIALOG_TYPES } from './layout'
import i18n from '@/plugins/i18n';
import Cookies from 'js-cookie'


export const useAuthStore = defineStore('auth', {

	state: () => ({
		user: null, //{ id:<???>, username:<string>, has_to_change_password:<bool>, role:<???> }
		token: Cookies.get('token'),

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


		async login() {
			const layout = useLayoutStore()

			// const res = validateAll()
			// if (res.length > 0) {
			// 	dialogOpen({ type: DIALOG_TYPES.WARNING, text: i18n.t("dialog.login.form.text") })
			// 	return
			// }

			const data = {
				username: this.username,
				password: this.password,
			}
			try {
				const response = await ajax.post("auth/login", data)
				this.username = ""
				this.password = ""
				this.setToken(response.access_token)
			} catch (error) {
				layout.dialogOpen({
					type: DIALOG_TYPES.ERROR,
					title: i18n.global.t("dialog.error.400.password_match.title"),
					text: i18n.global.t("dialog.error.400.password_match.text"),
				})
				this.logout()
				return
			}
			// msg success!!
			layout.dialogOpen({
				type: DIALOG_TYPES.SUCCESS,
				text: i18n.global.t("app.auth.succeeded"),
				modal: false
			})
			// get the user
			await this.fetchCurrentUser()
		},
		logout() {
			const layout = useLayoutStore()
			//store.stopPollingRefreshToken()
			this.setToken(null)
			this.use = null
			//if (flash) dialogOpen({ type: DIALOG_TYPES.SUCCESS, text: i18n.t("app.auth.logout"), modal: false })
			layout.menuAccountIsOpen = false
		},
		

		async fetchCurrentUser() {
			try {
				const response = await ajax.get("auth/me");
				this.user = response
				//store.startPollingRefreshToken()
			} catch (error) {
				this.logout()
			}
		},
		async refresh() {
			if (this.token == null) return
			await this.fetchCurrentUser()
		},
		setToken(token) {
			if (token == null) {
				Cookies.remove('token');
			} else {
				Cookies.set('token', token) //, { expires: remember ? 365 : null });
			}
			this.token = token
		},


		settings() {
			const layout = useLayoutStore()
			layout.dialogOpen({
				type: DIALOG_TYPES.WARNING,
				text: i18n.global.t("dialog.feedback.not-implemented"),
				modal: false
			})
			layout.menuAccountIsOpen = false
		},


	},
})

