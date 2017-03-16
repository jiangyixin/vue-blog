<template>
  <header class="header">
    <router-link class="index" to="/list">Hello World</router-link>
    <input class="search"
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
        msg: 'hello vue',
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
  .header {
    padding: 5px;
    text-align: center;
  }
  .index {
    display: inline-block;
    color: #333;
    letter-spacing: 1px;
    font-size: 22px;
    padding: 8px;
    margin-top: 50px;
  }
  .search {
    display: block;
    margin: 5px auto 0;
    width: 150px;
    text-align: center;
    border: none;
    background-color: #fff;
    color: #666;
  }
  .search:active,
  .search:focus,
  .search:hover {
    outline: none;
    background-color: #fafafa;
    text-decoration: none;
  }
</style>
