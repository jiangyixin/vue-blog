import Vue from 'vue'
import Router from 'vue-router'
import List from '@/pages/List'
import Article from '@/pages/Article'

Vue.use(Router);

export default new Router({
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
      path: '/article/:id',
      name: 'article',
      component: Article
    }
  ]
})
