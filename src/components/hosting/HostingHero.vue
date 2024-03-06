<template>
  <section class="hero">
    <base-container>
      <header class="hero__header">
        <h1>Choose Your Web Hosting Plan</h1>
      </header>

      <div class="plans">
        <div class="plans__time">
          <tern-plans-time :times="plansTime" class="reverse"></tern-plans-time>
        </div>
        <div class="plans__box">
          <ul class="offers" ref="plans">
            <tern-plan v-for="plan in plans" :key="plan.id" :plan="plan"></tern-plan>
          </ul>
        </div>
      </div>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

import TernPlansTime from '@/components/tern/TernPlansTime.vue';
import TernPlan from '@/components/tern/TernPlan.vue';

import { useLoadPlans } from '@/hooks/useLoadPlans.js';
import { gsap } from 'gsap';

export default {
  name: 'HostingHero',
  components: {
    BaseContainer,
    BaseButton,

    TernPlan,
    TernPlansTime,
  },
  data() {
    return {
      plansTime: [
        { id: 0, value: 1, isActive: false },
        { id: 1, value: 12, isActive: true },
        { id: 2, value: 36, isActive: false },
        { id: 3, value: 48, isActive: false },
      ],
      plans: [],
    };
  },
  mounted() {
    this.plans = useLoadPlans(12);

    this.$emitter.on('_home_-load-plans', (months) => this.animate(months));
    this.$emitter.on('_home_-set-active-plans-time', (id) => {
      this.resetActivePlansTime();
      this.setActivePlansTime(id);
    });
  },
  methods: {
    animate(months) {
      const tl = gsap.timeline();

      tl.to(this.$refs.plans, {
        opacity: 0,
        y: '10%',
        duration: 0.5,
        onComplete: () => (this.plans = useLoadPlans(months)),
      }).to(this.$refs.plans, {
        opacity: 1,
        y: 0,
        duration: 0.5,
      });
    },
    setActivePlansTime(id) {
      this.plansTime[id].isActive = true;
    },
    resetActivePlansTime() {
      this.plansTime.forEach((time) => (time.isActive = false));
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.hero {
  @include center;
  min-height: 100vh;
  .container {
    margin-top: 10rem;
    .hero__header {
      text-align: center;
      h1 {
        @include fluid-type($text-4xl, $text-4xl, 700, $blue-200);
      }
    }
    .plans {
      @include center-col;
      margin-top: 3rem;
      &__box {
        width: 100%;
        margin-top: 5rem;
        background-color: $white-100;
        .offers {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          @media screen and (max-width: 1100px) {
            grid-template-columns: 1fr 1fr;
            grid-gap: 1rem;
          }
          @media screen and (max-width: 600px) {
            grid-template-columns: 1fr;
          }
        }
      }
    }
  }
}
</style>
