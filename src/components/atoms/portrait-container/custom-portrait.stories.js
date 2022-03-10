
import CustomPortrait from './custom-portrait.vue';

export default {
  title: 'atoms/CustomPortrait',
  component: CustomPortrait,
};

 export const Primary = (args) => ({
  components: { CustomPortrait },
  setup() {
      return {
          args
      }
  },
  template: '<custom-portrait v-bind="args"></custom-portrait>',
});
