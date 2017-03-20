import Vue from 'vue'
import Router from 'vue-router'
import List from '@/pages/List'
import Article from '@/pages/Article'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/vue-blog/dist/',
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/article/:hash',
      name: 'article',
      component: Article
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置 history模式下才有效
    if (savedPosition) {
      return savedPosition;
    }
  }
})
