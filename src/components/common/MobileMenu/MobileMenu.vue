<template>
  <Teleport to="body">
    <Transition>
      <section class="dropdown" v-if="isShow">
        <header class="dropdown__header">
          <base-logo></base-logo>

          <font-awesome-icon icon="fa-solid fa-circle-xmark" class="icon" @click="closeMobileMenu" />
        </header>

        <div class="dropdown__menu">
          <mobile-menu-list></mobile-menu-list>
        </div>
      </section>
    </Transition>
  </Teleport>
</template>

<script>
import BaseLogo from '@/components/UI/BaseLogo.vue';

import MobileMenuList from './MobileMenuList.vue';

export default {
  name: 'MobileMenu',
  components: {
    BaseLogo,
    MobileMenuList,
  },
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    this.$emitter.on('show-mobile-menu', this.showMobileMenu);
  },
  methods: {
    showMobileMenu() {
      this.isShow = true;
    },
    closeMobileMenu() {
      this.isShow = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.dropdown {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: $white-300;
  z-index: 9999;
  padding: 1rem;
  display: block;
  transition: all 1s;
  background-color: red;
  &__header {
    @include center-y;
    justify-content: space-between;
    .icon {
      font-size: $text-4xl;
      color: $blue-200;
      cursor: pointer;
    }
  }
  &__menu {
    margin-top: 5rem;
  }
}

.v-enter-active,
.v-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

.v-enter-to,
.v-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.v-leave-active {
  opacity: 0;
}
</style>
