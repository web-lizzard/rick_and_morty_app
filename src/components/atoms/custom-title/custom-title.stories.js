
import CustomTitle from './custom-title.vue';

export default {
  title: 'atoms/CustomTitle',
  component: CustomTitle,
};

 export const Primary = (args) => ({
  components: { CustomTitle },
  setup() {
      return {
          args
      }
  },
  template: '<custom-title v-bind="args"> Placeholder </custom-title>',
});
