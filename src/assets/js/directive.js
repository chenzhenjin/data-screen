/*
 * @Author: chenzhenjin
 * @email: BrotherStudy@163.com
 * @Date: 2020-06-12 17:11:33
 * @LastEditTime: 2020-10-21 14:51:52
 * @Descripttion: 模块描述
 */
const debounce = function(fn, awaitTime = 500) {
  return function() {
    if (fn.timer) {
      clearTimeout(fn.timer)
    }
    fn.timer = setTimeout(() => {
      console.log('debounce')
      fn.timer = null
      fn()
    }, awaitTime)
  }
}
let bindDebounce = function() {}
const install = function(Vue) {
  Vue.directive('bindResize', {
    bind: function(el, binding, vnode) {
      //元素节点 绑定的参数 bind.value
      bindDebounce = debounce(binding.value, vnode.data.attrs.resizeTime)
      window.addEventListener('resize', bindDebounce)
      // window.addEventListener("resize", binding.value);
      console.log('bindResize', el, binding, vnode) //vnode.content可以拿到chart
    }
  })
  Vue.directive('unBindResize', {
    unbind: function(el, binding, vnode) {
      //元素节点 绑定的参数 bind.value
      window.removeEventListener('resize', bindDebounce)
      // window.removeEventListener("resize", binding.value);
      console.log('unBindResize', el, binding, vnode)
    }
  })
}
export default {
  install
}
