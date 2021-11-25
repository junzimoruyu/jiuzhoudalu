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
      
    };
  },

  mounted() {
    this.accelerator()
  },

  methods: {
    accelerator(){
      let chartDom = document.getElementById('Dashboard');
      this.$echarts.init(chartDom).setOption({
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
                formatter: '{value}'
              },
              data: [
                {
                  value: 50,
                  name: 'SCORE'
                }
              ]
            }
        ]

      })
    }
    
  },
};
</script>

<style lang="less" scoped>

#logon{
  width: 100%;
  height: 100%;
  #Dashboard{
    width: 50%;
    height: 50%;
    border: 2px solid red;
  }
}
</style>