<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
  export default {
    name: 'app',
    components: {
      'my-header': Header,
      'my-footer': Footer
    }
  }
</script>

<style lang="less" rel="stylesheet/less" >
  @import url(./assets/css/common.less);
  #app {
    max-width: 700px;
    margin: auto;
  }
</style>
