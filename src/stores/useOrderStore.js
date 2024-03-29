import {defineStore} from 'pinia';
import {applyDiscount} from "@/utils/applyDiscount.js";
import {OrderType} from "@/enums/order.js";
import app from "@/App.vue";

export const useOrderStore = defineStore('order', {
    state: () => ({
        orders: [],
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
                const result = state.orders.filter(domain => `${domain.root}${domain.tld}` === `${entity.root}${entity.tld}`)

                return result.length > 0;
            }
        },
        isEmpty: (state) => {
            return state.orders.length === 0
        },
        getOrdersByCategory: (state) => {
            return (category) => {
                return state.orders.filter((order) => order.type === category);
            }
        },
        getTotalPriceByCategory: (state) => {
            return (category) => {
                const total = state.orders.filter((order) => order.type === category).reduce((acc, value) => acc += value.activeAge.price, 0)

                return parseFloat(total.toFixed(2));
            }
        },
        getTotalDiscountPriceByCategory: (state) => {
            return (category) => {
                const total = state.orders.filter((order) => order.type === category).reduce((acc, value) => {
                    const discountedPrice = applyDiscount(value.activeAge.price, value.activeAge.discount);

                    return acc + discountedPrice;
                }, 0);

                return parseFloat(applyDiscount(total, state.promo.discount).toFixed(2))
            }
        },

        // @FIXME:
        isLatest: (state) => {
            return (state.domains.length + state.hostings.length) === 1
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
        buy(entity) {
            this.orders.push(entity);
        },
        sell(entity) {
            switch (entity.type) {
                case OrderType.DOMAIN:
                    this.orders = this.orders.filter(order => !(order.type === OrderType.DOMAIN && `${order.root}${order.tld}` === `${entity.root}${entity.tld}`));
                    break;
                case OrderType.HOSTING:
                    this.orders = this.orders.filter(order => order.uuid !== entity.uuid);
                    break;
                default:
                    return console.error(`Unknown order type: ${entity.type}`);
            }
        },
        setActiveAge({entity, age}) {
            const order = this.orders.filter((order) => order.uuid === entity.uuid)[0];

            if (order) {
                order.activeAge = age;
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
