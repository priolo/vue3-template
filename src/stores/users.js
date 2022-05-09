import { defineStore } from 'pinia'
import ajax from "@/plugins/AjaxService"


export const useUsersStore = defineStore('users', {

	state: () => ({
		// tutti gli USER 
		all: [],
	}),

	getters: {
		// restituisce un USER tramite il suo ID
		getById: (state) => (id) => {
			return state.all.find(user => user.id == id)
		}
	},

	actions: {

		// get alla USERS
		async fetchAll() {
			const data = await ajax.get(`users`);
			this.all = data
			//store.setQueryUrl(document.location.search)
		},

		// recupera gli USERS solo se necessario
		async feacAllIfNotExists() {
			if ( this.all.length > 0 ) return
			await this.fetchAll()
		}

	},
})

export const USER_ROLES = {
	ADMIN: "admin",
	WRITER: "writer",
	CUSTOMER: "customer",
}