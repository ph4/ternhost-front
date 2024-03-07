<template>
  <div class="basket">
    <template v-if="store.hostings.length">
      <order-pay-goods
        v-for="hosting in store.hostings"
        :key="hosting.id"
        :id="hosting.id"
        :name="hosting.title"
        :age="hosting.age"
        :extra="extra.hostings"
        title="Hosting"
      ></order-pay-goods>
    </template>

    <order-pay-more></order-pay-more>
  </div>
</template>

<script>
import OrderPayGoods from './OrderPayGoods.vue';
import OrderPayMore from './OrderPayMore.vue';

import { useCartStore } from '@/stores/useCartStore.js';

export default {
  name: 'OrderPayOverview',
  components: {
    OrderPayGoods,
    OrderPayMore,
  },
  data() {
    return {
      store: useCartStore(),
      extra: {
        hostings: [
          { id: 0, title: 'DDOS Protection', price: 34.99, discount: 100, isEnabled: false },
          { id: 1, title: 'Daily Backups', price: 34.99, discount: 100, isEnabled: false },
          { id: 2, title: 'Extended Technical Support', price: 34.99, discount: 100, isEnabled: false },
        ],
        domains: [
          { id: 0, title: 'Domain SSL For 12 months', price: 34.99, discount: 100, isEnabled: false },
          { id: 1, title: 'Domain WHOIS Privacy Protection', price: 34.99, discount: 100, isEnabled: false },
          { id: 2, title: 'Hosting on TernHost DNS Servers', price: 0.0, discount: 100, isEnabled: false },
        ],
      },
    };
  },
};
</script>
