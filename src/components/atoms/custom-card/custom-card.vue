<script setup lang='ts'></script>

<template>
  <div class="custom-card">
    <slot />
  </div>
</template>

<style lang='scss' scoped>
.custom-card {
    box-shadow: -1px 0px 18px -8px rgba(66, 68, 90, 1);
    padding: 0.825rem;
    border-radius: 12px;
}

</style>