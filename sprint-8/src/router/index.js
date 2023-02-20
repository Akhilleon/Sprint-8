import store from '@/store/index'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/starships',
    name: 'starships',
    component: () => import('../views/StarshipsView.vue'),
    beforeEnter: (to, from, next) => {
      if(store.state.users.authenticated == false) {
        next('/login');
      } else {
        next()
      }
    }
  },
  {
    path: '/starships/:name',
    name: 'starship-card',
    component: () => import('../views/CardView.vue')
  }, 
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignUpView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
