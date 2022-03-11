
import MessageCard from './message-card.vue';

export default {
  title: 'molecules/MessageCard',
  component: MessageCard,
};

 export const Primary = (args) => ({
  components: { MessageCard },
  setup() {
      return {
          args
      }
  },
  template: '<message-card v-bind="args"></message-card>',
});
Primary.args = {
  message: {
    title: 'Example',
    date: new Date(),
    image: '',
    name: 'Rick Morty',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed vehicula eu sem ac posuere. 
    Aliquam tellus mi, vestibulum id ultricies vel, imperdiet tristique quam. 
    Praesent sed sapien eget nulla iaculis consequat. Mauris sed condimentum nisi, 
    et vulputate magna. Ut consectetur ultrices lectus, eu blandit neque rhoncus vitae. 
    Aenean ultricies fringilla urna, non sodales metus dictum sit amet. Etiam quis mauris sed purus semper varius.`

  }
}
