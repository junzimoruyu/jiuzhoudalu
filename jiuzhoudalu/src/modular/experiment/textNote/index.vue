<template>
  <div class="biji">
    <h1>笔记</h1>
    <div v-for="(item,index) in  arr" :key="index">
      <h3>{{item.name}}</h3>
      <div v-html="item.text" style="font-size: 22px;">
      </div>
    </div>
    <div>
      <h1>实验数据</h1>
      {{si}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'textNote',

  data() {
    this.si="aaaaaaaa"
    // Object.freeze
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
          name:"动态class，动态style",
          text:`动态class对象：<div :class="{ 'is-active': true, 'red': isRed }"></div> <br />
              动态class数组：<div :class="['is-active', isRed ? 'red' : '' ]"></div> <br />
              动态style对象：<div :style="{ color: textColor, fontSize: '18px' }"></div> <br />
              动态style数组：<div :style="[{ color: textColor, fontSize: '18px' }, { fontWeight: '300' }]"></div> <br />
          `
        },
        {
          name:"vuex的有哪些属性？用处是什么",
          text:`
            State：定义了应用状态的数据结构，可以在这里设置默认的初始状态。<br />
            Getter：允许组件从 Store 中获取数据，mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性。<br />
            Mutation：是唯一更改 store 中状态的方法，且必须是同步函数。<br />
            Action：用于提交 mutation，而不是直接变更状态，可以包含任意异步操作。<br />
            Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。<br />
          `
        },
        {
          name:"watch有哪些属性，分别有什么用",
          text:`
            handler () { // 执行回调 <br />
                // do something <br />
            }, <br />
            deep: true, // 是否进行深度监听 <br />
            immediate: true // 是否初始执行handler函数 <br />
          `
        },
        {
          name:"父子组件生命周期顺序",
          text:`
            父beforeCreate -> 父created -> 父beforeMount -> 子beforeCreate -> 子created -> 子beforeMount -> 子mounted -> 父mounted
          `
        },
        {
          name:"对象新属性无法更新视图，删除属性无法更新视图",
          text:`
            原因：Object.defineProperty没有对对象的新属性进行属性劫持 <br />
            对象新属性无法更新视图：使用Vue.$set(obj, key, value)，组件中this.$set(obj, key, value) <br />
            删除属性无法更新视图：使用Vue.$delete(obj, key)，组件中this.$delete(obj, key) <br />

            直接arr[index] = xxx无法更新视图<br />
            Vue没有对数组进行Object.defineProperty的属性劫持，<br />
            使用数组的splice方法，arr.splice(index, 1, item) 或 使用Vue.$set(arr, index, value) <br />
          `
        },
        {
          name:"自定义指令",
          text:`
            <a href="https://www.cnblogs.com/lzq035/p/14183553.html">8个非常实用的Vue自定义指令</a>
          `
        },
        {
          name:"插槽的使用以及原理",
          text:`
            <a href="https://juejin.cn/post/6949848530781470733">「Vue源码学习」你真的知道插槽Slot是怎么“插”的吗</a>
          `
        },
        {
          name:"取data中某一个数据的初始状态",
          text:`this.$options.data().xxxx`
        },
        {
          name:"为什么不推荐用 index 做 key",
          text:`
            key 的作用:Vue 中使用虚拟 dom 且根据 diff 算法进行新旧 DOM 对比，从而更新真实 dom ，key 是虚拟 DOM 对象的唯一标识, 在 diff 算法中 key 起着极其重要的作用. <br />
            key 在 diff 算法中的角色: 就是判断是不是相同节点  <br />
          
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
      ]
    };
  },

  mounted() {
    
  },

  methods: {
    time(){
      /*
        80s
        80%60 = 1
      
      */ 
    }
    
  },
};
</script>

<style lang="less" scoped>
.biji{
  height: 100%;
  overflow: auto;
  padding: 6vw 3vh;
}
</style>