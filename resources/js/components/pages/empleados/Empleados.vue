<template>
  <div class="pa-4" style="width: 100%;">
    <div class="row">
      <div class="col-12">
        <v-data-table
            :headers="[
                { title: 'Nombre',              key: 'name',                sortable: true,     Width: '25%' },
                { title: 'Apellido',            key: 'surname',             sortable: true,     Width: '25%' },
                { title: 'Email',               key: 'email',               sortable: true,     align: 'start',    Width: '25%' },
                { title: 'Rol',                 key: 'role.user_role_name', sortable: true,     align: 'center',   Width: '15%' },
                { title: '',                    key: 'user_active',         sortable: false,    align: 'center',   Width: '5%' },
                { title: ' ',                   key: 'actions',             sortable: false,    align: 'right',    Width: '5%' }
            ]"
            :items="empleados"
            class="elevation-1"
        >

        <template v-slot:item.user_active="{ item }">
            <v-chip v-if="!item.user_active" color="red"><b>DESACTIVADO</b></v-chip>
        </template>

        <template v-slot:item.actions="{ item }">
            <v-btn icon variant="plain">
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon variant="plain">
                <v-icon color="red">mdi-delete</v-icon>
            </v-btn>
        </template>

        </v-data-table>
      </div>
    </div>
  </div>
  
</template>

<script>
import axios from "axios";

export default {

  name: 'Home',
  data() {
        return {
            empleados: [],
        };
    },


    mounted() {
        this.initialize();
    },

    methods: {
        initialize() {
            axios.get('/api/users/empleados')
                .then(response => {
                    console.log(response.data.users);
                    this.empleados = response.data.users;
                    console.log(this.empleados);
                })
                .catch(error => {
                    console.error('Error al obtener los empleados:', error);
                });
        },
    },
}
</script>

<style scoped>
:deep(tbody tr:nth-child(even)) {
  background-color: #ddd;
}
</style>