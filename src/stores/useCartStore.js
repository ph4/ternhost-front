import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  // getters: {
  //   doubleCount: (state) => state.count * 2,
  // },
  state: () => ({
    domains: [],
  }),
  actions: {
    addToCart(domain) {
      this.domains.push(domain);
    },
    removeFromCart(fullDomain) {
      this.domains = this.domains.filter((domain) => `${domain.second}${domain.top}` !== fullDomain);
    },
  },
});
