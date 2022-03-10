<script setup lang='ts'></script>

<template> 
  <nav class="custom-navigation">
    <div class="custom-navigation__image-wrapper">
      <img src="../../../assets/images/rick_morty_PNG7 2.png"
           alt="logo">
    </div>
    <ul class="custom-navigation__menu">
      <li class="custom-navigation__menu-item">
        New Message
      </li>
      <li class="custom-navigation__menu-item">
        History
      </li>
    </ul>
  </nav>
</template>

<style lang='scss'>
.custom-navigation {
    background: var(--light-grey);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;

    @media(min-width: 64rem) {
        padding: 1rem 13.5rem;
    }

    .custom-navigation__image-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .custom-navigation__menu {
        list-style: none;
        display: flex;
        gap: 1.5rem;
        font-size: var(--fs-400);
        

    }

}

</style>