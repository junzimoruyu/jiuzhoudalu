import mouse from './mouse';
export default {
  data() {
    return {
      property: 'value',
      Visual:{
        left:0,
        top:0,
        display:false,
      },
    };
  },
  watch: {
    // data: {
    //   immediate: true,
    //   deep: true,
    //   handler(newValue, oldValue) {
        
    //   }
    // }
  },
 
  computed: {
    // 视觉线
    Visualline() {
      return {
        left:this.Visual.left+'px',
        top:this.Visual.top+'px',
        display:this.Visual.display?'block':'none',
        pointerEvents: 'none',
      }
    },
    // 架子的宽和层
    layerStyle(){
      return {
        display:this.generateShuji.status?'block':'none',
        width:this.generateShuji.shelfW+'px',
      }
    },
    // 添加时的视觉书籍
    imitateBookStyle(){
      return {
        // pointerEvents: 'none',
        width:this.generateShuji.width+"px",
        left:this.Visual.left+"px",
        top:this.Visual.top+"px",
        text:"默认",
      }
    }

  },
  mounted () {
  },
  methods: {
    mousedown(e){//鼠标按下
      // console.log(e,'mousedownmousedown')
      
      console.log(mouse.client(e),'sssssss')
      console.log(mouse.page(e),'sssssss')
      console.log(mouse.screen(e),'sssssss')
      console.log(mouse.offset(e),'sssssss')
    },
    mouseup(e){//鼠标抬起
      console.log(e,'mouseupmouseup')
    },
    mouseenter(e){//鼠标进入
        this.Visual.left=mouse.offset(e).x
        if(this.generateShuji.status){

        }else{
          this.Visual.display=true
          this.Visual.left=mouse.offset(e).x
        }
    },
    mouseleave(e){//鼠标移出
      // console.log(e,'mouseleavemouseleave')
      this.initstatus()
    },
    mousemove(e) {//鼠标移动
      if(this.generateShuji.status){
        this.Visual.left=mouse.offset(e).x
        this.Visual.top=mouse.offset(e).y-50
      }else{
        this.Visual.left=mouse.offset(e).x
      }
    },

    // 移出鼠标之后要恢复的东西
    initstatus(){
      this.Visual.display=false

    }
  },

}