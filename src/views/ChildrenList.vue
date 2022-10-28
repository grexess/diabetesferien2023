<script setup lang="ts">
import { reactive, computed } from 'vue';

import MedicalData from '../components/childrenList/layouts/MedicalData.vue';
import ParentData from '../components/childrenList/layouts/ParentData.vue';
import CampData from '../components/childrenList/layouts/CampData.vue';
import NavigationBar from '../components/NavigationBar.vue';

// import SettingsDialog from './SettingsDialog.vue';
// import LogoutDialog from './LogoutDialog.vue';

const data = reactive({
  children: [
    {
      objectId: 'HcJ1GLMfQA',
      medicData: {
        doctor: {
          name: 'Dotore',
          surgery: 'Klinik',
          diabetesSince: 5,
          therapie: 'Pumpe',
          pumpSince: 3,
        },
        allergies: {
          celiac: true,
          lactose: true,
          nut: {
            flag: true,
            data: 'Nuts',
          },
          fruit: {
            flag: true,
            data: 'Fruits',
          },
        },
        dieseases: {
          thyroid: true,
          epilepsy: true,
          misc: {
            flag: true,
            data: 'Misc',
          },
        },
      },
      parentData: {
        familyName: 'Fruth',
        firstName: 'Heike ',
        phone: '01733710306',
        email: 'heike@fruth.org',
        zip: '01187',
        city: 'Dresden',
        street: 'Zwickauer Straße 89',
        sorgType: 'Mutter',
      },
      familyName: 'Fruth',
      firstName: 'David',
      birthDay: '17.02.2009',
      gender: 'male',
      additionalData: '',
      attendance: 0,
      createdBy: 'self',
      createdAt: '2021-10-09T12:10:30.632Z',
      updatedAt: '2022-03-13T18:23:41.336Z',
      campData: {
        group: '',
        room: '',
        bed: '',
      },
      modifiedBy: '6NUNfzPeE3',
    },
    {
      objectId: 'qrxDVVm13a',
      medicData: {
        doctor: {
          name: 'Frau Näke',
          surgery: 'Uniklinik Dresden',
          diabetesSince: 10,
          therapie: 'Pumpe',
          pumpSince: 10,
        },
        allergies: {
          celiac: false,
          lactose: false,
          nut: {
            flag: false,
            data: '',
          },
          fruit: {
            flag: false,
            data: '',
          },
        },
        dieseases: {
          thyroid: false,
          epilepsy: false,
          misc: {
            flag: false,
            data: '',
          },
        },
      },
      parentData: {
        familyName: 'Gerhard',
        firstName: 'Karina',
        phone: '034315895771',
        email: 'karina.gerhard@gmx.de',
        zip: '04720',
        city: 'Döbeln',
        street: 'Am Pfarrholz',
        sorgType: 'Mutter',
      },
      familyName: 'Gerhard',
      firstName: 'Martha',
      birthDay: '19.01.2010',
      gender: 'female',
      additionalData: 'blabla',
      attendance: 0,
      createdBy: 'self',
      createdAt: '2021-10-09T14:43:17.004Z',
      updatedAt: '2021-10-15T16:28:30.884Z',
      campData: {
        group: 'Gruppe 1',
        room: '014',
        bed: 'Fenster unten',
      },
      modifiedBy: '6NUNfzPeE3',
    },
  ],
});

const computedData = computed(() => {
  return data.children;
});
</script>

<template>
  <NavigationBar />
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-12 my-2" v-for="item in computedData">
        <div class="card p-0">
          <div class="card-header">
            {{ item.firstName }} {{ item.familyName }}
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-sm-4">
                {{ item.gender === 'female' ? 'weiblich' : 'männlich' }}
              </div>
              <div class="col-sm-4">{{ item.birthDay }}</div>
              <div class="col-sm-4">{{ item.attendance + 1 }}. Teilnahme</div>
            </div>
            <div class="card p-0 my-2">
              <div class="card-header">Medizinische Daten</div>
              <div class="card-body">
                <MedicalData :data="item.medicData" />
              </div>
            </div>
            <div class="card p-0 my-2">
              <div class="card-header">Sorgeberechtigte</div>
              <div class="card-body">
                <ParentData :data="item.parentData" />
              </div>
            </div>
            <div class="card p-0 my-2">
              <div class="card-header">Camp-Daten</div>
              <div class="card-body"><CampData :data="item.campData" /></div>
            </div>
            <div class="card p-0 my-2" v-if="item.additionalData">
              <div class="card-header">Sonstiges</div>
              <div class="card-body">{{ item.additionalData }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
