<template>
    <v-app class="light_background">
      <Navigation></Navigation>
      
      <v-main class="d-flex align-center justify-center">
        <v-container class="fill-height pa-0" fluid>
          <router-view></router-view>
        </v-container>
      </v-main>

    </v-app>
</template>

<script>
import Navigation from './navigation/navigation.vue';


export default {

  data() {
      return {
        vShowNavbar: false
      };
  },

  methods: {
    OpenCloseNavbar: function () {
        this.vShowNavbar = !this.vShowNavbar;
    },
  }
  
}
  
</script>