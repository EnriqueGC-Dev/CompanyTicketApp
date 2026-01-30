<template>
  LOGIN TEMPLATE
  <v-btn class="btn-primary" @click="login">Iniciar sesión</v-btn>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: '',
      password: '',

      showPopUp: false,
      PopUpText: '',
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
                  this.PopUpText = response.data.message;
                  this.showPopUp = true;
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

<!-- styles moved to shared SCSS -->
<style scoped>
</style>