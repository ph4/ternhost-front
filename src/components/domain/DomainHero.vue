<template>
  <section class="hero">
    <base-container>
      <div class="search-box">
        <div class="search" v-if="!switcher">
          <h1>Search Your Domain Now</h1>
          <div class="search__input">
            <input type="text" placeholder="Search your domain.." />
            <base-button class="btn-secondary">Search</base-button>
          </div>
          <h3>Already bought a domain? <a href="#" @click="switcher = 1">Transfer it</a></h3>
        </div>
        <div class="search" v-else>
          <h1>Transfer Your Domain Now</h1>
          <div class="search__input">
            <input type="text" placeholder="Search your domain.." />
            <base-button class="btn-secondary transfer">Transfer</base-button>
          </div>
          <h3>Want a new domain name? <a href="#" @click="switcher = 0">Try domain checker</a></h3>
        </div>
      </div>

      <div class="domains">
        <ul class="domains__group">
          <tern-domain-offer
            v-for="domain in domains"
            :key="domain.id"
            :domain_name="domain.domain_name"
            :monthly_price="domain.monthly_price"
            :annual_price="domain.annual_price"
          ></tern-domain-offer>
        </ul>
      </div>

      <div class="show-all">
        <base-button class="btn-secondary">Show All</base-button>
      </div>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

import TernDomainOffer from '@/components/tern/TernDomainOffer.vue';

export default {
  name: 'DomainHero',
  components: {
    BaseContainer,
    BaseButton,
    TernDomainOffer,
  },
  data() {
    return {
      switcher: 0,
      domains: [
        { id: 0, domain_name: '.com', monthly_price: 10, annual_price: 4.99 },
        { id: 1, domain_name: '.shop', monthly_price: 10, annual_price: 1.99 },
        { id: 2, domain_name: '.nl', monthly_price: 10, annual_price: 0.99 },
        { id: 3, domain_name: '.nl', monthly_price: 10, annual_price: 2.99 },
        { id: 4, domain_name: '.nl', monthly_price: 10, annual_price: 2.99 },
        { id: 5, domain_name: '.com', monthly_price: 10, annual_price: 4.99 },
        { id: 6, domain_name: '.shop', monthly_price: 10, annual_price: 1.99 },
        { id: 7, domain_name: '.nl', monthly_price: 10, annual_price: 0.99 },
        { id: 8, domain_name: '.nl', monthly_price: 10, annual_price: 2.99 },
        { id: 9, domain_name: '.nl', monthly_price: 10, annual_price: 2.99 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.hero {
  padding-top: calc(7.188rem + 7.5rem);
  .container {
    background-image: url('@/assets/images/domain/domain-feature-background.svg');
    background-repeat: no-repeat;
    background-position: 100% -75%;
    padding: 0;
    @media screen and (max-width: 1100px) {
      background-image: none;
    }
    .search-box {
      .search {
        @media screen and (max-width: 600px) {
          @include center-col;
        }
        h1 {
          @include fluid-type($text-2xl, $text-3xl, 700, $blue-200);
        }
        &__input {
          width: 31.25rem;
          max-width: 100%;
          display: flex;
          margin: 1.25rem 0;
          input {
            @include fluid-type($text-sm, $text-base, $color: $gray-200);
            padding: 1rem;
            background-color: $white-200;
            border-radius: 0.25rem;
            width: 100%;
          }
        }
        h3 {
          @include fluid-type($text-sm, $text-xl, 600, $blue-200);
          a {
            color: $blue-100;
          }
        }
      }
    }
    .domains {
      position: relative;
      z-index: 3;
      background-color: $white-100;
      margin-top: 6.25rem;
      &__group {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 3rem;
        @media screen and (max-width: 1100px) {
          grid-template-columns: repeat(3, 1fr);
        }
        @media screen and (max-width: 600px) {
          grid-template-columns: repeat(2, 1fr);
          justify-content: center;
        }
      }
    }
    .show-all {
      @include center;
      margin-top: 4.5rem;
    }
  }
}
</style>
