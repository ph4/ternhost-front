<template>
  <input type="text" :placeholder="placeholder" />
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    placeholder: String,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

input {
  @include text-base;
  flex-grow: 1;
  background-color: rgba(0, 0, 0, 0);
  padding: 1.25rem;
  @media screen and (max-width: 1200px) {
    @include text-sm;
  }
}
</style>
