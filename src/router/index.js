import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ExploreView from '@/views/ExploreView.vue' 
import InfoView from '@/views/InfoView.vue' 
import NotificationView from '@/views/NotificationView.vue' 
import MessageView from '@/views/MessageView.vue' 
import BookmarkView from '@/views/BookmarkView.vue' 
import ListView from '@/views/ListView.vue' 
import ProfileView from '@/views/ProfileView.vue' 
import SettingView from '@/views/SettingView.vue' 
import UserDetailsView from '@/views/UserDetailsView.vue' 

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
      path: '/notification', name: 'NotificationView', component: NotificationView
    },
    {
      path: '/message', name: 'MessageView', component: MessageView
    },
    {
      path: '/bookmark', name: 'BookmarkView', component: BookmarkView
    },
    {
      path: '/list', name: 'ListView', component: ListView
    },
    {
      path: '/profile', name: 'ProfileView', component: ProfileView
    },
    {
      path: '/setting', name: 'SettingView', component: SettingView
    },
    {
      path: '/userdetails/:id', name: 'UserDetailsView', component: UserDetailsView
    },
  ]
})

export default router;
