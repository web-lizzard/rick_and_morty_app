import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import(/* webpackChunkName: "group-user" */ '@/views/home-page.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: import(/* webpackChunkName: "group-user" */ '@/views/history-page.vue')
    }
  ]
})

export default router
