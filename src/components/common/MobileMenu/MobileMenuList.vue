<template>
  <ul class="dropdown__menu-group">
    <li class="dropdown__menu-group__item" v-for="page in pages" :key="page.id">
      <router-link :to="page.url">{{ page.name }}</router-link>
    </li>
    <li class="dropdown__menu-group__item">
      <router-link to="/login">
        <base-button class="btn-primary">Login</base-button>
      </router-link>
    </li>
  </ul>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'MobileMenuList',
  components: {
    BaseButton,
  },
  data() {
    return {
      pages: [
        { id: 1, name: 'Domain', url: '/domain' },
        { id: 2, name: 'Hosting', url: '/hosting' },
        { id: 3, name: 'Website Builder', url: '/builder' },
        { id: 4, name: 'Help', url: '/help' },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '@/styles/common/all';

.dropdown__menu-group {
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
  text-align: center;
  &__item {
    a {
      @include fluid-type($text-base, $text-base);
      @include text(500, $blue-200);
    }
  }
}
</style>
