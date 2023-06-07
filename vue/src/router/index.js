import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '../stores/auth-store'

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
        requiresAuth: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/employees',
      name: 'employees'
    },
    {
      path: '/UpdateEmployee',
      name: 'UpdateEmployee',
      component: () => import('../components/UpdateEmployee.vue')
    },
    {
      path: '/AddEmployee',
      name: 'AddEmployee',
      component: () => import('../views/AddEmployeeView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../components/CreateAccount.vue')
    }
    /*     {
      path: '/update',
      name: 'update',
      component: () => import('../components/UpdateEmployee.vue')
    } */
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
