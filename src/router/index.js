import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/users',
    name: 'users',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UsersView.vue')
  },
  {
    path: '/docs',
    name: 'docs',
    component: () => import('../views/docs/DocsView.vue')
  },
  {
    path: '/docs/:id',
    name: 'doc',
    component: () => import('../views/docs/DetailView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
