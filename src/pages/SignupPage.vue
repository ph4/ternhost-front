<template>
  <signup-hero></signup-hero>
  <tern-fast-login-box></tern-fast-login-box>
</template>

<script>
import SignupHero from '@/components/signup/SignupHero.vue';
import TernFastLoginBox from '@/components/tern/TernFastLoginBox.vue';

export default {
  name: 'SignupPage',
  components: {
    SignupHero,
    TernFastLoginBox,
  },
};
</script>
