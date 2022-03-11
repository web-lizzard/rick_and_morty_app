<script setup lang="ts">
import MessageForm from '@/components/organisms/message-form/message-form.vue'
import CustomTitle from '@/components/atoms/custom-title/custom-title.vue';
import { TitleType } from '@/components/atoms/custom-title/custom-title.types'
import { useCharacterStore } from '@/stores/character';
import { computed } from 'vue';

const characterStore = useCharacterStore()
const characters = computed(()=> characterStore.getSelectList)

characterStore.getCharacters()


</script>

<template>
  <custom-title :type="TitleType.MainHeading"
                text="Send a new message" />
  <message-form :characters="characters"
                @add-message="characterStore.addMessage" />
</template>

