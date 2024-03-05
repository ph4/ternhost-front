<template>
  <section class="hero">
    <base-container>
      <base-logo :v2="true"></base-logo>

      <div class="hero-text">
        <slot name="hero-text"></slot>
      </div>

      <slot name="domains"></slot>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import BaseLogo from '@/components/UI/BaseLogo.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'OrderHero',
  components: {
    BaseContainer,
    BaseLogo,
    BaseButton,
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
  }
}
</style>
