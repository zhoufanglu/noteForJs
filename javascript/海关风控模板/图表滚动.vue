<!--生产工时图表-->
<template>
  <div class="p-scgs-charts" id="scgsCharts">
    生产工时
  </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data() {
      return {}
    },
    created() {
    },
    mounted() {
      this.initCharts()
    },
    methods: {
      initCharts() {
        const option = {
          color: ['#5793f3', '#d14a61', '#675bba'],

          tooltip: {
            trigger: 'axis',
            transitionDuration: 0,
            axisPointer: {
              type: 'cross',
            },
          },
          grid: {
            right: '20%',
          },
          toolbox: {
            // feature: {
            //     dataView: {show: true, readOnly: false},
            //     restore: {show: true},
            //     saveAsImage: {show: true}
            // }
          },
          legend: {
            data: ['工单数据', '生产工时数量', '平均数据'],
          },
          xAxis: [
            {
              type: 'category',
              axisTick: {
                alignWithLabel: true,
              },
              // data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
              data: ['WB01', 'WB02', 'WB03', 'WB04'],
            },
          ],
          yAxis: [
            {
              type: 'value',
              name: '生产工时分析',
              min: 0,
              max: 8000,
              position: 'left',
              axisLine: {
                lineStyle: {
                  color: '#5793f3',
                },
              },
              axisLabel: {
                formatter: '{value}',
              },
            },
          ],
          series: [
            {
              name: '生产工时分析',
              type: 'bar',
              data: [2321, 1235, 5020, 6632],
              //标准基线
              markLine: {
                silent: true,
                lineStyle: {
                  normal: {
                    color: 'red', // 这儿设置安全基线颜色
                  },
                },
                data: [
                  {
                    yAxis: 5000,
                  },
                ],
                label: {
                  normal: {
                    formatter: '标准\n基线', // 这儿设置安全基线
                  },
                },
              },
            },

            // {
            //     name: '平均数据',
            //     type: 'line',
            //     yAxisIndex: 2,
            //     data: [20, 49, 70, 232, 256, 67, 135.6, 162.2, 326, 200, 64, 33]
            // }
          ],
          dataZoom: [{
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            left: '9%',
            bottom: -5,
            start: 10,
            end: 90 //初始化滚动条
          }],
        }
        let myChart = this.$echarts.init(document.getElementById('scgsCharts'))
        myChart.setOption(option)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .p-scgs-charts {
    height: 90%;
    width: 100%;
  }
</style>
