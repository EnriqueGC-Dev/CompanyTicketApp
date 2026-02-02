<template>
  <v-app class="dark_background">
    <v-main>
      <v-container class="fill-height" height="100vh" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6" lg="4">
            <v-card class="card card-dark-secondary text-center pa-8">
              <!-- Error Code -->
              <div class="error-code mb-6">
                <h1 class="display-4 font-weight-bold text-error">404</h1>
              </div>

              <!-- Error Title -->
              <v-card-title class="card-title justify-center mb-4">
                Página no encontrada
              </v-card-title>

              <!-- Error Description -->
              <v-card-text class="mb-6">
                <p class="text-body1">
                  Lo sentimos, la página que buscas no existe o ha sido movida.
                </p>
              </v-card-text>

              <!-- Button -->
              <v-card-actions class="justify-center">
                <v-btn
                  color="primary"
                  size="large"
                  @click="goHome"
                  class="px-8"
                >
                  Volver a Inicio
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'NotFound',
  methods: {
    goHome() {
      this.$router.push('/').catch((err) => err);
    },
  },
}
</script>

<style scoped>
.error-code {
  animation: fadeInDown 0.6s ease-in-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.text-error {
  color: #e53935;
}
</style>
