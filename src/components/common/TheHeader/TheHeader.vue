<template>
  <header class="header">
    <a href="/" class="header__logo">
      <img :src="headerLogo" alt="Ternhost" />
      <h1>Ternhost</h1>
    </a>
    <div class="header__menu">
      <ul class="header__menu-group">
        <li class="header__menu-group__item" v-for="menuItem in menu" :key="menuItem.id">
          <a href="#">{{ menuItem.name }}</a>
        </li>
      </ul>

      <TheButton class="btn btn-primary">Login</TheButton>
    </div>
    <div class="header__menu-mobile">
      <img :src="headerBars" alt="bars" />
    </div>
  </header>
</template>

<script>
import headerLogo from '@/assets/images/header-logo.svg';
import headerBars from '@/assets/images/header-bars.svg';

import TheButton from '@/components/UI/TheButton.vue';

export default {
  name: 'TheHeader',
  components: {
    TheButton,
  },
  data() {
    return {
      headerLogo,
      headerBars,
      menu: [
        { id: 1, name: 'Domain', url: undefined },
        { id: 2, name: 'Hosting', url: undefined },
        { id: 3, name: 'Website Builder', url: undefined },
        { id: 4, name: 'Help', url: undefined },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.header {
  @include center-y;
  justify-content: space-between;
  padding: 0.938rem 0;
  position: relative;
  z-index: 10;
  &__logo {
    @include center-y;
    text-decoration: none;
    h1 {
      @include text-4xl(700, $blue-200);
      text-transform: uppercase;
      margin-left: 0.625rem;
      @media screen and (max-width: 500px) {
        font-size: 1.75rem;
      }
    }
  }
  &__menu {
    @include center-y;
    @media screen and (max-width: 1024px) {
      display: none;
    }
    &-group {
      display: flex;
      &__item {
        margin-left: 2.5rem;
        a {
          @include text-base(500, $blue-200);
        }
      }
    }
    .btn {
      margin-left: 2.5rem;
    }
  }
  &__menu-mobile {
    display: none;
    @media screen and (max-width: 1024px) {
      display: block;
    }
  }
}
</style>
