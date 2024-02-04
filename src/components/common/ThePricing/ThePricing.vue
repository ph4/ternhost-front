<template>
  <!-- Pricing -->
  <TheWrapper class="pricing-wrapper" id="pricing">
    <TheContainer>
      <TheTitle>Our Flexible Plan</TheTitle>

      <div class="pricing">
        <div class="pricing__time">
          <ul class="pricing__time-group">
            <template v-for="time in planTimes" :key="time.id">
              <li class="pricing__time-group__item" :class="{ active: time.isActive }">{{ time.value }} Month</li>
            </template>
          </ul>
        </div>

        <div class="pricing__plans">
          <ul class="pricing__plans-group">
            <template v-for="plan in plans" :key="plan.id">
              <li class="pricing__plans-group__item" :class="{ best: plan.isActive }">
                <header class="plan__header">
                  <h1>{{ plan.name }}</h1>
                  <div class="plan__header-price">
                    <div class="plan__header-price__row">
                      <h3>${{ plan.monthlyPrice }}/mo</h3>
                      <span>Save {{ plan.discount }}%</span>
                    </div>
                    <h1>
                      ${{ parseFloat((plan.monthlyPrice / 100) * (100 - plan.discount)).toFixed(2) }}<span>/mo</span>
                    </h1>
                  </div>
                </header>

                <div class="plan__column">
                  <ul class="plan__column-group">
                    <li class="plan__column-group__item" v-for="detail in plan.details" :key="detail.id">
                      <h3>
                        {{ detail.value }} <span>{{ detail.field }}</span>
                      </h3>
                    </li>
                  </ul>
                </div>

                <footer class="plan__footer">
                  <TheButton class="btn btn-primary">Buy Now</TheButton>
                </footer>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </TheContainer>
  </TheWrapper>
</template>

<script>
import TheTitle from '@/components/UI/TheTitle.vue';
import TheWrapper from '@/components/common/TheWrapper/TheWrapper.vue';
import TheContainer from '@/components/common/TheContainer/TheContainer.vue';
import TheButton from '@/components/UI/TheButton.vue';

export default {
  name: 'ThePricing',
  components: {
    TheTitle,
    TheWrapper,
    TheContainer,
    TheButton,
  },
  data() {
    return {
      plans: [
        {
          id: 1,
          name: 'Premium',
          monthlyPrice: 199.5,
          discount: 20,
          details: [
            { id: 1, field: 'Domain', value: 'Host 5' },
            { id: 2, field: 'Storage', value: '2GB NVMe' },
            { id: 3, field: 'Bandwidth', value: '50GB' },
            { id: 4, field: 'SSL Certificate', value: 'Free' },
            { id: 5, field: 'Support', value: '24/7' },
            { id: 6, field: 'Storage', value: '2GB NVMe' },
            { id: 7, field: 'SSL Certificate', value: 'Free' },
          ],
        },
        {
          id: 2,
          name: 'Business',
          monthlyPrice: 199.5,
          discount: 70,
          isActive: true,
          details: [
            { id: 1, field: 'Domain', value: 'Host 5' },
            { id: 2, field: 'Storage', value: '2GB NVMe' },
            { id: 3, field: 'Bandwidth', value: '50GB' },
            { id: 4, field: 'SSL Certificate', value: 'Free' },
            { id: 5, field: 'Support', value: '24/7' },
            { id: 6, field: 'Storage', value: '2GB NVMe' },
            { id: 7, field: 'SSL Certificate', value: 'Free' },
          ],
        },
        {
          id: 3,
          name: 'Online Store',
          monthlyPrice: 199.5,
          discount: 30,
          details: [
            { id: 1, field: 'Domain', value: 'Host 5' },
            { id: 2, field: 'Storage', value: '2GB NVMe' },
            { id: 3, field: 'Bandwidth', value: '50GB' },
            { id: 4, field: 'SSL Certificate', value: 'Free' },
            { id: 5, field: 'Support', value: '24/7' },
            { id: 6, field: 'Storage', value: '2GB NVMe' },
            { id: 7, field: 'SSL Certificate', value: 'Free' },
          ],
        },
        {
          id: 4,
          name: 'Pro',
          monthlyPrice: 199.5,
          discount: 40,
          details: [
            { id: 1, field: 'Domain', value: 'Host 5' },
            { id: 2, field: 'Storage', value: '2GB NVMe' },
            { id: 3, field: 'Bandwidth', value: '50GB' },
            { id: 4, field: 'SSL Certificate', value: 'Free' },
            { id: 5, field: 'Support', value: '24/7' },
            { id: 6, field: 'Storage', value: '2GB NVMe' },
            { id: 7, field: 'SSL Certificate', value: 'Free' },
          ],
        },
      ],
      planTimes: [
        { id: 1, value: 12, isActive: false },
        { id: 2, value: 36, isActive: true },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

// @Sections: Pricing
.pricing-wrapper {
  .container {
    .pricing {
      @include center-y;
      flex-direction: column;
      &__time {
        margin: 3rem 0;
        &-group {
          display: flex;
          &__item {
            @include text-lg(700, $blue-100);
            text-transform: uppercase;
            border: 0.125rem solid $blue-100;
            padding: 0.5rem 1rem;
            transition: all 0.2s;
            cursor: pointer;
            &.active,
            &:hover {
              background-color: $blue-100;
              color: $white-100;
            }
            &:first-child {
              border-radius: 0.625rem 0 0 0.625rem;
              border-right: 0.063rem solid $blue-100;
            }
            &:last-child {
              border-radius: 0 0.625rem 0.625rem 0;
              border-left: 0.063rem solid $blue-100;
            }
          }
        }
      }
      &__plans {
        width: 100%;
        &-group {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          @media screen and (max-width: 1000px) {
            grid-template-columns: repeat(3, 1fr);
          }
          @media screen and (max-width: 800px) {
            grid-template-columns: repeat(2, 1fr);
          }
          @media screen and (max-width: 500px) {
            grid-template-columns: repeat(1, 1fr);
          }
          &__item {
            width: 100%;
            text-align: center;
            border-radius: 0.625rem;
            padding: 1.25rem 0;
            &.best {
              background-color: $blue-100;
              .plan__header {
                h1 {
                  color: $white-100;
                }
                &-price {
                  &__row {
                    h3 {
                      color: rgba($white-100, 0.7);
                    }
                    span {
                      background-color: $yellow-100;
                      color: $blue-200;
                    }
                  }
                  h1 {
                    color: $white-100;
                    span {
                      color: $white-100;
                    }
                  }
                }
              }
              .plan__column {
                &-group {
                  &__item {
                    h3 {
                      color: $white-100;
                    }
                  }
                }
              }
            }
            .plan__header {
              h1 {
                @include text-xl(700, $blue-100);
                text-transform: uppercase;
              }
              &-price {
                padding: 1.25rem 0;
                &__row {
                  @include center;
                  h3 {
                    @include text-base(700, $gray-200);
                    text-decoration: line-through;
                  }
                  span {
                    @include text-sm(700, $white-100);
                    border-radius: 0.313rem;
                    background-color: $blue-200;
                    padding: 0.33rem 0.75rem;
                    margin-left: 0.625rem;
                  }
                }
                h1 {
                  @include text-3xl(700, $blue-200);
                  span {
                    @include text-sm(700, $blue-200);
                  }
                }
              }
            }
            .plan__column {
              &-group {
                &__item {
                  border-bottom: 0.063rem solid $white-200;
                  padding: 0.75rem 0;
                  &:last-child {
                    border-bottom: 0;
                  }
                  h3 {
                    @include text-sm(600, $gray-200);
                    span {
                      font-weight: 400;
                    }
                  }
                }
              }
            }
            .plan__footer {
              margin-top: 3rem;
            }
          }
        }
      }
    }
  }
}
</style>
