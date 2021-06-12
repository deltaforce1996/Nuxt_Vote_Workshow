<template>
  <v-container>
    <v-btn @click="SignIn">SingIn</v-btn>
    <v-btn @click="SignOut">SingOut</v-btn>
  </v-container>
</template>

<script>
import GoogleAuth from '../services/google.auth'
import Services from '../services/manage.firestore'
export default {
  data() {
    return {}
  },
  mounted() {
    Services.FecthPoles('voites')
      .then((result) => {
        if (result.success) {
          Promise.all(result.data).then((values) => {
            window.console.log(values)
          })
        }
      })
      .catch((err) => {
        window.console.log('err => ' + err)
      })
  },
  methods: {
    SignIn() {
      GoogleAuth.GoogleAuthSingIn()
    },
    SignOut() {
      GoogleAuth.SignOut()
    },
  },
}
</script>
