<script setup lang="ts">
import CustomDropdown from '@/components/molecules/custom-dropdown/custom-dropdown.vue';
import { useOpenElement } from '@/composables/use-open-element';

const { isOpen, openElement, closeElement } = useOpenElement()

</script>

<template>
  <CustomDropdown :is-open="isOpen"
                  @open-dropdown="openElement"
                  @close-dropdown="closeElement" />
</template>


<style lang="scss" scoped>

h1 {
  font-size: var(--fs-500);
}

</style>