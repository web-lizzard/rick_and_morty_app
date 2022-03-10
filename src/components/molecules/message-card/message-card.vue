<script setup lang='ts'>
import CustomCard from '../../atoms/custom-card/custom-card.vue';</script>

<template>
  <custom-card class="message-card">
    <h1>title</h1>
    <img src="./1 1.png"
         alt="Rick">
    <div>
      <p>Data</p>
      <p>Data</p>
    </div>
    <p class="message-card__content">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Veritatis illum natus provident debitis nihil numquam reiciendis ex recusandae aperiam, 
      possimus nostrum beatae libero facere inventore odit at quo? Omnis, ratione.
    </p>
  </custom-card>
</template>

<style lang='scss'>
.message-card {
    display: grid;
    grid-template-columns: 3rem 1fr;
    grid-template-areas: 
    'title title'
    'image date'
    'content content'
    ;
    gap: 1.5rem 1rem;
    align-items: center;

    h1 { 
        grid-area: title;
    }

    &__content { 
        grid-area: content;
    }
}
</style>