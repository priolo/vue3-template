// start MSW (mock service worler)
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test' || process.env.VUE_APP_MOCK === 'true') {
	const { worker } = require('../mocks/ajax/browser')
	worker.start()
}

