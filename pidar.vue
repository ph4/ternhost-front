<template>
  <div class="signup">
    <header class="signup__header">
      <div class="signup__header-title">
        <h2>Welcome to <span>Ternhost</span></h2>
        <h1>Sign Up</h1>
      </div>
      <div class="signup__header-signup">
        <h3>No Account? <br /><router-link to="/login">Sign In</router-link></h3>
      </div>
    </header>
    <Form class="signup__form" @submit="onSubmit" @invalid-submit="onInvalidSubmit" :validation-schema="schema">
      <div class="signup__form-group">
        <label>Enter your username or email address</label>
        <input type="text" placeholder="Username or email address" />
      </div>
      <div class="signup__form-group">
        <label>Mobile Number</label>
        <input type="text" placeholder="Mobile Number" />
      </div>
      <div class="signup__form-grid">
        <div class="signup__form-group">
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <div class="signup__form-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm Password" />
        </div>
      </div>
      <div class="signup__form-button">
        <base-button class="btn-primary">Register</base-button>
      </div>
    </Form>
  </div>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';
import BaseInput from '@/components/UI/BaseInput.vue';

import SignupFormPart from './SignupFormPart.vue';

import { Form } from 'vee-validate';

import * as yup from 'yup';

export default {
  name: 'SignupForm',
  components: {
    BaseButton,
    BaseInput,
    SignupFormPart,
    Form,
  },
  computed: {
    schema() {
      return yup.object({
        email: yup.string().email().required().typeError('Failde Email'),
      });
    },
  },
  methods: {
    onSubmit(values) {
      console.log('Success');
      console.log(values);
    },
    onInvalidSubmit({ errors }) {
      console.log('Failed');
      console.log(errors);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.signup {
  background-color: $white-100;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 2.75rem;
  border-radius: 1.875rem;
  transform: translateY(50%);
  box-shadow: 0 0.25rem 2.188rem 0 rgba($black-100, 0.08);
  max-width: 31.25rem;
  width: 100%;
  @media screen and (max-width: 900px) {
    position: static;
    display: inline-block;
    top: 0;
    left: 0;
    transform: none;
    padding: 1.625rem;
  }
  &__header {
    @include center-x-between;
    justify-content: space-between;
    &-title {
      h2 {
        @include fluid-type($text-base, $text-xl);
        span {
          @include fluid-type($text-base, $text-xl, 700, $blue-100);
          text-transform: uppercase;
        }
      }
      h1 {
        @include fluid-type($text-4xl, $text-5xl, 700);
        margin-top: 1rem;
      }
    }
    &-signup {
      margin-left: 5rem;
      @media screen and (max-width: 900px) {
        margin-left: 1rem;
      }
      h3 {
        @include fluid-type($text-xs, $text-sm, $color: $gray-100);
        a {
          color: $blue-100;
        }
      }
    }
  }
  &__form {
    margin-top: 3.125rem;
    &-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1.25rem;
    }
    &-group {
      display: flex;
      flex-direction: column;
      margin-top: 2.5rem;
      @media screen and (max-width: 500px) {
        margin-top: 1.875rem;
      }
      label,
      input {
        @include fluid-type($text-sm, $text-base);
      }
      input {
        width: 100%;
        border-radius: 0.313rem;
        border: 0.063rem solid $gray-100;
        padding: 1.25rem 1.563rem;
        margin-top: 1.25rem;
        @media screen and (max-width: 500px) {
          padding: 0.938rem;
        }
      }
      a {
        @include fluid-type($text-sm, $text-sm, $color: $blue-100);
        margin-top: 0.625rem;
        align-self: flex-end;
      }
    }
    &-button {
      margin-top: 3.125rem;
      @media screen and (max-width: 500px) {
        margin-top: 1.875rem;
      }
      button {
        @include fluid-type($text-base, $text-base, 500, $white-100);
        background-color: $blue-100;
        border-radius: 0.313rem;
        padding: 1.25rem 0;
        width: 100%;
        cursor: pointer;
      }
    }
  }
}
</style>
