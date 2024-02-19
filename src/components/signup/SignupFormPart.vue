<template>
  <div class="signup__form-group">
    <label>{{ label }}</label>
    <base-input :type="type" :placeholder="placeholder"></base-input>
  </div>
</template>

<script>
import BaseInput from '@/components/UI/BaseInput.vue';

export default {
  name: 'SignupFormPart',
  props: {
    label: String,
    type: String,
    placeholder: String,
  },
  components: {
    BaseInput,
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.signup__form-group {
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  @media screen and (max-width: 500px) {
    margin-top: 1.875rem;
  }
  label {
    @include fluid-type($text-sm, $text-base);
  }
  a {
    @include fluid-type($text-sm, $text-sm, $color: $blue-100);
    margin-top: 0.625rem;
    align-self: flex-end;
  }
}
</style>
