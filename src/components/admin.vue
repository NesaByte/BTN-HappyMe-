<template>
  <div class="Secret Page">
    <h1>Admin {{ msg }}</h1>
    <img src="../assets/bushySmile.png" alt="bushySmile.png" style="width:200px;height:200px;">
    <h3>Smile</h3> 
    <p>
      This is a super secret page. How are you here?
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
