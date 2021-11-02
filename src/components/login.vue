<template>
  <div>
    <img src="../assets/bushyCry.png" alt="bushySmile.png" style="width:200px;height:200px;">
    <h1>Login to learn how to be happy</h1>
    <form @submit.prevent="login">
      <label>User Name</label> <br>
      <input type="text" v-model="userName" required>
      <br><br>
      <label>Password</label> <br>
      <input type="password" v-model="password" required>
      <br><br>
      <button type="submit">Log In</button>
    </form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        userName: '',
        password: '',
      }
    },
    methods: {
      login(){
        //write login authencation logic here!
        if( this.userName == 'admin' && this.password == 'admin' ){
          localStorage.setItem('token', 'ImLogin')
          this.$router.push('/');
        } else{
          alert('login failed')
        }
      }
    } 
  }
</script>