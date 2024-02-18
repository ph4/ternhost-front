<template>
  <div class="header__menu-hamburger" @click="showMobileMenu">
    <font-awesome-icon icon="fa-solid fa-bars" class="icon" />
  </div>
</template>

<script>
export default {
  name: 'MainHeaderHamburger',
  methods: {
    showMobileMenu() {
      this.$emitter.emit('show-mobile-menu');
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/common/all';

.header__menu-hamburger {
  display: none;
  cursor: pointer;
  @media screen and (max-width: 900px) {
    display: block;
  }
  .icon {
    font-size: $text-4xl;
    color: $blue-200;
  }
}
</style>
