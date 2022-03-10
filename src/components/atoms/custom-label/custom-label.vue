<script setup lang='ts'>
withDefaults(defineProps<{
    label?: string
    errorMessage?: string
}>(), {
    label: 'Placeholder',
    errorMessage: ''
})



</script>

<template> 
  <label :class="['custom-label', errorMessage && 'custom-label--error']">
    <span>{{ label }}</span>
    <slot>
      <input>
    </slot>
    <span v-if="errorMessage"
          class="custom-label__error-message">{{ errorMessage }}</span>
  </label>
</template>

<style lang='scss'>
.custom-label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: var(--fs-300);
    position: relative;

    &--error {
        color: var(--red);
    }
    
    &__error-message {
        color: var(--red);
        position: absolute;
        bottom: 0;
        transform: translateY(150%);
    }
}

</style>