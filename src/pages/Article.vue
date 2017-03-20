<template>
  <section class="post-view">
    <div v-if="!content">loading..</div>
    <h1 class="post-title">
      {{ title }}
      <time class="post-date">{{ date }}</time>
    </h1>
    <article v-if="content" v-html="htmlFromMarkdown"></article>
  </section>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import fm from 'front-matter'
  import marked from '../utils/render'

  export default {
    name: 'article',
    data () {
      return {
        title: '',
        date: null,
        content: ''
      }
    },
    computed: {
      htmlFromMarkdown () {
        return marked(this.content);
      }
    },
    created () {
      this.loadArticle()
    },
    methods: {
      loadArticle () {
        let hash = this.$route.params.hash
        this.$store.dispatch('getArticleDetail', hash)
          .then(text => {
            const content = fm(text)
            this.title = content.attributes.title
            this.date = content.attributes.date.toLocaleDateString()
            this.content = content.body
            window.document.title = `${this.title}`
          })
          .catch(err => {
            console.error(err)
            this.$router.replace('/')
          })
      },
      newTab () {
        Vue.nextTick(function () {
          // Load the external link into new tab
          const linksArray = Array.from(document.querySelectorAll('a'))
          const currentHost = window.location.host
          linksArray.forEach(el => {
            if (el.href && el.host !== currentHost) {
              el.target = '_blank'
              // https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
              el.rel = 'noopener noreferrer'
            }
          })
        })
      }
    },
    watch: {
      'htmlFromMarkdown': 'newTab'
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>
