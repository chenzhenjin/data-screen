<!--
 * @Author: chenzhenjin
 * @email: BrotherStudy@163.com
 * @Date: 2020-09-17 17:27:52
 * @LastEditTime: 2020-10-22 13:46:42
 * @Descripttion: 模块描述
-->
<template>
  <div>
    <div class="single-ul">
      <div v-for="num of nums" :key="num" @click="currentLi(num)">
        {{ num }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    nums: {
      type: Array,
      required: true,
      validator: nums => nums.length > 1,
      default() {
        return [1, 2]
      }
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    currentLi(num) {
      console.log('currentLi')
      this.$emit('currentLi', num)
    }
  }
}
</script>

<style lang="scss" scoped>
.single-ul {
  list-style: none;
  width: 200px;
  margin: 0 auto;
  li {
    cursor: pointer;
    line-height: 200%;
  }
}
</style>
