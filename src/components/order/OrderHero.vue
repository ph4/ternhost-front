<template>
  <section class="hero">
    <base-container>
      <base-logo :v2="true"></base-logo>

      <div class="hero-text">
        <slot name="hero-text"></slot>
      </div>

      <div class="domains">
        <ul class="domains__group">
          <li class="domains__group-item">
            <header class="domains__group-item__header">
              <h1>Search Your Domain Now</h1>
            </header>
            <div class="domains__group-item__body">
              <div class="search-domain">
                <input type="text" placeholder="Search your domain..." v-model="domainName" />
                <base-button class="btn-secondary" @click="findDomains">Search</base-button>
              </div>

              <footer class="domains__group-item__footer" v-if="!domains.length">
                <p>
                  Become the owner of a stylish and memorable domain that will be your digital reflection. Don't miss
                  the opportunity to stand out from the crowd – acquire your unique domain right now with a special
                  offer.
                </p>
                <base-button class="btn-secondary">Next</base-button>
              </footer>

              <div class="catalog" v-else>
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
                      <div
                        class="catalog__action"
                        :class="{ show: isAvailablePurchase(`${domain.second}${domain.top}`) }"
                      >
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
            </div>
          </li>
          <li class="domains__group-item">
            <header class="domains__group-item__header">
              <h1>Transfer Your Domain Now</h1>
            </header>
            <div class="domains__group-item__body">
              <div class="search-domain">
                <input type="text" placeholder="Search your domain..." />
              </div>
              <p>
                Our powerful infrastructure ensures stability and high performance, while our support experts are ready
                to provide you with reliable service. Transfer your domain to our hosting right now.
              </p>
            </div>
            <footer class="domains__group-item__footer">
              <base-button class="btn-secondary">Next</base-button>
            </footer>
          </li>
        </ul>
      </div>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import BaseLogo from '@/components/UI/BaseLogo.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

import { useFakeDomains } from '@/hooks/useFakeDomains.js';

export default {
  name: 'OrderHero',
  components: {
    BaseContainer,
    BaseLogo,
    BaseButton,
  },
  data() {
    return {
      domainName: '',
      domains: [],
      cart: [],
    };
  },
  methods: {
    findDomains() {
      const domains = useFakeDomains(this.domainName);

      this.domains = domains;
      this.domainName = '';
    },
    addToCart(domain) {
      this.cart.push(domain);
    },
    removeFromCart(website) {
      this.cart = this.cart.filter((domain) => `${domain.second}${domain.top}` !== website);
    },
    isAvailablePurchase(website) {
      return this.cart.some((domain) => `${domain.second}${domain.top}` === website);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.hero {
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 152, 255, 1) 80%, rgba(255, 255, 255, 1) 80%);
  .container {
    height: 100%;
    .header {
      &__logo {
        @include center;
        padding: 1rem 0;
        h1 {
          @include fluid-type($text-2xl, $text-2xl, 700, $white-100);
          margin-left: 0.5rem;
          text-transform: uppercase;
        }
      }
    }
    .hero-text {
      margin-top: 3.125rem;
      text-align: center;
    }
    .domains {
      width: 100%;
      margin-top: 5rem;
      &__group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 3rem;
        @media screen and (max-width: 1100px) {
          grid-template-columns: 1fr;
        }
        &-item {
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
            margin-top: 2.5rem;
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
              margin-top: 1rem;
            }
          }
          &__footer {
            button {
              width: 100%;
              box-shadow: 0 0.25rem 1.25rem 0 rgba(#779341, 0.3);
              margin-top: 1rem;
            }
          }
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
        }
      }
    }
  }
}
</style>
