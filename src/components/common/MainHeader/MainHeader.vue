<template>
  <header class="header">
    <base-container class="container">
      <base-logo></base-logo>

      <div class="header__menu">
        <main-header-menu></main-header-menu>
        <main-header-hamburger></main-header-hamburger>
      </div>
    </base-container>
  </header>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import BaseLogo from '@/components/UI/BaseLogo.vue';

import MainHeaderMenu from './MainHeaderMenu.vue';
import MainHeaderHamburger from './MainHeaderHamburger.vue';

export default {
  name: 'MainHeader',
  components: {
    BaseContainer,
    BaseLogo,
    MainHeaderMenu,
    MainHeaderHamburger,
  },
};
</script>

<style lang="scss">
@import '@/styles/common/all';

.header {
  background-color: $white-100;
  .container {
    @include center-y-between;
    padding: 1rem 0;
  }
}
</style>
