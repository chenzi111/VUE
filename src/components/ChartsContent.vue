<template>
  <div id="all">
    <div id="charts-content">
      <div id="charts-buttons">
        <div class="charts" ref="chart"></div>
        <div class="buttons">
          <button @click="fn()" :class="{button:textbutton==true,Selectbutton:textbutton==false}">{{ ButtonState }}</button>
          <button class="button">保存数据</button>
        </div>
      </div>
        <div class="data-list">
                <div class="data-presentation">
                      <img src="../assets/时间.svg" alt="">
                      <div class="data">测试时间：{{ currentdate }}</div>
                </div>
                <div class="data-presentation">
                      <img src="../assets/评估结果.svg" alt="">
                      <div class="data">评估结果：{{ result }}</div>
                      <a href="#/assess/grade" @click="hashchange()" class="grade">查看详细结果</a>
                </div>
        </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name:'ChartsContent',
    mounted(){
      this.getEchardata()
    },
    data(){
      return{
      currentdate: '未开始测试',
      result:'暂无',
      ButtonState:'立即测试',
      textbutton:true
      }
    },
    methods:{
      getEchardata(){
        const chart = this.$refs.chart
        if(chart){
          const mychart = echarts.init(chart)
          const option = {
            title: {
                text: '健侧手角度变化',
                subtext: '实时数据'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['最大角度', '最小角度']
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: { readOnly: false },
                    magicType: { type: ['line', 'bar'] },
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['5min', '10min', '20min', '30min', '1h', '2h', '...']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value} °'
                }
            },
            series: [
                {
                    name: '最大角度',
                    type: 'line',
                    data: [10, 11, 13, 11, 12, 12, 9],
                    markPoint: {
                        data: [
                            { type: 'max', name: '最大值' },
                            { type: 'min', name: '最小值' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' }
                        ]
                    }
                },
                {
                    name: '最小角度',
                    type: 'line',
                    data: [1, -2, 2, 5, 3, 2, 0],
                    markPoint: {
                        data: [
                            { name: '周最小', value: -2, xAxis: 1, yAxis: -1.5 }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: '平均值' },
                            [{
                                symbol: 'none',
                                x: '90%',
                                yAxis: 'max'
                            }, {
                                symbol: 'circle',
                                label: {
                                    position: 'start',
                                    formatter: '最大值'
                                },
                                type: 'max',
                                name: '最大点'
                            }]
                        ]
                    }
                }
            ]
          }
          mychart.setOption(option)
        }
      },
      fn(){
        this.textbutton=!this.textbutton;
        if(this.textbutton==true){
          this.ButtonState='立即测试'
        }
        else{
          this.ButtonState='断开连接'
        }
        this.currentdate =new Date().toLocaleDateString();
      },
      hashchange(){
        // this.$Event.$emit('hash',2);//将对应导航栏高亮的值传给导航栏
      }
    }
}
</script>

<style scoped>
#all{
  width:980px;
  height:540px;
  background-color:rgb(233, 234, 236);
}
#charts-content{
  width:960px;
  height:520px;
  margin: 10px;
  border-radius: 10px;
  background-color:white ;
}
#charts-buttons{
  display: flex;
  height: 410px;
  width:960px;
}
.charts{
  width: 800px;
  height: 400px;
  margin: 10px 10px 0px 15px;
  background-color:rgba(39, 122, 116, 0.202) ;
  border-radius: 10px;
}
.buttons{
  width: 135px;
  height:400px;
  margin:10px 0px 0px 0px;
}
.button{
  height: 50px;
  width: 120px;
  border: none;
  border-radius:10px;
  margin: 15px 5px 15px 5px;
  background-color:rgba(96, 143, 229, 0.267);
  font-size: 15px;
}
.button:hover{
  box-shadow: 2px 2px 2px 2px rgba(96, 143, 229, 0.096);
}
.Selectbutton{
  height: 50px;
  width: 120px;
  border: none;
  border-radius:10px;
  margin: 15px 5px 15px 5px;
  background-color:rgba(255, 0, 0, 0.702);
  font-size: 15px;
}
.Selectbutton:hover{
  box-shadow: 2px 2px 2px 2px rgba(169, 4, 45, 0.200);
}
.data-list{
  position: relative;
  bottom: 10px;
  height: 100px;
  width: 800px;
  margin:10px 0px 0px 25px;
  /* background-color:bisque ; */
}
.data-presentation{
  display: flex;
  height: 50px;
  width: 250px;
}
.data-presentation>img{
  height: 32px;
  width: 32px;
  margin:7px 7px 5px 5px;
 }
.data{
  height: 50px;
  width:200px;
  line-height: 50px;
  text-align: left;
 }
.grade{
  height: 50px;
  width: 150px;
  margin: 0px;
  font-size: 10px;
  line-height: 50px;
  text-decoration: none;
}
</style>
