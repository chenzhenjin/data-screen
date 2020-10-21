<template>
  <div
    class="chart-content"
    v-bindResize="resizeListen"
    v-unBindResize="resizeListen"
    :resizeTime="resizeTime"
    :style="{ height: size.height, width: size.width }"
  >
    <div class="chart-loading" v-show="showLoading"></div>
    <div class="chart-slot" v-show="noData">
      <slot></slot>
    </div>
    <div
      class="chart-area"
      :style="{ minHeight: size.height, width: size.width }"
      ref="chart"
      v-show="!showLoading"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'yeLine',
  props: {
    option: {
      type: Object,
      default: () => {}
    },
    loading: {
      type: Boolean,
      default: false
    },
    receiveData: {
      type: Array,
      default: () => []
    },
    settings: {
      type: Object,
      default: () => {}
    },
    size: {
      type: Object,
      default: () => {
        return {
          width: '50vw',
          height: '50vh'
        }
      }
    }
  },
  data() {
    return {
      showLoading: this.loading,
      againOption: this.option,
      resizeTime: 500,
      chart: null,
      noData: false
    }
  },
  computed: {},
  watch: {
    option: {
      handler(newValue) {
        console.log('option', newValue)
        // this.showLoading = false;
        // this.$nextTick(function() {
        //   if (newValue.series.length === 0) {
        //     this.noData = true;
        //     return alert("数据获取失败");
        //   }
        //   this.renderChart(newValue);
        // });
      }
    },
    receiveData: {
      handler(newValue) {
        console.log('ye receiveData', newValue)
        console.log('settings', this.settings)
        let xAxis = this.settings.xAxis
        xAxis.map(xItem => {
          xItem.data = []
        })
        let yAxis = this.settings.yAxis
        yAxis.map(yItem => {
          if (yItem.type == undefined) {
            yItem.type = 'value'
          }
        })
        let series = this.settings.series
        series.map(sItem => {
          sItem.data = []
        })
        newValue.map(dataItem => {
          for (let key in dataItem) {
            xAxis.map(xItem => {
              if (key === xItem.key) {
                xItem.data.push(dataItem[key])
              }
              if (xItem.type == undefined) {
                xItem.type = 'category'
                xItem.boundaryGap = false
              }
            })
            series.map(sItem => {
              if (key === sItem.key) {
                sItem.data.push(dataItem[key])
              }
              if (sItem.type == undefined) {
                sItem.type = 'line'
              }
            })
          }
        })
        console.log(
          'result xAxis yAxis series settings',
          xAxis,
          yAxis,
          series,
          this.settings
        )
        this.showLoading = false
        this.$nextTick(function() {
          this.renderChart(this.settings)
        })
      }
    }
  },
  methods: {
    renderChart(newValue) {
      this.againOption = newValue
      this.chart = this.$echarts.init(this.$refs.chart)
      this.chart.setOption(newValue)
    },
    // listen() {
    //   if (this.resizeTime) {
    //     clearTimeout(this.resizeTime);
    //   }
    //   this.resizeTime = setTimeout(() => {
    //     console.log("chart", this.chart);
    //     this.resizeTime = null;
    //     this.chart.resize();
    //   }, 500);
    // },
    resizeListen() {
      console.log('tryListen  chart', this)
      this.chart.resize()
    }
  },
  created() {
    console.log('yeline', this)
  },
  mounted() {
    // window.addEventListener("resize", this.listen);
  },
  beforeDestroy() {
    // window.removeEventListener("resize", this.listen); //不能用匿名函数不然取消不了
  }
}
</script>

<style lang="scss" scoped>
@keyframes loadingRotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.chart-content {
  // width: 50vw;
  // height: 30vh;// 控制图形高度
  position: relative;
  .chart-slot {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid rgba($themeColor, 1);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .chart-loading {
    width: 100%;
    height: 100%;
    text-align: center;
    position: absolute;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 0;
      top: 0;
      left: 0;
      background-color: rgba(#cccccc, 0.1);
    }
    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      top: 50%;
      left: 50%;
      background-color: transparent;
      border-radius: 20px;
      border: 5px solid rgba($themeColor, 0.1);
      border-top-color: $themeColor;
      animation: loadingRotate 1s 0s infinite;
      z-index: 1;
    }
  }
  .chart-area {
    // width: 100%;
    // min-height: 30vh; // 控制图形高度
  }
}
</style>
