import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    domains: [],
  }),
  getters: {
    getAgesByDomain: (state) => {
      return (name) => {
        const domain = state.domains.filter((domain) => `${domain.root}${domain.tld}` === name);

        return domain[0].ages;
      };
    },
    getCurrentAgeByDomain: (state) => {
      return (name) => {
        const ages = state.getAgesByDomain(name);
        const activeAge = ages.filter((age) => age.isActive === true);

        return activeAge[0].age;
      };
    },
  },
  actions: {
    addToCart(domain) {
      this.domains.push(domain);
    },
    removeFromCart(fullDomain) {
      this.domains = this.domains.filter((domain) => `${domain.root}${domain.tld}` !== fullDomain);
    },
    // FIXME: Made in Chat-GPT
    setAge(ageId, fullDomain) {
      const domainIndex = this.domains.findIndex((domain) => `${domain.root}${domain.tld}` === fullDomain);
      if (domainIndex !== -1) {
        const domain = JSON.parse(JSON.stringify(this.domains[domainIndex]));
        const ageIndex = domain.ages.findIndex((age) => age.id === ageId);
        if (ageIndex !== -1) {
          domain.ages.forEach((age, index) => {
            age.isActive = index === ageIndex;
          });
          this.domains.splice(domainIndex, 1, domain);
        }
      }
    },
  },
});
