<template>
  <header class="header">
    <a class="index" href="/">Hello World</a>
    <!--<input class="search" type="search" name="" value="" placeholder="Search...">-->
  </header>
</template>
<style scoped lang="less" rel="stylesheet/less">
  .header {
    padding: 5px;
  }
  .index {
    display: inline-block;
    color: #333;
    letter-spacing: 1px;
    font-size: 22px;
    padding: 8px;
    margin-top: 50px;
  }
</style>
<script>

  export default{
    data () {
      return {
        msg: 'hello vue'
      }
    },
    components: {

    }
  }
</script>
