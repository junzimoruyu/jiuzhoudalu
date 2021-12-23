<template>
  <div>
    <h1>笔记</h1>
    <div v-for="(item,index) in  arr" :key="index">
      <h3>{{item.name}}</h3>
      <div v-html="item.text" style="font-size: 22px;">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'textNote',

  data() {
    return {
      br:" <br /> ",
      arr:[
        {
          name:"组件之间的传值方式",
          text:`
            父组件传值给子组件，子组件使用props进行接收。<br />
            子组件传值给父组件，子组件使用$emit+事件对父组件进行传值<br />
            组件中可以使用$parent和$children获取到父组件实例和子组件实例，进而获取数据<br />
            使用$attrs和$listeners，在对一些组件进行二次封装时可以方便传值，例如A->B->C <br />
            使用$refs获取组件实例，进而获取数据 <br />
            使用Vuex进行状态管理 <br />
            使用eventBus进行跨组件触发事件，进而传递数据 <br />
            使用provide和inject，官方建议我们不要用这个，我在看ElementUI源码时发现大量使用 <br />
            使用浏览器本地缓存，例如localStorage <br />
          `
        },
        {
          name:"v-on 修饰符",
          text:`
              .stop ==> 阻止冒泡。本质是调用 event.stopPropagation() <br />
              .prevent ==> 阻止默认事件行为 本质是调用 event.preventDefault() <br />
              .{keyCode | keyAlias } ==> 当事件是从特定键触发时才触发回调 <br />
              .once ==> 事件只触发一次 <br />
          `
        },
        {
          name:"路由模式 有何不同",
          text:`
            hash模式：通过#号后面的内容的更改，触发hashchange事件，实现路由切换 <br />
            history模式：通过pushState和replaceState切换url，触发popstate事件，实现路由切换，需要后端配合 <br />
          `
        },
        {
          name:"",
          text:``
        },
        {
          name:"",
          text:``
        },
        {
          name:"",
          text:``
        },
        {
          name:"",
          text:``
        },
        {
          name:"",
          text:``
        },
        {
          name:"",
          text:``
        },
        {
          name:"",
          text:``
        },
        {
          name:"",
          text:``
        },
        {
          name:"",
          text:``
        },
        {
          name:"",
          text:``
        },
        {
          name:"",
          text:``
        },
        {
          name:"",
          text:``
        },
        {
          name:"",
          text:``
        },
        {
          name:"",
          text:``
        },
        {
          name:"",
          text:``
        },




        {
          name:"",
          text:``
        },
      ]
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>
</style>