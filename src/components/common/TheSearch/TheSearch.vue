<template>
  <div class="subfeature__domain">
    <h1><slot name="title"></slot></h1>
    <div class="subfeature__domain-input">
      <slot name="input"></slot>
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheSearch',
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.subfeature__domain {
  h1 {
    @include text-4xl(700, $blue-200);
    @media screen and (max-width: 1200px) {
      @include text-2xl(700, $blue-200);
    }
  }
  &-input {
    background-color: $white-200;
    border-radius: 0.313rem;
    display: flex;
    margin: 1rem 0;
    .btn {
      @include text-sm(700, $white-100);
      border-radius: 0 0.313rem 0.313rem 0;
      text-wrap: nowrap;
      background-color: red;
    }
  }
}
</style>
