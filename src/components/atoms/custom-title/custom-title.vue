<script setup lang='ts'>
    import { TitleType } from './custom-title.types'
    withDefaults(defineProps<{
        type?: TitleType
        text?: string
    }>(), {
        type: TitleType.SubHeading,
        text: 'Placeholder'
    })


</script>

<template>  
  <component :is="type"
             class="custom-title">
    {{ text }}
  </component>
</template>

<style lang='scss' scoped>
    .custom-title {
        font-weight: bold;
        letter-spacing: .5px;
    }

    h1 {
        font-size: var(--fs-500);
        max-width: 12ch;
    
     @media (min-width: 64rem) {
         text-align: center;
         max-width: 100%;
     }
    }

    h2 { 
        font-size: var(--fs-300);
    }

</style>