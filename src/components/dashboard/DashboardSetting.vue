<template>
  <section class="setting" ref="wrapper">
    <div class="setting__modal" ref="content">
      <header class="setting__header">
        <h1>Profile</h1>
        <i class="fa-regular fa-circle-xmark icon"></i>
      </header>
      <div class="setting__body">
        <div class="setting__body-security">
          <ul class="security">
            <li class="security__item">
              <input type="file" class="hidden" name="avatar" ref="avatar" @change="this.upload" />

              <h1>Avatar</h1>
              <base-button class="btn-secondary" @click="this.$refs.avatar.click()">Add</base-button>
            </li>
            <li class="security__item">
              <h1>Confirmation By Email</h1>
              <base-button :class="{ 'btn-green': this.isConfirmEmail, 'btn-red': !this.isConfirmEmail }">{{
                this.isConfirmEmail ? 'Enabled' : 'Disabled'
              }}</base-button>
            </li>
            <li class="security__item">
              <h1>Confirmation By Phone</h1>
              <base-button :class="{ 'btn-green': this.isConfirmPhone, 'btn-red': !this.isConfirmPhone }">{{
                this.isConfirmPhone ? 'Enabled' : 'Disabled'
              }}</base-button>
            </li>
            <li class="security__item">
              <h1>Two-Factor Authentication</h1>
              <base-button :class="{ 'btn-green': this.isTwoAuth, 'btn-red': !this.isTwoAuth }">{{
                this.isTwoAuth ? 'Enabled' : 'Disabled'
              }}</base-button>
            </li>
          </ul>
        </div>
        <Form
          class="setting__body-form"
          @submit="this.onSubmit"
          @invalid-submit="this.onInvalidSubmit"
          :validation-schema="schema"
        >
          <div class="box grid-2">
            <div class="form-part">
              <label>First Name</label>

              <Field name="firstName" v-model="this.firstName">
                <input type="text" placeholder="Enter your First Name" v-model="this.firstName" />
              </Field>
            </div>
            <div class="form-part">
              <label>Last Name</label>

              <Field name="lastName" v-model="this.lastName">
                <input type="text" placeholder="Enter your Last Name" v-model="this.lastName" />
              </Field>
            </div>
          </div>
          <div class="box grid-2">
            <div class="form-part">
              <label>Email</label>

              <Field name="email" v-model="this.email">
                <input type="text" placeholder="Enter your Email" v-model="this.email" />
              </Field>
            </div>
            <div class="form-part">
              <label>Phone</label>

              <Field name="phone" v-model="this.phone">
                <input type="text" placeholder="Enter your Phone" v-model="this.phone" />
              </Field>
            </div>
          </div>
          <div class="box grid-2">
            <div class="form-part">
              <label>Street</label>

              <Field name="street" v-model="this.street">
                <input type="text" placeholder="Enter your street" v-model="this.street" />
              </Field>
            </div>
            <div class="form-part">
              <label>Country</label>

              <Field name="country" v-model="this.country">
                <input type="text" placeholder="Enter your Country" v-model="this.country" />
              </Field>
            </div>
          </div>
          <div class="box grid-3">
            <div class="form-part">
              <label>City</label>

              <Field name="city" v-model="this.city">
                <input type="text" placeholder="Enter your City" v-model="this.city" />
              </Field>
            </div>
            <div class="form-part">
              <label>State</label>

              <Field name="state" v-model="this.state">
                <input type="text" placeholder="Enter your State or Province" v-model="this.state" />
              </Field>
            </div>
            <div class="form-part">
              <label>Zip Code</label>

              <Field name="zipCode" v-model="this.zipCode">
                <input type="number" placeholder="Enter your zip code" v-model="this.zipCode" />
              </Field>
            </div>

            <button type="submit" ref="enterForm" class="hidden"></button>
          </div>
        </Form>
      </div>
      <footer class="setting__footer">
        <base-button class="btn-white" @click="this.toggle">Cancel</base-button>
        <base-button class="btn-white" @click="this.$refs.enterForm.click()">Save</base-button>
      </footer>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';

import { Form, Field } from 'vee-validate';
import { gsap } from 'gsap';

import * as yup from 'yup';

export default {
  name: 'DashboardSetting',
  components: {
    BaseButton,
    Form,
    Field,
  },
  data() {
    return {
      isShow: false,
      isConfirmEmail: false,
      isConfirmPhone: false,
      isTwoAuth: false,

      avatar: undefined,
      firstName: 'John',
      lastName: 'Snow',
      email: 'mr.tretyak15@gmail.com',
      phone: '+1 (828) 450 15 87',
      street: '10 Ascot Point Cir 205',
      country: 'United State',
      city: 'Asheville NC',
      state: 'New York',
      zipCode: 10001,
    };
  },
  computed: {
    schema() {
      return yup.object({
        avatar: yup.string(),
        firstName: yup.string(),
        lastName: yup.string(),
        email: yup.string(),
        phone: yup.string(),
        street: yup.string(),
        country: yup.string(),
        city: yup.string(),
        state: yup.string(),
        zipCode: yup.number(),
      });
    },
  },
  mounted() {
    this.$emitter.on('_dashboard_-show-modal', this.toggle);
  },
  methods: {
    onSubmit(values) {
      console.log('[onSubmit]: ', values);
    },
    onInvalidSubmit({ errors }) {
      console.log('[onInvalidSubmit]: ', errors);
    },
    toggle() {
      const tl = gsap.timeline();

      !this.isShow
        ? tl
            .to(this.$refs.wrapper, {
              duration: 0,
              opacity: 0,
              display: 'block',
            })
            .to(this.$refs.content, {
              duration: 0,
              opacity: 0,
              y: '-25%',
            })
            .to(this.$refs.wrapper, {
              duration: 0.25,
              opacity: 1,
            })
            .to(this.$refs.content, {
              duration: 0.25,
              opacity: 1,
              y: '0%',
            })
        : tl
            .to(this.$refs.content, {
              duration: 0.25,
              opacity: 0,
              y: '-25%',
            })
            .to(this.$refs.wrapper, {
              duration: 0.25,
              opacity: 0,
            })
            .to(this.$refs.wrapper, {
              duration: 0,
              display: 'none',
            });

      this.isShow = !this.isShow;
    },
    upload() {
      console.log('[upload]: ');

      const files = this.$refs.avatar.files;

      if (files) {
        const formData = new FormData(); // avatar
        formData.append('avatar', files[0]);
      }
    },
    confirmEmail() {
      console.log('[confirmEmail]: ');

      if (!this.isConfirmEmail) {
        // Confirm email here...
      }
    },
    confirmPhone() {
      console.log('[confirmPhone]: ');

      if (!this.isConfirmPhone) {
        // Confirm phone here...
      }
    },
    twoAuth() {
      console.log('[twoAuth]: ');

      if (!this.isTwoAuth) {
        // Two auth here...
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.setting {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba($blue-200, 0.3);
  z-index: 666;
  overflow-y: auto;
  display: none;
  &__modal {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 1200px;
    background-color: $white-100;
    border-radius: 1.875rem;
    padding: 1.5rem;
    max-height: 95vh;
    overflow-y: auto;
    .setting__header {
      @include center-y-between;
      h1 {
        @include fluid-type($text-3xl, $text-3xl, 600, $blue-200);
      }
      .icon {
        font-size: $text-4xl;
        color: $blue-200;
        cursor: pointer;
      }
    }
    .setting__body {
      margin: 3rem 0;
      &-security {
        .security {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 1rem;
          @media screen and (max-width: 900px) {
            grid-template-columns: 1fr 1fr;
          }
          @media screen and (max-width: 500px) {
            grid-template-columns: 1fr;
          }
          &__item {
            h1 {
              @include fluid-type($text-sm, $text-xl, 600);
              text-wrap: nowrap;
            }
            button {
              margin-top: 1rem;
              width: 100%;
            }
          }
        }
      }
      &-form {
        margin-top: 3rem;
        .box {
          margin-top: 1rem;
          &.grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 1rem;
          }
          &.grid-3 {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 1rem;
            @media screen and (max-width: 900px) {
              grid-template-columns: 1fr 1fr;
            }
          }
          &.grid-2,
          &.grid-3 {
            @media screen and (max-width: 600px) {
              grid-template-columns: 1fr;
            }
          }
          .form-part {
            display: flex;
            flex-direction: column;
            label {
              @include fluid-type($text-xl, $text-xl, 600);
            }
            input {
              @include fluid-type($text-sm, $text-sm, $color: $gray-200);
              padding: 1.25rem;
              margin-top: 0.5rem;
              border-radius: 0.25rem;
              border: 0.063rem solid $gray-200;
            }
          }
        }
      }
    }
    .setting__footer {
      display: flex;
      justify-content: flex-end;
      column-gap: 1rem;
    }
  }
}
</style>
