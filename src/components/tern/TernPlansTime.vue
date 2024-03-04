<template>
  <ul class="pricing__time-group">
    <li
      class="pricing__time-group__item"
      v-for="time in times"
      :key="time.id"
      :class="{ active: time.isActive }"
      @click="
        loadPlans(time.value);
        setActivePlansTime(time.id);
      "
    >
      {{ time.value }} Month
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TernPlansTime',
  props: {
    times: Object,
  },
  methods: {
    loadPlans(months) {
      this.$emitter.emit('_home_-load-plans', months);
    },
    setActivePlansTime(id) {
      this.$emitter.emit('_home_-set-active-plans-time', id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.pricing__time-group {
  display: flex;
  border: 0.125rem solid $blue-100;
  border-radius: 0.5rem;
  &__item {
    @include fluid-type($text-base, $text-lg, 700, $blue-100);
    text-transform: uppercase;
    border-left: 0.125rem solid $blue-100;
    padding: 1.5rem;
    text-align: center;
    transition: all 1s;
    cursor: pointer;
    @media screen and (max-width: 900px) {
      padding: 1rem 0.5rem;
    }
    &.active {
      background-color: $blue-100;
      color: $white-100;
    }
    &:first-child {
      border-left: 0;
      border-radius: 0.25rem 0 0 0.25rem;
    }
    &:last-child {
      border-radius: 0 0.25rem 0.25rem 0;
    }
  }
  &.reverse {
    display: flex;
    border: 0.125rem solid $blue-100;
    border-radius: 0.5rem;
    .pricing__time-group__item {
      @include fluid-type($text-base, $text-lg, 700, $white-100);
      text-transform: uppercase;
      text-align: center;
      padding: 1.25rem 2rem;
      border-left: 0.125rem solid $blue-100;
      transition: all 1s;
      cursor: pointer;
      background-color: $blue-100;
      @media screen and (max-width: 800px) {
        padding: 0.5rem;
      }
      &.active {
        background-color: $white-100;
        color: $blue-100;
      }
      &:first-child {
        border-left: 0;
        border-radius: 0.25rem 0 0 0.25rem;
      }
      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }
    }
  }
}
</style>
