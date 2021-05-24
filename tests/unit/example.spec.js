import { mount } from '@vue/test-utils'
import Modal from '@/components/Modal.vue'



it('testing', () => {
  
  const modal = mount(Modal)
  const btn = modal.find('btn')

  expect(btn.value).toBe('Share to my friends')

})