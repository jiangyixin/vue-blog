<template>
  <footer class="footer">
    Copyright © {{ thisYear }} | Powered by <a href="https://github.com/jiangyixin/vue-blog" target="_blank">vue-blog</a>
  </footer>
</template>

<script>
  export default {
    data () {
      return {
        thisYear: new Date().getFullYear()
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
