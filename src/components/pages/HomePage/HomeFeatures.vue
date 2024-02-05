<template>
  <!-- Features -->
  <section class="features-wrapper">
    <div class="features-background">
      <img :src="assets.featureBackground" alt="Feature Background" />
    </div>

    <TheContainer class="container">
      <div class="features">
        <div class="features__text">
          <h1>
            Fully Managed Cloud <br />
            & Wordpress Hosting
          </h1>
          <h3>
            Deidcated resources, full root access, & easy scaling. It’s the virtual <br />
            private server you’ve been cravin
          </h3>
        </div>

        <a href="#pricing"><BaseButton class="btn btn-secondary">View Pricing</BaseButton></a>
      </div>
    </TheContainer>
  </section>
</template>

<script>
import featureBackground from '@/assets/images/feature-background.svg';

import TheContainer from '@/components/common/TheContainer/TheContainer.vue';

import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'HomeFeatures',
  components: {
    TheContainer,
    BaseButton,
  },
  data() {
    return {
      assets: {
        featureBackground,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

// @Sections: Features
.features-wrapper {
  @include center-x;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: $white-300;
  .features-background {
    position: absolute;
    bottom: -30%;
    right: 0;
    @media screen and (max-width: 1366px) {
      right: -25%;
    }
    img {
      width: 100%;
      @media screen and (max-width: 1366px) {
        width: 75%;
      }
    }
  }
  .container {
    .features {
      width: 95%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      @media screen and (max-width: 1024px) {
        text-align: center;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &__text {
        h1 {
          @include text-5xl(700, $blue-200);
          @media screen and (max-width: 700px) {
            @include text-4xl(700, $blue-200);
          }
        }
        h3 {
          @include text-base(400, rgba($blue-200, 0.5));
          margin: 3rem 0;
          @media screen and (max-width: 700px) {
            margin: 1rem;
          }
        }
      }
    }
  }
}
</style>
