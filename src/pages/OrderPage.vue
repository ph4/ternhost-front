<script>

import OrderViewDomain from "@/components/order/OrderViewDomain.vue";
import OrderPass from "@/components/order/OrderPass.vue";

import AppFooter from "@/components/common/AppFooter/AppFooter.vue";
import AppTerms from "@/components/common/AppTerms/AppTerms.vue";

export default {
  name: "OrderPage.vue",
  components: {
    OrderViewDomain,
    OrderPass,
    AppFooter,
    AppTerms,
  }
}
</script>

<template>
  <router-view></router-view>

  <order-pass>
    <template #pass>
      <h2>Alternatively, you have the option to bypass this step and generate <br/>a domain at a later time.</h2>
      <a href="#">I'll generate my domain at a later time ></a>
    </template>
  </order-pass>

  <app-footer></app-footer>
  <app-terms></app-terms>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

h2 {
  @include fluid-type($text-lg, $text-2xl, 500, $gray-200);
}

a {
  @include fluid-type($text-xl, $text-4xl, 700, $blue-100);
  display: block;
  margin-top: 0.938rem;
}
</style>