<template>
  <div class="container">
    <div>
      <!-- <Logo /> -->
      <h1 class="title">what to eat ?</h1>
      <div class="links">
        <a class="button--green" @click="EventSignIn"> Continue </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      // users
      GET_USER: 'MODULE_USER/GET_USER_SINGIN',
    }),
  },
  mounted() {
    this.CheckLogIn()
  },
  methods: {
    ...mapActions({
      // users
      ACTION_SINGIN: 'MODULE_USER/ACTION_SINGIN',
      ACTION_USER_COKKIE: 'MODULE_USER/ACTION_USER_COKKIE',
    }),
    CheckLogIn() {
      const cookieRes = this.$cookies.get('cookie-name')
      window.console.log(cookieRes)
      if (cookieRes) {
        this.ACTION_USER_COKKIE(cookieRes)
        this.$router.push('/mainPage')
      }
    },
    async EventSignIn() {
      const res = await this.ACTION_SINGIN()
      window.console.log(res.success)
      if (res.success) {
        window.console.log(JSON.stringify(this.GET_USER))
        this.$cookies.set('cookie-name', this.GET_USER, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7,
        })
        this.$router.push('/mainPage')
      }
    },
  },
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
