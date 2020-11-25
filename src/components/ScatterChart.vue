<template>
  <div class>
    <ve-scatter :data="chartData" :settings="chartSettings"></ve-scatter>
  </div>
</template>

<script>
export default {
  name: 'ScatterChart',
  props: {
    receiveData: Object,
    scatterSettings: Object
  },
  data() {
    this.chartSettings = this.scatterSettings
    let columns = []
    for (let key in this.receiveData) {
      columns = Object.keys(this.receiveData[key][0])
      break
    }
    return {
      chartData: {
        columns: columns,
        rows: this.receiveData
      }
    }
  },
  created() {
    // let columns = []
    // for(let key in this.receiveData){
    //   columns = Object.keys(this.receiveData[key][0])
    //   break
    // }
    // console.log(columns)
  }
}
</script>

<style lang="scss" scoped></style>
