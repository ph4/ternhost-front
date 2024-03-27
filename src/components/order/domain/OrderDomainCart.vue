<script>
import BaseButton from "@/components/UI/BaseButton.vue";

import OrderPromo from "@/components/order/OrderPromo.vue";

import {useOrderStore} from "@/stores/useOrderStore.js";

export default {
  name: "OrderDomainCart",
  components: {
    BaseButton,
    OrderPromo,
  },
  data() {
    return {
      store: useOrderStore(),
      isSelectShow: undefined,
    }
  },
  methods: {
    setActiveAge(uuid, age) {
      this.store.setActiveAge(uuid, age, "DOMAIN");
      this.toggleSelect(uuid)
    },
    toggleSelect(uuid) {
      !this.isSelectShow ? this.isSelectShow = uuid : this.isSelectShow = undefined;
    },
  }
}
</script>

<template>
  <li class="domains__group-item order">
    <header class="domains__group-item__header">
      <h1>You Order</h1>
    </header>
    <div class="domains__group-item__body">
      <ul class="orders">
        <li class="orders__item" v-for="goods in this.store.domains" :key="goods.uuid">
          <div class="orders__item-domain">
            <h3>{{ goods.root }}{{ goods.tld }}</h3>
          </div>
          <div class="orders__item-age">
            <!-- select -->
            <div class="select" :class="{show: isSelectShow === goods.uuid}">
              <div class="select-intro" @click="this.toggleSelect(goods.uuid)">
                <h3>{{ goods.activeAge.age }} months</h3>
                <font-awesome-icon icon="fa-solid fa-chevron-down" class="icon"></font-awesome-icon>
              </div>
              <ul class="select-options">
                <li class="select-options__option" v-for="age in goods.ages" :key="age.id"
                    @click="this.setActiveAge(goods.uuid, age)">
                  {{ age.age }} months
                </li>
              </ul>
            </div>
          </div>
          <div class="orders__item-price">
            <h3>${{ goods.activeAge.price }}/yr</h3>
            <h1>${{ this.$discount(goods.activeAge.price, goods.activeAge.discount) }}/yr</h1>
          </div>
        </li>
      </ul>
    </div>
    <footer class="domains__group-item__footer">
      <div class="top">
        <h1>Total</h1>
        <div class="total-price">
          <h1>${{ this.store.getTotalPriceDomain }}</h1>
          <h1>${{ this.store.getTotalDiscountPriceDomain }}</h1>
        </div>
      </div>

      <order-promo></order-promo>

      <div class="continue">
        <router-link to="/order/hosting">
          <base-button class="btn-secondary">Continue</base-button>
        </router-link>
      </div>
    </footer>
  </li>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

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
          .select {
            &.show {
              .select-intro {
                .icon {
                  transform: rotate(180deg);
                }
              }

              .select-options {
                display: block;
              }
            }

            &-intro {
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

            &-options {
              display: none;
              margin-top: 0.125rem;
              width: 100%;
              border-radius: 0.25rem;
              border: 0.063rem solid $gray-200;
              cursor: pointer;

              &__option {
                @include fluid-type($text-sm, $text-base, 500, $gray-200);
                padding: 0.5rem;
                transition: all .2s;

                &:hover {
                  background-color: rgba($blue-200, .10);
                }
              }
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
          .catalog__buy,
          .catalog__sell {
            @include center;
            margin-left: 1.25rem;
            width: 2rem;
            aspect-ratio: 1 / 1;
          }

          .catalog__basket {
            border-radius: 0.25rem;
            background-color: rgba($gray-200, 0.1);

            .icon {
              color: $gray-200;
            }
          }

          .catalog__buy {
            .icon {
              color: $green-2;
              font-size: 1.25rem;
            }
          }

          .catalog__sell {
            .icon {
              color: $red-1;
              font-size: 1.25rem;
            }
          }
        }
      }
    }
  }
}
</style>