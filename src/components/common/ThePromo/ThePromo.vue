<template>
  <!-- Promo -->
  <section class="promo-wrapper">
    <a href="#" class="promo">
      <h1>Don't miss deals up to 70% on web hosting</h1>
      <img :src="assets.promoArrow" alt="Promo Arrow" />
    </a>
  </section>
</template>

<script>
import promoArrow from '@/assets/images/promo-arrow.svg';

export default {
  name: 'ThePromo',
  data() {
    return {
      assets: {
        promoArrow,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

// @Sections: Promo
.promo-wrapper {
  .promo {
    @include center;
    width: 100%;
    background-color: $blue-100;
    padding: 0.5rem 0;
    text-decoration: none;
    text-transform: uppercase;
    h1 {
      @include text-lg(700, $white-100);
      @media screen and (max-width: 500px) {
        @include text-xs(700, $white-100);
      }
    }
    img {
      width: 1.5rem;
      margin-left: 0.625rem;
    }
  }
}
</style>
