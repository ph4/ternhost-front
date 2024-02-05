<template>
  <div class="subfeature__domain">
    <h1>{{ title }}</h1>
    <div class="subfeature__domain-input">
      <input type="text" placeholder="Search your domain..." />
      <TheButton class="btn btn-secondary">{{ btnText }}</TheButton>
    </div>
  </div>
</template>

<script>
import TheButton from '@/components/UI/TheButton.vue';

export default {
  name: 'TheSearch',
  props: {
    title: String,
    btnText: String,
  },
  components: {
    TheButton,
  },
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
    input {
      @include text-base;
      flex-grow: 1;
      background-color: rgba(0, 0, 0, 0);
      padding: 0 1rem;
      @media screen and (max-width: 1200px) {
        @include text-sm;
        padding: 1rem;
      }
    }
    .btn {
      @include text-sm(700, $white-100);
      border-radius: 0 0.313rem 0.313rem 0;
      text-wrap: nowrap;
    }
  }
}
</style>
