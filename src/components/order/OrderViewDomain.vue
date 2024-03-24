<script>
import OrderFeature from "@/components/order/OrderFeature.vue";
import OrderPass from "@/components/order/OrderPass.vue";
import OrderDomain from "@/components/order/OrderDomain.vue";
import OrderTransfer from "@/components/order/OrderTransfer.vue";

import BaseContainer from "@/components/UI/BaseContainer.vue";
import BaseLogo from "@/components/UI/BaseLogo.vue";
import BaseButton from "@/components/UI/BaseButton.vue";

export default {
  name: "OrderViewDomain.vue",
  components: {
    BaseLogo,
    BaseContainer,
    BaseButton,
    OrderFeature,
    OrderPass,
    OrderDomain,
    OrderTransfer
  }
}
</script>

<template>
  <section class="hero">
    <base-container>
      <header class="header">
        <base-logo v2></base-logo>
      </header>

      <order-feature>
        <template #feature>
          <h1>Moving forward, let's configure your domain for you.</h1>
          <h3>
            Your domain serves as your website's address.<br/>You have the option to generate a new domain, utilize
            an existing <br/>one, or decide on one later.
          </h3>
        </template>
      </order-feature>

      <div class="domains">
        <ul class="domains__group">
          <order-domain></order-domain>

          <order-transfer></order-transfer>
        </ul>
      </div>
    </base-container>
  </section>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

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

      h1 {
        @include fluid-type($text-2xl, $text-4xl, 700, $white-100);
      }

      h3 {
        @include fluid-type($text-base, $text-2xl, 500, $white-100);
        margin-top: 1.875rem;
      }
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
          align-self: flex-start;
          padding: 2.188rem;
          border-radius: 1.875rem;
          background-color: $white-100;
          max-width: 31.25rem;
          width: 100%;
          box-shadow: 0 0.25rem 2.188rem 0 rgba($black-100, 0.08);
          margin: 0 auto;
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
              margin-top: 2.5rem;
            }
          }

          &__footer {
            button {
              width: 100%;
              box-shadow: 0 0.25rem 1.25rem 0 rgba(#779341, 0.3);
            }
          }
        }
      }
    }
  }
}
</style>