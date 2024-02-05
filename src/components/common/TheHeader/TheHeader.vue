<template>
  <header class="header">
    <TheContainer>
      <router-link to="/" class="header__logo">
        <img :src="assets.headerLogo" alt="Ternhost" />
        <h1>Ternhost</h1>
      </router-link>
      <div class="header__menu">
        <ul class="header__menu-group">
          <li class="header__menu-group__item" v-for="menuItem in menu" :key="menuItem.id">
            <router-link :to="menuItem.url">{{ menuItem.name }}</router-link>
          </li>
        </ul>

        <BaseButton class="btn btn-primary">Login</BaseButton>
      </div>
      <div class="header__menu-mobile" @click="showMobileMenu">
        <img :src="assets.headerBars" alt="bars" />
      </div>
    </TheContainer>
  </header>

  <div class="dropdown" v-if="isShowMobileMenu">
    <div class="logo">
      <router-link to="/" class="header__logo">
        <img :src="assets.headerLogo" alt="Ternhost" />
        <h1>Ternhost</h1>
      </router-link>

      <img :src="assets.dropdownClose" alt="Close" @click="closeMobileMenu" />
    </div>

    <div class="menu">
      <ul class="list">
        <li class="item" v-for="menuItem in menu" :key="menuItem.id">
          <router-link :to="menuItem.url" class="link">{{ menuItem.name }}</router-link>
        </li>
      </ul>

      <BaseButton class="btn btn-primary">Login</BaseButton>
    </div>
  </div>
</template>

<script>
import headerLogo from '@/assets/images/header-logo.svg';
import headerBars from '@/assets/images/header-bars.svg';
import dropdownClose from '@/assets/images/header-dropdown-close.svg';

import TheContainer from '@/components/common/TheContainer/TheContainer.vue';

import BaseButton from '@/components/UI/BaseButton.vue';

export default {
  name: 'TheHeader',
  components: {
    BaseButton,
    TheContainer,
  },
  data() {
    return {
      isShowMobileMenu: false,
      assets: {
        headerLogo,
        headerBars,
        dropdownClose,
      },
      menu: [
        { id: 1, name: 'Domain', url: '/domain' },
        { id: 2, name: 'Hosting', url: '/hosting' },
        { id: 3, name: 'Website Builder', url: '/builder' },
        { id: 4, name: 'Help', url: '/help' },
      ],
    };
  },
  methods: {
    showMobileMenu() {
      this.isShowMobileMenu = true;
    },
    closeMobileMenu() {
      this.isShowMobileMenu = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.header {
  backdrop-filter: blur(10px);
  .container {
    @include center-y;
    justify-content: space-between;
    padding: 0.938rem 0;
    .header__logo {
      @include center-y;
      text-decoration: none;
      h1 {
        @include text-4xl(700, $blue-200);
        text-transform: uppercase;
        margin-left: 0.625rem;
        @media screen and (max-width: 500px) {
          font-size: 1.75rem;
        }
      }
    }
    .header__menu {
      @include center-y;
      @media screen and (max-width: 1024px) {
        display: none;
      }
      &-group {
        display: flex;
        &__item {
          margin-left: 2.5rem;
          a {
            @include text-base(500, $blue-200);
          }
        }
      }
      .btn {
        margin-left: 2.5rem;
      }
    }
    .header__menu-mobile {
      display: none;
      @media screen and (max-width: 1024px) {
        display: block;
      }
    }
  }
}

.dropdown {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: $white-300;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  .logo {
    @include center-y;
    justify-content: space-between;
    .header__logo {
      @include center-y;
      text-decoration: none;
      h1 {
        @include text-4xl(700, $blue-200);
        text-transform: uppercase;
        margin-left: 0.625rem;
        @media screen and (max-width: 500px) {
          font-size: 1.75rem;
        }
      }
    }
  }
  .menu {
    flex-grow: 1;
    @include center;
    flex-direction: column;
    .list {
      height: 35%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 10rem;
      .item {
        text-align: center;
        .link {
          @include text-base(500, $blue-200);
        }
      }
    }
    .btn {
      margin: 0 auto;
      align-self: start;
    }
  }
}
</style>
