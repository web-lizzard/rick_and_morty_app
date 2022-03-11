import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/home-page.vue'
import HistoryPage from '@/views/history-page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryPage
    }
  ]
})

export default router
