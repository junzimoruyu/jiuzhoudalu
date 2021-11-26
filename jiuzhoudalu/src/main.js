import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as echarts from 'echarts'
//shiyan
const arr = createApp(App)
arr.use(store)
arr.use(router)
arr.config.globalProperties.$echarts = echarts

arr.mount('#app')
