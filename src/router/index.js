import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ViewPersonal.vue'
import AboutView from '../views/ViewSkill.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/skill',
      name: 'About',
      component: AboutView
    }
  ]
})

export default router
