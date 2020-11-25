<template>
  <div class="about">
    <keep-alive>
      <line-chart
        :receiveData="lineChartData"
        :width="lineChartWidth"
        :lineSettings="lineSettings"
      ></line-chart>
    </keep-alive>
    <!-- <scatter-chart :receiveData="scatterChart" :scatterSettings="scatterSettings"></scatter-chart> -->
    <!-- <ve-line :extend="extend"></ve-line> -->
    <!-- <div id="echart" style="width:50vw;min-height:20vh;background-color:#cccccc;"></div> -->
    <ye-line
      :option="option"
      :loading="true"
      :receiveData="lineChartData"
      :settings="linechartSettings"
      :size="lineSize"
    >
      <div>暂无数据</div>
    </ye-line>
    <!-- <ye-line :option="option" :loading="true"></ye-line> -->
  </div>
</template>

<script>
import 'v-charts/lib/style.css' //必须引入  引出加载
// let chart = "nihao"
export default {
  name: 'about',
  data() {
    return {
      msg1: '123',
      // msg2:"456",
      lineChartDataAjax: [
        //y轴以数据p第二个属性开始为主
        { date: '1/1', FV: 1393, Order: 1093, ratio: 0.32 },
        { date: '1/2', FV: 3530, Order: 3230, ratio: 0.22 },
        { date: '1/3', FV: 2923, Order: 2623, ratio: 0.72 },
        { date: '1/4', FV: 1723, Order: 1423, ratio: 0.52 },
        { date: '1/5', FV: 3792, Order: 3492, ratio: 0.12 },
        { date: '1/6', FV: 4593, Order: 4293, ratio: 0.42 },
        { date: '1/7', FV: 5593, Order: 3293, ratio: 0.12 }
      ],
      lineChartWidth: '50vw',
      lineSettings: {
        // min: [0, 0],
        // max: [5000, 1],
        // metrics: ["FV", "Order", "ratio"], //显示指标折线属性
        // dimension: ["date"], //维度横轴属性
        // axisSite: { right: ["ratio"] }, //右y轴
        // yAxisType: ["normal", "percent"],
        // yAxisName: ["访问量", "比率"],
        // xAxisType: "category",
        // xAxisName: ['日期']
        // labelMap: {
        //   // 框体别名
        //   FV: "访问用户(左)",
        //   Order: "下单用户(左)",
        //   ratio: "下单率(右)"
        // },
        // stack:{"用户":["FV","Order"]},//堆叠
        // area: true //面积图
      },
      linechartSettings: {
        //xAxis series key用来遍历赋值给data
        color: ['#d48265', '#91c7ae', '#5ab1ef'],
        xAxis: [
          {
            name: '日期',
            key: 'date',
            nameLocation: 'center',
            nameTextStyle: { lineHeight: 30 }
          }
        ], //x轴
        yAxis: [
          { name: '流量', min: 0, max: 10000 },
          { name: '比率', min: 0, max: 1 }
        ], //y轴
        series: [
          { name: '访问量', key: 'FV', stack: '总量', areaStyle: {} },
          { name: '订单量', key: 'Order', stack: '总量', areaStyle: {} },
          {
            name: '比率',
            key: 'ratio',
            yAxisIndex: 1,
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            }
          }
        ], //线
        legend: {
          right: 0,
          data: ['访问量', '订单量', '比率'],
          type: 'scroll',
          orient: 'vertical'
        },
        title: {
          text: '流量统计',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          containLabel: true, //要加上
          bottom: '10%'
        }
      },
      lineSize: {
        height: '30vh',
        width: '60vw'
      },
      scatterChart: {
        //y轴以实体数据的第二个属性为主 实体大小的第三个属性为主  缺点每个实体可能会出现盖住情况
        上海: [
          { 日期: '1/1', 访问用户: 1253, 年龄: 3, 下单用户: 1244 },
          { 日期: '1/2', 访问用户: 1222, 年龄: 6, 下单用户: 2344 },
          { 日期: '1/3', 访问用户: 7120, 年龄: 9, 下单用户: 3245 },
          { 日期: '1/4', 访问用户: 4120, 年龄: 12, 下单用户: 4355 },
          { 日期: '1/5', 访问用户: 3120, 年龄: 15, 下单用户: 4564 },
          { 日期: '1/6', 访问用户: 2320, 年龄: 20, 下单用户: 6537 }
        ],
        北京: [
          { 日期: '1/1', 访问用户: 1230, 年龄: 3, 下单用户: 1244 },
          { 日期: '1/2', 访问用户: 1275, 年龄: 6, 下单用户: 2344 },
          { 日期: '1/3', 访问用户: 312, 年龄: 15, 下单用户: 4564 },
          { 日期: '1/4', 访问用户: 212, 年龄: 9, 下单用户: 3245 },
          { 日期: '1/5', 访问用户: 410, 年龄: 12, 下单用户: 4355 },
          { 日期: '1/6', 访问用户: 712, 年龄: 10, 下单用户: 3567 }
        ],
        广州: [
          { 日期: '1/1', 访问用户: 123, 年龄: 3, 下单用户: 1244 },
          { 日期: '1/2', 访问用户: 122, 年龄: 6, 下单用户: 2344 },
          { 日期: '1/3', 访问用户: 2125, 年龄: 30, 下单用户: 3245 },
          { 日期: '1/5', 访问用户: 4126, 年龄: 12, 下单用户: 4355 },
          { 日期: '1/4', 访问用户: 5120, 年龄: 18, 下单用户: 4564 },
          { 日期: '1/6', 访问用户: 3841, 年龄: 30, 下单用户: 4850 }
        ]
      },
      scatterSettings: {
        dataType: {
          访问用户: 'KMB',
          年龄: 'percent',
          下单用户: 'normal'
        }
      },
      lineChartData: [],
      loading: true,
      extend: {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          name: '流量',
          type: 'value',
          max: 5000
        },
        //     {
        //         name: '降雨量',
        //         // nameLocation: 'start',
        //         max: 1,
        //         type: 'value',
        //         // inverse: true
        //     }
        // ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      },
      optionAjax: {
        title: {
          //标题
          text: '堆叠区域图',
          left: 'center'
        },
        tooltip: {
          //提示工具
          trigger: 'axis', //弹框
          axisPointer: {
            //水平线
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          //图例
          right: 0,
          type: 'scroll',
          orient: 'vertical',
          data: [
            {
              name: '邮件营销',
              //图例图标
              icon:
                'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7'
            },
            '联盟广告',
            '视频广告',
            '直接访问',
            '搜索引擎'
          ]
        },
        toolbox: {
          //工具盒子
          feature: {
            saveAsImage: {}
          },
          left: 100
        },
        grid: {
          //网格数据区域
          left: '3%',
          right: '10%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          //x轴
          {
            name: '日期',
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          //y轴
          {
            name: '流量',
            type: 'value',
            // position:'left',
            max: 3000,
            min: 0
          },
          {
            name: '邮量',
            type: 'value',
            max: 30,
            min: 0
            // position:"right"
          }
        ],
        series: [
          //数据绘制
          {
            name: '邮件营销',
            type: 'line',
            // stack: "总量",
            // areaStyle: {},
            yAxisIndex: 1,
            data: [1, 13, 10, 13, 9, 23, 21]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
              //数据上方的区域
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      },
      option: {}
    }
  },
  computed: {},
  watch: {},
  methods: {
    sendLineChartData() {
      this.lineChartData = this.lineChartDataAjax
      this.option = this.optionAjax
    },
    line() {
      var myChart = this.$echarts.init(document.getElementById('echart'))
      var option = {
        title: {
          //标题
          text: '堆叠区域图',
          left: 'center'
        },
        tooltip: {
          //提示工具
          trigger: 'axis', //弹框
          axisPointer: {
            //水平线
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          //图例
          right: 0,
          type: 'scroll',
          orient: 'vertical',
          data: [
            {
              name: '邮件营销',
              icon:
                'image://data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7'
            },
            '联盟广告',
            '视频广告',
            '直接访问',
            '搜索引擎'
          ]
        },
        toolbox: {
          //工具盒子
          feature: {
            saveAsImage: {}
          },
          left: 100
        },
        grid: {
          //网格数据区域
          left: '3%',
          right: '10%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          //x轴
          {
            name: '日期',
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          //y轴
          {
            name: '流量',
            type: 'value',
            // position:'left',
            max: 3000,
            min: 0
          },
          {
            name: '邮量',
            type: 'value',
            max: 30,
            min: 0
            // position:"right"
          }
        ],
        series: [
          //数据绘制
          {
            name: '邮件营销',
            type: 'line',
            // stack: "总量",
            // areaStyle: {},
            yAxisIndex: 1,
            data: [1, 13, 10, 13, 9, 23, 21]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
              //数据上方的区域
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      myChart.setOption(option)
    }
  },
  created() {
    setTimeout(() => {
      this.sendLineChartData()
    }, 2000)
    console.log('about', this)
  },
  mounted() {
    // this.line();
  },

  components: {}
}
</script>

<style lang="scss" scoped></style>
