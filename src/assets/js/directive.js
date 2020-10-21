/*
 * @Author: chenzhenjin
 * @email: BrotherStudy@163.com
 * @Date: 2020-06-12 17:11:33
 * @LastEditTime: 2020-09-16 17:36:33
 * @Descripttion: 模块描述
 */
var globalBinding = {} //解决匿名函数不能取消dom事件
var globalNode = {} //解决匿名函数不能取消dom事件
const debounce = function() {
  // return function(){
  if (globalBinding.value.resizeTime) {
    clearTimeout(globalBinding.value.resizeTime)
  }
  globalBinding.value.resizeTime = setTimeout(() => {
    globalBinding.value.resizeTime = null
    globalBinding.value()
  }, globalNode.data.attrs.resizeTime)
  // }
}
const install = function(Vue) {
  Vue.directive('bindResize', {
    bind: function(el, binding, vnode) {
      //元素节点 绑定的参数 bind.value
      globalBinding = binding
      globalNode = vnode
      window.addEventListener('resize', debounce)
      // window.addEventListener("resize", binding.value);
      console.log('bindResize', el, binding, vnode) //vnode.content可以拿到chart
    }
  })
  Vue.directive('unBindResize', {
    unbind: function(el, binding, vnode) {
      //元素节点 绑定的参数 bind.value
      window.removeEventListener('resize', debounce)
      // window.removeEventListener("resize", binding.value);
      console.log('unBindResize', el, binding, vnode)
    }
  })
}
export default {
  install
}
