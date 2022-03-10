import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CustomSelect from './custom-select.vue'

describe('CustomSelect', () =>{
    it('should open dropdown menu after click', async () => {
           const wrapper = mount(CustomSelect) 
           await wrapper.find('button').trigger('click')
           const menu = wrapper.find('ul')
            expect(menu.exists()).toBe(true)
           
    })

    it('should emit update model value when click in one option', async () => {
        const wrapper = mount(CustomSelect, {
            props: {
                options: [{ value: '1', name: 'Rick' }, { value: '2', name: 'Morty' }]
            }
        })

        await wrapper.find('button').trigger('click');
        await wrapper.find('li').trigger('click');
        expect(wrapper.emitted()['update:modelValue'])

        
    })
})