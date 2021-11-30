<template>
  <div id="app">
    <button @click="btn" v-if="!name">进入实验区域</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    name() {
      return (
          this.$route.path.includes('experiment')
      )
    }
  },
  mounted () {
  },

  methods: {
    btn(){
      this.$router.push({name:"experiment"})
    }
  },
}
</script>

<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}

#app{
 
}
::-webkit-scrollbar{ //滚动条整体部分
  width: 3px;
  height: 7px;
}
::-webkit-scrollbar-track { //滚动条的轨道
  // background: slategrey;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
}
::-webkit-scrollbar-thumb{//滚动条里面的小方块
  background: #F56C6C;
  border-radius: 10px;
}

::-webkit-scrollbar-button{}//滚动条的轨道的两端按钮，由于通过点击微调小方块的位置。
::-webkit-scrollbar-track-piece{}//内层轨道，滚动条中间部分
//边角，即垂直滚动条和水平滚动条相交的地方
::-webkit-scrollbar-corner{
display: none;
}
::-webkit-resizer{}//两个滚动条的交汇处上用于拖动调整元素大小的小控件
</style>
