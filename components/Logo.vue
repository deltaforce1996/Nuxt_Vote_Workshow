<template>
  <v-container>
    <v-btn @click="EventSignIn">SingIn</v-btn>
    <v-btn @click="EventSignOut">SingOut</v-btn>
    <v-btn @click="EventCreateNewPole">New Pole</v-btn>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      // users
      GET_USER: 'MODULE_USER/GET_USER_SINGIN',
      // pole
      GET_POLE: 'MODULE_POLES/GET_POLE',
      GET_POLE_BYID: 'MODULE_POLE/GET_POLE_BYID',
    }),
  },
  mounted() {},
  methods: {
    ...mapActions({
      // users
      ACTION_SINGIN: 'MODULE_USER/ACTION_SINGIN',
      ACTION_SINGOUT: 'MODULE_USER/ACTION_SINGOUT',
      // pole
      ACTION_FETCH_LISTPOLES: 'ACTION_FETCH_LISTPOLES',
      ACTION_CREATE_NEWPOLE: 'ACTION_CREATE_NEWPOLE',
    }),
    async EventSignIn() {
      const res = await this.ACTION_SINGIN()
      window.console.log(res.success)
      window.console.log(JSON.stringify(this.GET_USER))
    },
    async EventSignOut() {
      const res = await this.ACTION_SINGOUT()
      window.console.log(JSON.stringify(res))
      // window.console.log(JSON.stringify(this.GET_USER))
    },
    EventCreateNewPole() {},
  },
}
</script>
