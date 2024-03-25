<script>
import BaseLogo from "@/components/UI/BaseLogo.vue";
import BaseContainer from "@/components/UI/BaseContainer.vue";

import OrderFeature from "@/components/order/OrderFeature.vue";
import OrderPass from "@/components/order/OrderPass.vue";

import TernOfferDurations from "@/components/tern/TernOfferDurations.vue";
import TernOffer from "@/components/tern/TernOffer.vue"

import {offersMixin} from "@/mixins/offers.js";
import {useLoadOffers} from "@/hooks/useLoadOffers.js";
import {v4 as uuidv4} from "uuid";
import {useOrderStore} from "@/stores/useOrderStore.js";

export default {
  name: "OrderViewHosting.vue",
  components: {
    OrderPass,
    TernOffer,
    TernOfferDurations,
    BaseContainer,
    BaseLogo,
    OrderFeature,
  },
  mixins: [offersMixin],
  data() {
    return {
      store: useOrderStore(),
      offerDurations: [
        {id: 0, value: 1, isActive: false},
        {id: 1, value: 12, isActive: true},
        {id: 2, value: 36, isActive: false},
        {id: 3, value: 48, isActive: false},
      ],
      offers: [],
    };
  },
  mounted() {
    this.offers = useLoadOffers('order-hosting');
  },
  methods: {
    buy(offer) {
      const activeAge = offer.prices.filter((price) => price.duration === this.getActiveOfferDuration())[0];

      this.store.buyHosting({...offer, uuid: uuidv4(), activeAge});
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
          <h1>A Great Domain Needs A Great Website</h1>
          <h3>Incorporate website hosting with your domain and showcase your vision to the world</h3>
        </template>
      </order-feature>

      <div class="plans">
        <div class="plans__time">
          <tern-offer-durations :durations="this.offerDurations" class="order-hosting"></tern-offer-durations>
        </div>

        <div class="plans__box">
          <ul class="offers" ref="offers">
            <tern-offer
                v-for="offer in this.offers"
                :key="offer.id"
                :offer="offer"
                :activeDuration="this.getActiveOfferDuration()"
                :isBest="offer.id === 5"
                :callback="this.buy"
            ></tern-offer>
          </ul>
        </div>
      </div>
    </base-container>
  </section>

  <order-pass>
    <template #pass>
      <h2 class="order-pass-title">Alternatively, you have the option to bypass this step and generate a domain at a
        later time.</h2>
      <router-link to="/order/pay" class="order-pass-link">I'll select my hosting at a later time ></router-link>
    </template>
  </order-pass>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

.order-pass-title {
  @include fluid-type($text-lg, $text-2xl, 500, $gray-200);
}

.order-pass-link {
  @include fluid-type($text-xl, $text-4xl, 700, $blue-100);
  display: block;
  margin-top: 0.938rem;
}

.hero {
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 152, 255, 1) 80%, rgba(255, 255, 255, 1) 80%);

  .container {
    height: 100%;

    .header {
      @include center;
      padding: 2rem 0;
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

    .plans {
      @include center-col;
      margin-top: 3rem;

      &__box {
        width: 100%;
        margin-top: 1.875rem;
        border-radius: 1.875rem;
        background-color: $white-100;
        padding: 1rem;
        box-shadow: 0 0.25rem 2.188rem 0 rgba($black-100, 0.08);

        .offers {
          width: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          @media screen and (max-width: 1100px) {
            grid-template-columns: 1fr 1fr;
            grid-gap: 1rem;
          }
          @media screen and (max-width: 600px) {
            grid-template-columns: 1fr;
          }
        }
      }
    }
  }
}
</style>