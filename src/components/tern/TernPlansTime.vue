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
      this.$emitter.emit('load-plans', months);
    },
    setActivePlansTime(id) {
      this.$emitter.emit('set-active-plans-time', id);
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
    transition: all 0.2s;
    cursor: pointer;
    @media screen and (max-width: 900px) {
      padding: 1rem 0.5rem;
    }
    &.active,
    &:hover {
      background-color: $blue-100;
      color: $white-100;
    }
    &:first-child {
      border-left: 0;
    }
  }
}
</style>
