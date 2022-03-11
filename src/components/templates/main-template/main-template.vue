<script setup lang="ts">
import CustomNavigation from '@/components/organisms/custom-navigation/custom-navigation.vue';
import { useCharacterStore } from '@/stores/character';

const characterStore = useCharacterStore()

characterStore.$subscribe((mutation, state) => {
          localStorage.setItem('messages', JSON.stringify(state.messages));
})

characterStore.getMessages()


</script>

<template>
  <CustomNavigation />
  <main class="main-template">  
    <router-view />
  </main>
</template>

<style lang="scss" scoped="true">
    .main-template {
      width: min(100% - 4rem, 30rem);
      margin-inline: auto;
      padding-top: 4rem;


      @media (min-width: 64rem) {
                padding-top: 4.75rem;  
           
      }
    }

</style>