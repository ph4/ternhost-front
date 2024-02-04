<template>
  <section class="nf-wrapper">
    <TheHeader />

    <TheContainer>
      <div class="nf">
        <div class="text">
          <h1>Ooops... <br /><span>Page Not Found</span></h1>
          <TheButton class="btn btn-secondary">Go Back</TheButton>
        </div>
        <div class="image">
          <img :src="NotFoundBackground" alt="Not Found Background" />
        </div>
      </div>
    </TheContainer>

    <TheFooter class="footer" />
    <TheTerms />
  </section>
</template>

<script>
import TheContainer from '@/components/common/TheContainer/TheContainer.vue';
import TheHeader from '@/components/common/TheHeader/TheHeader.vue';
import TheFooter from '@/components/common/TheFooter/TheFooter.vue';
import TheTerms from '@/components/common/TheTerms/TheTerms.vue';

import TheButton from '@/components/UI/TheButton.vue';

import NotFoundBackground from '@/assets/images/404-background.svg';

export default {
  name: 'NotFound',
  components: {
    TheContainer,
    TheHeader,
    TheFooter,
    TheTerms,
    TheButton,
  },
  data() {
    return {
      NotFoundBackground,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';
.nf-wrapper {
  width: 100%;
  min-height: 100vh;
  background-color: $white-300;
  display: flex;
  flex-direction: column;
  .container {
    flex-grow: 1;
    .nf {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      @media screen and (max-width: 900px) {
        grid-template-columns: 1fr;
      }
      .text,
      .image {
        @media screen and (max-width: 900px) {
          text-align: center;
        }
      }
      .text {
        @media screen and (max-width: 900px) {
          order: 1;
        }
        h1 {
          @include text-5xl(700, $blue-200);
          @media screen and (max-width: 900px) {
            @include text-3xl(700, $blue-200);
          }
          span {
            font-weight: 500;
          }
        }
        .btn {
          align-self: flex-start;
          margin-top: 3.125rem;
          @media screen and (max-width: 900px) {
            margin: 3.125rem auto;
          }
        }
      }
      .image {
        @media screen and (max-width: 900px) {
          order: 0;
        }
        img {
          width: 100%;
          max-width: 500px;
        }
      }
    }
  }
  .footer {
    @media screen and (max-width: 900px) {
      display: none;
    }
  }
}
</style>
