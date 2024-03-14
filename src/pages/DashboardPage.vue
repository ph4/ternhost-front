<template>
  <div class="dashboard">
    <dashboard-sidebar></dashboard-sidebar>
  </div>
</template>

<script>
import DashboardSidebar from '@/components/dashboard/DashboardSidebar.vue';

export default {
  name: 'DashboardPage',
  components: {
    DashboardSidebar,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.dashboard {
  display: flex;
}
</style>
