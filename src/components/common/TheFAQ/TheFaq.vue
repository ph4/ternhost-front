<template>
  <!-- FAQ -->
  <TheWrapper class="faq-wrapper">
    <TheContainer>
      <TheTitle>Have a question? FAQ</TheTitle>

      <div class="faq">
        <ul class="faq__group">
          <li class="accordion" v-for="item in faq" :key="item.id">
            <header class="accordion__head">
              <h1>{{ item.question }}</h1>
              <img class="accordion__head-switch" :src="assets.faqArrow" alt="Switcher" />
            </header>
            <div class="accordion__body">
              <p>{{ item.answer }}</p>
            </div>
          </li>
        </ul>
      </div>
    </TheContainer>
  </TheWrapper>
</template>

<script>
import faqArrow from '@/assets/images/faq-arrow.svg';

import TheTitle from '@/components/UI/TheTitle.vue';
import TheWrapper from '@/components/common/TheWrapper/TheWrapper.vue';
import TheContainer from '@/components/common/TheContainer/TheContainer.vue';

export default {
  name: 'TheFAQ',
  components: {
    TheTitle,
    TheContainer,
    TheWrapper,
  },
  data() {
    return {
      assets: {
        faqArrow,
      },
      faq: [
        {
          id: 1,
          question: 'What is Web Hosting?',
          answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium culpa blanditiis maiores eum et quo dolor quos provident, minima nulla dolore earum eius, tenetur perferendis a ea incidunt minus debitis, fugit consequatur.',
        },
        {
          id: 2,
          question: 'Why Do I Need to Buy a Domain Name?',
          answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium culpa blanditiis maiores eum et quo dolor quos provident, minima nulla dolore earum eius, tenetur perferendis a ea incidunt minus debitis, fugit consequatur.',
        },
        {
          id: 3,
          question: 'What Is Privacy Protection?',
          answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium culpa blanditiis maiores eum et quo dolor quos provident, minima nulla dolore earum eius, tenetur perferendis a ea incidunt minus debitis, fugit consequatur.',
        },
        {
          id: 4,
          question: 'I Already Purchased a Domain Name. Can I Transfer It to TernHost?',
          answer:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium culpa blanditiis maiores eum et quo dolor quos provident, minima nulla dolore earum eius, tenetur perferendis a ea incidunt minus debitis, fugit consequatur.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

// @Sections: FAQ
.faq-wrapper {
  .container {
    .faq {
      margin-top: 3rem;
      &__group {
        .accordion {
          border: 0.063rem solid $gray-200;
          cursor: pointer;
          box-shadow: 0 0.25rem 1.188rem 0 rgba($green-100, 0.33);
          user-select: none;
          margin-top: 1.5rem;
          &.show {
            .accordion__body {
              display: block;
            }
          }
          &__head,
          &__body {
            padding: 0.75rem 1.5rem;
          }
          &__head {
            @include center-y;
            justify-content: space-between;
            background-color: $white-100;
            h1 {
              @include text-2xl(600, $blue-200);
              @media screen and (max-width: 1000px) {
                @include text-lg(600, $blue-200);
              }
            }
            img {
              &.reverse {
                transform: rotate(180deg);
              }
            }
          }
          &__body {
            display: none;
            p {
              @include text-base(500, rgba($blue-200, 0.5));
              @media screen and (max-width: 600px) {
                @include text-sm(500, rgba($blue-200, 0.5));
              }
            }
          }
        }
      }
    }
  }
}
</style>
