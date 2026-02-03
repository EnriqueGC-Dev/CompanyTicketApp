<template>
    <v-navigation-drawer class="dark_background" v-if="$vuetify.display.mdAndUp">
        <img 
        v-if="$store.state.user_photo == null"
        src="../../../img/user_no_photo.png"
        width="70%"
        class="mt-8 mx-auto d-block ">
      </img>  
      <v-img 
        v-else
        :src="'/images/tickets/user_photo/' + $store.state.user_photo"
        rounded="circle"
        cover
        aspect-ratio="1"
        width="70%"
        class="mt-8 mx-auto d-block"  
      ></v-img>   

      <v-list-item class="mt-4 text-light">
        <v-list-item-content class="text-center">
          <v-list-item-title>
            {{ $store.state.user_name }} {{ $store.state.user_surname }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ $store.state.user_email }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="mt-4" color="white"></v-divider>

      <v-btn
        v-for="(boton, index) in botones"
        :key="index"
        :to="boton.route"
        class="btn-light-transparent mt-4"
        variant="text"
        block
      >
        <v-icon class="mr-2">{{ boton.icon }}</v-icon>
        {{ boton.title }}
      </v-btn>

      <template v-slot:append>
        <div class="pa-2">
        <v-btn
          class="btn-primary"
          variant="text"
          block
        >
          <v-icon class="mr-2">mdi-logout</v-icon>
          Cerrar sesión
        </v-btn>
        </div>
      </template>
      
    </v-navigation-drawer>
    <v-bottom-navigation v-else>
      <v-btn
        v-for="(boton, index) in botones"
        :key="index"
        :to="boton.route"
        variant="text"
        block
      >
        <v-icon>{{ boton.icon }}</v-icon>
        {{ boton.title }}
      </v-btn>
    </v-bottom-navigation>
</template>

<script>

export default {
  name: "SideBar",

  data() {
    return {
      botones: [
        { title: "Dashboard", icon: "mdi-view-dashboard", route: "/dashboard" },
        { title: "Tickets", icon: "mdi-ticket-outline", route: "/tickets" },
        { title: "Empleados", icon: "mdi-account-multiple", route: "/empleados" },
        { title: "Configuración", icon: "mdi-cog-outline", route: "/settings" },
      ],
    };
  },
};
</script>