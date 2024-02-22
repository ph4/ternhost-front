<template>
  <mobile-menu></mobile-menu>
  <main-header class="gray"></main-header>
  <not-found-hero></not-found-hero>
  <app-footer></app-footer>
  <app-terms class="gray"></app-terms>
</template>

<script>
import MainHeader from '@/components/common/MainHeader/MainHeader.vue';

import NotFoundHero from '@/components/notfound/NotFoundHero.vue';

import AppFooter from '@/components/common/AppFooter/AppFooter.vue';
import AppTerms from '@/components/common/AppTerms/AppTerms.vue';

import MobileMenu from '@/components/common/MobileMenu/MobileMenu.vue';

export default {
  name: 'NotFoundPage',
  components: {
    MainHeader,
    AppFooter,
    AppTerms,
    NotFoundHero,
    MobileMenu,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.gray {
  background-color: $white-200;
}
</style>
