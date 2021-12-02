<template>
<!-- 
  @click//单击
  @mouseup//抬起
  @mousedown//按下
  @dblclick//双击
  @mousemove//移动  鼠标在某元素上移动时触发，即使在其子元素上也会触发
  @mouseleave//离开 当鼠标移出某元素时触发。
  @mouseenter//进入 
  @mouseout //移出  当鼠标移出某元素时触发，移入和移出其子元素时也会触发
  @mouseover//在  当鼠标移入某元素时触发，移入和移出其子元素时也会触发。
 -->
  <div id="bookshelf">
    <!-- 书架 -->
    <!--     @mouseup="mouseup"
      @mousedown="mousedown" -->
    <div id="jiazi" 
      @mouseup="mouseup"
      @mousedown="mousedown"
      
      @mouseleave="mouseleave"
      @mouseenter="mouseenter"

    > 

      <div id="juti_fn">

          <div id="juti" :style="layerStyle"  >
            <!-- <el-button type="primary" size="medium" round>Info</el-button> -->
              <div class="layer "  
                  v-for="(item,index) in bookArr" 
                  :key="item.id"
                  :class="`biaoshi${index}`"
                  @mousemove="mousemove($event,item.id)"
                  @mouseenter="mouseenter_layer($event,item.id)"
                  @mouseleave="mouseleave_layer($event,item.id)"
                  @click="layerClick(item.id)"
                  
              >
                  <div class="book" 
                      v-for="(data,inde) in item.children"
                      :key="inde"
                      :style="{left:data.left+'px',width:data.width+'px',pointerEvents:generateShuji.status?'none':'auto'}"
                      @mouseenter="mouseenterbook"
                      @mouseleave="mouseleavebook"
                  >
                      {{data.author}}
                      {{generateShuji.status?'none':'auto'}}
                      {{generateShuji.status?'':mouseenterbook}}
                      {{data.name}}
                      {{data.type}}
                      {{data.time}}

                      <div class="book_btn">
                        <div class="book_btn1">删除</div>
                        <div class="book_btn2">其他</div>
                      </div>
                  </div>

                  <div class="Visual_book_zi flex" 
                      v-show="item.Visual_book_zi&&generateShuji.status"
                      :style="{left:imitateBookStyle.left,width:form.width+'px',pointerEvents:'none'}"
                  >
                    <span>{{imitateBookStyle.text}}</span>
                  </div>
              </div>
          </div>
          <!-- <div class="Visualline" :style="Visualline">
          </div> -->
          <div class="Visual_book flex" 
              v-if="generateShuji.status"
              :style="{left:imitateBookStyle.left1,width:imitateBookStyle.width,display:imitateBookStyle.display}"
              style="pointer-events: none;" 

          >
          </div>
      </div>
    </div>
    <div id="shuji">
      <!-- 生成书籍  -->
      <!-- <el-input v-model="input" placeholder="Please input" /> -->
      <el-form ref="form" :model="form"  :rules="rules" >
         <el-form-item label="书籍大小-宽" prop="width">
            <el-input v-model.number="form.width" ></el-input>
        </el-form-item>
        <el-form-item label="书籍大小-高" prop="height">
            <el-input :disabled="true" v-model.number="form.height"></el-input>
        </el-form-item>
        <el-form-item label="你想分几层" prop="layer">
            <el-input v-model.number="form.layer"></el-input>
        </el-form-item>
        <el-form-item label="你想书架有多宽" prop="shelfW">
            <el-input v-model.number="form.shelfW"></el-input>
        </el-form-item>
        <el-form-item label="书籍名字" prop="name">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="zhushi"  >*单位px</div>
          <div class="btn_generate flex">
              <el-button type="primary" round @click="generate">生成</el-button>
              <el-button type="primary" round @click="generate_no">销毁</el-button>
          </div>
        </el-form-item>
      </el-form>

      <div class="generate_region flex">
          <div class="generate_shuji flex" v-show="generateShuji.status" :style="{width:generateShuji.width+'px',height:generateShuji.height+'px', fontSize:generateShuji.width/4+'px'}">
            <span>{{generateShuji.name}}</span>
          </div>

      </div>
      

    </div>
  </div>
</template>

<script>

import booksheif from './booksheif';

export default {
  name: 'bookshelf',
  mixins: [booksheif],
  data() {
    return {
      form:{
        name:"默认",
        width:200,
        height:100,
        layer:5,
        shelfW:2000,
      },

      generateShuji:{
        status:false,
        name:"",
        width:0,
        height:0,
        layer:0,
        shelfW:0,
      },

      bookArr:[],

      layerObj:{
        id:0,//同事代表唯一层数
        Visual_book_zi:false,
        children:[]
      },
      bookObj:{
        name:"名称",
        type:"类型",
        author:"作者",
        time:"2021/02/22",
        width:0,
        left:0,
        tail:0,
      },


      // 
      // Visualline:{

      // },

      rules:{
        width:[
           /*required 是否必填  trigeer 触发检查的方式 blur 失去焦点时检查 change 值发生改变时触发*/
          { required: true, message: '请输入宽度', trigger: 'blur' },

          /*min  最小值   max 最大值 注意: type默认为string min和max则为最小长度和最大长度  当需要设置成数字的最小值和最大值时 type:'number' 需要在绑定时写  v-model.number='age' 但input的type 不能设置为number否则获取的值会一直被视为是字符串 */
          { type:'number', min: 1, max: 200, message: '取值范围1~100', trigger: 'blur' } ,

          /*type的用法 ,其它的使用请参考文档*/  //不知道干啥
          // { type: 'number', required: true, message: '', trigger: 'change' },

          /*使用正则*/
          // {pattern:/^[a-z]+$/,message:'只能输入字母!'},

          /*自定义检查方法.checkfun ,参数 rule, value, callback ,检测成功 或不成功都需要手动调用 callback , 验证不成功时 callback(new Error('提示信息')) :注意 当在下面的对象中有message时则验证失败只会显示message的值 */
          // { validator: checkfun, trigger: 'blur' }
        ],
        height:[
          { required: true, message: '请输入高度', trigger: 'blur' },
          { type:'number', min: 1, max: 200, message: '取值范围1~100', trigger: 'blur' } ,
        ],
        layer:[
          { required: true, message: '没有设置层数', trigger: 'blur' },
          { type:'number', min: 1, max: 20, message: '取值范围1~20', trigger: 'blur' } ,
        ],
        shelfW:[
          { required: true, message: '没有架子宽度', trigger: 'blur' },
          { type:'number', min: 500, max: 2300, message: '取值范围500~2300', trigger: 'blur' } ,
        ],
        name:[
          { required: true, message: '请输入名字', trigger: 'blur' },
          { min: 1, max: 5, message: '取值范围1~5字', trigger: 'blur' } ,
        ],
      }
      
    };
  },

  mounted() {
    
  },

  methods: {
    generate(){
      // this.form.name='aaaaaaaaaaaa'
      console.log(this.form,'sss')
      this.$refs.form.validate((valid) => {
        if (valid) {
          // alert('submit!');
            for(let i in this.generateShuji){
              if(i in this.form){
                this.generateShuji[i]=this.form[i]
              }
            }
            this.generateShuji.status=true
            this.bookFn(this.form.layer)
        } else {
            return false;
        }
      });
   
    },

    // 新数据 书
    bookFn(num){
      this.bookArr=[]
      for (let i = 0; i < num; i++) {
        let obj={
          ...JSON.parse(JSON.stringify(this.layerObj))
        }
        obj.id=i+''+(new Date()).getTime()
        obj.children.push(JSON.parse(JSON.stringify(this.bookObj)))
        this.bookArr.push(obj)
      }
      console.log(this.bookArr)
    },


    checkfun(){
    },
    generate_no(){
        this.generateShuji.status=false
        this.$forceUpdate();
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
    border: 1px solid brown;
    position: relative;
    overflow: hidden;
    // flex: 6;
    #juti_fn{
      width: 100%;
      height: 100%;
      overflow:auto;
    }
    #juti{
      width: 1200px;
      height: 100%;
      .layer{
        width: 100%;
        height: 100px;
        background: gray;
        border: 1px solid white;
        position: relative;
        .book{
          width: 100px;
          height: 100px;
          border: 1px solid red;
          // margin: 0 10px;
          position: absolute;
          top: 0;
          .book_btn{
            position: absolute;
            right: -50px;
            top: 0;
            display: none;
            .book_btn1{
              width: 50px;
            }
            .book_btn2{
              width: 50px;
            }
          }
          &:hover{
            .book_btn{
              display: block;
            }
          }
        }
        .Visual_book_zi{
            // width: 100%;
            height: 100px;
            background: antiquewhite;
            position: absolute;
            top: 0;
        }
      }
    }
    .Visualline{
      position: absolute;
      // display: block;
      box-sizing: border-box;
      height: 100%;
      left: 3px;
      top: 0px;
      // width: 1px;
      border: 1px solid red;
    }
    .Visual_book{
      width: 200px;
      height: 100%;
      border: 1px solid wheat;
      position: absolute;
      top: 0;
      
    }
  }
  #shuji{
    width: 16%;
    height: 100%;
    box-sizing: border-box;
    // border: 1px solid slateblue;
    .zhushi{
      padding: 0;
      margin: 0 ;
      color:red;
      height: 20px;
      line-height: 20px;
      text-align: center;
    }
    .btn_generate{
    }
    .generate_region{
      .generate_shuji{

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
.flex{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>