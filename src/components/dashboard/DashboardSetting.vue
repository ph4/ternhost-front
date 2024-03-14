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
              <h1>Avatar</h1>
              <base-button class="btn-secondary">Add</base-button>
            </li>
            <li class="security__item">
              <h1>Confirmation By Email</h1>
              <base-button class="btn-green">Enabled</base-button>
            </li>
            <li class="security__item">
              <h1>Confirmation By Phone</h1>
              <base-button class="btn-green">Enabled</base-button>
            </li>
            <li class="security__item">
              <h1>Two-Factor Authentication</h1>
              <base-button class="btn-red">Disabled</base-button>
            </li>
          </ul>
        </div>
        <form class="setting__body-form">
          <div class="box grid-2">
            <div class="form-part">
              <label>First Name</label>
              <input type="text" placeholder="Enter your First Name" />
            </div>
            <div class="form-part">
              <label>Last Name</label>
              <input type="text" placeholder="Enter your Last Name" />
            </div>
          </div>
          <div class="box grid-2">
            <div class="form-part">
              <label>Email</label>
              <input type="email" placeholder="Enter your Email" />
            </div>
            <div class="form-part">
              <label>Phone</label>
              <input type="text" placeholder="Enter your Phone" />
            </div>
          </div>
          <div class="box grid-2">
            <div class="form-part">
              <label>Address</label>
              <input type="text" placeholder="Enter your Adress" />
            </div>
            <div class="form-part">
              <label>Country</label>
              <input type="text" placeholder="Enter your Country" />
            </div>
          </div>
          <div class="box grid-3">
            <div class="form-part">
              <label>City</label>
              <input type="text" placeholder="Enter your City" />
            </div>
            <div class="form-part">
              <label>State</label>
              <input type="text" placeholder="Enter your State or Province" />
            </div>
            <div class="form-part">
              <label>Zip Code</label>
              <input type="text" placeholder="Enter your Zip Code" />
            </div>
          </div>
        </form>
      </div>
      <footer class="setting__footer">
        <base-button class="btn-white" @click="this.toggle">Cancel</base-button>
        <base-button class="btn-white">Save</base-button>
      </footer>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';

import { gsap } from 'gsap';

export default {
  name: 'DashboardSetting',
  components: {
    BaseButton,
  },
  data() {
    return {
      isShow: false,
    };
  },
  mounted() {
    this.$emitter.on('_dashboard_-show-modal', this.toggle);
  },
  methods: {
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
    cancel() {},
    save() {},
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
