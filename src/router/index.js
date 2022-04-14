import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/About.vue'
import Reviews from '../views/Reviews.vue'
import Contact from '../views/Contact.vue'
// I need to do the rest

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'ContactVue',
    component: Contact
  },
  {
    path: '/about',
    name: 'AboutVue',
    component: About
  },
  {
    path: '/reviews',
    name: 'ReviewsVue',
    component: Reviews
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
