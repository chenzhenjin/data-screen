<!--
 * @Author: chenzhenjin
 * @email: BrotherStudy@163.com
 * @Date: 2020-09-18 17:08:00
 * @LastEditTime: 2020-10-22 16:44:36
 * @Descripttion: 模块描述
-->
<template>
  <div class="input-text">
    <input type="text" v-model="inputText" />
    <div class="out-text">{{ outText }}</div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    needReverse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputText: ''
    }
  },
  computed: {
    outText() {
      return this.needReverse
        ? [...this.inputText].reverse().join('')
        : this.inputText
    }
  },
  watch: {
    inputText: function(newVal, oldVal) {
      if (newVal.trim().length > 0 && newVal !== oldVal) {
        this.printVal(newVal)
      }
    }
  },
  created() {
    console.log('input')
  },
  mounted() {},
  methods: {
    printVal(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped></style>
