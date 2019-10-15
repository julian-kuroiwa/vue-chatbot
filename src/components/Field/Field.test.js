import { mount } from '@vue/test-utils'
import Field from './Field'

describe('Field', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Field)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
