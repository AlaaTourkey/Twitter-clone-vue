import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ExploreView from '@/views/ExploreView.vue' 
import InfoView from '@/views/InfoView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', name: 'home', component: HomeView
    },
    {
      path: '/explor', name: 'exploreView', component: ExploreView
    },
    {
      path: '/notification', name: 'InfoView', component: InfoView
    },
  ]
})

export default router;
