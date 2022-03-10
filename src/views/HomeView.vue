<script setup lang="ts">
import CustomDropdown from '@/components/molecules/custom-dropdown/custom-dropdown.vue';
import { useOpenElement } from '@/composables/use-open-element';
import CustomSelect from '@/components/molecules/custom-select/custom-select.vue';
import { ref } from 'vue';
const options = [{ name: 'Rick', value: '1' }, { name: 'Morty', value: '2' }]
const value = ref('')


</script>

<template>
  {{ value }}
  <CustomSelect v-model="value"
                :options="options" />
</template>


<style lang="scss" scoped>

h1 {
  font-size: var(--fs-500);
}

</style>