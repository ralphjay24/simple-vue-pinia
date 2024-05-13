import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoveArraysView from '@/views/LoveArraysView.vue'
import RestApiView from '@/views/RestApiView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/love-arrays',
      name: 'love-arrays',
      component: LoveArraysView
    },
    {
      path: '/rest-api',
      name: 'rest-api',
      component: RestApiView
    },
  ]
})

export default router
