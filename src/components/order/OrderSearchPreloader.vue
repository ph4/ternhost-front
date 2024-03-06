<template>
  <div class="preloader"></div>
</template>

<script>
export default {
  name: 'OrderSearchPreloader',
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.preloader {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
