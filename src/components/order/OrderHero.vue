<template>
  <section class="hero">
    <base-container>
      <base-logo :v2="true"></base-logo>

      <div class="hero-text">
        <slot name="hero-text"></slot>
      </div>

      <div class="domains">
        <ul class="domains__group">
          <order-search-domain></order-search-domain>
          <order-transfer-domain class="domain-transfer"></order-transfer-domain>
          <order-cart-domain class="domain-cart"></order-cart-domain>
        </ul>
      </div>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import BaseLogo from '@/components/UI/BaseLogo.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

import OrderSearchDomain from './OrderSearchDomain.vue';
import OrderTransferDomain from './OrderTransferDomain.vue';
import OrderCartDomain from './OrderCartDomain.vue';

import { showCart } from '@/animations/order/showCart.js';
import { hideCart } from '@/animations/order/hideCart.js';

export default {
  name: 'OrderHero',
  components: {
    BaseContainer,
    BaseLogo,
    BaseButton,
    OrderSearchDomain,
    OrderTransferDomain,
    OrderCartDomain,
  },
  data() {
    return {
      isShowCart: false,
    };
  },
  mounted() {
    this.$emitter.on('_animate_-show-cart', () => {
      !this.isShowCart && showCart();
      this.isShowCart = true;
    });
    this.$emitter.on('_animate_-hide-cart', () => {
      hideCart();
      this.isShowCart = false;
    });
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.hero {
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 152, 255, 1) 500px, rgba(255, 255, 255, 1) 500px);
  .container {
    height: 100%;
    .header {
      &__logo {
        @include center;
        padding: 1rem 0;
        h1 {
          @include fluid-type($text-2xl, $text-2xl, 700, $white-100);
          margin-left: 0.5rem;
          text-transform: uppercase;
        }
      }
    }
    .hero-text {
      margin-top: 3.125rem;
      text-align: center;
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
  }
}
</style>
