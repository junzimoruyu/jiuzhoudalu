<template>
  <div id="experiment">
    <div>
      <!-- <el-tabs type="card" v-model="type" @tab-click="btn">
        <el-tab-pane name="home" label="退出"></el-tab-pane>
        <el-tab-pane name="msb" label="迈速标"></el-tab-pane>
        <el-tab-pane name="bookshelf" label="书架实验"></el-tab-pane>
      </el-tabs> -->

      <el-tabs type="card" v-model="type" @tab-click="btn">
        <el-tab-pane v-for="(item,index) in dataArr" :key="item.name" :name="item.name" :label="item.label">
        </el-tab-pane>

      </el-tabs>


    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import arr from "./common/indexData"
export default {
  name: 'experiment',

  data() {
    return {
      dataArr:arr,
      type:""
    };
  },
  computed: {
   
  },

  mounted() {
  },

  methods: {
    async btn(val,event){
      let a=await val 
      console.log(this.type)
      console.log(a,event)
        this.$router.push({name:this.type})

    }
  },
};
</script>
<style lang="less" scoped>
#experiment{
  width: 100%;
  height: 100%;
}
</style>