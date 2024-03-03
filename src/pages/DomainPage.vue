<template>
  <app-preloader></app-preloader>

  <div class="top">
    <main-promo></main-promo>
    <main-header></main-header>
  </div>

  <domain-hero></domain-hero>
  <app-services :services="services.items" :title="services.title"></app-services>
  <app-questions :faq="faq"></app-questions>
  <app-footer></app-footer>
  <app-terms></app-terms>
</template>

<script>
import MainPromo from '@/components/common/MainPromo/MainPromo.vue';
import MainHeader from '@/components/common/MainHeader/MainHeader.vue';

import DomainHero from '@/components/domain/DomainHero.vue';

import AppServices from '@/components/common/AppServices/AppServices.vue';
import AppQuestions from '@/components/common/AppQuestions/AppQuestions.vue';
import AppFooter from '@/components/common/AppFooter/AppFooter.vue';
import AppTerms from '@/components/common/AppTerms/AppTerms.vue';
import AppPreloader from '@/components/common/AppPreloader/AppPreloader.vue';

import DomainServiceImage1 from '@/assets/images/domain/domain-service-image-1.svg';
import DomainServiceImage2 from '@/assets/images/domain/domain-service-image-2.svg';
import DomainServiceImage3 from '@/assets/images/domain/domain-service-image-3.svg';
import DomainServiceImage4 from '@/assets/images/domain/domain-service-image-4.svg';
import DomainServiceImage5 from '@/assets/images/domain/domain-service-image-5.svg';
import DomainServiceImage6 from '@/assets/images/domain/domain-service-image-6.svg';

export default {
  name: 'DomainPage',
  components: {
    MainPromo,
    MainHeader,
    AppServices,
    AppQuestions,
    AppFooter,
    AppTerms,
    AppPreloader,
    DomainHero,
  },
  data() {
    return {
      services: {
        title: '6 Rules When Buying a Domain',
        items: [
          {
            id: 0,
            title: 'Registrar',
            text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
            icon: DomainServiceImage1,
          },
          {
            id: 1,
            title: 'Extension',
            text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
            icon: DomainServiceImage2,
          },
          {
            id: 2,
            title: 'Availability',
            text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
            icon: DomainServiceImage3,
          },
          {
            id: 3,
            title: 'SEO Relevance',
            text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
            icon: DomainServiceImage4,
          },
          {
            id: 4,
            title: 'Long-Term Thinking',
            text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
            icon: DomainServiceImage5,
          },
          {
            id: 5,
            title: 'Privacy Protection',
            text: 'Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas',
            icon: DomainServiceImage6,
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
  },
};
</script>

<style scoped>
.top {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 666;
}
</style>
