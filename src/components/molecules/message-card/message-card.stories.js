
import MessageCard from './message-card.vue';

export default {
  title: 'molecules/CustomCard',
  component: MessageCard,
};

 export const Primary = (args) => ({
  components: { MessageCard },
  setup() {
      return {
          args
      }
  },
  template: '<message-card v-bind="args"> Placeholder </message-card>',
});
