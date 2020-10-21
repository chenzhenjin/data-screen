<template>
  <div class>
    <input type="text" v-model="inputText" />
    <div>{{outText}}</div>
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
    inputText: function(newVal, oldVal){
      if(newVal.trim().length > 0 && newVal !== oldVal){
        this.printVal(newVal)
      }
    }
  },
  created() {
    console.log('input')
  },
  mounted() {},
  methods: {
    printVal(val){
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
