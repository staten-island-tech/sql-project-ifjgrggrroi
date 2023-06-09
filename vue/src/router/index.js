import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '../stores/auth-store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '/',
      // component: HomeView,
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
        requiresAuth: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../components/CreateAccount.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/UpdateEmployee',
      name: 'UpdateEmployee',
      component: () => import('../components/UpdateEmployee.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/AddEmployee',
      name: 'AddEmployee',
      component: () => import('../views/AddEmployeeView.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && auth.loggedIn === false) {
    next('/login')
  } else {
    next()
  }
})
export default router
