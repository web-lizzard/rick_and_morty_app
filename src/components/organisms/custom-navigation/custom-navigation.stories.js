

import CustomNavigation from './custom-navigation.vue';

export default {

  title: 'organisms/CustomNavigation',
  component: CustomNavigation,
};

 export const Primary = (args) => ({
  components: { CustomNavigation },
  setup() {
      return {
          args
      }
  },
  template: '<custom-navigation v-bind="args"></custom-navigation>',
});
