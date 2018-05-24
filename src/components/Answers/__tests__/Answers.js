import { shallow } from 'vue-test-utils'
import Answers from '../Answers.vue'

describe('Answers', () => {
  describe('Render', () => {
    it('render two answers', () => {
      const spy = jest.fn()
      const wrapper = shallow(Answers, {
        propsData: {
          sendAnswer: spy,
          answers: ['1', '2']
        },
        mocks: {
          $style: {}
        }
      });

      const listitems = wrapper.findAll('li')
      expect(listitems.length).toEqual(2)
    })
    it('render four answers', () => {
      const spy = jest.fn()
      const wrapper = shallow(Answers, {
        propsData: {
          sendAnswer: spy,
          answers: ['1', '2', '3', '4']
        },
        mocks: {
          $style: {}
        }
      });

      const listitems = wrapper.findAll('li')
      expect(listitems.length).toEqual(4)
    })
  })
  describe('Events', () => {
    it('call sendAnswer on click of first answer', () => {
      const spy = jest.fn()
      const wrapper = shallow(Answers, {
        propsData: {
          sendAnswer: spy,
          answers: ['1', '2']
        },
        mocks: {
          $style: {}
        }
      });

      wrapper.findAll('li').at(0).trigger('click')
      expect(spy).toHaveBeenCalledWith('1')
    })
    it('call sendAnswer on click of second answer', () => {
      const spy = jest.fn()
      const wrapper = shallow(Answers, {
        propsData: {
          sendAnswer: spy,
          answers: ['1', '2']
        },
        mocks: {
          $style: {}
        }
      });

      wrapper.findAll('li').at(1).trigger('click')
      expect(spy).toHaveBeenCalledWith('2')
    })
  })
})
