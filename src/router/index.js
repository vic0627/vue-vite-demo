import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'test',
      component: () => import('../views/TestView.vue')
    },
    {
      path: '/calc',
      name: 'calc',
      component: () => import('../views/calcView.vue')
    }
  ]
})

export default router
