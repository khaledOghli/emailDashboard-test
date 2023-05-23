import { createRouter, createWebHistory } from 'vue-router'
import Inbox from '../views/Inbox.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inbox',
      component: Inbox,
      meta: {
        title: 'Inbox'
      }
    },
    {
      path: '/archive',
      name: 'Archive',
      component: () => import('../views/Archive.vue'),
      meta: {
        title: 'Archive'
      }
    }
  ]
})

export default router
