<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  name: 'BaseButton',
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.btn {
  @include text-lg(700, $white-100);
  border-radius: 0.313rem;
  padding: 0.625rem 2.188rem;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    padding: 0.5rem 1.5rem;
  }
  &-primary {
    background-color: $blue-200;
  }
  &-secondary {
    background-color: $blue-100;
  }
}
</style>
