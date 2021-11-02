<template>
  <div class="hello">
    <h1>How to be happy like BushyTail {{ msg }}</h1>
    <img src="../assets/bushySmile.png" alt="bushySmile.png" style="width:200px;height:200px;">
    <h3>Smile</h3> 
    <p>
      You tend to smile when you’re happy. But it’s actually a two-way street.
            <a href="https://www.healthline.com/health/how-to-be-happy#daily-habits" target="_blank" rel="noopener">HealthLine</a>.
    </p>

    <h3>Exercise</h3> 
    <p>
      Exercise isn’t just for your body. Regular exercise can help to reduce stress, feelings of anxiety, and symptoms of depression while boosting self-esteem and happiness.
            <a href="https://www.healthline.com/health/how-to-be-happy#daily-habits" target="_blank" rel="noopener">HealthLine</a>.
    </p>


    <h3>Get plenty of sleep</h3> 
    <p>
      No matter how much modern society steers us toward less sleep, we know that adequate sleep is vital to good health, brain function, and emotional well-being.
            <a href="https://www.healthline.com/health/how-to-be-happy#daily-habits" target="_blank" rel="noopener">HealthLine</a>.
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
