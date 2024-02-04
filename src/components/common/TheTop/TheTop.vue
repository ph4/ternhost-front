<template>
  <section class="top-fixed">
    <ThePromo />
    <TheHeader />
  </section>
</template>

<script>
import ThePromo from '../ThePromo/ThePromo.vue';
import TheHeader from '../TheHeader/TheHeader.vue';

export default {
  name: 'TheTop',
  components: {
    ThePromo,
    TheHeader,
  },
};
</script>

<style lang="scss" scoped>
.top-fixed {
  position: fixed;
  z-index: 10;
  width: 100%;
}
</style>
