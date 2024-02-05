<template>
  <div class="tern-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TheWrapper',
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.tern-wrapper {
  @include center-x;
  width: 100%;
  padding: 9.375rem 0;
  @media screen and (max-width: 700px) {
    padding: 3.5rem 0;
  }
}
</style>
