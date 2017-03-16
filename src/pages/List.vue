<template>
  <div class="list-block">
    <ul>
      <li v-for="(article, index) in articles" class="list-item">
        <router-link :to="{name: 'article', params: { id: article.id }}">
          <p class="title">{{ article.title }}</p>
        </router-link>
        <p class="date">{{ article.date }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name: 'articles',
    computed: {
      articles () {
        let keyword = (this.$route.query.keyword || '').toLowerCase();
        let articles = this.$store.state.list;
        return articles
          .filter(article => article.title.toLowerCase().indexOf(keyword) !== -1)
          .sort((article1, article2) => (new Date(article2.date) - new Date(article1.date)))
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .list-block {
    margin: 10px 20px;
    ul {
      list-style: none;
      padding-left: 0;
      .list-item {
        margin-bottom: 30px;
        p {
          margin-top: 0;
          margin-bottom: 10px;
        }
        a {
          display: inline-block;
          color: #666666;
          font-size: 16px;
        }
        a:hover {
          color: #0275d8;
          text-decoration: none;
        }
        .date {
          font-size: 14px;
          color: #999999;
        }
      }
    }
  }
</style>
