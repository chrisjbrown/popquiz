import { shallow } from 'vue-test-utils'
import Button from '../Button.vue'

describe('Button', () => {
  describe('Click Event', () => {
    it('calls onClick when click on message', () => {
      const wrapper = shallow(Button, {
        mocks: {
          $style: {}
        }
      });

      const spy = jest.fn();
      wrapper.vm.$on('onClick', spy)

      wrapper.trigger('click')

      expect(spy).toHaveBeenCalledTimes(1);
    })
  })
})
