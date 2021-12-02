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
        display:this.Visual.display?'block':'none',
      }
    }

  },
  mounted () {
    let dom=document.getElementById("jiazi")
    console.log(dom)
    this.dom_jiazi=dom.getBoundingClientRect()
  },
  methods: {
    offsetNew(e){
      return {
        x:mouse.client(e).x-this.dom_jiazi.left-1,
        y:mouse.client(e).y-this.dom_jiazi.top-1
      }
    },


    mousedown(e){//鼠标按下
      // console.log(mouse.client(e),'client')
      // console.log(mouse.page(e),'page')
      // console.log(mouse.screen(e),'screen')
      // console.log(mouse.offset(e),'offset')
      // console.log(this.dom_jiazi)
    },
    mouseup(e){//鼠标抬起
      // console.log(e,'mouseupmouseup')
    },
    mouseenter(e){//鼠标进入
        let obj=this.offsetNew(e)
        this.Visual.left=obj.x
        if(this.generateShuji.status){
          this.Visual.display=true

        }else{
          this.Visual.display=true
          this.Visual.left=obj.x
        }
    },
    mouseleave(e){//鼠标移出
      // console.log(e,'mouseleavemouseleave')
      this.initstatus()
    },
    mousemove(e) {//鼠标移动

      if(this.generateShuji.status){
        let obj=this.offsetNew(e)
        this.Visual.left=obj.x-2
        let a=parseInt(obj.y/100)
        this.Visual.top=a*100

        this.positionObj.left=obj.x//添加位置
        this.positionObj.tail=obj.x+this.form.width//尾部位置

        if(mouse.client(e).y>this.form.layer*100){
          this.Visual.display=false
        }else{
          this.Visual.display=true
        }
      }else{
        let obj=this.offsetNew(e)
        this.Visual.left=obj.x
      }
    },

    // 移出鼠标之后要恢复的东西
    initstatus(){
      this.Visual.display=false

    },
    mouseenterbook(e){
      // console.log('进入书籍中')
    },
    mouseleavebook(e){
      // console.log('移出书籍中')
    },
    // 层点击
    layerClick(id){
      console.log(id)

      let obj={
        ...JSON.parse(JSON.stringify(this.bookObj))
      }
      console.log(this.positionObj)
      console.log(obj)
      obj.left=this.positionObj.left-2
      obj.tail=this.positionObj.tail
      obj.width=this.form.width
      console.log(obj.left,'obj.left',obj.tail,'obj.tail')
      for (let i = 0; i < this.bookArr.length; i++) {
        let item=this.bookArr[i]
        if(item.id===id){
          let k=true
          for (let a = 0; a < item.children.length; a++) {
            let Citem = item.children[a];
            console.log(Citem.left,'left',Citem.tail,'tail')
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