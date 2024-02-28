<template>
  <li class="domains__group-item order">
    <header class="domains__group-item__header">
      <h1>You Order</h1>
    </header>
    <div class="domains__group-item__body">
      <ul class="orders">
        <li class="orders__item" v-for="(domain, index) in store.domains">
          <div class="orders__item-domain">
            <h3>{{ domain.root }}{{ domain.tld }}</h3>
          </div>

          <order-select
            :index="index"
            :isShow="index === activeSelect"
            :domain="`${domain.root}${domain.tld}`"
          ></order-select>

          <div class="orders__item-price">
            <h3>${{ getOriginalPrice(domain) }}</h3>
            <h1>${{ getDiscountPrice(domain) }}</h1>
          </div>
        </li>
      </ul>
    </div>
    <footer class="domains__group-item__footer">
      <div class="top">
        <h1>Total</h1>
        <div class="total-price">
          <!-- <h1>${{ getTotalOriginalPrice }}</h1> -->
          <!-- <h1>${{ getTotalDiscountPrice }}</h1> -->
        </div>
      </div>
      <div class="promocode">
        <input type="text" placeholder="Enter Promocode..." />
        <font-awesome-icon icon="fa-solid fa-plus" class="icon"></font-awesome-icon>
      </div>
      <div class="continue">
        <base-button class="btn btn-secondary">Continue</base-button>
      </div>
    </footer>
  </li>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';

import OrderSelect from './OrderSelect.vue';

import { useCartStore } from '@/stores/useCartStore.js';

export default {
  name: 'OrderCartDomain',
  components: {
    BaseButton,
    OrderSelect,
  },
  data() {
    return {
      store: null,
      activeSelect: null,
    };
  },
  created() {
    this.store = useCartStore();
  },
  mounted() {
    this.$emitter.on('_order_-toggle-select', (index) => this.toggleSelect(index));
  },
  methods: {
    toggleSelect(index) {
      index !== this.activeSelect ? (this.activeSelect = index) : (this.activeSelect = null);
    },
    getOriginalPrice(domain) {
      return domain.ages.filter((age) => age.isActive === true)[0].price;
    },
    getDiscountPrice(domain) {
      const activeAge = domain.ages.filter((age) => age.isActive === true)[0].price;
      return (activeAge - (activeAge / 100) * 40).toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.domains__group-item {
  border-radius: 1.875rem;
  background-color: $white-100;
  max-width: 31.25rem;
  width: 100%;
  box-shadow: 0 0.25rem 2.188rem 0 rgba($black-100, 0.08);
  margin: 0 auto;
  &.order {
    padding: 0;
    // display: flex;
    // flex-direction: column;
    display: none;
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
    height: 100%;
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
      margin-top: 1rem;
      max-height: 16.5rem;
      height: 100%;
      overflow-y: scroll;
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
          overflow: hidden;
          h3 {
            @include fluid-type($text-sm, $text-base, 500, $gray-200);
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
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
      .icon {
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
}
</style>
