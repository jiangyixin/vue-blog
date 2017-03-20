<template>
  <header class="header">
    <router-link class="router-link-active" to="/">{{ name }}</router-link>
    <input class="search-bar"
           type="search"
           ref="searchBar"
           v-show="isShow"
           v-model="keyword"
           @click="selectSearchText"
           @keyup.esc="resetSearch"
           placeholder="Search...">
  </header>
</template>

<script>
  export default{
    data () {
      return {
        name: 'hello world',
        keyword: ''
      }
    },
    computed: {
      isShow () {
        return this.$route.name === 'list'
      }
    },
    methods: {
      resetSearch () {
        this.keyword = '';
        this.$refs.searchBar.blur()
      },
      selectSearchText () {
        this.$refs.searchBar.select()
      },
      wait () {
        if (this.keyword) {
          this.$router.push({name: 'list', query: { keyword: this.keyword}})
        } else {
          this.$router.push({name: 'list'})
        }
      }
    },
    watch: {
      keyword () {
        this.wait()
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
