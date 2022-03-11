<script setup lang='ts'>
import { useCharacterStore } from '@/stores/character';
import { computed } from 'vue';
import MessageCard from '@/components/molecules/message-card/message-card.vue';
import CustomTitle from '@/components/atoms/custom-title/custom-title.vue';
import { TitleType } from '@/components/atoms/custom-title/custom-title.types';


const characterStore = useCharacterStore()

const messages = computed(() => characterStore.messages)


</script>

<template> 
  <div class="history-page">
    <CustomTitle :type="TitleType.MainHeading"
                 text="Message history" />
    <MessageCard v-for="message in messages"
                 :key="message.id"
                 :message="message" />
  </div>
</template>

<style lang='scss'>
    .history-page {
        display: flex;
        flex-direction: column;
        gap: 2.2rem;
        margin-bottom: 2rem;
    }

</style>