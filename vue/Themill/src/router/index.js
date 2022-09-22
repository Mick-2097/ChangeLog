import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LogView from '../views/LogView.vue'
import Groups from '../views/Groups.vue'
import Editor from '../views/Editor.vue'
import AdminHome from '../views/AdminHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/logview/:group/:log',
      name: 'logview',
      component: LogView
    },
    {
      path: '/groups',
      name: 'groups',
      component: Groups
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor
    },
    {
      path: '/adminhome',
      name: 'adminhome',
      component: AdminHome
    },
  ]
})

export default router