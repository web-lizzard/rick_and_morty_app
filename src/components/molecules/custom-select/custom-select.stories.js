import CustomSelect from './custom-select.vue';

export default {
  title: 'molecules/CustomSelect',
  component: CustomSelect,
};

export const Primary = (args) => ({
  components: { CustomSelect },
  setup() {
    return {
      args,
   
    }
  },
  template: '<custom-select  />',
});