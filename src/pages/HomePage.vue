<template>
  <app-preloader></app-preloader>

  <div class="top">
    <main-promo></main-promo>
    <main-header></main-header>
  </div>

  <home-hero></home-hero>
  <home-sentence></home-sentence>
  <app-services :services="services.items" :title="services.title" class="gray"></app-services>
  <home-reviews></home-reviews>
  <home-counters></home-counters>
  <home-plans></home-plans>
  <app-questions :faq="faq"></app-questions>
  <app-footer></app-footer>
  <app-terms></app-terms>
</template>

<script>
import MainPromo from '@/components/common/MainPromo/MainPromo.vue';
import MainHeader from '@/components/common/MainHeader/MainHeader.vue';

import HomeHero from '@/components/home/HomeHero.vue';
import HomeSentence from '@/components/home/HomeSentence.vue';
import HomeReviews from '@/components/home/HomeReviews.vue';
import HomeCounters from '@/components/home/HomeCounters.vue';
import HomePlans from '@/components/home/HomePlans.vue';

import AppServices from '@/components/common/AppServices/AppServices.vue';
import AppQuestions from '@/components/common/AppQuestions/AppQuestions.vue';
import AppFooter from '@/components/common/AppFooter/AppFooter.vue';
import AppTerms from '@/components/common/AppTerms/AppTerms.vue';
import AppPreloader from '@/components/common/AppPreloader/AppPreloader.vue';

import HomeServiceIcon1 from '@/assets/images/home/services-image-1.svg';
import HomeServiceIcon2 from '@/assets/images/home/services-image-2.svg';
import HomeServiceIcon3 from '@/assets/images/home/services-image-3.svg';
import HomeServiceIcon4 from '@/assets/images/home/services-image-4.svg';
import HomeServiceIcon5 from '@/assets/images/home/services-image-5.svg';
import HomeServiceIcon6 from '@/assets/images/home/services-image-6.svg';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'HomePage',
  components: {
    MainPromo,
    MainHeader,
    HomeHero,
    HomeSentence,
    HomeReviews,
    HomeCounters,
    HomePlans,
    AppServices,
    AppQuestions,
    AppFooter,
    AppTerms,
    AppPreloader,
  },
  data() {
    return {
      services: {
        title: 'Our Services',
        items: [
          {
            id: 0,
            title: 'Shared Web Hosting',
            text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
            icon: HomeServiceIcon1,
          },
          {
            id: 1,
            title: '24/7/365 Support',
            text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
            icon: HomeServiceIcon2,
          },
          {
            id: 2,
            title: 'Dedicated Server',
            text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
            icon: HomeServiceIcon3,
          },
          {
            id: 3,
            title: 'Cloud Hosting',
            text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
            icon: HomeServiceIcon4,
          },
          {
            id: 4,
            title: 'Domain Names',
            text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
            icon: HomeServiceIcon5,
          },
          {
            id: 5,
            title: 'License Keys',
            text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
            icon: HomeServiceIcon6,
          },
        ],
      },
      faq: [
        {
          id: 0,
          question: 'What is Shared Hosting?',
          answer:
            'What is Shared Hosting? What is Shared Hosting? What is Shared Hosting?What is Shared Hosting?What is Shared Hosting? What is Shared Hosting? What is Shared Hosting?What is Shared Hosting?What is Shared Hosting? What is Shared Hosting?What is Shared Hosting?What is Shared Hosting?What is Shared Hosting?What is Shared Hosting?What is Shared Hosting?What is Shared Hosting?What is Shared Hosting?What is Shared Hosting?What is Shared Hosting?What is Shared Hosting?What is Shared Hosting?What is Shared Hosting?',
          isActive: false,
        },
        { id: 1, question: 'Why Do I Need to Buy a Domain Name?', answer: 'Fart', isActive: false },
        { id: 2, question: 'What Is Privacy Protection?', answer: 'Fart', isActive: false },
        {
          id: 3,
          question: 'I Already Purchased a Domain Name. Can I Transfer It to TernHost?',
          answer: 'Fart',
          isAcitve: false,
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.$emitter.emit('_animate_preloader_-close-preloader');
    }, 1000);

    ScrollTrigger.create({
      trigger: '.counters',
      once: true,
      onEnter: () => this.$emitter.emit('animate-counters'),
    });
  },
};
</script>

<style scoped lang="scss">
.top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 666;
}
</style>
