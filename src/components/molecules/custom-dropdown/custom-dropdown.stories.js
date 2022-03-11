import CustomDropdown from './custom-dropdown.vue';
import { useOpenElement } from '../../../composables/use-open-element'

export default {
  title: 'molecules/CustomDropdown',
  component: CustomDropdown,
};

export const Primary = (args) => ({
  components: { CustomDropdown },
  setup() {
    const { isOpen, openElement, closeElement } = useOpenElement()

    return {
      args,
      isOpen,
      openElement,
      closeElement,
    }
  },
  template: '<custom-dropdown :is-open="isOpen" @close-dropdown="closeElement" @open-dropdown="openElement"> Example content </custom-dropdown>',
});