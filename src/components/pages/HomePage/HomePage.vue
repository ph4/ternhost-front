<template>
  <TheTop />

  <HomeFeatures />
  <HomeSubfeature />

  <TheServices />

  <HomeReviews />
  <HomeCounters />

  <ThePricing />
  <TheFAQ />
  <TheFooter />
  <TheTerms />
</template>

<script>
import TheFooter from '@/components/common/TheFooter/TheFooter.vue';
import TheTerms from '@/components/common/TheTerms/TheTerms.vue';
import TheTop from '@/components/common/TheTop/TheTop.vue';
import TheServices from '@/components/common/TheServices/TheServices.vue';
import ThePricing from '@/components/common/ThePricing/ThePricing.vue';
import TheFAQ from '@/components/common/TheFAQ/TheFAQ.vue';

import HomeFeatures from './HomeFeatures.vue';
import HomeSubfeature from './HomeSubfeature.vue';
import HomeReviews from './HomeReviews.vue';
import HomeCounters from './HomeCounters.vue';

export default {
  name: 'HomePage',
  components: {
    TheFooter,
    TheTerms,
    TheTop,
    TheServices,
    ThePricing,
    TheFAQ,
    HomeFeatures,
    HomeSubfeature,
    HomeReviews,
    HomeCounters,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.top-fixed {
  position: fixed;
  z-index: 10;
  width: 100%;
}
</style>
