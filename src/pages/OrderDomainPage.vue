<template>
  <app-preloader></app-preloader>

  <order-hero>
    <template #hero-text>
      <h1>Moving forward, let's configure your domain for you.</h1>
      <h3>
        Your domain serves as your website's address.<br />You have the option to generate a new domain, utilize an
        existing <br />one, or decide on one later.
      </h3>
    </template>
  </order-hero>
  <order-skip>
    <template #hero-skip>
      <h2>Alternatively, you have the option to bypass this step and generate <br />a domain at a later time.</h2>
      <router-link to="/">I'll generate my domain at a later time ></router-link>
    </template>
  </order-skip>
  <app-footer></app-footer>
  <app-terms></app-terms>
</template>

<script>
import OrderHero from '@/components/order/OrderHero.vue';
import OrderSkip from '@/components/order/OrderSkip.vue';

import AppFooter from '@/components/common/AppFooter/AppFooter.vue';
import AppTerms from '@/components/common/AppTerms/AppTerms.vue';
import AppPreloader from '@/components/common/AppPreloader/AppPreloader.vue';

export default {
  name: 'OrderDomainPage',
  components: {
    OrderHero,
    OrderSkip,
    AppFooter,
    AppTerms,
    AppPreloader,
  },
  mounted() {
    setTimeout(() => {
      this.$emitter.emit('_animate_preloader_-close-preloader');
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.hero-text {
  margin-top: 3.125rem;
  text-align: center;
  h1 {
    @include fluid-type($text-2xl, $text-4xl, 700, $white-100);
  }
  h3 {
    @include fluid-type($text-base, $text-2xl, 500, $white-100);
    margin-top: 1.875rem;
  }
}

.skip {
  padding: 5rem 0;
  .container {
    text-align: center;
    h2 {
      @include fluid-type($text-lg, $text-2xl, 500, $gray-200);
    }
    a {
      @include fluid-type($text-xl, $text-4xl, 700, $blue-100);
      display: block;
      margin-top: 0.938rem;
    }
  }
}
</style>
