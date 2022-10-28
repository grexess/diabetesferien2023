<script setup lang="ts">
import { reactive, computed, PropType } from 'vue';
import HeaderLine from '../parts/HeaderLine.vue';
import LabelValue from '../parts/LabelValue.vue';
import CheckBox from '../parts/CheckBox.vue';

defineProps<{
  data: Object;
}>();
</script>
<template>
  <HeaderLine :data="'Diabetes'" />
  <LabelValue :label="'Praxis / Klinik:'" :value="data.doctor.surgery" />
  <LabelValue
    :label="'Behandelnder Diabetologe/-in:'"
    :value="data.doctor.name"
  />
  <LabelValue
    :label="'Diabetes seit:'"
    :value="`${data.doctor.diabetesSince} ${
      data.doctor.diabetesSince > 1 ? 'Jahren' : 'Jahr'
    }`"
  />
  <LabelValue
    :label="'Therapieform:'"
    :value="`${data.doctor.therapie} ${
      data.doctor.therapie === 'Pumpe'
        ? ` (seit ${data.doctor.pumpSince} ${
            data.doctor.pumpSince > 1 ? 'Jahren' : 'Jahr'
          })`
        : ''
    }`"
  />
  <HeaderLine :data="'Allergien/Unverträgl. '" />
  <div class="row justify-content-center">
    <CheckBox :label="'Zöliakie'" v-if="data.allergies.celiac" />
    <CheckBox :label="'Laktose-Intoleranz'" v-if="data.allergies.lactose" />
  </div>
  <div class="row justify-content-center">
    <CheckBox
      :label="`Nussallergie (${data.allergies.nut.data})`"
      v-if="data.allergies.nut.flag"
    />
  </div>
  <div class="row justify-content-center">
    <CheckBox
      :label="`Obst-Unverträglichkeit (${data.allergies.fruit.data})`"
      v-if="data.allergies.fruit.flag"
    />
  </div>
  <HeaderLine :data="'Andere Erkrankungen'" />
  <div class="row justify-content-center">
    <CheckBox :label="'Epilepsie'" v-if="data.dieseases.thyroid" />
    <CheckBox
      :label="'Schilddrüsenerkrankung'"
      v-if="data.dieseases.epilepsy"
    />
  </div>
  <div class="row justify-content-center">
    <CheckBox
      :label="`Sonstiges (${data.allergies.fruit.data})`"
      v-if="data.allergies.fruit.flag"
    />
  </div>
</template>
