<template>
  <div>
    <ModalVoite
      :is-log-open="IsLogOpen"
      :array-options="Options"
      :pole-exp="PoleExp"
      :pole-ref-id="PoleRefId"
      @LisenerSuccess="OnSuccesed"
      @LisenerFailed="OnFailed"
    ></ModalVoite>
    <div>
      <div class="text-name">
        <span class="text-name">name: {{ GET_USER.Username }}</span>
      </div>
      <div>
        <button class="btn-logout" @click="EventSignOut">Logout</button>
      </div>
    </div>
    <div>
      <button class="btn-add-poll" @click="getToVote">+ Add Poll</button>
    </div>
    <div>
      <h1 class="title-main">what to eat ?</h1>
    </div>
    <div v-for="(item, index) in GET_POLES" :key="index">
      <div class="text-name">
        <span class="poll-title">{{ item.PoleName }}</span>
        <span class="time-end"> (11.45 นาที)</span>
        <button class="btn-add-poll" @click="getToDetail(item.PoleId)">
          Detail
        </button>
        <v-btn @click="EventLogVoite(item.Options, item.PoleId, item.Exp)"
          >Voite</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import ModalVoite from '../components/ModalVoite.vue'
export default {
  components: {
    ModalVoite,
  },
  data() {
    return {
      IsLogOpen: false,
      Options: [],
      PoleExp: 0,
      PoleRefId: '',
    }
  },
  computed: {
    ...mapGetters({
      // users
      GET_USER: 'MODULE_USER/GET_USER_SINGIN',
      // pole
      GET_POLES: 'MODULE_POLE/GET_POLES',
      GET_POLE_BYID: 'MODULE_POLE/GET_POLE_BYID',
    }),
  },
  mounted() {
    if (this.GET_USER.UserId === null || this.GET_USER.UserId === undefined) {
      this.$router.push('/')
    }
    this.EventFecthPole()
  },
  methods: {
    ...mapActions({
      // users
      ACTION_SINGOUT: 'MODULE_USER/ACTION_SINGOUT',
      // pole
      ACTION_FETCH_LISTPOLES: 'MODULE_POLE/ACTION_FETCH_LISTPOLES',
    }),
    async EventSignOut() {
      const res = await this.ACTION_SINGOUT()
      if (res.success) {
        this.$cookies.remove('cookie-name')
        this.$router.push('/')
      }
    },
    getToVote() {
      this.$router.push('/addPoll')
    },
    async EventFecthPole() {
      if (!this.EventValidatetion()) return // Notify Here
      const res = await this.ACTION_FETCH_LISTPOLES()
      if (res.success) {
        window.console.log(res.massage)
        window.console.log(JSON.stringify(this.GET_POLES))
      }
    },
    EventValidatetion() {
      if (this.GET_USER.UserId !== undefined) {
        return true
      } else {
        return false
      }
    },
    EventLogVoite(ArrOptions, RefId, Exp) {
      if (!this.EventValidatetion()) return
      if (Date.now() > Exp) {
        // Notify Here
        return
      }
      this.IsLogOpen = true
      this.Options = ArrOptions
      this.PoleRefId = RefId
      this.PoleExp = Exp
    },
    OnSuccesed() {
      this.IsLogOpen = false
      this.EventFecthPole()
      // Notify Here
    },
    OnFailed() {
      this.IsLogOpen = false
    },
    getToDetail(PollId) {
      this.$router.push(`/detailPoll?PollId=${PollId}`)
    },
  },
}
</script>
<style>
.title-main {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: flex;
  font-weight: 300;
  font-size: 50px;
  color: #35495e;
  letter-spacing: 1px;
  align-content: center;
  justify-content: center;
}
.text-name {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: flex;
  font-weight: 300;
  font-size: 20px;
  color: #35495e;
  letter-spacing: 1px;
  justify-content: right;
}
.btn-logout {
  background-color: #f44336;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 6px;
}
.btn-add-poll {
  background-color: #87cefa;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 6px;
}
</style>
