<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TheContainer',
};
</script>

<style lang="scss" scoped>
.container {
  width: 1536px;
  max-width: 95%;
  margin: 0 auto;
}
</style>
