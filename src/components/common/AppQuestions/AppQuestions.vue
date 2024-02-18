<template>
  <section class="faq">
    <base-container>
      <base-title>Have a question? FAQ</base-title>

      <div class="faq-body">
        <ul class="questions">
          <li class="questions__item" v-for="item in faq" :key="item.id" @click="showAnswer(item.id)">
            <header class="questions__item-header">
              <h1>{{ item.question }}</h1>

              <font-awesome-icon icon="fa-solid fa-chevron-up" class="icon" v-if="item.isActive" />
              <font-awesome-icon icon="fa-solid fa-chevron-down" class="icon" v-else />
            </header>

            <div class="questions__item-body" v-if="item.isActive">
              <p>{{ item.answer }}</p>
            </div>
          </li>
        </ul>
      </div>
    </base-container>
  </section>
</template>

<script>
// @TODO: Add animations
import BaseContainer from '@/components/UI/BaseContainer.vue';
import BaseTitle from '@/components/UI/BaseTitle.vue';

export default {
  name: 'AppQuestions',
  components: {
    BaseContainer,
    BaseTitle,
  },
  props: {
    faq: Object,
  },
  methods: {
    showAnswer(id) {
      this.faq.forEach((item, index) => (index === id ? (item.isActive = !item.isActive) : (item.isActive = false)));
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.faq {
  padding: 9.375rem 0;
  .container {
    .faq-header {
      text-align: center;
      h1 {
        @include fluid-type($text-4xl, $text-4xl, 700, $blue-200);
      }
    }
    .faq-body {
      margin-top: 4.375rem;
      .questions {
        &__item {
          margin-top: 1.5rem;
          border: 0.063rem solid $gray-200;
          box-shadow: 0 0.25rem 1.25rem 0 rgba($green-100, 0.3);
          cursor: pointer;
          overflow: hidden;
          &-header {
            @include center-y-between;
            padding: 1rem;
            position: relative;
            z-index: 3;
            background-color: $white-100;
            h1 {
              @include fluid-type($text-lg, $text-3xl, 600, $blue-200);
            }
            .icon {
              font-size: 1.5rem;
              color: $blue-200;
            }
          }
          &-body {
            padding: 1rem;
            p {
              @include fluid-type($text-base, $text-lg, 500, rgba($blue-200, 0.5));
            }
          }
        }
      }
    }
  }
}
</style>
