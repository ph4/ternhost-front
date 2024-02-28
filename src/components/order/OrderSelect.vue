<template>
  <div class="orders__item-age">
    <div class="orders__item-age__active" @click="toggleSelect()">
      <h3>{{ currentAge }} months</h3>
      <font-awesome-icon icon="fa-solid fa-chevron-down" class="icon" v-if="!isShow"></font-awesome-icon>
      <font-awesome-icon icon="fa-solid fa-chevron-up" class="icon" v-else></font-awesome-icon>
    </div>

    <div class="orders__item-age__body" :class="{ show: isShow }">
      <ul class="ages">
        <li class="ages__item" v-for="age in ages" :key="age.id" @click="setAge(age.id)">{{ age.age }} months</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '@/stores/useCartStore.js';

export default {
  name: ' OrderSelect',
  props: {
    index: Number,
    isShow: Boolean,
    domain: String,
  },
  data() {
    return {
      currentAge: null,
      ages: [],
    };
  },
  mounted() {
    const store = useCartStore();

    this.ages = store.getAgesByDomain(this.domain);
    this.currentAge = store.getCurrentAgeByDomain(this.domain);
  },
  methods: {
    toggleSelect() {
      this.$emitter.emit('_order_-toggle-select', this.index);
    },
    setAge(ageId) {
      const store = useCartStore();

      store.setAge(ageId, this.domain);
      this.currentAge = store.getCurrentAgeByDomain(this.domain);
      this.toggleSelect();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.orders__item-age {
  position: relative;
  &__active {
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
  &__body {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin-top: 0.5rem;
    z-index: 3;
    display: none;
    &.show {
      display: block;
    }
    .ages {
      background-color: $white-100;
      border: 0.063rem solid $gray-100;
      border-radius: 0.25rem;
      &__item {
        @include fluid-type($text-sm, $text-base, 500, $gray-200);
        padding: 0.5rem;
        border-top: 0.063rem solid $gray-100;
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
          background-color: rgba($gray-100, 0.2);
        }
        &:first-child {
          border-top: 0;
        }
      }
    }
  }
}
</style>
