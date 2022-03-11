<script setup lang="ts">
import CustomNavigation from '@/components/organisms/custom-navigation/custom-navigation.vue';
import { useCharacterStore } from '@/stores/character';

const characterStore = useCharacterStore()

characterStore.$subscribe((_, state) => {
          localStorage.setItem('messages', JSON.stringify(state.messages));
})

characterStore.getMessages()


</script>

<template>
  <custom-navigation />
  <main class="main-template"> 
    <router-view />
  </main>
</template>

<style lang="scss" scoped>
    .main-template {
      width: 100%;
      margin-inline: auto;
      padding: 4rem 1rem;


      @media (min-width: 64rem) {  
                width: 40rem;
           
      }
    }

</style>