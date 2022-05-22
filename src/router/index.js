import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
//import InmailView from '../views/inmail/InmailView.vue'

const routes = [
  {
    path: '/',
    component : MainLayout,
    children : [
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: 'about',
        name: 'about',    
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardView,
      },
      {
        path: '/inmaillist',
        name: 'inmaillist',    
        component: () => import('../views/inmail/Index.vue')
      },
      {
        path: '/suratmasuk',
        name: 'suratmasuk',    
        component: () => import('../views/inmail/SuratmasukView.vue')
      },
      {
        path: '/disposisi',
        name: 'disposisi',    
        component: () => import('../views/inmail/disposisi/DisposisiView.vue')
      },
      {
        path: '/suratdisposisi',
        name: 'suratdisposisi',    
        component: () => import('../views/inmail/disposisi/SuratdisposisiView.vue')
      },
      {
        path: '/outmaillist',
        name: 'outmaillist',    
        component: () => import('../views/outmail/Index.vue')
      },
      {
        path: '/userlist',
        name: 'userlist',    
        component: () => import('../views/user/Index.vue')
      },
      {
        path: '/inmailreport',
        name: 'inmailreport',    
        component: () => import('../views/inmail/report/Index.vue')
      },
      {
        path: '/outmailreport',
        name: 'outmailreport',    
        component: () => import('../views/outmail/report/Index.vue')
      },
    ] 
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
