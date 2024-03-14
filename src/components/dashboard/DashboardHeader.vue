<template>
  <header class="dashboard__body-header" ref="header">
    <div class="container">
      <div class="header__body">
        <h1 class="header__body-page">{{ this.getCurrentPage }}</h1>
        <img class="header__body-user" :src="this.avatar" alt="User" />

        <div class="header__body-mobile" @click="this.animate">
          <base-logo></base-logo>

          <div class="header__body-mobile__bars">
            <font-awesome-icon icon="fa-solid fa-bars" class="icon"></font-awesome-icon>
          </div>
        </div>
      </div>

      <div class="header__mobile" ref="headerMobile">
        <ul class="header__mobile-menu">
          <li class="header__mobile-menu__item" v-for="page in store.navbar" :key="page.id">
            <router-link :to="page.path">{{ page.title }}</router-link>
          </li>
          <li class="header__mobile-menu__item">
            <router-link to="/users/login"><base-button class="btn-secondary">Login</base-button></router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import BaseLogo from '@/components/UI/BaseLogo.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

import LoginPersonImage from '@/assets/images/login/login-person.jpg';

import { useDashboardStore } from '@/stores/useDashboardStore.js';
import { gsap } from 'gsap';

export default {
  name: 'DashboardHeader',
  components: {
    BaseLogo,
    BaseButton,
  },
  data() {
    return {
      avatar: LoginPersonImage,
      store: useDashboardStore(),
      isShow: false,
    };
  },
  computed: {
    getCurrentPage() {
      switch (this.$route.path) {
        case '/dashboard':
          return 'Home';
        case '/dashboard/domain':
          return 'Domain';
        case '/dashboard/hosting':
          return 'Hosting';
        case '/dashboard/builder':
          return 'Builder';
        case '/dashboard/service':
          return 'Service';
        default:
          return '';
      }
    },
  },
  methods: {
    open() {
      const tl = gsap.timeline();

      tl.to(this.$refs.header, {
        duration: 0.5,
        height: '100vh',
      })
        .to(this.$refs.headerMobile, {
          duration: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0,
        })
        .to(this.$refs.headerMobile, {
          opacity: 1,
          duration: 0.5,
        });
    },
    close() {
      const tl = gsap.timeline();

      tl.to(this.$refs.headerMobile, {
        duration: 0.5,
        opacity: 0,
      })
        .to(this.$refs.headerMobile, {
          duration: 0,
          display: 'none',
        })
        .to(this.$refs.header, {
          height: 'auto',
          duration: 0.5,
        });
    },
    animate() {
      !this.isShow ? this.open() : this.close();

      this.isShow = !this.isShow;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.dashboard__body-header {
  width: 100%;
  background-color: $white-100;
  padding: 0.5rem 1rem;
  border-left: 0.063rem solid $blue-200;
  .container {
    width: 100%;
    max-width: 1536px;
    display: flex;
    flex-direction: column;
    height: 100%;
    .header__body {
      @include center-y-between;
      &-page {
        @include fluid-type($text-4xl, $text-4xl, 700, $blue-200);
      }
      &-user {
        width: 3rem;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
      }
      &-page,
      &-user {
        @media screen and (max-width: 1100px) {
          display: none;
        }
      }
      &-mobile {
        display: none;
        cursor: pointer;
        @media screen and (max-width: 1100px) {
          @include center-y-between;
          width: 100%;
        }
        &__logo {
          @include center-y;
          h1 {
            @include fluid-type($text-4xl, $text-4xl, 700, $blue-200);
            text-transform: uppercase;
            margin-left: 0.5rem;
          }
        }
        &__bars {
          .icon {
            font-size: $text-3xl;
            color: $blue-200;
          }
        }
      }
    }
    .header__mobile {
      height: 100%;
      flex-grow: 1;
      display: none;
      &-menu {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        &__item {
          text-align: center;
          a {
            @include fluid-type($text-base, $text-base, 500, $blue-200);
          }
        }
      }
    }
  }
}
</style>
