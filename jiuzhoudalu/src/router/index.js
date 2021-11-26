import { createRouter, createWebHistory , createWebHashHistory} from 'vue-router'



const root={
    path:"/",
    redirect:"/logon"
}

const logon={
    path: '/logon',
    // component(resolve){
    //   console.log(resolve,'resolveresolve')
    //   require.ensure([], () => resolve(require('@/modular/logon/index')),'logon');
    // }
    component:(e) => import(/* webpackChunkName: "group-foo" */ '@/modular/logon/index') 
    // component:resolve =>{
    //   require(['@/modular/logon/index'], resolve)
    // } 
}


console.log(process.env.BASE_URL,'process.env.BASE_URLprocess.env.BASE_URL  ')



const routes = [
  
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),

  routes:[root,logon]
})

export default router
