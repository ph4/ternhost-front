<script>
import OrderFeature from "@/components/order/OrderFeature.vue";
import OrderPass from "@/components/order/OrderPass.vue";
import OrderDomain from "@/components/order/OrderDomain.vue";
import OrderTransfer from "@/components/order/OrderTransfer.vue";
import OrderDomainCart from "@/components/order/OrderDomainCart.vue";

import BaseContainer from "@/components/UI/BaseContainer.vue";
import BaseLogo from "@/components/UI/BaseLogo.vue";
import BaseButton from "@/components/UI/BaseButton.vue";

import {useOrderStore} from "@/stores/useOrderStore.js";
import {gsap} from 'gsap';

export default {
  name: "OrderViewDomain.vue",
  components: {
    BaseLogo,
    BaseContainer,
    BaseButton,
    OrderFeature,
    OrderPass,
    OrderDomain,
    OrderTransfer,
    OrderDomainCart
  },
  data() {
    return {
      store: useOrderStore()
    }
  },
  mounted() {
    this.$emitter.on('_order_-toggle-cart', this.toggle)
  },
  methods: {
    toggle() {
      const tl = gsap.timeline();

      !this.store.isEmpty
          ?
          tl
              .to('.transfer', {
                opacity: 0,
                y: '25%',
                duration: 0.25,
              })
              .to('.transfer', {
                display: 'none',
                duration: 0,
              })
              .to('.cart', {
                display: "flex",
                flexDirection: "column",
                opacity: 0,
                y: '25%',
                duration: 0,
              })
              .to('.cart', {
                y: '0%',
                opacity: 1,
                duration: 0.25
              })
          :
          tl
              .to('.cart', {
                opacity: 0,
                y: '25%',
                duration: 0.25,
              })
              .to('.cart', {
                display: 'none',
                duration: 0,
              })
              .to('.transfer', {
                display: 'block',
                opacity: 0,
                y: '25%',
                duration: 0,
              })
              .to('.transfer', {
                y: '0%',
                opacity: 1,
                duration: 0.25
              })
    }
  }
}
</script>

<template>
  <section class="hero">
    <base-container>
      <header class="header">
        <base-logo v2></base-logo>
      </header>

      <order-feature>
        <template #feature>
          <h1>Moving forward, let's configure your domain for you.</h1>
          <h3>
            Your domain serves as your website's address.<br/>You have the option to generate a new domain, utilize
            an existing <br/>one, or decide on one later.
          </h3>
        </template>
      </order-feature>

      <div class="domains">
        <ul class="domains__group">
          <order-domain></order-domain>
          <order-transfer class="transfer"></order-transfer>
          <order-domain-cart class="cart"></order-domain-cart>
        </ul>
      </div>
    </base-container>
  </section>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

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

      h1 {
        @include fluid-type($text-2xl, $text-4xl, 700, $white-100);
      }

      h3 {
        @include fluid-type($text-base, $text-2xl, 500, $white-100);
        margin-top: 1.875rem;
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
  }
}
</style>