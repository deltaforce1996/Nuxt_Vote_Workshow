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
      <button class="btn-add-poll" @click="getToVote">+ Add Poll</button>
    </div>
    <div>
      <h1 class="title-main">what to eat ?</h1>
    </div>
    <div class="text-name">
      <span class="poll-title">เที่ยงนี้กินไรดี</span>
      <span class="time-end">(11.45 นาที)</span>
    </div>
    <div class="text-name">
      <span class="poll-title">เที่ยงนี้กินไรดี</span>
      <span class="time-end">(10.45 นาที)</span>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    getLogout() {
      this.$router.push('/LoginPage')
    },
    getToVote() {
      this.$router.push('/addPoll')
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
