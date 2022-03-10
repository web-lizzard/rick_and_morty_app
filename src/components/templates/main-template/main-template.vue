<script setup lang="ts">
import CustomNavigation from '@/components/organisms/custom-navigation/custom-navigation.vue';
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