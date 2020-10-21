<template>
  <div class>
    <ve-line
      :width="width"
      :grid="grid"
      :toolbox="toolbox"
      :colors="colors"
      :extend="extend"
      :loading="loading"
      :graphic="graphic"
      :dataZoom="dataZoom"
      :settings="chartSettings"
    ></ve-line>
  </div>
</template>

<script>
export default {
  name: 'LineChart',
  props: {
    width: {
      type: String,
      default: '50vw'
    },
    receiveData: Array,
    lineSettings: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    this.grid = {}
    this.toolbox = {}
    this.colors = []
    this.extend = {}
    this.chartSettings = {}
    this.graphic = []
    this.dataZoom = []
    return {
      loading: true
    }
  },
  created() {},
  watch: {
    receiveData: {
      handler: function(newValue) {
        this.loading = false
        console.log('receiveData', newValue)
        // this.loading = true
        let columns = newValue == undefined ? {} : Object.keys(newValue[0])
        this.chartData = {
          columns,
          rows: newValue
        }

        let xAxis = [{ type: 'category', boundaryGap: false, data: [] }]
        let seriesObj = {}
        let keys = Object.keys(newValue[0])
        keys.shift()
        keys.map(item => {
          let obj = {
            name: item,
            // stack: "总量",
            data: [],
            type: 'line'
            // areaStyle: {}
          }
          seriesObj[item] = obj
        })
        newValue.map(item => {
          xAxis[0].data.push(item.date)
          for (let value of keys) {
            seriesObj[value].data.push(item[value])
          }
        })
        let series = []
        for (let key in seriesObj) {
          series.push(seriesObj[key])
        }
        series[1].label = {
          normal: {
            show: true,
            position: 'top'
          }
        }
        console.log('xy', xAxis, series)
        this.grid = {
          show: true,
          right: 15,
          left: 15,
          backgroundColor: '#ccc'
        }
        this.graphic = [
          // {
          //   type: 'image',
          //   id: 'logo',
          //   left: 0,
          //   top: 0,
          //   z: 1,
          //   bounding: 'raw',
          //   origin: [75, 75],
          //   style: {
          //       image: 'https://yushukeji.oss-cn-shenzhen.aliyuncs.com/jds/logo.png',
          //       width: 300,
          //       height: 100,
          //       opacity: 0.4
          //   }
          //   },
          {
            type: 'group',
            rotation: Math.PI / 4,
            bounding: 'raw',
            right: 120,
            bottom: 120,
            z: 100,
            children: [
              {
                type: 'rect',
                left: 'center',
                top: 'center',
                z: 100,
                shape: {
                  width: 400,
                  height: 50
                },
                style: {
                  fill: 'rgba(0,0,0,0.2)'
                }
              },
              {
                type: 'text',
                left: 'center',
                top: 'center',
                z: 100,
                style: {
                  fill: 'rgba(255,255,255,0.2)',
                  text: '数据大屏--鱼数科技',
                  font: 'bold 26px Microsoft YaHei'
                }
              }
            ]
          }
        ]
        ;(this.dataZoom = [
          {
            type: 'slider',
            start: 0,
            end: 10,
            z: 101
          }
        ]),
          (this.toolbox = {
            itemSize: 20,
            showTitle: false,
            feature: {
              magicType: { type: ['line', 'bar'] },
              saveAsImage: {
                icon:
                  'path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z'
              }
            },
            left: '20%',
            iconStyle: {
              borderColor: 'red',
              borderWidth: 1
            },
            tooltip: {
              // 和 option.tooltip 的配置项相同
              show: true,
              formatter: function(param) {
                return '<div>' + param.title + '</div>' // 自定义的 DOM 结构
              },
              backgroundColor: '#222',
              textStyle: {
                fontSize: 12
              },
              extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);' // 自定义的 CSS 样式
            }
          })
        this.colors = ['#c23531', '#2f4554', '#61a0a8']
        this.extend = {
          //可以继承v-
          xAxis: xAxis[0], //不支持数组
          series,
          legend: {
            // type: "scroll",
            // orient: "vertical",
            right: '10%',
            data: ['FV', 'Order', 'ratio']
          },
          title: {
            text: '流量统计',
            subtext: '纯属虚构',
            left: 'center',
            textStyle: {
              fontSize: 22
            },
            subtextStyle: {
              color: 'white'
            }
          },
          backgroundColor: '#5ab1ef'
        }
        this.chartSettings = this.lineSettings
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
