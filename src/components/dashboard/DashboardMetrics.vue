<template>
  <div class="box domain">
    <div class="domain__body">
      <div class="domain__body-icon">
        <font-awesome-icon icon="fa-solid fa-shield-halved" class="icon"></font-awesome-icon>
      </div>
      <div class="domain__body-values">
        <h3>Domain</h3>
        <h1>{{ this.metrics.domains }}</h1>
      </div>
    </div>
  </div>

  <div class="box hosting">
    <div class="hosting__body">
      <div class="hosting__body-icon">
        <font-awesome-icon icon="fa-solid fa-shield-halved" class="icon"></font-awesome-icon>
      </div>
      <div class="hosting__body-values">
        <h3>Hosting</h3>
        <h1>{{ this.metrics.hostings }}</h1>
      </div>
    </div>
  </div>

  <div class="box builder">
    <div class="builder__body">
      <div class="builder__body-icon">
        <font-awesome-icon icon="fa-solid fa-shield-halved" class="icon"></font-awesome-icon>
      </div>
      <div class="builder__body-values">
        <h3>Web Builder</h3>
        <h1>{{ this.metrics.builders }}</h1>
      </div>
    </div>
  </div>

  <div class="box services">
    <div class="services__body">
      <div class="services__body-icon">
        <font-awesome-icon icon="fa-solid fa-shield-halved" class="icon"></font-awesome-icon>
      </div>
      <div class="services__body-values">
        <h3>Services</h3>
        <h1>{{ this.metrics.services }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardMetrics',
  data() {
    return {
      metrics: {
        domains: 2,
        hostings: 4,
        builders: 6,
        services: 12,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.box {
  background-color: $white-100;
  border-radius: 1.5rem;
  padding: 2rem;
}

.domain,
.hosting,
.builder,
.services {
  @include center-y;
  &__body {
    @include center-y;
    &-icon {
      @include center;
      width: 3rem;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background-color: rgba($blue-100, 0.1);
      cursor: pointer;
      .icon {
        font-size: $text-xl;
        color: $blue-100;
      }
    }
    &-values {
      margin-left: 1rem;
      h3 {
        @include fluid-type($text-base, $text-lg, 500, $gray-200);
      }
      h1 {
        @include fluid-type($text-lg, $text-2xl, 600, $blue-200);
        margin-top: 0.5rem;
      }
    }
  }
}

.hosting {
  grid-area: 1 / 5 / 1 / 5;
  @media screen and (max-width: 1400px) {
    grid-area: 5 / 2 / 5 / 2;
  }
}
.builder {
  grid-area: 1 / 6 / 1 / 6;
  @media screen and (max-width: 1400px) {
    grid-area: 6 / 2 / 6 / 2;
  }
}
.services {
  grid-area: 2 / 5 / 2 / 5;
  @media screen and (max-width: 1400px) {
    grid-area: 6 / 1 / 6 / 1;
  }
}
.domain {
  grid-area: 2 / 6 / 2 / 7;
  @media screen and (max-width: 1400px) {
    grid-area: 5 / 1 / 5 / 1;
  }
}
</style>
