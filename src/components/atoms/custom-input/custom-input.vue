<script setup lang='ts'>
import { InputType } from './custom-input.types'
import CustomLabel from '../custom-label/custom-label.vue'

 withDefaults(defineProps<{
  element?: InputType,
  errorMessage: string
  label?: string
}>(), {
  element: InputType.TEXTAREA,
  label: 'Placeholder'
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const handleInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value);
}

</script>

<template>
  <custom-label :label="label"
                :error-message="errorMessage">
    <component :is="element"
               :class="['custom-input', errorMessage && 'custom-input--error']"
               v-bind="$attrs"
               @input="handleInput" />
  </custom-label>
</template>

<style lang='scss' scoped>
.custom-input {
        border-radius: 6px;
        border: 1px solid var(--grey); 
        padding: 0.4rem 0.7rem;
        font-size: inherit;
        color: inherit;

        &--error {
          border: 1px solid var(--red);

          &:focus {
          outline: 1px solid var(--red);   
          }
        }

        &:focus {
          outline: 1px solid var(--dark-blue);
        }

}

    textarea {
          resize: none;
          min-height: 10rem;
        }
</style>