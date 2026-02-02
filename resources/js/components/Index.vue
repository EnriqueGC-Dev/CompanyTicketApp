<template>
    <v-app :class="getState">
        <v-main>
          <Login v-if="authentication === false"/>
          <App   v-if="authentication" />
        </v-main>
    </v-app>
</template>

<script>
  export default {
    data () {
      return {  
        authentication: false,
      }
    },

    created() {
    },

    computed: {
      getState() {
            this.authentication = this.$store.getters.isUserLogged;
        },
    },

    mounted() { 

      const Self = this;
        this.$store.dispatch('setLogin', function() {
            Self.authentication = Self.$store.getters.isUserLogged;

            if (!Self.authentication) {
                Self.$router.push("/").catch((err) => err);
            }
            if (Self.authentication && window.location.pathname == "/") {
                Self.$router.push("/dashboard").catch((err) => err);
            }
        });
    },

    methods: {

    }
  }
</script>