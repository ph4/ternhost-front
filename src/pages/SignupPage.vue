<template>
  <signup-hero></signup-hero>
  <tern-fast-login></tern-fast-login>
</template>

<script>
import SignupHero from '@/components/signup/SignupHero.vue';
import TernFastLogin from '@/components/tern/TernFastLogin.vue';

export default {
  name: 'SignupPage',
  components: {
    SignupHero,
    TernFastLogin,
  },
};
</script>
