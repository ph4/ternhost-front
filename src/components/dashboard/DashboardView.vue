<template>
  <div class="dashboard__body">
    <dashboard-header></dashboard-header>

    <router-view></router-view>
  </div>
</template>

<script>
import DashboardHeader from './DashboardHeader.vue';

export default {
  name: 'DashboardView',
  components: {
    DashboardHeader,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.dashboard__body {
  min-height: 100vh;
  flex-grow: 1;
  background-color: $white-200;
  display: flex;
  flex-direction: column;
}
</style>
