<script>
export default {
  name: "OrderSearchDomainPreloader",
  data() {
    return {
      isPreloading: false,
    }
  },
  mounted() {
    this.$emitter.on("_order_-switch-preloader", (state) => this.toggle(state))
  },
  methods: {
    toggle(state) {
      this.isPreloading = state;
    }
  }
}
</script>

<template>
  <div class="preloader" v-if="this.isPreloading">
    <h1>Preloader</h1>
  </div>
</template>

<style scoped lang="scss">

</style>