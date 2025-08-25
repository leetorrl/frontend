import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FirstRouter from '../components/firstrouter.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/first', component: FirstRouter },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router