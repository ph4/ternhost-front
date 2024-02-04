<template>
  <!-- Services -->
  <TheWrapper class="services-wrapper">
    <TheContainer>
      <TheTitle>Our Services</TheTitle>

      <div class="services">
        <ul class="services__group">
          <li class="services__group-item" v-for="service in services" :key="service.id">
            <div class="services__group-item__image">
              <img :src="service.icon" alt="Service" />
            </div>
            <div class="services__group-item__text">
              <h1>{{ service.title }}</h1>
              <p>{{ service.text }}</p>
            </div>
          </li>
        </ul>
      </div>
    </TheContainer>
  </TheWrapper>
</template>

<script>
import TheContainer from '@/components/common/TheContainer/TheContainer.vue';
import TheWrapper from '@/components/common/TheWrapper/TheWrapper.vue';
import TheTitle from '@/components/UI/TheTitle.vue';

import serviceIcon1 from '@/assets/images/services-image-1.svg';
import serviceIcon2 from '@/assets/images/services-image-2.svg';
import serviceIcon3 from '@/assets/images/services-image-3.svg';
import serviceIcon4 from '@/assets/images/services-image-4.svg';
import serviceIcon5 from '@/assets/images/services-image-5.svg';
import serviceIcon6 from '@/assets/images/services-image-6.svg';

export default {
  name: 'TheServices',
  components: {
    TheContainer,
    TheWrapper,
    TheTitle,
  },
  data() {
    return {
      services: [
        {
          id: 1,
          title: 'Shared Web Hosting',
          text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
          icon: serviceIcon1,
        },
        {
          id: 2,
          title: '24/7/365 Support',
          text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
          icon: serviceIcon2,
        },
        {
          id: 3,
          title: 'Dedicated Server',
          text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
          icon: serviceIcon3,
        },
        {
          id: 4,
          title: 'Cloud Hosting',
          text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
          icon: serviceIcon4,
        },
        {
          id: 5,
          title: 'Domain Names',
          text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
          icon: serviceIcon5,
        },
        {
          id: 6,
          title: 'License Keys',
          text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
          icon: serviceIcon6,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

// @Sections: Services
.services-wrapper {
  background-color: $white-500;
  .container {
    .services {
      margin-top: 5rem;
      &__group {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 5rem;
        @media screen and (max-width: 1200px) {
          grid-gap: 1rem;
        }
        @media screen and (max-width: 800px) {
          grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 500px) {
          grid-template-columns: 1fr;
          grid-gap: 5rem;
        }
        &-item {
          @include center-y;
          flex-direction: column;
          text-align: center;
          &__image {
            @include center;
            width: 6.25rem;
            aspect-ratio: 1 / 1;
            background-color: $white-400;
            border-radius: 0.625rem;
          }
          &__text {
            h1 {
              @include text-xl(700, $blue-200);
              margin: 1rem 0;
            }
            p {
              @include text-base(400, $gray-200);
            }
          }
        }
      }
    }
  }
}
</style>
