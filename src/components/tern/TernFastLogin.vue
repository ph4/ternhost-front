<template>
  <li class="profiles__row-item">
    <header class="profiles__row-item__header">
      <font-awesome-icon icon="fa-solid fa-circle-xmark" class="icon" />
    </header>
    <div class="profiles__row-item__person">
      <img :src="assets.DefaultPersonImage" alt="Icon" />
    </div>
    <footer class="profiles__row-item__footer">
      <h1>Your Account</h1>
      <h3>Active 1 days ago</h3>
    </footer>
  </li>
</template>

<script>
import DefaultPersonImage from '@/assets/images/login/login-person.jpg';

export default {
  name: 'TernFastLogin',
  data() {
    return {
      assets: {
        DefaultPersonImage,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.profiles__row-item {
  border-radius: 0.625rem;
  background-color: $white-200;
  padding: 0.625rem;
  display: inline-block;
  cursor: pointer;
  flex-basis: 9.375rem;
  &.template {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .profiles__row-item__person {
      .icon {
        border: 0.188rem solid $gray-100;
        padding: 1.063rem;
        color: $gray-100;
        border-radius: 50%;
        font-size: $text-2xl;
      }
    }
  }
  &__person,
  &__footer {
    @include center-col;
  }
  &__header {
    display: flex;
    justify-content: flex-end;
    .icon {
      color: $gray-100;
    }
  }
  &__person {
    margin: 0.625rem 0;
    img {
      width: 4.75rem;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
    }
  }
  &__footer {
    text-align: center;
    h1 {
      @include fluid-type($text-base, $text-base, 500);
    }
    h3 {
      @include fluid-type($text-sm, $text-sm, 300, $gray-100);
      margin-top: 0.313rem;
    }
  }
}
</style>
