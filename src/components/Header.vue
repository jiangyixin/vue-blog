<template>
  <div>
    <a class="index" href="/">Hello World</a>
    <input class="search" type="search" name="" value="" placeholder="Search...">
  </div>
</template>
<style scoped lang="less" rel="stylesheet/less">
  @hello: #dd4433;
  @world: #66bb33;
  .hello {
    color: @hello;
  }
  .world {
    color: @world;
  }
  .index {
    display: block;
    color: #333;

  }
  .search {

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
