<template>
  <div>
    <div class="flex-container">
      <div class="text-name">
        <span class="text-name">name:</span>
      </div>
      <div>
        <button class="btn-logout" @click="getLogout">Logout</button>
      </div>
    </div>
    <div>
      <h1 class="title-main">what to eat ?</h1>
    </div>
    <div>
      <form >
        <label >Poll Question</label>
        <input type="text"  name="questiontxt" placeholder="Enter poll question">

        <label >Option</label>
        <input type="text"  name="optiontxt" placeholder="Enter an option">
        <input type="text"  name="optiontxt" placeholder="Enter an option">
        <input type="text"  name="optiontxt" placeholder="Enter an option">
        
        <label for="timer">Set Time :</label>
        <input type="date" id="itmer" name="timer">
      
        <input type="submit" value="Submit">
        <button class="btn-cancle" @click="goCancle">Logout</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goCancle() {
      this.$router.push('/LoginPage')
    },
  },
}
</script>

<style scoped>
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
  background-color: #f44336; /* Green */
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
  background-color: #87cefa; /* Green */
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
.btn-cancle{
  background-color: #f44336; /* Green */
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
