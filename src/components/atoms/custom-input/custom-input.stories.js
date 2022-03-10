

import CustomInput from './custom-input.vue';

export default {

  title: 'atoms/CustomInput',
  component: CustomInput,
};

export const Primary = (args) => ({
  components: { CustomInput },
  setup() {
    return {
      args
    }
  },
  template: '<custom-input v-bind="args" placeholder="placeholder" />',
});