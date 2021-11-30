<template>
  <div id="bookshelf">
    <!-- 书架 -->
    <div id="jiazi">
      <div id="juti">
         <!-- <el-button type="primary" size="medium" round>Info</el-button> -->
        具体位置sssccccsss
      </div>
    </div>
    <div id="shuji">
      <!-- 生成书籍  -->
      <!-- <el-input v-model="input" placeholder="Please input" /> -->
      <el-form ref="form" :model="form"   >
         <el-form-item label="书籍大小sss">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      

    </div>
  </div>
</template>

<script>
export default {
  name: 'bookshelf',

  data() {
    return {
      form:{
        name:""
      }
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>
<style lang="less" scoped>
#bookshelf{
    width: 100%;
    height: 90%;
    box-sizing: border-box;
    // border: 1px solid red;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    position:relative;
  #jiazi{
    width: 80%;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid brown;
    position: relative;
    overflow: auto;
    // flex: 6;
    #juti{
      width: 1200px;
      height: 100%;
    }
  }
  #shuji{
    width: 16%;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid slateblue;

  }
}
</style>