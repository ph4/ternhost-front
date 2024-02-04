<template>
  <TheWrapper class="counters-wrapper">
    <TheContainer>
      <ul class="counters">
        <li class="counters__item" v-for="counter in counters" :key="counter.id">
          <h1>{{ counter.value }}</h1>
          <h3>{{ counter.title }}</h3>
        </li>
      </ul>
    </TheContainer>
  </TheWrapper>
</template>

<script>
import TheContainer from '@/components/common/TheContainer/TheContainer.vue';
import TheWrapper from '@/components/common/TheWrapper/TheWrapper.vue';

export default {
  name: 'HomeCounters',
  components: {
    TheContainer,
    TheWrapper,
  },
  data() {
    return {
      counters: [
        { id: 1, value: '70K', title: 'Shared Web Hosting' },
        { id: 2, value: '100M', title: 'VPS Hosting' },
        { id: 3, value: '11K', title: 'Dedicated Server' },
        { id: 4, value: '199+', title: 'Cloud Hosting' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

// @Sections: Counters
.counters-wrapper {
  background-color: $blue-100;
  .container {
    .counters {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      &__item {
        margin: 1rem;
        text-align: center;
        h1 {
          @include text-6xl(700, $white-100);
        }
        h3 {
          @include text-lg(400, $white-100);
        }
      }
    }
  }
}
</style>
