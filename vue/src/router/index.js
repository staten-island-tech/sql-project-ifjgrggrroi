import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '../stores/auth-store'
import { mapActions } from 'pinia'

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
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/LandingPage.vue'),
      meta: {
        needsAuth: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../components/CreateAccount.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  const auth = authStore()
  if (to.meta.needsAuth && !authStore.loggedIn) {
    next('/login')
  } else {
    next()
  }
})
export default router
