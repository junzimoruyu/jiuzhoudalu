import { createRouter, createWebHistory , createWebHashHistory} from 'vue-router'

import experiment from './experiment';

const root={
    path:"/",
    redirect:"/home"
}
const home={
  path:"/home",
  name:"home",
  component:(e) => import(/* webpackChunkName: "experiment" */ '@/modular/home') 
  // redirect:"/"
}




console.log(process.env.BASE_URL,'process.env.BASE_URLprocess.env.BASE_URL  ')



const routes = [
  
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),

  routes:[root,home,experiment]
})

export default router
