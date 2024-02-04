<template>
  <!-- Footer -->
  <footer class="footer">
    <div class="footer__company">
      <div class="footer__company-logo">
        <img :src="assets.footerLogo" alt="Logo" />
        <h1>Ternhost</h1>
      </div>
      <div class="footer__company-about">
        <p>
          Nulla diam felis, malesuada ut erat quis, mattis dignissim justo. Cras cursus, lacus et dignissim volutpat
        </p>
      </div>
    </div>
    <div class="footer__sitemap">
      <div class="footer__menu">
        <h1>Quick Links</h1>

        <ul class="footer__menu-group">
          <li class="footer__menu-group__item" v-for="value in links.quick" :key="value.id">
            <a :href="value.url">{{ value.name }}</a>
          </li>
        </ul>
      </div>
      <div class="footer__menu">
        <h1>Services</h1>

        <ul class="footer__menu-group">
          <li class="footer__menu-group__item" v-for="value in links.service" :key="value.id">
            <a :href="value.url">{{ value.name }}</a>
          </li>
        </ul>
      </div>
      <div class="footer__menu">
        <h1>Contact Us</h1>

        <ul class="footer__menu-group">
          <li class="footer__menu-group__item" v-for="value in links.contact" :key="value.id">
            <a :href="value.url">{{ value.name }}</a>
          </li>
        </ul>

        <div class="footer__menu-social">
          <h1>Follow Us</h1>

          <ul class="social__group">
            <li class="social__group-item" v-for="value in links.social" :key="value.id">
              <a :href="value.url" class="social__group-item__link">
                <img :src="value.icon" alt="Icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import footerLogo from '@/assets/images/header-logo.svg';
import facebook from '@/assets/images/facebook.svg';
import twitter from '@/assets/images/twitter.svg';
import youtube from '@/assets/images/youtube.svg';

export default {
  name: 'TheFooter',
  data() {
    return {
      assets: {
        footerLogo,
      },
      links: {
        quick: [
          { id: 1, name: 'Home', url: undefined },
          { id: 2, name: 'About Us', url: undefined },
          { id: 3, name: 'Services', url: undefined },
          { id: 4, name: 'Contacts Us', url: undefined },
        ],
        service: [
          { id: 1, name: 'Shared Web Hosting', url: undefined },
          { id: 2, name: 'VPS Hosting', url: undefined },
          { id: 3, name: 'Dedicated Server', url: undefined },
          { id: 4, name: 'Cloud Hosting', url: undefined },
          { id: 5, name: 'Domain Names', url: undefined },
          { id: 6, name: 'License Keys', url: undefined },
        ],
        contact: [
          { id: 1, name: 'shield.info@gmail.com', url: undefined },
          { id: 2, name: '+91 - 99xxx 000xx', url: undefined },
        ],
        social: [
          { id: 1, url: undefined, icon: facebook },
          { id: 2, url: undefined, icon: twitter },
          { id: 3, url: undefined, icon: youtube },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.footer {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 10rem;
  @media screen and (max-width: 1000px) {
    grid-gap: 3rem;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  &__company {
    @media screen and (max-width: 800px) {
      @include center-y;
      flex-direction: column;
      text-align: center;
    }
    &-logo {
      @include center-y;
      h1 {
        @include text-4xl(700, $blue-200);
        text-transform: uppercase;
        margin-left: 0.625rem;
      }
    }
    &-about {
      margin-top: 1.5rem;
      p {
        @include text-base(400, $gray-200);
      }
    }
  }
  &__sitemap {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
      grid-gap: 3rem;
      text-align: center;
    }
    .footer__menu {
      h1 {
        @include text-base(700);
      }
      &-group {
        margin-top: 0.625rem;
        &__item {
          margin-top: 0.625rem;
          a {
            @include text-base(400, $gray-200);
          }
        }
      }
      &-social {
        margin-top: 3rem;
        .social__group {
          display: flex;
          margin-top: 1rem;
          @media screen and (max-width: 600px) {
            justify-content: center;
          }
          &-item {
            margin-left: 1rem;
            &:first-child {
              margin-left: 0;
            }
          }
        }
      }
    }
  }
}
</style>
