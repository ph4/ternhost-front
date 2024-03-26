<script>
import BaseButton from "@/components/UI/BaseButton.vue";
import {v4 as uuidv4} from 'uuid';

import {useFakeDomains} from "@/static/domains.js";
import {useOrderStore} from "@/stores/useOrderStore.js";

export default {
  name: "OrderDomain.vue",
  components: {
    BaseButton
  },
  data() {
    return {
      store: useOrderStore(),
      domains: [],
      isPreloading: false,
      root: "",
    }
  },
  methods: {
    loadDomains() {
      if (!this.root.length) return;

      this.isPreloading = true;

      const domains = useFakeDomains();

      if (domains) {
        setTimeout(() => {
          this.domains = domains.map((domain) => {
            return {...domain, root: this.root, uuid: uuidv4(), activeAge: domain.ages[0]}
          })

          this.isPreloading = false;
        }, 500);
      }
    },
    buy(entity) {
      this.store.buyDomain(entity);
      this.store.domains.length >= 1 && this.$emitter.emit('_order_-toggle-cart');
    },
    sell(entity) {
      this.store.sellDomain(entity);
      this.store.domains.length === 0 && this.$emitter.emit('_order_-toggle-cart');
    }
  }
}
</script>

<template>
  <li class="domains__group-item domains-list">
    <header class="domains__group-item__header">
      <h1>Search Your Domain Now</h1>
    </header>
    <div class="domains__group-item__body">
      <div class="search-domain">
        <input type="text" placeholder="Search your domain..." v-model="this.root"/>
        <base-button class="btn-secondary" @click="this.loadDomains">Search</base-button>
      </div>
    </div>

    <div class="preloader" v-if="this.isPreloading">
      <h1>Preloader</h1>
    </div>

    <p class="lol" :class="{ hidden: this.isPreloading }" v-if="!this.domains.length">
      Become the owner of a stylish and memorable domain that will be your digital reflection. Don't miss
      the opportunity to stand out from the crowd – acquire your unique domain right now with a special
      offer.
    </p>

    <div class="catalog" v-if="this.domains.length && !this.isPreloading">
      <ul class="catalog__group">
        <li class="catalog__group-item" v-for="domain in this.domains" :key="domain.uuid">
          <h3>{{ domain.root }}{{ domain.tld }}</h3>
          <div class="catalog__group-item__box">
            <div class="catalog__price">
              <h3>${{ domain.ages[0].price }}/yr.</h3>
              <h1>${{ this.$getPriceWithDiscount(domain.ages[0].price, domain.ages[0].discount) }}/yr.</h1>
            </div>
            <div class="catalog__basket" @click="this.buy(domain)" :class="{hidden: this.store.isPurchased(domain)}">
              <font-awesome-icon
                  icon="fa-solid fa-basket-shopping"
                  class="icon"
                  :class="{hidden: this.store.isPurchased(domain)}"/>
            </div>
            <div class="catalog__actions" :class="{hidden: !this.store.isPurchased(domain)}">
              <font-awesome-icon icon="fa-solid fa-check" class="icon buy"></font-awesome-icon>
              <font-awesome-icon icon="fa-solid fa-xmark" class="icon sell"
                                 @click="this.sell(domain)"></font-awesome-icon>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </li>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

.lol {
  @include fluid-type($text-sm, $text-base, $color: $gray-200);
  margin-top: 2.5rem;
}

.domains__group-item {
  padding: 2.188rem;
  border-radius: 1.875rem;
  background-color: $white-100;
  max-width: 31.25rem;
  width: 100%;
  box-shadow: 0 0.25rem 2.188rem 0 rgba($black-100, 0.08);
  margin: 0 auto;
  align-self: flex-start;

  &.order {
    padding: 0;
    display: flex;
    flex-direction: column;

    .domains__group-item__header {
      padding: 2.188rem 2.188rem 0 2.188rem;
      @media screen and (max-width: 500px) {
        padding: 1rem 1rem 0 1rem;
      }
    }

    .domains__group-item__body {
      padding: 0 2.188rem;
      @media screen and (max-width: 500px) {
        padding: 0 1rem;
      }
    }

    .domains__group-item__footer {
      padding-bottom: 2.188rem;
      margin-top: auto;
      border-top: 0.063rem solid $white-7;

      .top {
        margin: 2.188rem 2.188rem 0 2.188rem;
        @media screen and (max-width: 500px) {
          margin: 1rem 1rem 0 1rem;
        }
      }

      .promocode {
        margin: 2rem 2.188rem;
        @media screen and (max-width: 500px) {
          margin: 1rem;
        }
      }

      .continue {
        margin: 0 2.188rem;
        @media screen and (max-width: 500px) {
          margin: 0 1rem;
        }
      }
    }
  }

  &.domains-list {
    .domains__group-item__body {
      margin: 2.5rem 0;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 1rem;
    border-radius: 1rem;
  }

  &__header {
    h1 {
      @include fluid-type($text-xl, $text-3xl, 700, $blue-200);
    }
  }

  &__body {
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
        display: flex;
        align-items: center;
        @media screen and (max-width: 500px) {
          padding: 0 0.5rem;
        }

        span {
          @include fluid-type($text-sm, $text-base);
        }

        .icon {
          margin-left: 1rem;
        }
      }
    }

    p {
      @include fluid-type($text-sm, $text-base, $color: $gray-200);
      margin-top: 2.5rem;
    }

    .orders {
      &__item {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 2rem;
        padding: 1rem 0;
        @media screen and (max-width: 500px) {
          grid-template-columns: 1fr;
          &:first-child {
            border-top: 0;
          }
          border-top: 0.063rem solid $white-7;
        }

        &-domain {
          @include center-y;

          h3 {
            @include fluid-type($text-sm, $text-base, 500, $gray-200);
          }
        }

        &-age {
          &__active {
            @include center-y-between;
            width: 100%;
            padding: 0.5rem;
            border-radius: 0.25rem;
            border: 0.063rem solid $gray-200;
            cursor: pointer;

            h3 {
              @include fluid-type($text-sm, $text-base, 500, $gray-200);
            }

            .icon {
              color: $gray-200;
            }
          }
        }

        &-price {
          text-align: right;

          h3 {
            @include fluid-type($text-xs, $text-xs, 500, $gray-200);
            text-decoration: line-through;
          }

          h1 {
            @include fluid-type($text-base, $text-lg, 700, $blue-200);
            margin-top: 0.25rem;
          }
        }
      }
    }

    .orders-empty {
      margin-bottom: 1rem;

      p {
        @include fluid-type($text-sm, $text-xl, 500, $gray-200);
      }
    }
  }

  &__footer {
    h3 {
      @include fluid-type($text-base, $text-base, 500, $blue-200);
      text-align: center;
      margin-top: 1rem;
    }

    .top {
      @include center-y-between;

      h1 {
        @include fluid-type($text-xl, $text-3xl, 700, $blue-200);
      }

      .total-price {
        @include center-y;

        h1 {
          &:first-child {
            @include fluid-type($text-xl, $text-3xl, $color: $gray-200);
            margin-right: 0.5rem;
            text-decoration: line-through;
          }
        }
      }
    }

    .promocode {
      border-radius: 0.25rem;
      border: 0.125rem solid $gray-200;
      display: flex;
      justify-content: space-between;
      margin: 2rem 0;

      input {
        @include fluid-type($text-base, $text-base, $color: $gray-200);
        padding: 0 1rem;
      }

      button {
        background-color: $gray-200;
        padding: 1rem;
        color: $white-100;
      }
    }

    .continue {
      button {
        width: 100%;
      }
    }
  }

  .catalog {
    &__group {
      &-item {
        @include center-y-between;
        border: 0.063rem solid $white-200;
        border-bottom: 0;
        padding: 1rem;

        &:last-child {
          border-bottom: 0.063rem solid $white-200;
        }

        h3 {
          @include fluid-type($text-sm, $text-base, 500, $gray-200);
        }

        &__box {
          @include center-y;

          .catalog__price {
            text-align: right;

            h3 {
              @include fluid-type($text-xs, $text-xs, 500, $gray-200);
              text-decoration: line-through;
            }

            h1 {
              @include fluid-type($text-base, $text-lg, 700, $blue-200);
              margin-top: 0.25rem;
            }
          }

          .catalog__basket,
          .catalog__actions {
            @include center;
            margin-left: 1.25rem;
            width: 2rem;
            aspect-ratio: 1 / 1;
            cursor: pointer;
          }

          .catalog__basket {
            border-radius: 0.25rem;
            background-color: rgba($gray-200, 0.1);

            .icon {
              color: $gray-200;

            }
          }

          .catalog__actions {
            &:hover {
              .icon.buy {
                display: none;
              }

              .icon.sell {
                display: block;
              }
            }

            .icon {
              font-size: 1.25rem;

              &.buy {
                color: $green-2;
              }

              &.sell {
                color: $red-1;
                display: none;
              }
            }
          }
        }
      }
    }
  }
}
</style>