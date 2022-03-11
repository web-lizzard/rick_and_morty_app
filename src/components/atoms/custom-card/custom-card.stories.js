

import CustomCard from './custom-card.vue';

export default {
  title: 'atoms/CustomCard',
  component: CustomCard,
};

 export const Primary = (args) => ({
  components: { CustomCard },
  setup() {
      return {
          args
      }
  },
  template: '<custom-card v-bind="args"> Placeholder </custom-card>',
});
