


const textNote={
  path: 'textNote',
  name: 'textNote',
  meta: {
    label: '书架'
  },
  component:(e) => import(/* webpackChunkName: "experiment" */ '@/modular/experiment/textNote') 

}

const bookshelf={
  path: 'bookshelf',
  name: 'bookshelf',
  meta: {
    label: '书架'
  },
  component:(e) => import(/* webpackChunkName: "experiment" */ '@/modular/experiment/bookshelf') 

}

const msb={
  path: 'msb',
  name: 'msb',
  meta: {
    label: '迈速表'
  },
  // component(resolve){
  //   console.log(resolve,'resolveresolve')
  //   require.ensure([], () => resolve(require('@/modular/logon/index')),'logon');
  // }
  component:(e) => import(/* webpackChunkName: "experiment" */ '@/modular/experiment/logon') 
  // component:resolve =>{
  //   require(['@/modular/logon/index'], resolve)
  // } 
}


export default {
  path: '/experiment',
  name: 'experiment',
  // redirect: '/experiment/msb',
  icon: '',
  meta: {
      label: '实验'
  },
  component:(e) => import(/* webpackChunkName: "experiment" */ '@/modular/experiment'),
  // component(resolve) {
  //     require.ensure([], () => resolve(require('@/modular/bookshelf/')), 'frontVip');
  // },
  children: [bookshelf,msb,textNote]
};