

import CustomButton from './custom-button.vue';

export default {

  title: 'atoms/CustomButton',
  component: CustomButton,
};

 export const Primary = (args) => ({
  components: { CustomButton },
  setup() {
      return {
          args
      }
  },
  template: '<custom-button v-bind="args"></custom-button>',
});
