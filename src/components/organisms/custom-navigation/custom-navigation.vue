<script setup lang='ts'>
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const handleLogoClick = () => {
        router.push({ name: 'home' })
    }    

</script>

<template> 
  <nav class="custom-navigation">
    <div class="custom-navigation__image-wrapper"
         @click="handleLogoClick">
      <img src="../../../assets/images/rick_morty_PNG7 2.png"
           alt="logo">
    </div>
    <ul class="custom-navigation__menu">
      <li class="custom-navigation__menu-item">
        <router-link to="/">
          New Messages
        </router-link>
      </li>
      <li class="custom-navigation__menu-item">
        <router-link to="/history">
          History
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang='scss' scoped>
.custom-navigation {
    background: var(--light-grey);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
    position: fixed;
    top: 0;
    width: 100%;

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

    .custom-navigation__menu-item a {
        text-decoration: none;
        font: inherit;

    
        &:visited {
            color: var(--dark-blue);
        }
        &.router-link-active {
            color: var(--light-blue);
        }
      
    }

}

</style>