<template>
  <TheTop />

  <DomainFeature />

  <TheServices />
  <TheFAQ />
  <TheFooter />
  <TheTerms />
</template>

<script>
import TheTop from '@/components/common/TheTop/TheTop.vue';
import TheServices from '@/components/common/TheServices/TheServices.vue';
import TheFAQ from '@/components/common/TheFAQ/TheFAQ.vue';
import TheFooter from '@/components/common/TheFooter/TheFooter.vue';
import TheTerms from '@/components/common/TheTerms/TheTerms.vue';

import DomainFeature from './DomainFeature.vue';

export default {
  name: 'DomainPage',
  components: {
    TheTop,
    TheServices,
    TheFAQ,
    TheFooter,
    TheTerms,
    DomainFeature,
  },
};
</script>
