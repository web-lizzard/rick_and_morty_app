<script setup lang='ts'>
import { InputType } from './custom-input.types'

 withDefaults(defineProps<{
  element?: InputType,
  errorMessage: string
}>(), {
  element: InputType.TEXTAREA
})

</script>

<template>
  <component :is="element"
             :class="['custom-input', errorMessage && 'custom-input--error']"
             v-bind="$attrs" />
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