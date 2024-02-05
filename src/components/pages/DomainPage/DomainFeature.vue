<template>
  <section class="feature">
    <TheContainer class="feature-container">
      <div class="search-domain" v-if="isSwitch">
        <TheSearch class="search">
          <template #title>Search Your Domain Now</template>
          <template #input>
            <BaseInput placeholder="Search your domain..." />
          </template>
          <template #button>
            <BaseButton class="btn btn-secondary">Search</BaseButton>
          </template>
        </TheSearch>
        <h2>Already bought a domain? <span @click="isSwitch = false">Transfer it</span></h2>
      </div>
      <div class="search-domain" v-else="isSwitch">
        <TheSearch class="search">
          <template #title>Transfer Your Domain Now</template>
          <template #input>
            <BaseInput placeholder="Search your domain..." />
          </template>
          <template #button>
            <BaseButton class="btn btn-secondary">Transfer</BaseButton>
          </template>
        </TheSearch>
        <h2>Want a new domain name? <span @click="isSwitch = true">Try domain checker</span></h2>
      </div>
      <div class="domains">
        <ul class="list">
          <TheDomain
            v-for="domain in domains"
            :key="domain.id"
            :tld="domain.tld"
            :monthlyPrice="domain.monthlyPrice"
            :annualPrice="domain.annualPrice"
          />
        </ul>
      </div>
    </TheContainer>
  </section>
</template>

<script>
import TheDomain from '@/components/common/TheDomain/TheDomain.vue';
import TheSearch from '@/components/common/TheSearch/TheSearch.vue';
import TheContainer from '@/components/common/TheContainer/TheContainer.vue';

import BaseInput from '@/components/UI/BaseInput.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'DomainFeature',
  components: {
    TheDomain,
    TheSearch,
    TheContainer,
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      isSwitch: true,
      domains: [
        { id: 1, tld: '.com', monthlyPrice: 10, annualPrice: 4.99 },
        { id: 2, tld: '.in', monthlyPrice: 10, annualPrice: 0.99 },
        { id: 3, tld: '.shop', monthlyPrice: 10, annualPrice: 1.99 },
        { id: 4, tld: '.nl', monthlyPrice: 10, annualPrice: 2.99 },
        { id: 5, tld: '.com', monthlyPrice: 10, annualPrice: 4.99 },
        { id: 6, tld: '.in', monthlyPrice: 10, annualPrice: 0.99 },
        { id: 7, tld: '.shop', monthlyPrice: 10, annualPrice: 1.99 },
        { id: 8, tld: '.nl', monthlyPrice: 10, annualPrice: 2.99 },
        { id: 9, tld: '.shop', monthlyPrice: 10, annualPrice: 1.99 },
        { id: 10, tld: '.nl', monthlyPrice: 10, annualPrice: 2.99 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.feature {
  &-container {
    @include center-x;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
    padding: 10rem 0;
    .search-domain,
    .domains {
      position: relative;
      z-index: 3;
    }
    .search-domain {
      align-self: start;
      @media screen and (max-width: 900px) {
        width: 100%;
        text-align: center;
        align-self: center;
      }
      h2 {
        @include text-xl(600, $blue-200);
        span {
          color: $blue-100;
          cursor: pointer;
        }
      }
    }

    .domains {
      margin-top: 5.625rem;
      background-color: $white-100;
      padding: 2rem 0;
      .list {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 1rem;
        @media screen and (max-width: 900px) {
          grid-template-columns: repeat(3, 1fr);
        }
        @media screen and (max-width: 600px) {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }
  }
}
</style>
