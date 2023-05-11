import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { path: '/login' },
      component: () => import('../components/LoginScreen.vue'),
      children: [
        {
          path: '/login',
          name: 'Login',
          component: () => import('../components/LoginScreen.vue')
        }
      ]
    }

    /*  {
      path: '/login',
      name: 'login',
      component: () => import('../components/LoginScreen.vue')
    } */
  ]
})

export default router
