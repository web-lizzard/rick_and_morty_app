

import CustomInput from './custom-input.vue';
import { ref } from 'vue'

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

export const WithError = Primary.bind({})
WithError.args = {
  errorMessage: 'Long error message to see how it looks'
}

export const WithVmodel = (args) => ({
  components: { CustomInput },
  setup() {
    const model = ref('')
    return {
      model,
      args
    }
  },
  template: `
  <div>
    <span> {{ model }}  </span>
    <custom-input v-model="model" v-bind="args" placeholder="placeholder" />
    </div>
  `,
});
