<template>
  <section class="hero">
    <base-container>
      <base-logo :v2="true"></base-logo>

      <div class="hero-group">
        <div class="hero-text">
          <h1>Sign in to</h1>
          <h2>Lorem Ipsum is simply</h2>
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
          </h3>
        </div>

        <signup-form></signup-form>
      </div>

      <div class="terms">
        <p>By registering you agree to Terms & Conditions and Privacy Policy of the TernHost</p>
      </div>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import BaseLogo from '@/components/UI/BaseLogo.vue';

import SignupForm from './SignupForm.vue';

export default {
  name: 'SignupHero',
  components: {
    BaseContainer,
    BaseLogo,
    SignupForm,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.hero {
  width: 100%;
  height: 50vh;
  background-color: $blue-100;
  @media screen and (max-width: 900px) {
    min-height: 100vh;
    height: 100%;
  }
  .container {
    height: 100%;
    position: relative;
    background-image: url('@/assets/images/login/login-background.svg');
    background-repeat: no-repeat;
    background-position: 40% calc(100% + 100px);
    @media screen and (max-width: 1100px) {
      background-image: none;
    }
    @media screen and (max-width: 900px) {
      @include center-col;
      padding: 2.5rem 0;
    }
    .header {
      &__logo {
        @include center-y;
        padding: 1rem 0;
        h1 {
          @include fluid-type($text-2xl, $text-2xl, 700, $white-100);
          margin-left: 0.5rem;
          text-transform: uppercase;
        }
      }
    }
    .hero-group {
      margin: 1.875rem 0;
      .hero-text {
        margin-top: 5rem;
        @media screen and (max-width: 900px) {
          display: none;
        }
        h1 {
          @include fluid-type($text-4xl, $text-4xl, 700, $white-100);
        }
        h2 {
          @include fluid-type($text-2xl, $text-2xl, $color: $white-100);
          margin: 1rem 0;
        }
        h3 {
          @include fluid-type($text-sm, $text-sm, 300, $white-100);
          max-width: 18.75rem;
        }
      }
    }
    .terms {
      display: none;
      @media screen and (max-width: 900px) {
        display: block;
      }
      p {
        @include fluid-type($text-lg, $text-lg, $color: $white-100);
        text-align: center;
      }
    }
  }
}
</style>
