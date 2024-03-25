import {defineStore} from 'pinia';
import {applyDiscount} from "@/utils/applyDiscount.js";

export const useOrderStore = defineStore('order', {
    state: () => ({
        domains: [],
        hostings: [],
        promo: {
            value: "",
            status: 0,
            discount: 0
        }
    }),
    getters: {
        isPurchased: (state) => {
            return (entity) => {
                const result = state.domains.filter(domain => `${domain.root}${domain.tld}` === `${entity.root}${entity.tld}`)

                return result.length > 0;
            }
        },
        isEmpty: (state) => {
            return state.domains.length === 0
        },
        getTotalPriceDomain: (state) => {
            let total = 0;

            state.domains.forEach((domain) => total += domain.activeAge.price);

            return applyDiscount(total, state.promo.discount);
        },
        getTotalDiscountPriceDomain: (state) => {
            let total = 0;

            state.domains.forEach((domain) => {
                const price = domain.activeAge.price;
                const discount = domain.activeAge.discount;

                total += (price - (price / 100) * discount)
            })

            return applyDiscount(total, state.promo.discount);
        }
    },
    actions: {
        buyDomain(entity) {
            this.domains.push(entity);
        },
        sellDomain(entity) {
            this.domains = this.domains.filter((domain) => `${domain.root}${domain.tld}` !== `${entity.root}${entity.tld}`);
        },
        setActiveAge(uuid, age, type) {
            if (type === 'domain') {
                const domain = this.domains.filter((domain) => domain.uuid === uuid);

                domain[0].activeAge = age;
            }
        },
        setPromo({value, status, discount}) {
            this.promo.value = value;
            this.promo.status = status;
            this.promo.discount = discount;
        }
    },
});
