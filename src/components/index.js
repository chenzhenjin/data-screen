import LineChart from "./LineChart.vue"
import ScatterChart from "./ScatterChart.vue"
import yeLine from "./yeLine.vue"
const install  = function(Vue){
  Vue.component(LineChart.name,LineChart)
  Vue.component(ScatterChart.name,ScatterChart)
  Vue.component(yeLine.name,yeLine)
}
export default {
  install,
  LineChart
}