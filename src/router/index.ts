import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/HomePage.vue'
const routes = [
  {
      path: '/',
      name: 'Home',
      component: Home,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
      return { top: 0 }
  },
})
export default router