<template>
  <v-container>
    <v-btn @click="EventSignIn">SingIn</v-btn>
    <v-btn @click="EventSignOut">SingOut</v-btn>
    <v-btn @click="EventValidatetion">Validatetion User</v-btn>
    <v-btn @click="EventFecthPole">Fecth Pole</v-btn>
    <v-btn @click="EventCreateNewPole">New Pole</v-btn>
    <v-btn @click="EventVoite">Voite</v-btn>
  </v-container>
</template>

<script>
// import firebase from 'firebase'
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      // users
      GET_USER: 'MODULE_USER/GET_USER_SINGIN',
      GET_VALIDATION_PERMISSION: 'MODULE_USER/GET_VALIDATION_PERMISSION',
      // pole
      GET_POLE: 'MODULE_POLES/GET_POLE',
      GET_POLE_BYID: 'MODULE_POLE/GET_POLE_BYID',
    }),
  },
  async mounted() {},
  methods: {
    ...mapActions({
      // users
      ACTION_SINGIN: 'MODULE_USER/ACTION_SINGIN',
      ACTION_SINGOUT: 'MODULE_USER/ACTION_SINGOUT',
      // pole
      ACTION_FETCH_LISTPOLES: 'MODULE_POLE/ACTION_FETCH_LISTPOLES',
      ACTION_CREATE_NEWPOLE: 'MODULE_POLE/ACTION_CREATE_NEWPOLE',
      // Voite
      ACTION_NEW_VOITE_POLE: 'MODULE_VOITE/ACTION_NEW_VOITE_POLE',
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
    async EventCreateNewPole() {
      /* Description,
      Exp,
      TimeStamp,
      PoleName,
      By,
      Options */
      if (!this.EventValidatetion()) return
      const res = await this.ACTION_CREATE_NEWPOLE({
        Description: 'Description',
        Exp: Date.now(),
        TimeStamp: Date.now(),
        PoleName: 'PoleName',
        By: 'By',
        Options: ['Options-01', 'Options-02', 'Options-03', 'Options-04'],
      })
      if (res.success) {
        window.console.log(res.massage)
      }
    },
    async EventVoite() {
      if (!this.EventValidatetion()) return
      const res = await this.ACTION_NEW_VOITE_POLE({
        UserId: 'UserId',
        Username: 'Username',
        Option: 'Options-02',
        RefVoite: 'Oq0afvH0Tjh1m7cLYTLd',
      })
      if (res.success) {
        window.console.log(res.massage)
      }
    },
    async EventFecthPole() {
      if (!this.EventValidatetion()) return
      const resultOfPole = await this.ACTION_FETCH_LISTPOLES()
      window.console.log(JSON.stringify(resultOfPole))
    },
    EventValidatetion() {
      if (this.GET_USER.UserId !== undefined) {
        window.console.log('Session ==> ' + this.GET_USER)
        return true
      } else {
        window.console.log('Out Session ==> ' + this.GET_USER)
        return false
      }
    },
  },
}
</script>
