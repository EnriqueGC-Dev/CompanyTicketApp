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

import Login from './components/pages/Login.vue';
import Navigation from './components/navigation/navigation.vue';

import myTickets from './components/pages/dashboard/MyTickets.vue';
import UnassignedTickets from './components/pages/dashboard/UnassignedTickets.vue';
import DepartmentTickets from './components/pages/dashboard/DepartmentTickets.vue';
import OpenClosedTickets from './components/pages/dashboard/OpenClosedTickets.vue';


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
app.component('Navigation', Navigation);
app.component('myTickets', myTickets);
app.component('UnassignedTickets', UnassignedTickets);
app.component('DepartmentTickets', DepartmentTickets);
app.component('OpenClosedTickets', OpenClosedTickets);

app.mount('#app');