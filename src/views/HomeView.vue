<script setup lang="ts">
import MessageForm from '@/components/organisms/message-form/message-form.vue'
import CustomTitle from '@/components/atoms/custom-title/custom-title.vue';
import { TitleType } from '@/components/atoms/custom-title/custom-title.types'


</script>

<template>
  <CustomTitle :type="TitleType.MainHeading"
               text="Send a new message" />
  <MessageForm />
</template>


<style lang="scss" scoped>
    h1 {
      max-width: 13ch;
    }
  
  @media (min-width: 64rem) {
  

    h1 {
      max-width: 100%;
      text-align: center
    }
  }


</style>