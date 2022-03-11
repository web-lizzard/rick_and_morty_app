

import CustomLabel from './custom-label.vue';

export default {

  title: 'atoms/CustomLabel',
  component: CustomLabel,
};

 const Template = (args) => ({
  components: { CustomLabel },
  setup() {
      return {
          args
      }
  },
  template: '<custom-label v-bind="args"></custom-label>',
});

export const Primary = Template.bind({});
Primary.args = {
    labelText : 'Placeholder'
};


export const WithError = Template.bind({});
WithError.args = {
    labelText : 'Placeholder',
    errorMessage: 'Very long error mesage to see how it works'
};