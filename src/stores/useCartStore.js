import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    domains: [],
    discount: 0,
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
    getOriginalPriceByDomain: () => {
      return (domain) => {
        return domain.ages.filter((age) => age.isActive === true)[0].price;
      };
    },
    getDiscountPriceByDomain: (state) => {
      return (domain) => {
        const originalPrice = state.getOriginalPriceByDomain(domain);
        const discount = domain.ages.filter((age) => age.isActive === true)[0].discount;

        return (originalPrice - (originalPrice / 100) * discount).toFixed(2);
      };
    },
    getTotalOriginalPrice: (state) => {
      let total = 0;

      state.domains.forEach((domain) => {
        domain.ages.forEach((age) => {
          if (age.isActive) total += age.price;
        });
      });

      return total.toFixed(2);
    },
    getTotalDiscountPrice: (state) => {
      let total = 0;

      state.domains.forEach((domain) => {
        domain.ages.forEach((age) => {
          if (age.isActive) {
            total += age.price - (age.price / 100) * age.discount;
          }
        });
      });

      return total.toFixed(2);
    },
  },
  actions: {
    addToCart(domain) {
      this.domains.push(domain);
    },
    removeFromCart(fullDomain) {
      this.domains = this.domains.filter((domain) => `${domain.root}${domain.tld}` !== fullDomain);
    },
    // FIXME: Written by ChatGPT
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
    setDiscount(discount) {
      this.discount = discount;
    },
  },
});
