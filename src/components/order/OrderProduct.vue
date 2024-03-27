<script>
import BaseSwitch from "@/components/UI/BaseSwitch.vue";
import {useOrderStore} from "@/stores/useOrderStore.js";

export default {
  name: "OrderProduct",
  props: {
    product: Object
  },
  components: {
    BaseSwitch
  },
  data() {
    return {
      store: useOrderStore(),
      isShowExtra: false,
      isShowSelect: false,
    }
  },
  computed: {
    option() {
      if (this.product.type === "DOMAIN") {
        return (entity) => entity.age;
      }
      return (entity) => entity.duration;
    },
    options() {
      if (this.product.type === "DOMAIN") {
        return this.product.ages;
      }
      return this.product.prices;
    },
    age() {
      if (this.product.type === "DOMAIN") {
        return this.product.activeAge.age;
      }
      return this.product.activeAge.duration;
    },
    title() {
      if (this.product.type === 'DOMAIN') {
        return `${this.product.root}${this.product.tld}`;
      }
      return this.product.title;
    }
  },
  methods: {
    toggleExtra() {
      this.isShowExtra = !this.isShowExtra;
    },
    switchOn(id) {
      if (this.product.type === "DOMAIN") {
        const options = {
          type: "DOMAIN",
          uuid: this.product.uuid,
          extra: this.store.getDomainExtraById(this.product.uuid, id)
        }

        this.store.onExtra(options);
      } else {
        const options = {
          type: "HOSTING",
          uuid: this.product.uuid,
          extra: this.store.getHostingExtraById(this.product.uuid, id),
        }

        this.store.onExtra(options);
      }
    },
    switchOff(id) {
      if (this.product.type === "DOMAIN") {
        const options = {
          type: "DOMAIN",
          uuid: this.product.uuid,
          extraId: id
        }

        this.store.offExtra(options);
      } else {
        const options = {
          type: "HOSTING",
          uuid: this.product.uuid,
          extraId: id
        }

        this.store.offExtra(options);
      }
    },
    isEnabledSwitch(id) {
      return this.store.isExsistActiveExtraHosting(this.product.uuid, id, this.product.type);
    },
    toggleSelect() {
      this.isShowSelect = !this.isShowSelect;
    },
    setActiveAge(age) {
      if (this.product.type === "DOMAIN") {
        this.store.setActiveAge(this.product.uuid, age, "DOMAIN")
      } else {
        this.store.setActiveAge(this.product.uuid, age, "HOSTING")
      }

      this.isShowSelect = false;
    },
    remove() {
      if (this.store.isLatest) {
        this.$emitter.emit("_order_-toggle-modal", {product: this.product, type: this.product.type});
      } else {
        if (this.product.type === "HOSTING") {
          this.store.sellHosting(this.product)
        } else {
          this.store.sellDomain(this.product)
        }
      }
    }
  }
}
</script>

<template>
  <div class="box">
    <header class="box__header">
      <div class="box__header-title">
        <h1>{{ this.product.name }}</h1>
        <span>{{ this.title }}</span>
      </div>
      <div class="box__header-clear" @click="this.remove">
        <font-awesome-icon icon="fa-solid fa-trash-can" class="icon"></font-awesome-icon>
      </div>
    </header>

    <div class="box__select">
      <div class="select" :class="{show: this.isShowSelect}">
        <div class="select-intro" @click="this.toggleSelect">
          <h3>
            {{ this.age }} months /
            <span class="line-through">${{ this.product.activeAge.price }} </span>
            <span class="discount">${{
                this.$discount(this.product.activeAge.price, this.product.activeAge.discount)
              }}</span>
          </h3>
          <font-awesome-icon icon="fa-solid fa-chevron-down" class="icon"></font-awesome-icon>
        </div>
        <ul class="select-options">
          <li class="select-options__option" v-for="price in this.options" :key="price.id"
              @click="this.setActiveAge(price)">
            <h3>
              {{ this.option(price) }} months /
              <span class="line-through">${{ price.price }} </span>
              <span class="discount">${{
                  this.$discount(price.price, price.discount)
                }}</span>
            </h3>
          </li>
        </ul>
      </div>
    </div>

    <div class="box__services">
      <header class="box__services-header">
        <h3>More information about this product</h3>
        <div class="box__services-header__hide" @click="this.toggleExtra">
          <h3>{{ this.isShowExtra ? "Hide" : "Show" }}</h3>
          <font-awesome-icon icon="fa-solid fa-chevron-up" class="icon" v-if="this.isShowExtra"></font-awesome-icon>
          <font-awesome-icon icon="fa-solid fa-chevron-down" class="icon" v-else></font-awesome-icon>
        </div>
      </header>

      <div class="services" v-if="this.isShowExtra">
        <ul class="services__group">
          <li class="services__group-item" v-for="extra in this.product.extra" :key="extra.key">
            <div class="services__group-item__name">
              <!--              <font-awesome-icon icon="fa-solid fa-basket-shopping" class="icon"></font-awesome-icon>-->
              <h3>{{ extra.title }}</h3>
            </div>
            <div class="services__group-item__end">
              <div class="service-price">
                <h3>${{ extra.price }}</h3>
                <h3 class="discount">${{ this.$discount(extra.price, extra.discount) }}</h3>
              </div>
              <base-switch
                  :id="extra.id"
                  :on="this.switchOn"
                  :off="this.switchOff"
                  :is-enabled="this.isEnabledSwitch(extra.id)"
              ></base-switch>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/common/all";

.select {
  padding: 1rem 0;

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
      @include fluid-type($text-sm, $text-base, 700, $gray-200);

      span {
        &.line-through {
          text-decoration: line-through;
        }

        &.discount {
          color: $blue-200;
          margin-left: 0.25rem;
        }
      }
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
      @include fluid-type($text-sm, $text-base, 700, $gray-200);
      padding: 0.5rem;
      transition: all .2s;

      &:hover {
        background-color: rgba($blue-200, .10);
      }

      h3 {
        span {
          &.line-through {
            text-decoration: line-through;
          }

          &.discount {
            color: $blue-200;
            margin-left: 0.25rem;
          }
        }
      }
    }
  }
}

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
          }
        }
      }
    }
  }

  &.add-new-product {
    text-align: center;

    h1 {
      @include fluid-type($text-xl, $text-2xl, 600, $blue-200);
    }
  }
}
</style>