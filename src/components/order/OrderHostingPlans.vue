<template>
  <div class="plans">
    <tern-plans-time :times="plansTime" class="order-hosting"></tern-plans-time>

    <div class="plans__box">
      <ul class="offers" ref="plans">
        <tern-plan v-for="plan in plans" :key="plan.id" :plan="plan"></tern-plan>
      </ul>
    </div>
  </div>
</template>

<script>
import TernPlansTime from '@/components/tern/TernPlansTime.vue';
import TernPlan from '@/components/tern/TernPlan.vue';

import { useLoadPlans } from '@/hooks/useLoadPlans.js';
import { gsap } from 'gsap';

export default {
  name: 'OrderHostingPlans',
  components: {
    TernPlansTime,
    TernPlan,
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
        duration: 0.5,
        onComplete: () => (this.plans = useLoadPlans(months)),
      }).to(this.$refs.plans, {
        opacity: 1,
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

.plans {
  @include center-col;
  margin-top: 3rem;
  &__box {
    width: 100%;
    margin-top: 1.875rem;
    border-radius: 1.875rem;
    background-color: $white-100;
    padding: 1rem;
    box-shadow: 0 0.25rem 2.188rem 0 rgba($black-100, 0.08);
    .offers {
      width: auto;
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
</style>
