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
        isLatest: (state) => {
            return (state.domains.length + state.hostings.length) === 1
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
        },
        getHostingByUUID: (state) => {
            return (uuid) => {
                return state.hostings.filter((hosting) => hosting.uuid === uuid)[0];
            }
        },
        getHostingExtraById: (state) => {
            return (uuid, id) => {
                const entity = state.getHostingByUUID(uuid);

                return entity.extra.filter((extra) => extra.id === id)[0];
            }
        },
        isExsistActiveExtraHosting: (state) => {
            return (uuid, id) => {
                const entity = state.getHostingByUUID(uuid);
                const extra = entity?.activeExtra?.filter((extra) => extra.id === id)[0];

                return extra !== undefined
            }
        }
    },
    actions: {
        buyDomain(entity) {
            this.domains.push(entity);
        },
        sellDomain(entity) {
            this.domains = this.domains.filter((domain) => `${domain.root}${domain.tld}` !== `${entity.root}${entity.tld}`);
        },
        buyHosting(entity) {
            this.hostings.push(entity);
        },
        sellHosting(entity) {
            this.hostings = this.hostings.filter((hosting) => hosting.uuid !== entity.uuid);
        },
        setActiveAge(uuid, age, type) {
            if (type === 'domain') {
                const domain = this.domains.filter((domain) => domain.uuid === uuid);

                domain[0].activeAge = age;
            }

            if (type === 'HOSTING') {
                const hosting = this.getHostingByUUID(uuid);

                hosting.activeAge = age;

                console.log("ashdhajsdbjhkda")
            }
        },
        setPromo({value, status, discount}) {
            this.promo.value = value;
            this.promo.status = status;
            this.promo.discount = discount;
        },
        onExtra({type, uuid, extra}) {
            if (type === "HOSTING") {
                const entity = this.getHostingByUUID(uuid);

                entity.activeExtra ? entity.activeExtra.push(extra) : entity.activeExtra = [extra];
            }
        },
        offExtra({type, uuid, extraId}) {
            if (type === "HOSTING") {
                const entity = this.getHostingByUUID(uuid);

                entity.activeExtra = entity.activeExtra.filter((extra) => extra.id !== extraId);
            }
        }
    },
});
