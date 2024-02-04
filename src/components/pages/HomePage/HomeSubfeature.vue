<template>
  <!-- Subfeature -->
  <TheWrapper class="subfeature-wrapper">
    <TheContainer>
      <div class="subfeature">
        <TheSearch />
        <div class="subfeature__prices">
          <ul class="subfeature__prices-group">
            <TheDomain
              v-for="domain in domains"
              :key="domain.id"
              :tld="domain.tld"
              :monthlyPrice="domain.monthlyPrice"
              :annualPrice="domain.annualPrice"
            />
          </ul>
        </div>
      </div>
    </TheContainer>
  </TheWrapper>
</template>

<script>
import TheContainer from '@/components/common/TheContainer/TheContainer.vue';
import TheWrapper from '@/components/common/TheWrapper/TheWrapper.vue';
import TheSearch from '@/components/common/TheSearch/TheSearch.vue';
import TheButton from '@/components/UI/TheButton.vue';
import TheDomain from '@/components/common/TheDomain/TheDomain.vue';

export default {
  name: 'HomeSubfeature',
  components: {
    TheContainer,
    TheWrapper,
    TheButton,
    TheSearch,
    TheDomain,
  },
  data() {
    return {
      domains: [
        { id: 1, tld: '.com', monthlyPrice: 10, annualPrice: 4.99 },
        { id: 2, tld: '.in', monthlyPrice: 10, annualPrice: 0.99 },
        { id: 3, tld: '.shop', monthlyPrice: 10, annualPrice: 1.99 },
        { id: 4, tld: '.nl', monthlyPrice: 10, annualPrice: 2.99 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

// @Sections: Subfeature
.subfeature-wrapper {
  background-color: $white-100;
  .container {
    .subfeature {
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-gap: 3rem;
      @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr;
      }
      .subfeature__prices {
        @include center-y;
        &-group {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 1rem;
          @media screen and (max-width: 700px) {
            grid-template-columns: 1fr 1fr;
          }
        }
      }
    }
  }
}
</style>
