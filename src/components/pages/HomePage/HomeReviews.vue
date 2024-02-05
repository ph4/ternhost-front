<template>
  <!-- Reviews -->
  <TheWrapper class="reviews-wrapper">
    <TheContainer>
      <BaseTitle>Word From Our Clients</BaseTitle>

      <div class="reviews">
        <swiper-container
          class="swiper"
          slides-per-view="3"
          space-between="30"
          :pagination="{
            clickable: true,
            dynamicBullets: true,
          }"
          :breakpoints="{
            360: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            1100: {
              slidesPerView: 3,
            },
          }"
        >
          <swiper-slide v-for="n in 10" :key="n">
            <div class="review">
              <div class="review__text">
                <p>
                  Aenean suscipit eu nulla et lacinia. Nulla diam felis, malesuada ut erat quis, mattis dignissim justo.
                </p>
              </div>
              <div class="review__author">
                <h1>James Harly</h1>
                <h3>Harly web, USA</h3>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </TheContainer>
  </TheWrapper>
</template>

<script>
import BaseTitle from '@/components/UI/BaseTitle.vue';
import TheWrapper from '@/components/common/TheWrapper/TheWrapper.vue';
import TheContainer from '@/components/common/TheContainer/TheContainer.vue';

export default {
  name: 'HomeReviews',
  components: {
    BaseTitle,
    TheWrapper,
    TheContainer,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

// @Sections: Reviews
.reviews-wrapper {
  background-color: $white-100;
  .container {
    .reviews {
      margin-top: 5rem;
      .swiper {
        &::part(container) {
          padding: 2rem 0;
        }
        &::part(bullet),
        &::part(bullet-active) {
          width: 1.25rem;
          height: 0.5rem;
          border-radius: 0.25rem;
          background-color: $blue-100;
          opacity: 1;
          transition: all 0.3s;
        }
        .review {
          text-align: center;
          background-color: $white-200;
          padding: 2.5rem 1rem;
          .review__text {
            @include text-lg(400, $gray-200);
          }
          .review__author {
            margin-top: 1.5rem;
            h1 {
              @include text-xl(700, $blue-200);
            }
            h3 {
              @include text-sm(400, $gray-200);
            }
          }
        }
      }
    }
  }
}
</style>
