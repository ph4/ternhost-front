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

    <template #domains>
      <div class="domains">
        <ul class="domains__group">
          <order-search-domain></order-search-domain>
          <order-transfer-domain class="domain-transfer"></order-transfer-domain>
          <order-cart-domain class="domain-cart"></order-cart-domain>
        </ul>
      </div>
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
import OrderSearchDomain from '@/components/order/OrderSearchDomain.vue';
import OrderTransferDomain from '@/components/order/OrderTransferDomain.vue';
import OrderCartDomain from '@/components/order/OrderCartDomain.vue';

import AppFooter from '@/components/common/AppFooter/AppFooter.vue';
import AppTerms from '@/components/common/AppTerms/AppTerms.vue';
import AppPreloader from '@/components/common/AppPreloader/AppPreloader.vue';

import { usePreloader } from '@/hooks/usePreloader.js';
import { gsap } from 'gsap';

export default {
  name: 'OrderDomainPage',
  components: {
    OrderHero,
    OrderSkip,
    OrderSearchDomain,
    OrderTransferDomain,
    OrderCartDomain,
    AppFooter,
    AppTerms,
    AppPreloader,
  },
  data() {
    return {
      isShowCart: false,
    };
  },
  mounted() {
    usePreloader();

    this.$emitter.on('_animate_order_-show-cart', () => {
      !this.isShowCart && this.showCart();
      this.isShowCart = true;
    });

    this.$emitter.on('_animate_order_-hide-cart', () => {
      this.hideCart();
      this.isShowCart = false;
    });
  },
  methods: {
    showCart() {
      const tl = gsap.timeline();

      tl.to('.domain-transfer', {
        y: '25%',
        opacity: 0,
        duration: 0.5,
      })
        .to('.domain-transfer', {
          display: 'none',
          duration: 0,
        })
        .to('.domain-cart', {
          display: 'flex',
          flexDirection: 'column',
          opacity: 0,
          y: '25%',
          duration: 0,
        })
        .to('.domain-cart', {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.25,
        });
    },
    hideCart() {
      const tl = gsap.timeline();

      tl.to('.domain-cart', {
        y: '25%',
        opacity: 0,
        duration: 0.5,
      })
        .to('.domain-cart', {
          display: 'none',
          duration: 0,
        })
        .to('.domain-transfer', {
          display: 'block',
          y: '25%',
          opacity: 0,
          duration: 0,
        })
        .to('.domain-transfer', {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.25,
        });
    },
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

.domains {
  width: 100%;
  margin-top: 5rem;
  &__group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    @media screen and (max-width: 1100px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
