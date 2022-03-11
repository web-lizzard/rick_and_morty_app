<script setup lang='ts'>
import { format } from 'date-fns';
import type { Message } from './message-cars.types'
import CustomCard from '../../atoms/custom-card/custom-card.vue';
import { TitleType } from '../../atoms/custom-title/custom-title.types'
import CustomTitle from '../../atoms/custom-title/custom-title.vue';
import CustomPortrait from '../../atoms/portrait-container/custom-portrait.vue';
import { computed } from 'vue';

const props = defineProps<{message: Message}>()

const formattedDate = computed(() => format(props.message.date, 'dd.MM.yyyy'))


</script>

<template>
  <custom-card class="message-card">
    <custom-title :type="TitleType.SubHeading"
                  :text="message.title" />
    <custom-portrait :image-src="message.image"
                     :name="message.name" />
    <div>
      <p>Sent to: {{ message.name }} </p>
      <p>Date: {{ formattedDate }}</p>
    </div>
    <p class="message-card__content">
      {{ message.content }}
    </p>
  </custom-card>
</template>

<style lang='scss'>
.message-card {
    display: grid;
    grid-template-columns: 3rem 1fr;
    grid-template-areas: 
    'title title'
    'image date'
    'content content'
    ;
    gap: 1.5rem 1rem;
    align-items: center;

    h2 { 
        grid-area: title;
    }

    &__content { 
        word-wrap: break-word;
        grid-area: content;
    }
}
</style>