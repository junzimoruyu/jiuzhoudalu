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
      <el-form ref="form" :model="form"  :rules="rules" >
         <el-form-item label="书籍大小-宽" prop="width">
            <el-input v-model="form.width"></el-input>
        </el-form-item>
        <el-form-item label="书籍大小-高" prop="height">
            <el-input v-model="form.height"></el-input>
        </el-form-item>
        <el-form-item label="书籍名字" prop="name">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="zhushi"  >*单位px</div>
          <el-button type="primary" round @click="generate">生成</el-button>
          <!-- <el-button>Cancel</el-button> -->
        </el-form-item>
      </el-form>

      <div class="generate_region">
          <div class="generate_shuji" v-show="generateShuji.status" :style="{width:generateShuji.width+'px',height:generateShuji.height+'px'}">
            <span>{{generateShuji.name}}</span>
          </div>

      </div>
      

    </div>
  </div>
</template>

<script>
export default {
  name: 'bookshelf',

  data() {
    return {
      form:{
        name:"默认",
        width:0,
        height:0,
      },

      generateShuji:{
        status:false,
        name:"",
        width:0,
        height:0
      },
      rules:{
        width:[
          // {required :true,message :"aaaaaaaaaa",trigger :"blur"}
          { required: true, message: '请输入活动名称', trigger: 'blur' },
        ]
      }
      
    };
  },

  mounted() {
    
  },

  methods: {
    generate(){
      // this.form.name='aaaaaaaaaaaa'
      console.log(this.form,'sss')
      for(let i in this.generateShuji){
        if(i in this.form){
          this.generateShuji[i]=this.form[i]
        }
      }
      this.generateShuji.status=true
    }
    
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
    padding:0 10px;
    

    position:relative;
  #jiazi{
    width: 80%;
    height: 100%;
    box-sizing: border-box;
    // border: 1px solid brown;
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
    // border: 1px solid slateblue;
    .zhushi{
      padding: 0;
      margin: 0;
      color:red;
      height: 20px;
      line-height: 20px;
      text-align: center;
    }
    .generate_region{
      .generate_shuji{
        display: flex;
        justify-content: center;
        align-items: center;

        background:grey;
        opacity: 0.6;
        border: 1px solid red;
      }
    
    }
    .el-form{
      .el-form-item{
        /deep/.el-form-item__content{
        }
      }
    }
    .el-button{
      width: 100%;
    }

  }
}
</style>