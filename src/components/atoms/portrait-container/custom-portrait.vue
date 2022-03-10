<script setup lang='ts'>import { computed } from 'vue';

const props = withDefaults(defineProps<{
    imageSrc?: string,
    name?: string,
}>(), {
   name: 'Unknown',
   imageSrc: ''
})

const portraitContent = computed(() => props.imageSrc 
? props.imageSrc 
: props.name.charAt(0))

</script>

<template>
  <div class="portrait-content">
    <img v-if="imageSrc"
         :src="portraitContent"
         :alt="name">
    <span v-else>{{ portraitContent }}</span>
  </div>
</template>

<style lang='scss'>
.portrait-content {
    width: 3rem;
    aspect-ratio: 1;
    font-size: var(--fs-400);
    font-weight: bold;
    background: var(--light-blue);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}


</style>