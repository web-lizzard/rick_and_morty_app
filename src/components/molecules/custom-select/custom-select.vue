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
  const selectedOption = props.options.find(({ value }) => props.modelValue === value)
  return selectedOption?.name ?? props.defaultButtonLabel
})


const handleClickOnOption = (value: string) => {
  emit('update:modelValue', value)
  closeElement()
}


</script>


<template> 
  <custom-label :label="label"
                :error-message="errorMessage"
                @click.prevent="openElement">
    <custom-dropdown class="custom-select"
                     :is-open="isOpen"
                     :button-label="selectedOption"
                     @close-dropdown="closeElement"
                     @open-dropdown="openElement">
      <ul class="custom-select__list">
        <li v-for="option in options"
            :key="option.value"
            class="custom-select__list-item"
            :value="option.value"
            @click.prevent.stop="handleClickOnOption(option.value)">
          {{ option.name }}
        </li>
      </ul>
    </custom-dropdown>
  </custom-label>
</template>

<style lang='scss'>
.custom-select {
  position: relative;
  &__list {
            border: 1px solid var(--grey);  
            border-radius: 0 0 8px 8px;
            border-top: none; 
            z-index: 10;
            position: absolute;
            width: 100%;
            max-height: 10rem;
            position: absolute;
            background-color: white;
            overflow: auto;
  }

  &__list-item {
    padding: 0.875rem 0.625rem;
    color: var(--dark-blue);

    &:hover {
      background: var(--light-grey);
      cursor: pointer;
    }
  }
  
}

</style>