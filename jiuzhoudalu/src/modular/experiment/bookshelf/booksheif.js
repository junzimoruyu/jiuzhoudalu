import mouse from './mouse';
export default {
  data() {
    return {
      property: 'value',
      Visual:{
        left:0,
        top:0,
        left1:0,
        display:false,
      },


      weizhi1:0,//鼠标初始位置

      dom_jiazi:null,

      positionObj:{
        left:0,//添加位置
        tail:1.//尾部位置
      }
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
        // display:this.generateShuji.status?'block':'none',
        width:this.generateShuji.shelfW+'px',
      }
    },
    // 添加时的视觉书籍
    imitateBookStyle(){
      return {
        // pointerEvents: 'none',
        width:this.generateShuji.width+"px",
        left:this.Visual.left+"px",
        left1:this.Visual.left1+"px",
        top:this.Visual.top+"px",
        text:"默认",
        display:this.Visual.display?'block':'none',
      }
    }

  },
  mounted () {
    let dom=document.getElementById("juti_fn")
    this.dom_jiazi=dom
  },
  methods: {
    offsetNew(e){
      return {
        x:mouse.client(e).x-this.dom_jiazi.getBoundingClientRect().left-1,
        y:mouse.client(e).y-this.dom_jiazi.getBoundingClientRect().top-1,
        scrollLeft:this.dom_jiazi.scrollLeft,
        scrollTop:this.dom_jiazi.scrollTop,
      }
    },


    mousedown(e){//鼠标按下
      // console.log(mouse.client(e),'client')
      // console.log(mouse.page(e),'page')
      // console.log(mouse.screen(e),'screen')
      // console.log(mouse.offset(e),'offset')
      console.log(this.offsetNew(e))
    },
    mouseup(e){//鼠标抬起
      // console.log(e,'mouseupmouseup')
    },
    mouseenter(e){//鼠标进入
        let obj=this.offsetNew(e)
        this.Visual.left=obj.x+obj.scrollLeft
        if(this.generateShuji.status){
          this.Visual.display=true

        }else{
          this.Visual.display=true
          this.Visual.left=obj.x+obj.scrollLeft
        }
    },
    mouseleave(e){//鼠标移出
      // console.log(e,'mouseleavemouseleave')
      this.initstatus()
    },
    mouseenter_layer(e,id){
      for (let i = 0; i < this.bookArr.length; i++) {
        let item=this.bookArr[i]
        if(item.id===id){
          item.Visual_book_zi=true
        }
      }
    },
    mouseleave_layer(e,id){
      console.log(e,id,'mouseleave_layer')
      this.bookArr
      for (let i = 0; i < this.bookArr.length; i++) {
        let item=this.bookArr[i]
        if(item.id===id){
          item.Visual_book_zi=false
        }
      }

    },
    mousemove(e,id) {//鼠标移动

      if(this.generateShuji.status){
        let obj=this.offsetNew(e)
        this.Visual.left=mouse.offset(e).x-2
        this.Visual.left1=obj.x-2
        console.log(mouse.offset(e),'offset',obj)

        this.positionObj.left=mouse.offset(e).x//添加位置
        this.positionObj.tail=mouse.offset(e).x+this.form.width//尾部位置

        // if((obj.y+obj.scrollTop)>this.form.layer*100){
        //   this.Visual.display=false
        // }else{
        //   this.Visual.display=true
        // }
      }else{
        let obj=this.offsetNew(e)
        this.Visual.left=obj.x+obj.scrollLeft
      }
    },

    // 移出鼠标之后要恢复的东西
    initstatus(){
      this.Visual.display=false

    },
    mouseenterbook(e){
      console.log('进入书籍中')
    },
    mouseleavebook(e){
      console.log('移出书籍中')
    },
    // 层点击
    layerClick(id){
      if(!this.generateShuji.status){
        return
      }
      let obj={
        ...JSON.parse(JSON.stringify(this.bookObj))
      }
      obj.left=this.positionObj.left-2
      obj.tail=this.positionObj.tail
      obj.width=this.form.width
      for (let i = 0; i < this.bookArr.length; i++) {
        let item=this.bookArr[i]
        if(item.id===id){
          let k=true
          for (let a = 0; a < item.children.length; a++) {
            let Citem = item.children[a];
            if(
              Citem.tail>obj.left&&obj.left>Citem.left || 
              Citem.tail>obj.tail&&obj.tail>Citem.left 
              ){
              this.$message('这里有书籍');
              k=false
            }
          }
          if(k){
            item.children.push(obj)
          }
        }
        
      }
    }
  },

}