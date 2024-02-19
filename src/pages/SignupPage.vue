<template>
  <signup-hero></signup-hero>
  <tern-fast-login-wrapper></tern-fast-login-wrapper>
</template>

<script>
import SignupHero from '@/components/signup/SignupHero.vue';
import TernFastLoginWrapper from '@/components/tern/TernFastLoginWrapper.vue';

export default {
  name: 'SignupPage',
  components: {
    SignupHero,
    TernFastLoginWrapper,
  },
};
</script>
