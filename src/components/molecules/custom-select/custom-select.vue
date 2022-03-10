<script setup lang='ts'>
import { computed } from 'vue';
import { useOpenElement } from '../../../composables/use-open-element';
import CustomLabel from '../../atoms/custom-label/custom-label.vue';
import CustomDropdown from '../custom-dropdown/custom-dropdown.vue';
import type { Options } from './custom-select.types'

type Props = {
  modelValue?: string;
  defaultButtonLabel?: string;
  errorMessage?: string;
  options?: Options[]
  label?: string;

}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  defaultButtonLabel: 'Placeholder',
  options: () => [],
  label: 'Placeholder',
  errorMessage: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const { isOpen, openElement, closeElement } = useOpenElement()


const selectedOption = computed(() => {
  const selectedOption = props.options.find((option) => props.modelValue === option.value)
  return selectedOption?.name ?? props.defaultButtonLabel
})


</script>


<template> 
  <custom-label :label="label"
                :error-message="errorMessage"
                @focus="openElement">
    <custom-dropdown class="custom-dropdown"
                     :is-open="isOpen"
                     :button-label="selectedOption"
                     @close-dropdown="closeElement"
                     @open-dropdown="openElement">
      <ul class="custom-dropdown__list">
        <li v-for="option in options"
            :key="option.value"
            class="custom-dropdown__list-item"
            :value="option.value"
            @click="emit('update:modelValue', option.value)">
          {{ option.name }}
        </li>
      </ul>
    </custom-dropdown>
  </custom-label>
</template>

<style lang='scss'>
.custom-dropdown {
  &__list {
    list-style: none;
  }

  &__list-item {
    padding: 0.5rem;

    &:hover {
      background: var(--light-grey);
      cursor: pointer;
    }
  }
  
}

</style>