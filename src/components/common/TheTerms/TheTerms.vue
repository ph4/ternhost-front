<template>
  <section class="terms-wrapper">
    <TheContainer>
      <div class="terms">
        <h1>© Copyright Ⓒ TernHost. All Rights Reserved.</h1>
        <ul class="terms__group">
          <li class="terms__group-item" v-for="value in links" :key="value.id">
            <a :href="value.url" class="terms__group-item__link">{{ value.name }}</a>
          </li>
        </ul>
      </div>
    </TheContainer>
  </section>
</template>

<script>
import TheContainer from '@/components/common/TheContainer/TheContainer.vue';

export default {
  name: 'TheTerms',
  components: {
    TheContainer,
  },
  data() {
    return {
      links: [
        { id: 1, name: 'Privacy Policy', url: undefined },
        { id: 2, name: 'Terms Condition', url: undefined },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';
.terms-wrapper {
  @include center-x;
  .terms {
    @include center-y;
    padding: 1.5rem 0;
    justify-content: space-between;
    @media screen and (max-width: 600px) {
      flex-direction: column;
    }
    h1 {
      @include text-sm(400, $blue-200);
      @media screen and (max-width: 600px) {
        order: 1;
        margin-top: 1rem;
      }
    }
    &__group {
      @include center-x;
      @media screen and (max-width: 600px) {
        order: 0;
      }
      &-item {
        &:last-child {
          border-left: 1px solid $blue-200;
        }
        &__link {
          @include text-sm(400, $blue-200);
          margin: 0 0.5rem;
        }
      }
    }
  }
}
</style>
