import {defineStore} from 'pinia';
import {applyDiscount} from "@/utils/applyDiscount.js";

export const useOrderStore = defineStore('order', {
    state: () => ({
        domains: [],
        hostings: [],
        promo: {
            value: "",
            status: 0,
            discount: 0,
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

            // return applyDiscount(total, state.promo.discount);
            return parseFloat(total.toFixed(2));
        },
        getTotalPriceHosting: (state) => {
            let total = 0;

            state.hostings.forEach((hosting) => total += hosting.activeAge.price);

            // return applyDiscount(total, state.promo.discount);
            return parseFloat(total.toFixed(2));
        },
        getTotalPriceHostingExtra: (state) => {
            return state.hostings.activeExtra?.reduce((acc, item) => acc + item.price, 0);
        },
        getTotalDiscountPriceDomain: (state) => {
            let total = 0;

            state.domains.forEach((domain) => {
                const price = domain.activeAge.price;
                const discount = domain.activeAge.discount;

                total += (price - (price / 100) * discount)
            })

            // return applyDiscount(total, state.promo.discount);
            return parseFloat(total.toFixed(2));
        },
        getHostingByUUID: (state) => {
            return (uuid) => {
                return state.hostings.filter((hosting) => hosting.uuid === uuid)[0];
            }
        },
        getDomainByUUID: (state) => {
            return (uuid) => {
                return state.domains.filter((domain) => domain.uuid === uuid)[0];
            }
        },
        getHostingExtraById: (state) => {
            return (uuid, id) => {
                const entity = state.getHostingByUUID(uuid);

                return entity.extra.filter((extra) => extra.id === id)[0];
            }
        },
        getDomainExtraById: (state) => {
            return (uuid, id) => {
                const entity = state.getDomainByUUID(uuid);

                return entity.extra.filter((extra) => extra.id === id)[0];
            }
        },
        isExsistActiveExtraHosting: (state) => {
            return (uuid, id, type) => {
                const entity = type === "DOMAIN" ? state.getDomainByUUID(uuid) : state.getHostingByUUID(uuid);

                const extra = entity?.activeExtra?.filter((extra) => extra.id === id)[0];

                return extra !== undefined
            }
        },
        getTotal: (state) => {
            let total = 0;

            const totalHosting = state.hostings.map(hosting => {
                const activeAgePrice = hosting.activeAge.price;

                let totalExtraPrice = 0;
                if (hosting.activeExtra) {
                    totalExtraPrice = hosting.activeExtra.reduce((acc, extra) => {
                        const discountedPrice = extra.price * (1 - extra.discount / 100);
                        return acc + discountedPrice;
                    }, 0);
                }

                const totalPrice = activeAgePrice + totalExtraPrice;
                return {
                    hostingId: hosting.id,
                    total: totalPrice
                };
            });

            const totalDomain = state.domains.map(domain => {
                const activeAgePrice = domain.activeAge.price;

                let totalExtraPrice = 0;
                if (domain.activeExtra) {
                    totalExtraPrice = domain.activeExtra.reduce((acc, extra) => {
                        const discountedPrice = extra.price * (1 - extra.discount / 100);
                        return acc + discountedPrice;
                    }, 0);
                }

                const totalPrice = activeAgePrice + totalExtraPrice;
                return {
                    domainId: domain.id,
                    total: totalPrice
                };
            });

            total += totalHosting.reduce((acc, entity) => acc += entity.total, 0);
            total += totalDomain.reduce((acc, entity) => acc += entity.total, 0);

            return total;
        },
        getTotalDiscount: (state) => {
            const total = state.getTotal;

            return applyDiscount(total, state.promo.discount);
        },
        saved: (state) => {
            const total = state.getTotal;
            const totalDiscount = applyDiscount(total, state.promo.discount);
            const save = total - totalDiscount;

            return save;
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
            if (type === 'DOMAIN') {
                const domain = this.domains.filter((domain) => domain.uuid === uuid);

                domain[0].activeAge = age;
            }

            if (type === 'HOSTING') {
                const hosting = this.getHostingByUUID(uuid);

                hosting.activeAge = age;
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
            } else {
                const entity = this.getDomainByUUID(uuid);

                entity.activeExtra ? entity.activeExtra.push(extra) : entity.activeExtra = [extra];
            }
        },
        offExtra({type, uuid, extraId}) {
            if (type === "HOSTING") {
                const entity = this.getHostingByUUID(uuid);

                entity.activeExtra = entity.activeExtra.filter((extra) => extra.id !== extraId);
            } else {
                const entity = this.getDomainByUUID(uuid);

                entity.activeExtra = entity.activeExtra.filter((extra) => extra.id !== extraId);
            }
        }
    },
});
