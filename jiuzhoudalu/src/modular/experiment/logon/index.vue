<template>
  <div id="logon">
    <div id="Dashboard"></div>
  </div>
</template>

<script>
export default {
  name: 'logon',
  data() {
    return {
        maisu:0,
        echarts:null,
        option:{
          tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
          },
          series: [
            {
              name: 'Pressure',
              type: 'gauge',
              progress: {
                show: true
              },
              detail: {
                valueAnimation: true,
                formatter: '{value}km/h',
                color:'auto'
              },
              data: [
                {
                  value:0,
                  name: 'SCORE'
                }
              ],
              axisLine:{
                show:true,
                roundCap:true,
                lineStyle:{
                  color:[[0.3, '#CCFFCC'],[0.7,'#33CCFF'],[1,'#FF0000']]
                }
              },
            }
          ]
        },

        anxianum:0,

        upsetTimeout:null,
        downsetTimeout:null

    };
  },

  mounted() {
    this.accelerator()
    this.keydown_fn()
  },

  methods: {
    keydown_fn(){
      
      let chartDom = document.getElementById('Dashboard');
      this.echarts = this.$echarts.init(chartDom);
      this.echarts.setOption(this.option);
      document.onkeydown=(e)=>{
        if(e.key==='ArrowUp'&&e.keyCode===38){
          if(this.anxianum>100){
            this.anxianum=100            
          }else{
            this.anxianum+=1
          }
        }else if(e.key==='ArrowDown'&&e.keyCode===40){
          if(this.anxianum<1){
            this.anxianum=0            
          }else{
            this.anxianum-=1
          }
        }
      }
    },
    accelerator(){
      setInterval(()=>{
        let num=this.anxianum-this.option.series[0].data[0].value
        if(this.anxianum==0){
          this.accelerator_man(num)
          return
        }
        if((num>0&&num>40) || (num<0&&num<-40)){
          console.log(num,'=======',this.anxianum,'this.anxianum','kkkkkkkkkkkkkkk',this.option.series[0].data[0].value)
          this.accelerator_kuai(num)
        }else{
          console.log(num,'=======',this.anxianum,'this.anxianum','mmmmmmmmmmmmmmm',this.option.series[0].data[0].value)
          this.accelerator_man(num)
        }
      },150)
    },
    accelerator_man(val){
        // setInterval(()=>{
            if(val==this.option.series[0].data[0].value){return}
            if(val>0){
              this.option.series[0].data[0].value+=1
            }else{
              this.option.series[0].data[0].value-=1
            }
            this.echarts.setOption(this.option);
        // },150)
    },
    accelerator_kuai(val){
      // setInterval(()=>{
            if(val==this.option.series[0].data[0].value){return}
            this.option.series[0].data[0].value+=1
            if(val>0){
              this.option.series[0].data[0].value+=2
            }else{
              if(this.option.series[0].data[0].value<10){
                this.option.series[0].data[0].value-=0.5
              }else{
                this.option.series[0].data[0].value-=2
              }
            }
            this.echarts.setOption(this.option);
      // },150)
    }
    
  },
};
</script>

<style lang="less" scoped>

#logon{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
  #Dashboard{
    width: 50vw;
    height: 50vw;
    // border: 2px solid red;
  }
}
</style>