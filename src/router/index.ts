import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/HomePage.vue'
import Gallery from '/src/components/Gallery.vue'
const routes = [
  {
      path: '/',
      name: 'Home',
      component: Home,
  },
  {
      path: '/gallery',
      name: 'Gallery',
      component: Gallery,
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