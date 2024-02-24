<template>
  <section class="skip">
    <div class="container">
      <slot name="hero-skip"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OrderSkip',
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

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
