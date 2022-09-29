import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LogView from '../views/LogView.vue'
import Groups from '../views/Groups.vue'
import Editor from '../views/Editor.vue'
import AdminHome from '../views/AdminHome.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home',
        authRequired: true,
      }
    },
    {
      path: '/logview/:group/:log',
      name: 'logview',
      component: LogView,
      meta: {
        title: 'Log view',
      }
    },
    {
      path: '/groups',
      name: 'groups',
      component: Groups,
      meta: {
        title: 'Groups',
      }
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor,
      meta: {
        title: 'Editor',
      }
    },
    {
      path: '/adminhome',
      name: 'adminhome',
      component: AdminHome,
      meta: {
        title: 'Admin home',
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: 'Log in',
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
document.title = `The mill | ${to.meta.title}`
next()
})

export default router