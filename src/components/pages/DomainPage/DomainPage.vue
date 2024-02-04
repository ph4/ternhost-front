<template>
  <TheTop />

  <section class="feature">
    <TheContainer class="feature-container">
      <div class="search-domain">
        <TheSearch />
        <h2>Already bought a domain? <span>Transfer it</span></h2>
      </div>
      <div class="domains">
        <ul class="list"></ul>
      </div>
    </TheContainer>
  </section>
</template>

<script>
import TheTop from '@/components/common/TheTop/TheTop.vue';
import TheContainer from '@/components/common/TheContainer/TheContainer.vue';
import TheWrapper from '@/components/common/TheWrapper/TheWrapper.vue';
import TheSearch from '@/components/common/TheSearch/TheSearch.vue';
import TheDomain from '@/components/common/TheDomain/TheDomain';

import featureBackground from '@/assets/images/domain-feature-background.svg';

export default {
  name: 'DomainPage',
  components: {
    TheTop,
    TheContainer,
    TheWrapper,
    TheSearch,
  },
  data() {
    return {
      assets: {
        featureBackground,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.feature {
  &-container {
    @include center-y;
    width: 100%;
    min-height: 100vh;
    border: 1px solid red;
    .search-domain {
      width: 100%;
      h2 {
        @include text-xl(600, $blue-200);
        a {
          color: $blue-100;
        }
      }
    }
  }
}
</style>
