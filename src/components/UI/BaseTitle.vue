<template>
  <header class="tern-title">
    <h1>
      <slot></slot>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'BaseTitle',
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.tern-title {
  h1 {
    @include text-5xl(700, $blue-200);
    text-align: center;
    @media screen and (max-width: 700px) {
      @include text-3xl(700, $blue-200);
    }
  }
}
</style>
