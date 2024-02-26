<template>
  <div class="container">
    <base-button class="btn-primary button" @click="animate">Click Me</base-button>

    <div class="container__inner">
      <div class="block">1</div>
      <div class="block red">2</div>
      <div class="block green">3</div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';

import { gsap } from 'gsap';

export default {
  name: 'Animation',
  components: {
    BaseButton,
  },
  methods: {
    animate() {
      const timeline = gsap.timeline();

      timeline
        .to('.red', {
          y: '25%',
          duration: 1,
          opacity: 0,
        })
        .to('.green', {
          display: 'block',
          opacity: 0,
          y: '25%',
          duration: 0,
        })
        .to('.green', {
          opacity: 1,
          y: 0,
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.container {
  width: 100%;
  min-height: 100vh;
  max-width: 100%;
  @include center;
  .button {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
  }
  &__inner {
    width: 1536px;
    border: 1px solid red;
    padding: 3rem;
    @include center-y-between;
    .block {
      @include center;
      width: 300px;
      aspect-ratio: 1 / 1;
      background-color: $red-1;
      color: $white-100;
      font-size: 10rem;
      &.red {
        @include center;
      }
      &.green {
        background-color: green;
        display: none;
      }
    }
  }
}
</style>
