<template>
  <div class="container">
    <div class="table-wrapper">
      <table class="table">
        <thead class="table__header">
          <tr>
            <th>Services</th>
            <th>Status</th>
            <th>Active Until</th>
            <th>Auto Renewal</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody class="table__body">
          <tr v-for="row in this.rows" :key="row.id">
            <th class="table-item service">
              <div class="table-item__service">
                <div class="table-item__service-icon">
                  <font-awesome-icon icon="fa-solid fa-gear" class="icon" />
                </div>
                <div class="table-item__service-text">
                  <h2>{{ row.title }}</h2>
                  <h3>{{ row.category }}</h3>
                </div>
              </div>
            </th>
            <th class="table-item">
              <div class="table-item__status">
                <h3 :class="{ online: row.isOnline, offline: !row.isOnline }">
                  {{ row.isOnline ? 'Online' : 'Offline' }}
                </h3>
              </div>
            </th>
            <th class="table-item">
              <div class="table-item__active">
                <h3>{{ row.expiration }}</h3>
              </div>
            </th>
            <th class="table-item">
              <div class="table-item__renewal">
                <base-switch :id="row.id" :on="this.on" :off="this.off" :isEnabled="row.isAutoRenewal"></base-switch>
              </div>
            </th>
            <th class="table-item">
              <div class="table-item__actions">
                <base-button class="btn-white" @click="this.renew(row.id)">Renew</base-button>
                <base-button class="btn-secondary" @click="this.controls(row.id)">Controls</base-button>
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>

    <footer class="continue__order">
      <a href="/dashboard">
        <base-button class="btn-secondary">Order Now</base-button>
      </a>
    </footer>
  </div>
</template>

<script>
import BaseButton from '@/components/UI/BaseButton.vue';
import BaseSwitch from '@/components/UI/BaseSwitch.vue';

export default {
  name: 'DashboardViewServices',
  components: {
    BaseButton,
    BaseSwitch,
  },
  data() {
    return {
      rows: [
        {
          id: 0,
          title: 'DDOS Protection',
          category: 'Other Services',
          isOnline: true,
          expiration: '01/01/2025',
          isAutoRenewal: true,
        },
        {
          id: 1,
          title: 'Dayli Backups',
          category: 'Other Services',
          isOnline: false,
          expiration: '01/01/2025',
          isAutoRenewal: false,
        },
        {
          id: 2,
          title: 'Domain SSL For 12 month',
          category: 'Other Services',
          isOnline: true,
          expiration: '01/01/2025',
          isAutoRenewal: true,
        },
      ],
    };
  },
  methods: {
    renew(id) {
      console.log('[renew]: ', id);
    },
    controls(id) {
      console.log('[controls]: ', id);
    },
    on(id) {
      const row = this.getRowById(id);

      row.isAutoRenewal = true;
    },
    off(id) {
      const row = this.getRowById(id);

      row.isAutoRenewal = false;
    },
    getRowById(id) {
      return this.rows.filter((row) => row.id === id)[0];
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/all';

.container {
  width: 100%;
  margin: 1.5rem;
  margin-top: calc(1.5rem + 64px);
}

.continue__order {
  background-color: $white-100;
  border-radius: 1.5rem;
  padding: 1rem 2rem;
  text-align: center;
}

.table-wrapper {
  overflow: auto;
  .table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 1rem;
    &__header,
    &__body {
      white-space: nowrap;
      tr {
        th {
          @include fluid-type($text-lg, $text-lg, 600, $black-2);
          background-color: $white-100;
          padding: 1rem;
          text-align: left;
          &:first-child {
            border-radius: 25px 0 0 25px;
          }
          &:last-child {
            border-radius: 0 25px 25px 0;
          }
        }
      }
    }
    &__header {
      tr {
        th {
          padding: 2rem 1rem;
        }
      }
    }
    &__body {
      tr {
        .table-item {
          &__service {
            @include center-y;
            &-icon {
              @include center;
              width: 54px;
              aspect-ratio: 1 / 1;
              border-radius: 50%;
              background-color: rgba($blue-100, 0.1);
              .icon {
                color: $blue-100;
                font-size: $text-xl;
              }
            }
            &-text {
              margin-left: 0.5rem;
              h2 {
                @include fluid-type($text-lg, $text-lg, 600, $black-2);
              }
              h3 {
                @include fluid-type($text-base, $text-base, 500, $gray-100);
                margin-top: 0.25rem;
                text-align: left;
              }
            }
          }
          &__status {
            h3 {
              @include fluid-type($text-base, $text-base, 700);
              text-transform: uppercase;
              &.online {
                color: $green-2;
              }
              &.offline {
                color: $red-1;
              }
            }
          }
          &__active {
            h3 {
              @include fluid-type($text-base, $text-base, 600, $blue-200);
            }
          }
          &__renewal {
            .switch {
              width: 3.938rem;
              height: 1.875rem;
              border-radius: 3.125rem;
              background-color: $gray-200;
              position: relative;
              top: 0.5rem;
              cursor: pointer;
              &::after {
                content: '';
                position: absolute;
                top: 0.188rem;
                left: 0.188rem;
                width: 1.5rem;
                aspect-ratio: 1 / 1;
                background-color: $white-100;
                border-radius: 50%;
              }
              &.active {
                background-color: $blue-100;
                &::after {
                  left: calc(100% - 0.188rem);
                  transform: translateX(-100%);
                }
              }
            }
          }
          &__actions {
            button {
              margin-left: 0.5rem;
              &:first-child {
                margin-left: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
