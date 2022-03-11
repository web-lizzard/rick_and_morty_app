<script setup lang='ts'></script>

<template>
  <button class="custom-button">
    <slot>Send</slot>
  </button>
</template>

<style lang='scss'>

.custom-button {
    padding: 0.3rem 2rem;
    background: var(--light-blue);
    color: white;
    border-radius: 36px;
    border: none;
    cursor: pointer;
    font:inherit;
}
</style>