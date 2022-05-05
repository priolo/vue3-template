/* eslint eqeqeq: "off" */
import { rest } from 'msw'
import users from "../../data/users"


const auth = [

	// login
	rest.post('/api/auth/login', (req, res, ctx) => {
		const { username, password } = req.body
		if (!username || !password) return res(ctx.status(500))

		const user = users.find(u => u.username == username && u.password == password);
		if (!user) return res(
			ctx.status(400),
			ctx.json({ "errors": [{ "code": "password_match", "field": "password" }] })
		)
		
		// generate fake token
		const header = window.btoa(`{ "alg": "HS256", "typ": "JWT" }`)
		const payload = window.btoa(`{ "sub": "${user.id}", "name": "${user.username}", "role": "${user.role}", "exp": "xxx" }`)
		const signature = Math.floor(Math.random()*9999)
		user.token = `${header}.${payload}.${signature}`

		return res(
			ctx.delay(500),
			ctx.status(200),
			ctx.json({ "access_token": user.token }),
		)
	}),

	// get current user
	rest.get('/api/auth/me', (req, res, ctx) => {
		const { token } = req.cookies
		const user = users.find(user => user.token == token);
		if (user == null) return res(ctx.status(401))
		const userData = { ...user, password: undefined, token: undefined }
		return res(
			ctx.delay(200),
			ctx.status(200),
			ctx.json(userData),
		)
	}),

	// refresh token
	rest.get('/api/auth/refresh', (req, res, ctx) => {
		const { token } = req.cookies
		const user = users.find(user => user.token == token);
		if (user == null) return res(ctx.status(401))
		user.token = Math.floor(Math.random()*1000)
		return res(
			ctx.status(200),
			ctx.json({ "access_token": token }),
		)
	}),

]

export default auth