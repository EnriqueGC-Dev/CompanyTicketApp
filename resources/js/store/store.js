import { createApp } from 'vue'
import { createStore } from 'vuex'
import axios from 'axios';
import App from '../components/App.vue';

let store = createStore({
    state () {
        return {
            authentication: false,
            user_id: null,
            user_name: null,
            user_surname: null,
            user_email: null,
            user_role_id: null,
            user_photo: null,
        }
    },
    mutations: {
        LOGIN: async function (state, callback) {
            let response = await axios.get("/api/user/data");   

            if (response.data.status == 'OK') {
                state.authentication = true;
                state.user_id = response.data.user.id;
                state.user_name = response.data.user.name;
                state.user_surname = response.data.user.surname;
                state.user_email = response.data.user.email;
                state.user_role_id = response.data.user.user_role_id;
                state.user_photo = response.data.user.user_photo;
                if (typeof callback == 'function') {
                    callback(true);
                }
            }
            else {
                state.authentication = false; 
                state.user_id = null;                
                if (typeof callback == 'function') {
                    callback(false);
                }
            }
        },

        LOGOUT: async function (state, callback) {

                state.authentication = false; 
                state.user_id = null;                
                if (typeof callback == 'function') {
                    callback(false);
                }

        },

    },
    actions: {
        setLogin: function (context, callback) {
            context.commit('LOGIN', callback);
        },
        setLogout: function (context) {
            axios.post("/api/user/logout")
                .then(response => {
                    context.commit('LOGOUT');
                });
        },

    },
    getters: {
        isUserLogged(state) {
            return state.authentication;
        },
    }
})

const app = createApp(App)
app.use(store)

export default store