<script>
import BaseLogo from "@/components/UI/BaseLogo.vue";

import OrderProduct from "@/components/order/OrderProduct.vue";

import {useOrderStore} from "@/stores/useOrderStore.js";

export default {
  name: "OrderViewPay",
  components: {
    BaseLogo,
    OrderProduct,
  },
  data() {
    return {
      store: useOrderStore()
    }
  }
}
</script>

<template>
  <!-- hero -->
  <section class="hero">
    <div class="container">
      <header class="header">
        <base-logo v2></base-logo>
      </header>

      <div class="order-wrapper">
        <div class="basket">
          <!-- Hosting -->
          <order-product v-for="product in store.hostings" :key="product.uuid"
                         :product="{...product, type: 'HOSTING', name: 'Hosting'}"></order-product>

          <!-- Domain -->

          <!-- Add new product -->
          <router-link to="/order/domain">
            <div class="box add-new-product">
              <h1>
                <font-awesome-icon icon="fa-solid fa-plus" class="icon"></font-awesome-icon>
                Add New Product
              </h1>
            </div>
          </router-link>
        </div>

        <div class="orders hidden">
          <div class="box">
            <header class="box__header">
              <h1>Your Order</h1>
            </header>

            <div class="box__services">
              <header class="box__services-header">
                <h1>Premium Web Hosting 12 month</h1>
                <div class="box__services-header__total">
                  <h3>$34.99</h3>
                  <h3 class="discount">$9.99</h3>
                </div>
              </header>

              <div class="services">
                <ul class="services__group">
                  <li class="services__group-item">
                    <div class="services__group-item__name">
                      <i class="fa-solid fa-check icon"></i>
                      <h3>DDOS protection</h3>
                    </div>
                    <div class="services__group-item__price">
                      <h3>$34.99</h3>
                      <h3 class="discount">$9.99</h3>
                    </div>
                  </li>
                  <li class="services__group-item">
                    <div class="services__group-item__name">
                      <i class="fa-solid fa-check icon"></i>
                      <h3>Daily Backups</h3>
                    </div>
                    <div class="services__group-item__price">
                      <h3>$34.99</h3>
                      <h3 class="discount">$9.99</h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="box__services">
              <header class="box__services-header">
                <h1>Domain testdomain.com for 3 years</h1>
                <div class="box__services-header__total">
                  <h3>$34.99</h3>
                  <h3 class="discount">$9.99</h3>
                </div>
              </header>

              <div class="services">
                <ul class="services__group">
                  <li class="services__group-item">
                    <div class="services__group-item__name">
                      <i class="fa-solid fa-check icon"></i>
                      <h3>Domain SSL For 12 Months</h3>
                    </div>
                    <div class="services__group-item__price">
                      <h3>$34.99</h3>
                      <h3 class="discount">$9.99</h3>
                    </div>
                  </li>
                  <li class="services__group-item">
                    <div class="services__group-item__name">
                      <i class="fa-solid fa-check icon"></i>
                      <h3>Domain WHOIS Privacy Protection</h3>
                    </div>
                    <div class="services__group-item__price">
                      <h3>$34.99</h3>
                      <h3 class="discount">$9.99</h3>
                    </div>
                  </li>
                  <li class="services__group-item">
                    <div class="services__group-item__name">
                      <i class="fa-solid fa-check icon"></i>
                      <h3>Hosting on TernHost DNS servers</h3>
                    </div>
                    <div class="services__group-item__price">
                      <!-- <h3>$34.99</h3> -->
                      <h3 class="discount">$9.99</h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="box__compute">
              <ul class="computes">
                <li class="computes__item">
                  <h3 class="field">Plan Discount - 74%</h3>
                  <h3 class="value saving">-$494.40</h3>
                </li>
                <li class="computes__item">
                  <h3 class="field">Taxes & Fees</h3>
                  <h3 class="value">$0.00</h3>
                </li>
              </ul>
            </div>

            <div class="box__payment">
              <header class="box__payment-header">
                <h1>Total</h1>
                <div class="box__payment-header__total">
                  <h1>$671.52</h1>
                  <h1 class="discount">$177.12</h1>
                </div>
              </header>

              <div class="box__payment-promocode">
                <input type="text" placeholder="Enter Promocode..."/>
                <button><i class="fa-solid fa-plus icon"></i></button>
              </div>

              <div class="box__payment-pay">
                <button class="btn btn-secondary">Pay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

.hero {
  width: 100%;
  background: linear-gradient(180deg, rgba(0, 152, 255, 1) 80%, rgba(255, 255, 255, 1) 80%);
  margin-bottom: 5rem;

  .container {
    height: 100%;

    .header {
      .header__logo {
        @include center;
        padding: 1rem 0;

        h1 {
          @include fluid-type($text-2xl, $text-2xl, 700, $white-100);
          margin-left: 0.5rem;
          text-transform: uppercase;
        }
      }
    }

    .order-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;
      margin-top: 2rem;
      @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr;
      }

      .basket {
        .box {
          padding: 2rem;
          border-radius: 1.875rem;
          background-color: $white-100;
          box-shadow: 0 0.25rem 2rem 0 rgba($black-100, 0.08);
          margin-top: 1rem;
          @media screen and (max-width: 500px) {
            padding: 1rem;
          }

          &:first-child {
            margin-top: 0;
          }

          &__header {
            @include center-y-between;

            &-title {
              @include center-y;

              h1 {
                @include fluid-type($text-3xl, $text-3xl, 700, $blue-200);
              }

              span {
                @include fluid-type($text-xs, $text-xs, 700, $white-100);
                padding: 0.33rem 0.5rem;
                border-radius: 0.25rem;
                background-color: $blue-200;
                margin-left: 0.75rem;
              }
            }

            &-clear {
              @include center;
              width: 3rem;
              aspect-ratio: 1 / 1;
              border-radius: 0.25rem;
              background-color: $white-200;
              cursor: pointer;

              .icon {
                color: $blue-200;
              }
            }
          }

          &__select {
            margin: 1rem 0;

            &-active {
              @include center-y-between;
              padding: 1rem;
              border-radius: 0.25rem;
              border: 0.063rem solid $gray-200;
              cursor: pointer;

              h3 {
                @include fluid-type($text-base, $text-base, 700, $blue-200);

                span {
                  color: $gray-200;

                  &.line-through {
                    text-decoration: line-through;
                  }
                }
              }
            }
          }

          &__services {
            &-header {
              @include center-y-between;

              h3 {
                @include fluid-type($text-base, $text-base, 500, $gray-200);
              }

              &__hide {
                @include center-y;
                cursor: pointer;

                .icon {
                  color: $gray-200;
                  margin-left: 0.25rem;
                }
              }
            }

            .services {
              margin-top: 1rem;

              &__group {
                &-item {
                  @include center-y-between;
                  background-color: $white-200;
                  border-radius: 0.25rem;
                  padding: 1rem;
                  margin-top: 0.25rem;
                  @media screen and (max-width: 500px) {
                    display: block;
                  }

                  &:first-child {
                    margin-top: 0;
                  }

                  &__name {
                    @include center-y;

                    h3 {
                      @include fluid-type($text-base, $text-base, 500, $blue-200);
                      margin-left: 0.75rem;
                    }

                    .icon {
                      width: 1.5rem;
                      aspect-ratio: 1 / 1;
                      font-size: 1.5rem;
                      color: $blue-200;
                    }
                  }

                  &__end {
                    @include center-y;
                    @media screen and (max-width: 500px) {
                      justify-content: space-between;
                    }

                    .service-price {
                      @include center-y;

                      h3 {
                        @include fluid-type($text-base, $text-base, 500, $gray-200);
                        text-decoration: line-through;

                        &.discount {
                          @include fluid-type($text-base, $text-base, 700, $blue-200);
                          text-decoration: none;
                        }

                        &:last-child {
                          margin-left: 0.5rem;
                        }
                      }
                    }

                    .service-switch {
                      width: 3.938rem;
                      height: 1.875rem;
                      border-radius: 3.125rem;
                      background-color: $gray-200;
                      position: relative;
                      margin-left: 0.5rem;
                      cursor: pointer;

                      &::after {
                        content: '';
                        position: absolute;
                        top: 0.188rem;
                        left: 0.188rem;
                        width: 1.5rem;
                        aspect-ratio: 1 / 1;
                        background-color: $white-100;
                        border-radius: 50%;
                      }

                      &.active {
                        background-color: $blue-100;

                        &::after {
                          left: calc(100% - 0.188rem);
                          transform: translateX(-100%);
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          &.add-new-product {
            text-align: center;
            margin-top: 2rem;

            h1 {
              @include fluid-type($text-xl, $text-2xl, 600, $blue-200);
            }
          }
        }
      }

      .orders {
        .box {
          padding: 2rem 0;
          border-radius: 1.875rem;
          background-color: $white-100;
          box-shadow: 0 0.25rem 2rem 0 rgba($black-100, 0.08);

          &__header,
          &__services,
          &__payment {
            padding: 0 2rem;
            @media screen and (max-width: 500px) {
              padding: 0 1rem;
            }
          }

          &__header {
            h1 {
              @include fluid-type($text-3xl, $text-3xl, 700, $blue-200);
            }
          }

          &__services {
            margin-top: 2rem;

            &-header {
              @include center-y-between;
              @media screen and (max-width: 500px) {
                display: block;
              }

              h1 {
                @include fluid-type($text-base, $text-base, 700, $blue-200);
              }

              &__total {
                @include center-y;
                @media screen and (max-width: 500px) {
                  margin-top: 0.5rem;
                }

                h3 {
                  @include fluid-type($text-base, $text-base, 500, $gray-200);
                  text-decoration: line-through;

                  &.discount {
                    @include fluid-type($text-base, $text-base, 700, $blue-200);
                    text-decoration: none;
                  }

                  &:last-child {
                    margin-left: 0.5rem;
                  }
                }
              }
            }

            .services {
              margin-top: 1rem;

              &__group {
                &-item {
                  @include center-y-between;
                  margin-top: 1rem;
                  @media screen and (max-width: 500px) {
                    display: block;
                  }

                  &__name {
                    @include center-y;

                    .icon {
                      color: $green-2;
                      font-size: 0.875rem;
                    }

                    h3 {
                      @include fluid-type($text-base, $text-base, 500, $gray-200);
                      margin-left: 0.5rem;
                    }
                  }

                  &__price {
                    @include center-y;
                    @media screen and (max-width: 500px) {
                      margin-top: 0.5rem;
                    }

                    h3 {
                      @include fluid-type($text-base, $text-base, 500, $gray-200);
                      text-decoration: line-through;

                      &.discount {
                        @include fluid-type($text-base, $text-base, 700, $blue-200);
                        text-decoration: none;
                        margin-left: 0.5rem;
                      }
                    }
                  }
                }
              }
            }
          }

          &__compute {
            margin-top: 2rem;
            border-top: 0.063rem solid $white-7;
            border-bottom: 0.063rem solid $white-7;

            .computes {
              padding: 2rem;
              @media screen and (max-width: 500px) {
                padding: 1rem;
              }

              &__item {
                @include center-y-between;
                justify-content: space-between;
                margin-top: 0.5rem;

                h3 {
                  @include fluid-type($text-lg, $text-lg, 700, $blue-200);

                  &.saving {
                    color: $green-2;
                  }
                }
              }
            }
          }

          &__payment {
            margin-top: 2rem;

            &-header {
              @include center-y-between;

              h1 {
                @include fluid-type($text-xl, $text-3xl, 700, $blue-200);
              }

              &__total {
                @include center-y;

                h1 {
                  @include fluid-type($text-xl, $text-3xl, 500, $gray-200);
                  text-decoration: line-through;

                  &.discount {
                    @include fluid-type($text-xl, $text-3xl, 700, $blue-200);
                    text-decoration: none;
                  }

                  &:last-child {
                    margin-left: 1rem;
                  }
                }
              }
            }

            &-promocode {
              border-radius: 0.25rem;
              border: 0.25rem solid $gray-200;
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

            &-pay {
              button {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>