import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import Start from '../Start.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Start', () => {
  let wrapper
  const spy = jest.fn()

  beforeEach(() => {
    wrapper = mount(Start, {
      mocks: {
        $store: {
          state: {
            user: {
              name: '',
              difficulty: ''
            }
          }
        },
        $router: {
          push: spy
        },
        $style: {}
      },
      localVue
    })
  })
  it('does not crash', () => {
    expect(wrapper.vm.$el.textContent).toBeTruthy()
  })
  it('can progress to question', () => {
    wrapper.setData({ name: 'blue' })
    wrapper.setData({ difficulty: 'wimpy' })

    const start = wrapper.find('button')
    start.trigger('click')

    expect(spy).toBeCalledWith({ path: 'question' })

  })
  it('show error if name not entered', () => {
    wrapper.setData({ difficulty: 'wimpy' })

    const start = wrapper.find('button')
    start.trigger('click')

    expect(wrapper.vm.nameError).toEqual('Please fill in a name!')

  })
  it('show error if difficulty not entered', () => {
    wrapper.setData({ name: 'blue' })

    const start = wrapper.find('button')
    start.trigger('click')

    expect(wrapper.vm.difficultyError).toEqual('Please select a difficulty!')

  })
});
