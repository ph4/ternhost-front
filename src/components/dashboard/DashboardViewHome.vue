<template>
  <base-container>
    <div class="box-container">
      <dashboard-user></dashboard-user>
      <dashboard-bill></dashboard-bill>
      <dashboard-transactions></dashboard-transactions>
      <dashboard-metrics></dashboard-metrics>
      <dashboard-security></dashboard-security>
    </div>
  </base-container>
</template>

<script>
import DashboardUser from './DashboardUser.vue';
import DashboardBill from './DashboardBill.vue';
import DashboardTransactions from './DashboardTransactions.vue';
import DashboardMetrics from './DashboardMetrics.vue';
import DashboardSecurity from './DashboardSecurity.vue';

import BaseContainer from '@/components/UI/BaseContainer.vue';

export default {
  name: 'DashboardViewHome',
  components: {
    BaseContainer,
    DashboardUser,
    DashboardBill,
    DashboardTransactions,
    DashboardMetrics,
    DashboardSecurity,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.container {
  width: 100%;
  max-width: 1536px;
  padding: 0.625rem;
}

.box-container {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 1rem;
  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
}
</style>
