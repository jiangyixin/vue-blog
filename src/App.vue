<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
    <footer></footer>
  </div>
</template>

<script>
  import myHeader from './components/Header'
  // import Footer from './components/Footer'
  export default {
    name: 'app',
    components: {
      myHeader
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
