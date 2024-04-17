import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddVoc from '../views/AddVoc.vue'
import QuizVoc from '../views/QuizVoc.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add-voc',
      name: 'add-voc',
      component: AddVoc
    },
    {
      path: '/quiz-voc',
      name: 'quiz-voc',
      component: QuizVoc
    }
  ]
})

export default router
