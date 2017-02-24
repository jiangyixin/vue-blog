<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myHeader from './components/Header'
  import myFooter from './components/Footer'
  export default {
    name: 'app',
    components: {
      myHeader, myFooter
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  @import url(./assets/css/common.less);
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
