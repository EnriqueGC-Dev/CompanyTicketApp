import { createApp } from 'vue';
import store from './store/store';
import '@mdi/font/css/materialdesignicons.css';
import { es } from 'vuetify/locale'

// Vuetify
import 'vuetify/styles'
import '../scss/main.scss';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Router
import router from './router';

//Componentes
import Index from './components/Index.vue';
import App from './components/App.vue';

import Login from './components/Login/Login.vue';


const app = createApp(Index)
const vuetify = createVuetify({
  locale: {
    locale: 'es',
    fallback: 'es',
    messages: { es },
  },
  icons: {
    defaultSet: 'mdi',
  },
  components,
  directives,
})

app.use(store);
app.use(vuetify)
app.use(router)

app.component('App', App);
app.component('Login', Login);


app.mount('#app');