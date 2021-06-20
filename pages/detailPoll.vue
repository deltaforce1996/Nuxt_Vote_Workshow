<template>
  <div>
    <div>
      <div class="text-name">
        <span class="text-name">name:</span>
      </div>
      <div>
        <button class="btn-logout" @click="getLogout">Logout</button>
      </div>
    </div>
    <div>
      <button class="btn-edit-poll" @click="getToEdit">Edit</button>
    </div>
    <div>
      <h1 class="title-main">what to eat ?</h1>
    </div>
    <div
      v-for="(item, index) in GET_POLE_BYID($route.query.PollId)"
      :key="index"
    >
      <div class="text-name">
        <span class="poll-title"></span>
      </div>
      <div v-for="(Option, i) in item.Options" :key="i">
        <div class="text-name">
          <span class="poll-title">{{ Option }}</span>
        </div>
      </div>
      <div>
        <label for="timer">Set Time :</label>
        <span class="poll-time"
          >{{ getTime(item.TimeStamp, item.Exp) }} นาที</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      GET_POLE_BYID: 'MODULE_POLE/GET_POLE_BYID',
    }),
  },
  mounted() {},
  methods: {
    getLogout() {
      this.$router.push('/LoginPage')
    },
    getToEdit() {
      this.$router.push('/addPoll')
    },
    getTime(start, end) {
      let delta = Math.abs(end - start) / 1000
      const minutes = Math.floor(delta / 60) % 60
      delta -= minutes * 60
      return Math.floor(delta)
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
.btn-edit-poll {
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
