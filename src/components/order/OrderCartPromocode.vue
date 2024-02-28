<template>
  <div
    class="promocode"
    :class="{
      focus: promocode.length,
      valid: UI.isValid,
      invalid: UI.isInvalid,
    }"
  >
    <input type="text" placeholder="Enter Promocode..." v-model="promocode" />
    <font-awesome-icon icon="fa-solid fa-plus" class="icon" @click="sendPromocode"></font-awesome-icon>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/useCartStore.js';

export default {
  name: 'OrderCartPromocode',
  data() {
    return {
      promocode: '',
      UI: {
        isValid: undefined,
        isInvalid: undefined,
      },
    };
  },
  methods: {
    sendPromocode() {
      // ...
      const fakeResponce = {
        ok: true,
        discount: 90,
      };

      fakeResponce.ok ? this.valid(fakeResponce.discount) : this.invalid();
    },
    valid(discount) {
      const store = useCartStore();

      store.setDiscount(discount);

      this.promocode = '';
      this.UI.isValid = true;
    },
    invalid() {
      this.UI.isInvalid = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.promocode {
  border-radius: 0.25rem;
  border: 0.125rem solid $gray-200;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  &.focus {
    border: 0.125rem solid $blue-100;
    .icon {
      background-color: $blue-100;
    }
  }
  &.invalid {
    border: 0.125rem solid $red-1;
    .icon {
      background-color: $red-1;
    }
  }
  &.valid {
    border: 0.125rem solid $green-2;
    .icon {
      background-color: $green-2;
    }
  }
  input {
    @include fluid-type($text-base, $text-base, $color: $gray-200);
    padding: 0 1rem;
    width: 100%;
  }
  .icon {
    background-color: $gray-200;
    padding: 1rem;
    color: $white-100;
    cursor: pointer;
  }
}
</style>
