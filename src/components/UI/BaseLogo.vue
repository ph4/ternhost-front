<template>
  <router-link to="/" class="header__logo">
    <img :src="assets.headerLogo" alt="Logo" />
    <h1>Ternhost</h1>
  </router-link>
</template>

<script>
import headerLogo from '@/assets/images/header/header-logo.svg';

export default {
  name: 'BaseLogo',
  data() {
    return {
      assets: {
        headerLogo,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.header__logo {
  @include center-y;
  h1 {
    @include fluid-type($text-4xl, $text-4xl, 700, $blue-200);
    text-transform: uppercase;
    margin-left: 0.5rem;
  }
}
</style>
