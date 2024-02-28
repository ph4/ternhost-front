<template>
  <li class="domains__group-item">
    <header class="domains__group-item__header">
      <h1>Search Your Domain Now</h1>
    </header>
    <div class="domains__group-item__body">
      <div class="search-domain">
        <input type="text" placeholder="Search your domain..." v-model="domainName" />
        <base-button class="btn-secondary" @click="loadDomains">Search</base-button>
      </div>

      <footer class="domains__group-item__footer" v-if="!domains.length">
        <p>
          Become the owner of a stylish and memorable domain that will be your digital reflection. Don't miss the
          opportunity to stand out from the crowd – acquire your unique domain right now with a special offer.
        </p>
        <base-button class="btn-secondary">Next</base-button>
      </footer>

      <div class="preloader" v-if="isLoading">
        <img :src="assets.PreloaderGif" alt="Preloader" class="preloader__gif" />
      </div>

      <div class="catalog" v-else>
        <ul class="catalog__group">
          <li class="catalog__group-item" v-for="domain in domains" :key="domain.id">
            <div class="catalog__group-item__name">
              <h3>{{ domain.root }}{{ domain.tld }}</h3>
            </div>
            <div class="catalog__group-item__box">
              <div class="catalog__price">
                <h3>${{ getOriginalPrice(domain) }}/yr</h3>
                <h1>${{ getDiscountPrice(domain) }}/yr</h1>
              </div>
              <div
                class="catalog__cart"
                :class="{ show: !isAvailablePurchase(`${domain.root}${domain.tld}`) }"
                @click="addToCart(domain)"
              >
                <font-awesome-icon icon="fa-solid fa-basket-shopping" class="icon"></font-awesome-icon>
              </div>
              <div class="catalog__action" :class="{ show: isAvailablePurchase(`${domain.root}${domain.tld}`) }">
                <div class="catalog__action-buy">
                  <font-awesome-icon icon="fa-solid fa-check" class="icon buy"></font-awesome-icon>
                </div>
                <div class="catalog__action-remove" @click="removeFromCart(`${domain.root}${domain.tld}`)">
                  <font-awesome-icon icon="fa-solid fa-xmark" class="icon remove"></font-awesome-icon>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';

import { useFakeDomains } from '@/hooks/useFakeDomains.js';
import { useCartStore } from '@/stores/useCartStore.js';

import PreloaderGif from '@/assets/gifs/other/preloader.gif';

export default {
  name: 'OrderSearchDomain',
  components: {
    BaseButton,
  },
  data() {
    return {
      domainName: '',
      domains: [],
      isLoading: undefined,
      assets: {
        PreloaderGif,
      },
    };
  },
  methods: {
    loadDomains() {
      if (this.domainName.length) {
        this.isLoading = true;

        const domains = useFakeDomains(this.domainName);

        if (domains) {
          this.domains = domains;
          this.domainName = '';

          setTimeout(() => {
            this.isLoading = false;
          }, 500);
        }
      }
    },
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

      return store.domains.some((domain) => `${domain.root}${domain.tld}` === fullDomain);
    },
    getOriginalPrice(domain) {
      return domain.ages[0].price;
    },
    getDiscountPrice(domain) {
      const price = domain.ages[0].price;
      const discount = domain.ages[0].discount;

      return (price - (price / 100) * discount).toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.domains__group-item {
  padding: 2.188rem;
  border-radius: 1.875rem;
  background-color: $white-100;
  max-width: 31.25rem;
  width: 100%;
  box-shadow: 0 0.25rem 2.188rem 0 rgba($black-100, 0.08);
  margin: 0 auto;
  align-self: flex-start;
  @media screen and (max-width: 500px) {
    padding: 1.25rem;
    border-radius: 1rem;
  }
  &__header {
    h1 {
      @include fluid-type($text-xl, $text-3xl, 700, $blue-200);
    }
  }
  &__body {
    margin-top: 1rem;
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
        padding: 0 1rem;
        display: flex;
        align-items: center;
        @media screen and (max-width: 500px) {
          padding: 0 0.5rem;
        }
        span {
          @include fluid-type($text-sm, $text-base, 700, $white-100);
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
  }
  &__footer {
    button {
      width: 100%;
      box-shadow: 0 0.25rem 1.25rem 0 rgba(#779341, 0.3);
      margin-top: 1rem;
    }
  }
  .preloader {
    @include center;
    width: 100%;
    height: 28.063rem;
    &__gif {
      width: 100%;
    }
  }
  .catalog {
    margin-top: 1rem;
    max-height: 28.063rem;
    overflow-y: scroll;
    &__group {
      &-item {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
        justify-content: space-between;
        border: 0.063rem solid $white-200;
        border-bottom: 0;
        padding: 0 1rem;
        height: 4rem;
        &:last-child {
          border-bottom: 0.063rem solid $white-200;
        }
        &__name {
          @include center-y;
          overflow: hidden;
          h3 {
            @include fluid-type($text-sm, $text-base, 500, $gray-200);
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
        &__box {
          @include center-y;
          justify-content: flex-end;
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
}
</style>
