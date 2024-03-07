<template>
  <div class="box">
    <header class="box__header">
      <div class="box__header-title">
        <h1>Hosting</h1>
        <span>Premium</span>
      </div>
      <div class="box__header-clear">
        <i class="fa-solid fa-trash-can icon"></i>
        <font-awesome-icon icon="fa-solid fa-trash-can" class="icon"></font-awesome-icon>
      </div>
    </header>

    <div class="box__select">
      <div class="box__select-active">
        <h3>
          <span>12 month / <span class="line-through">$199.50</span></span> $4.99
        </h3>
        <font-awesome-icon icon="fa-solid fa-chevron-up" class="icon"></font-awesome-icon>
      </div>
    </div>

    <div class="box__services">
      <header class="box__services-header">
        <h3>More information about the domain service</h3>
        <div class="box__services-header__hide">
          <h3>Hide</h3>
          <font-awesome-icon icon="fa-solid fa-chevron-up" class="icon"></font-awesome-icon>
        </div>
      </header>

      <div class="services">
        <ul class="services__group">
          <li class="services__group-item">
            <div class="services__group-item__name">
              <h3>Web Hosting</h3>
            </div>
            <div class="services__group-item__end">
              <div class="service-price">
                <h3>$34.99</h3>
                <h3 class="discount">$9.99</h3>
              </div>
              <div class="service-switch active"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderPayGoods',
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

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
    h1 {
      @include fluid-type($text-xl, $text-2xl, 600, $blue-200);
    }
  }
}
</style>
