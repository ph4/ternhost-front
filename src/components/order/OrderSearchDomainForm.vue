<template>
  <div class="search-domain">
    <input type="text" placeholder="Search your domain..." v-model="name" />
    <base-button class="btn-secondary" @click="loadDomains">Search</base-button>
  </div>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'OrderSearchDomainForm',
  components: {
    BaseButton,
  },
  data() {
    return {
      name: '',
    };
  },
  methods: {
    loadDomains() {
      if (this.name.length) {
        this.isLoading = true;
        this.$emitter.emit('_order_-load-domains', this.name);
      }

      this.name = '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.search-domain {
  display: flex;
  justify-content: space-between;
  background-color: $white-200;
  border-radius: 0.313rem;
  input {
    @include fluid-type($text-sm, $text-base, $color: $gray-200);
    padding: 1.063rem;
    background-color: transparent;
    flex-grow: 1;
  }
  button {
    padding: 0 1rem;
    display: flex;
    align-items: center;
    @media screen and (max-width: 500px) {
      padding: 0 0.5rem;
    }
    span {
      @include fluid-type($text-sm, $text-base, 700, $white-100);
    }
    .icon {
      margin-left: 1rem;
    }
  }
}
</style>
