import Vue from 'vue'
import Start from './Start.vue'

Vue.config.productionTip = false

it('does not crash', () => {
  const Ctor = Vue.extend(Start)
  const vm = new Ctor().$mount()
  expect(vm.$el.textContent).toMatch(/Welcome to Vue\.js/)
})
