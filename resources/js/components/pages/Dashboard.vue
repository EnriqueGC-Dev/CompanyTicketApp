<template>
  <v-container class="fill-height">
    <v-row>
      <v-col cols="6">
        <myTickets></myTickets>
      </v-col>
      <v-col cols="6">
        <unassignedTickets></unassignedTickets>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6"> 
        <departmentTickets></departmentTickets>
      </v-col>
      <v-col cols="6">
        <OpenClosedTickets></OpenClosedTickets>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import OpenClosedTickets from './dashboard/OpenClosedTickets.vue';


export default {
  data() {
    return {
      username: 'superuser@test.com',
      password: 'password',

    }
  },
}
</script>