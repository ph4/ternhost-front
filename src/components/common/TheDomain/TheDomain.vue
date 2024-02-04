<template>
  <li class="subfeature__prices-group__item">
    <span>{{ tld }}</span>
    <h3>${{ monthlyPrice }} / month</h3>
    <h1><span>$</span>{{ annualPrice }} <span>/ year</span></h1>
  </li>
</template>

<script>
export default {
  name: 'TheDomain',
  props: {
    tld: String,
    monthlyPrice: Number,
    annualPrice: Number,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.subfeature__prices-group__item {
  span {
    @include text-xl(700, $blue-100);
  }
  h3 {
    @include text-sm(500, $gray-200);
  }
  h1 {
    @include text-4xl(700, $blue-200);
    span {
      @include text-sm(400, $blue-200);
    }
  }
}
</style>
