<template>
  <!-- Accounts -->
  <section class="accounts">
    <base-container>
      <header class="accounts__header">
        <h1>Login as</h1>
      </header>

      <div class="profiles">
        <ul class="profiles__row">
          <tern-fast-login></tern-fast-login>
          <tern-fast-login-template></tern-fast-login-template>
        </ul>
      </div>
    </base-container>
  </section>
</template>

<script>
import BaseContainer from '@/components/UI/BaseContainer.vue';

import TernFastLogin from './TernFastLogin.vue';
import TernFastLoginTemplate from './TernFastLoginTemplate.vue';

export default {
  name: 'TernFastLoginWrapper',
  components: {
    BaseContainer,
    TernFastLogin,
    TernFastLoginTemplate,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.accounts {
  width: 100%;
  height: 50vh;
  background-color: $white-100;
  @media screen and (max-width: 900px) {
    display: none;
  }
  .container {
    padding: 3.125rem 0;
    .accounts__header {
      h1 {
        @include fluid-type($text-base, $text-base);
      }
    }
    .profiles {
      margin-top: 1.875rem;
      &__row {
        display: flex;
        column-gap: 1.25rem;
      }
    }
  }
}
</style>
