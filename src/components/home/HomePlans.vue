<template>
  <section class="pricing">
    <base-container>
      <base-title>Our Flexible Plan</base-title>

      <div class="pricing-body">
        <div class="pricing__time">
          <tern-plans-time :times="plansTime"></tern-plans-time>
        </div>

        <div class="pricing__plans">
          <ul class="pricing__plans-group">
            <tern-plan v-for="plan in plans" :key="plan.id" :plan="plan"></tern-plan>
          </ul>
        </div>
      </div>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';
import BaseTitle from '@/components/UI/BaseTitle.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

import TernPlansTime from '@/components/tern/TernPlansTime.vue';
import TernPlan from '@/components/tern/TernPlan.vue';

import { loadPlans } from '@/utils/loadPlans.js';

export default {
  name: 'HomePlans',
  components: {
    BaseContainer,
    BaseTitle,
    BaseButton,
    TernPlansTime,
    TernPlan,
  },
  data() {
    return {
      plansTime: [
        { id: 0, value: 12, isActive: true },
        { id: 1, value: 36, isActive: false },
      ],
      plans: [],
    };
  },
  mounted() {
    this.plans = loadPlans(12);

    this.$emitter.on('load-plans', (months) => (this.plans = loadPlans(months)));
    this.$emitter.on('set-active-plans-time', (id) => {
      this.resetActivePlansTime();
      this.setActivePlansTime(id);
    });
  },
  methods: {
    setActivePlansTime(id) {
      this.plansTime[id].isActive = true;
    },
    resetActivePlansTime() {
      this.plansTime.forEach((time) => (time.isActive = false));
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/common/all';

.pricing {
  padding: 9.375rem 0;
  .container {
    .pricing-header {
      text-align: center;
      h1 {
        @include fluid-type($text-4xl, $text-4xl, 700, $blue-200);
      }
    }
    .pricing-body {
      @include center-col;
      .pricing__time {
        margin: 3rem 0;
      }
      .pricing__plans {
        width: 100%;
        &-group {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          @media screen and (max-width: 1000px) {
            grid-template-columns: repeat(2, 1fr);
          }
          @media screen and (max-width: 500px) {
            grid-template-columns: repeat(1, 1fr);
          }
        }
      }
    }
  }
}
</style>
