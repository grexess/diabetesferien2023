<script setup lang="ts">
import { reactive, computed } from 'vue';
import LabelValue from '../parts/LabelValue.vue';
defineProps<{ data: Object }>();
</script>
<template>
  <LabelValue :label="'Gruppe:'" :value="``" />
  <LabelValue :label="'Zimmer:'" :value="``" />
  <LabelValue :label="'Bett:'" :value="``" />
</template>
