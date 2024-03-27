<script>

export default {
  name: 'BaseSelect',
  provide() {
    return {
      onSelect: this.onSelect,
      toggle: this.toggle,

      isShow: this.isShow,
    }
  },
  props: {
    onSelect: Function,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<template>
  <div class="select">
    <div class="select-intro" @click="this.toggle">

      <slot name="intro"></slot>

      <font-awesome-icon icon="fa-solid fa-chevron-up" v-if="this.isShow"></font-awesome-icon>
      <font-awesome-icon icon="fa-solid fa-chevron-down" v-else></font-awesome-icon>
    </div>

    <div class="select-body" v-if="this.isShow">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/common/all';

.select {
  width: 100%;
  position: relative;

  &-intro {
    @include center-y-between;
    border: 0.063rem solid $gray-200;
    border-radius: 0.25rem;
    padding: 0.5rem;
    transition: all .2s;
    cursor: pointer;
  }

  &-body {
    margin-top: 0.5rem;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
  }
}
</style>
