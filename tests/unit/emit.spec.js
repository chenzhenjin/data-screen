/*
 * @Author: chenzhenjin
 * @email: BrotherStudy@163.com
 * @Date: 2020-09-18 15:57:27
 * @LastEditTime: 2020-10-09 18:49:36
 * @Descripttion: 模块描述
 */
import { enableAutoDestroy, shallowMount } from '@vue/test-utils'
import single from '@/components/single.vue'
import number from '@/components/number.vue'
enableAutoDestroy(afterEach)
const factoryWrapper = (component, value = { data: {}, props: {} }) => {
  // console.log('props', value.props)
  return shallowMount(component, {
    data() {
      return { ...value.data }
    },
    propsData: {
      ...value.props
    }
  })
}
describe('自定义事件', () => {
  it('子组件触发1', () => {
    const wrapper = factoryWrapper(single, {
      props: { nums: [1, 2, 3, 4, 5, 6] }
    })
    const mockFn = jest.fn()
    wrapper.vm.$on('currentLi', mockFn)
    wrapper
      .findAll('li')
      .at(0)
      .trigger('click')
    expect(mockFn).toBeCalled()
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
  it('子组件触发2', () => {
    const wrapper = factoryWrapper(single, {
      props: { nums: [1, 2, 3, 4, 5, 6] }
    })
    const mockFn = jest.fn().mockReturnValue('mockfn')
    wrapper.vm.$on('currentLi', mockFn)
    // find只返回第一个
    wrapper
      .findAll('li')
      .at(0)
      .trigger('click')
    // 判断回调函数是否被调用
    expect(mockFn).toBeCalled()
    // 判断被调用时的参数
    expect(mockFn).toHaveBeenCalledWith(1)
    //可以返回默认值
    expect(mockFn()).toEqual('mockfn')
    wrapper
      .findAll('li')
      .at(1)
      .trigger('click')
    // 回调函数被调用几次
    expect(mockFn).toHaveBeenCalledTimes(3)
    //判断被调用时的参数
    expect(mockFn).toHaveBeenCalledWith(2)
  })
  it('父组件接收', () => {
    const wrapper = factoryWrapper(number, {
      data: { nums: [7, 8, 9] },
      props: { message: 'number message' }
    })
    const mockFn = jest.fn()
    wrapper.setMethods({ selectLi: mockFn })
    wrapper.findComponent(single).vm.$emit('currentLi', 110)
    expect(mockFn).toBeCalled()
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith(110)
  })
})
