## NPM COMMAND

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production in "dist" directory
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

---

## Stack tecnologie

- Main Framework  
	[vue3](https://vuejs.org/)  
	[vue-cli](https://cli.vuejs.org/)  
- Routing  
	[vue-router](https://router.vuejs.org/)  
- Store  
	[pinia](https://pinia.vuejs.org/)  
- Components  
  	[vuetify3](https://next.vuetifyjs.com/)
    - app structure with login
    - template
- Internationalizzation  
	[Vue I18n](https://vue-i18n.intlify.dev/)
- Mock  
	[msw](https://mswjs.io/)
- e2e-test  
	[cypress](https://www.cypress.io/)
- unt-test  
	[jest](https://jestjs.io/)


## VUE

Nel templete è stato usato [VUE3](https://vuejs.org/) con il paradigma [COMPOSITION](https://vuejs.org/guide/reusability/composables.html)

#### DIRECTORY/FILES

- `/views/`
	I componenti caricati nel BODY dal ROUTING,  
  	cioè le PAGES all'interno del LAYOUT dell'APPLICAZIONE 
- `/components/` 
	Gli oggetti riutilizzabili che compongono le PAGES


## STORE

Utilizzato il [PATTERN-STATE](https://refactoring.guru/design-patterns/state)  
Per il FE è noto il sistema [FLUX](https://facebook.github.io/flux/docs/in-depth-overview)  
In VUE è implementato ufficialmente prima con [VUEX](https://vuex.vuejs.org/)   
poi, per la versione più recente VUE3, con [Pinia](https://pinia.vuejs.org/)

#### DIRECTORY/FILES
- `/plugins/pinia.js`
	Inizializzazione dell'istanza PINIA
- `/stores/`  
	I files con esportata la creazione degli STORE


## MOCK

Ho utilizzato il classico [MSW](https://mswjs.io/)  
Crea un WORKER che sovrascrive il FETCH nativo del browser

#### DIRECTORY/FILES
- `/plugins/msw.js`
	Creazione del worker
- `/mocks/ajax/handlers/`  
	Contiene tutte le richieste REST da gestire.  
- `/mocks/ajax/utils.js`
	Essenzialmente il "middleware" che controlla ci sia il token JWT
- `/mocks/data/`
	I json delle ENTITY in risposta alle richieste REST

#### NOTE
Sul SETUP del progetto bisogna creare il file:  
`//public/mockServiceWorker.js`  
Questo è possibile grazie al comando:  
`npx msw init public/ --save`  
come da [documentazione](https://mswjs.io/docs/getting-started/integrate/browser)


## COMPONENTS

Ho usato un MATERIAL DESIGN. Una libreria molto usata in VUE per questo scopo è VUETIFY.  
NON ho usato la versione stabile [Vuetify2](https://vuetifyjs.com/en/getting-started/installation/)  
perché sfortunatamente non funziona con la COMPOSITION di VUE3!  
In alternativa si può usare la BETA [Vuetify3](https://next.vuetifyjs.com/en/) che supporta VUE3 con i COMPOSITION  
ed è la prossima versione ufficiale spportata.

#### DIRECTORY/FILES
- `/plugins/vuetify.js`
	Inizializzazione e settaggio dei template

#### NOTE
> Con `NODE_ENV = "test"` Vuetify o chi per lui non carica i CSS.   
> Per questo motivo lanciare i test in modalità `development`


## INTERNAZIONALIZZATION

Ho usato un framework ormai consolidato [i18n](https://www.i18next.com/)  
La versione specifica per VUE è [Vuei18n](https://kazupon.github.io/vue-i18n/)  

#### DIRECTORY/FILES
- `/plugins/i18n.js`  
	Inizializzazione creazioen istanza e collegamento con i file JSON  
- `/locales/`  
	JSON divisi per lingua con nome in `ISO 639-1`


## E2E TEST

Ho usato l'universale [Cypress](https://www.cypress.io/)

#### DIRECTORY/FILES
- `//test/e2e/specs`
	I test effettivi.
- `//test/e2e/support/commands.js`
	Sono dei `commands` che possono essere chiamati durante l'esecuzione dei test:
	- loginDefault  
	Automatismo per effettuare il login di "default" 
	- login  
	Login specifico di un user
	- visitSite  
	Posizione Cypress sull'entrypoint del FE
	
#### NOTE
> Per eseguire i test e2e per la CI bisogna avviare il server mock
> Il sito di [Cypress suggerisce](https://docs.cypress.io/guides/continuous-integration/introduction#Boot-your-server) di utilizzare [start-server-and-test](https://github.com/bahmutov/start-server-and-test)  
> ma non funziona con il server di vue-cli (non so perche')  
> Bisogna quindi utilizzare l'apposito [plugin](https://cli.vuejs.org/core-plugins/e2e-cypress.html)  


## UNIT TEST

Ho usato [Jest](https://jestjs.io/)
I test, in questo template, si intendono utili per i processi dello STORE,  
non ci sono unit-test per singoli componenti.

#### DIRECTORY/FILES
- `//test/unit/`
	I test effettivi.
