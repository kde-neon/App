import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/projects.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      component: import("../views/Home.vue")
    },
    {
      name: 'projects',
      path: '/projects',
      component: HomeView,
      children: [
        {
          path: "/projects/dom",
          component: import("../views/dom.vue")
        },
        {
          path: "projects/doms",
          component: import("../views/dom.vue")
        }
      ]
    },
    {
      path: '/:pathMatch(.*)',
      name: '404',
      component: () => import("../views/404.vue")
    }
  ]
})

export default router
