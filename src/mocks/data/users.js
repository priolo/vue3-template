//import { USER_ROLES } from "../../stores/user";
const USER_ROLES = {
	ADMIN: "admin",
	WRITER: "writer",
	CUSTOMER: "customer",
}

const users = [
	{
		"id": "usr-1",
		"username": "admin",
		"email": "admin@test.com",
		"password": "secret",
		"role": USER_ROLES.ADMIN,
		"token": "((admin))",
	},
	{
		"id": "usr-2",
		"username": "admin2",
		"email": "admin2@test.com",
		"password": null,
		"role": USER_ROLES.ADMIN,
		"token": "((admin2))",
	},
	{
		"id": "usr-3",
		"username": "mario",
		"email": "mario@test.com",
		"password": "secret",
		"role": USER_ROLES.WRITER,
		"token": "((mario))",
	},
	{
		"id": "usr-4",
		"username": "giovanni",
		"email": "giovanni@test.com",
		"password": null,
		"role": USER_ROLES.WRITER,
		"token": "((giovanni))",
	},
	{
		"id": "usr-5",
		"username": "daniele",
		"email": "daniele@test.com",
		"password": "secret",
		"role": USER_ROLES.CUSTOMER,
		"token": "((daniele))",
	},
	{
		"id": "usr-6",
		"username": "giorgio",
		"email": "giorgio@test.com",
		"password": null,
		"role": USER_ROLES.CUSTOMER,
		"token": "((giorgio))",
	},
	{
		"id": "usr-7",
		"username": "riccardo",
		"email": "riccardo@test.com",
		"password": null,
		"role": USER_ROLES.CUSTOMER,
		"token": "((riccardo))",
	},

]

export default users