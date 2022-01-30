import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ECommando from '../components/ECommando.vue'
import Projects from '../views/Projects.vue'
import Absensi from '../components/Absensi.vue'
import Gudang from '../components/Gudang.vue'
import DSW from '../components/DSW.vue'
import PPDB from '../components/PPDB.vue'
import BLKM from '../components/BLKM.vue'
import BPRS from '../components/BPRS.vue'
// import CV from '../assets/siswa.pdf'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ecommando',
    name: 'ECommando',
    component: ECommando
  },
  {
    path: '/absensi',
    name: 'Absensi',
    component: Absensi
  },
  {
    path: '/gudang',
    name: 'Gudang',
    component: Gudang
  },
  {
    path: '/dsw',
    name: 'DSW',
    component: DSW
  },
  {
    path: '/ppdb',
    name: 'PPDB',
    component: PPDB
  },
  {
    path: '/blkm',
    name: 'BLKM',
    component: BLKM
  },
  {
    path: '/bprs',
    name: 'BPRS',
    component: BPRS
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  // {
  //   path: '/cv',
  //   name: 'CV',
  //   component: CV
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
