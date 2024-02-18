<template>
  <ul class="domains__group">
    <tern-domain-offer
      v-for="domain in domains"
      :key="domain.id"
      :domain_name="domain.domain_name"
      :monthly_price="domain.monthly_price"
      :annual_price="domain.annual_price"
    ></tern-domain-offer>
  </ul>
</template>

<script>
import TernDomainOffer from '@/components/tern/TernDomainOffer.vue';

export default {
  name: 'HomeSentenceDomains',
  components: {
    TernDomainOffer,
  },
  data() {
    return {
      domains: [
        { id: 1, domain_name: '.com', monthly_price: 10, annual_price: 4.99 },
        { id: 2, domain_name: '.in', monthly_price: 10, annual_price: 1.99 },
        { id: 3, domain_name: '.shop', monthly_price: 10, annual_price: 0.99 },
        { id: 4, domain_name: '.nl', monthly_price: 10, annual_price: 2.99 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.domains__group {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  }
}
</style>
