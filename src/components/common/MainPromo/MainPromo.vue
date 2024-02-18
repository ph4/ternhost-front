<template>
  <div class="promo">
    <base-container>
      <router-link to="/hosting" class="row">
        <h1>Don't miss deals up to 70% on web hosting</h1>
        <font-awesome-icon icon="fa-solid fa-chevron-right" class="icon" />
      </router-link>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';

export default {
  name: 'MainPromo',
  components: {
    BaseContainer,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.promo {
  background-color: $blue-100;
  .container {
    .row {
      @include center;
      h1 {
        @include fluid-type($text-xs, $text-lg, 700, $blue-200);
        color: $white-100;
        padding: 0.5rem;
        text-transform: uppercase;
      }
      .icon {
        margin-left: 0.25rem;
        color: $white-100;
      }
    }
  }
}
</style>
