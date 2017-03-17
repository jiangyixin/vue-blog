<template>
  <section class="list-view">
    <div v-if="!articles">loading...</div>
    <ul v-if="articles" class="list">
      <li v-for="( article, index ) in articles" class="list-item">
        <router-link :to="{name: 'article', params: { hash: article.sha }}" class="item-title">
          {{ article.title }}
        </router-link>
        <br>
        <time class="item-date">{{ article.date }}</time>
      </li>
    </ul>
  </section>
</template>

<script type="text/ecmascript-6">

  export default{
    name: 'articles',
    data () {
      return {
        lists: null
      }
    },
    computed: {
      articles () {
        let keyword = (this.$route.query.keyword || '').toLowerCase();
        return this.$store.state.list
          .filter(article => article.title.toLowerCase().indexOf(keyword) !== -1)
          .sort((article1, article2) => (new Date(article2.date) - new Date(article1.date)))
      }
    },
    created () {
      this.loadList()
    },
    methods: {
      loadList () {
        this.$store.dispatch('getArticles')
          .then(lists => {
            this.$store.state.list = lists
          })
          .catch(err => { console.log(err) })
      }
    },
    watch: {
      $route: 'loadList'
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
