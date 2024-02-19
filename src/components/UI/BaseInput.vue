<template>
  <input :type="!this.type ? 'text' : this.type" :placeholder="this.placeholder" />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    type: String,
    placeholder: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

input {
  width: 100%;
  border-radius: 0.313rem;
  border: 0.063rem solid $gray-100 !important;
  padding: 1.25rem 1.563rem;
  margin-top: 1.25rem;
  @include fluid-type($text-sm, $text-base);
  @media screen and (max-width: 500px) {
    padding: 0.938rem;
  }
  &:focus {
    border: 1px solid $blue-100 !important;
  }
}
</style>
