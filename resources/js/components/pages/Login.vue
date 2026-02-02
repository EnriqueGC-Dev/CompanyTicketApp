<template>
  <v-app class="light_background">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6" lg="4">
            <v-card class="card card-login pa-2">
              <v-card-title class="card-title" align="center">
                <div>
                  <img src="../../../logos/logo_negro.svg" alt="Logo" class="logo" width="25%" height="auto"/>
                </div>
                Iniciar Sesión
              </v-card-title>
              
              <v-card-text>
                <v-form @submit.prevent="login">
                  <v-text-field
                    v-model="username"
                    label="Email"
                    variant="underlined"
                    prepend-inner-icon="mdi-email"
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    label="Contraseña"
                    type="password"
                    variant="underlined"
                    prepend-inner-icon="mdi-lock"
                  ></v-text-field>

                  <v-checkbox
                    label="Recordarme"
                    color="primary"
                  ></v-checkbox>

                  <v-btn
                    class="btn-primary"
                    block
                    @click="login"
                  >
                    Iniciar Sesión
                  </v-btn>

                    <v-btn
                      variant="plain"
                      color="primary"
                      block
                    >
                      ¿has olvidado tu contraseña?
                    </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: 'superuser@test.com',
      password: 'password',

    }
  },
  methods: {
    async login() {

      let Self = this;
        
      let credenciales = {
          email: this.username,
          password: this.password,
      };

      axios
          .post("/api/user/login", credenciales)
          .then((response) => {
              if(response.data.status == 'OK'){

                  this.usuario = response.data[0];

                  Self.$store.dispatch("setLogin", () => {
                      Self.$router.push("/dashboard").catch((err) => err);
                  });
              } else {
                if(response.data.status == 'ERROR') {
                }
              }
          })
          .catch((error) => {
              this.PopUpText = 'Error al iniciar sesión. Si el problema persiste, contacta al administrador.'
              this.showPopUp = true;
          });
    },
    },
  }

</script>