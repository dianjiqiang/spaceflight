import { createRouter, createWebHistory } from 'vue-router'
import { getRequest } from '../service'
import store from '../store'

const routes = [
  {
    path: '/',
    redirect: '/home/title'
  },
  {
    name: 'Home',
    path: '/home',
    redirect: '/home/title',
    component: () => import('../views/home'),
    children: [
      {
        name: 'Title',
        path: 'title',
        component: () => import('../views/home/title')
      },
      {
        name: 'Origin',
        path: 'origin',
        component: () => import('../views/home/origin')
      },
      {
        name: 'Challenger',
        path: 'challenger',
        component: () => import('../views/home/challenger')
      },
      {
        name: 'Difficulty',
        path: 'difficulty',
        component: () => import('../views/home/difficulty')
      },
      {
        name: 'Future',
        path: 'future',
        component: () => import('../views/home/future')
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to, from) => {
  switch (to.name) {
    case 'Title':
      store.dispatch('home/getItemData', 'title')
      break
    case 'Origin':
      store.dispatch('home/getItemData', 'origin')
      break
    case 'Challenger':
      store.dispatch('home/getItemData', 'challenger')
      break
    case 'Difficulty':
      store.dispatch('home/getItemData', 'difficulty')
      break
    case 'Future':
      store.dispatch('home/getItemData', 'future')
      break
  }
})

export default router
