<!--
 * @Author: chenzhenjin
 * @email: BrotherStudy@163.com
 * @Date: 2020-09-17 17:26:25
 * @LastEditTime: 2020-10-09 18:40:36
 * @Descripttion: 模块描述
-->
<template>
  <div class="number one">
    <div class="two" style="color:blue;">{{text}}</div>
    <div>{{message}}</div>
    <single :nums="nums"  @currentLi="selectLi"></single>
    <div v-if="li">选择了第{{li}}个</div>
  </div>
</template>

<script>
import single from '@/components/single'
export default {
  name: 'number',
  components: { single },
  props: {
    message: String,
  },
  data() {
    return {
      text: 'world',
      nums: [1, 2, 3, 4, 5, 6],
      li: 0
    }
  },
  computed: {},
  watch: {},
  created() {
    // console.log(this)
  },
  mounted() {},
  methods: {
    selectLi(value){
      console.log('selectLi', value)
      this.li = value
    }
  }
}
</script>

<style lang="scss" scoped>
  .number{
    font-size: 16px;
    color: red;
  }
</style>
