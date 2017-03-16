<template>
  <article>
    <h3>{{ article.title }}</h3>
    <p>{{ article.date }}</p>
  </article>
</template>

<script type="text/ecmascript-6">
  export default {
    date () {
      return {}
    },
    computed: {
      article () {
        let params = this.$route.params;
        let articles = this.$store.state.list;
        let article = articles.filter(article => article.id == params.id)[0];
        if (!article) {
          this.$router.replace('/');
        }
        return article;
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
