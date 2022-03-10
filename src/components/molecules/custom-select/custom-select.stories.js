import { ref } from 'vue'
import CustomSelect from './custom-select.vue';

export default {
  title: 'molecules/CustomSelect',
  component: CustomSelect,
};

export const Primary = (args) => ({
  components: { CustomSelect },
  setup() {
    const model = ref('')

    return {
      args,
      model
    }
  },
  template: '<custom-select v-model="model" v-bind="args" />',
});
Primary.args = {
  options: [{
    name: 'Rick',
    value: '1',
  },
  {
    name: 'Morty',
    value: '2'
  }

]
}