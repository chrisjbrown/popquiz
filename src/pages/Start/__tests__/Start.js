import Vuex from 'vuex'
import { shallow, createLocalVue } from 'vue-test-utils'
import Start from '../Start.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

it('does not crash', () => {
  const wrapper = shallow(Start, {
    mocks: {
      $store: {
        state: {
          user: {
            name: 'blue',
            difficulty: 'wimpy'
          }
        }
      },
      $data: {
        name: 'blue',
        difficulty: 'wimpy'
      },
      $style: {}
    },
    localVue
  })
  expect(wrapper.vm.$el.textContent).toBeTruthy()
})
