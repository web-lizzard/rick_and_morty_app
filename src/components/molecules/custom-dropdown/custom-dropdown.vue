<script setup lang='ts'>
import { Ref, ref } from 'vue';
import IconArrow from '../../atoms/icons/icon-arrow.vue';
const props = withDefaults(defineProps<{
    isOpen?: boolean,
    buttonLabel?: string,
}>(), {
    isOpen: false,
    buttonLabel: 'Pick a character'
})

const emit = defineEmits<{
    (e: 'open-dropdown'): void
    (e: 'close-dropdown'): void
}>()

const container: Ref<HTMLElement | null> = ref(null)

const toggleDropdownOpen = () => {
    props.isOpen 
    ? emit('close-dropdown') 
    : emit('open-dropdown')
}

const handleBlur = (e: FocusEvent) => {
    const isInside = e.relatedTarget && container.value?.contains(e.relatedTarget as HTMLElement)
    !isInside && emit('close-dropdown');
    
}

const handleDropdownOpen = () => {
    toggleDropdownOpen()
    !props.isOpen && container.value?.focus()
}


</script>

<template> 
  <div ref="container"
       tabindex="-1"
       class="custom-dropdown"
       @blur="handleBlur"
       @keydown.esc="emit('close-dropdown')">
    <button :class="['custom-dropdown__button', isOpen && 'custom-dropdown__button--open']"
            type="button"
            @click="handleDropdownOpen">
      {{ buttonLabel }}
      <icon-arrow :class="['custom-dropdown__arrow', isOpen && 'custom-dropdown__arrow--open']" />
    </button>
    <transition name="fade-list">
      <div v-if="isOpen"
           class="custom-dropdown__content">
        <slot />
      </div>
    </transition>
  </div>
</template>

<style lang='scss' scoped>
    .custom-dropdown {
        position: relative;
        display: flex;
        flex-direction: column;
        font-size: var(--fs-300);

        &:focus {
            outline: none;
        }
     
        &__button {
            border: 1px solid var(--grey);
            border-radius: 8px;
            background: transparent;
            position: relative;
            padding: 0.5rem;
            color: var(--dark-blue);
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;

            &--open {
                border-radius: 8px 8px 0 0;
            }
    
        }

        &__arrow {
            width: 0.7rem;
            transition: transform .2s ease-in-out;

            &--open {
                transform: rotate(180deg);
            }
        }

        &__content {
            transform-origin: top;
            border: 1px solid var(--grey);  
            border-radius: 0 0 8px 8px;
            border-top: none; 
          }
    }

</style>