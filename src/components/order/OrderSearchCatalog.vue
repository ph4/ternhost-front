<template>
  <div class="catalog">
    <ul class="catalog__group">
      <li class="catalog__group-item" v-for="domain in domains" :key="domain.id">
        <h3>{{ domain.second }}{{ domain.top }}</h3>
        <div class="catalog__group-item__box">
          <div class="catalog__price">
            <h3>${{ domain.originalPrice }}/yr</h3>
            <h1>${{ domain.discountPrice }}/yr</h1>
          </div>
          <div
            class="catalog__cart"
            :class="{ show: !isAvailablePurchase(`${domain.second}${domain.top}`) }"
            @click="addToCart(domain)"
          >
            <font-awesome-icon icon="fa-solid fa-basket-shopping" class="icon"></font-awesome-icon>
          </div>
          <div class="catalog__action" :class="{ show: isAvailablePurchase(`${domain.second}${domain.top}`) }">
            <div class="catalog__action-buy">
              <font-awesome-icon icon="fa-solid fa-check" class="icon buy"></font-awesome-icon>
            </div>
            <div class="catalog__action-remove" @click="removeFromCart(`${domain.second}${domain.top}`)">
              <font-awesome-icon icon="fa-solid fa-xmark" class="icon remove"></font-awesome-icon>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/useCartStore.js';

export default {
  name: 'OrderSearchCatalog',
  props: {
    domains: Array,
  },
  methods: {
    addToCart(domain) {
      const store = useCartStore();

      store.addToCart(domain);
      store.domains.length && this.$emitter.emit('_animate_-show-cart');
    },
    removeFromCart(fullDomain) {
      const store = useCartStore();

      store.removeFromCart(fullDomain);
      !store.domains.length && this.$emitter.emit('_animate_-hide-cart');
    },
    isAvailablePurchase(fullDomain) {
      const store = useCartStore();

      return store.domains.some((domain) => `${domain.second}${domain.top}` === fullDomain);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.catalog {
  margin-top: 1rem;
  max-height: 28.063rem;
  overflow-y: scroll;
  &__group {
    &-item {
      @include center-y-between;
      border: 0.063rem solid $white-200;
      border-bottom: 0;
      padding: 0 1rem;
      height: 4rem;
      &:last-child {
        border-bottom: 0.063rem solid $white-200;
      }
      h3 {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
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
        .catalog__cart,
        .catalog__action {
          display: none;
          &.show {
            @include center;
          }
        }
        .catalog__cart {
          margin-left: 1.25rem;
          width: 2rem;
          aspect-ratio: 1 / 1;
          cursor: pointer;
          border-radius: 0.25rem;
          background-color: rgba($gray-200, 0.1);
          .icon {
            color: $gray-200;
          }
        }
        .catalog__action {
          &-buy,
          &-remove {
            @include center;
            margin-left: 1.25rem;
            width: 2rem;
            aspect-ratio: 1 / 1;
            cursor: pointer;
            .icon {
              font-size: 1.25rem;
              &.buy {
                color: $green-2;
              }
              &.remove {
                color: $red-1;
              }
            }
          }
          &-remove {
            display: none;
          }
          &:hover {
            .catalog__action-buy {
              display: none;
            }
            .catalog__action-remove {
              @include center;
            }
          }
        }
      }
    }
  }
}
</style>
