import MessageForm from './message-form.vue';

export default {

  title: 'organisms/MessageForm',
  component: MessageForm,
};

 export const Primary = (args) => ({
  components: { MessageForm },
  setup() {
      return {
          args
      }
  },
  template: '<message-form v-bind="args"></message-form>',
});
