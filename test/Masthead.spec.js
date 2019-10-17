import { mount } from '@vue/test-utils'
import Masthead from '@/components/Masthead.vue'

describe('Masthead', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Masthead)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
