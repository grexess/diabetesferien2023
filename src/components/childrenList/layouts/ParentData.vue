<script setup lang="ts">
import { reactive, computed } from 'vue';
import LabelValue from '../parts/LabelValue.vue';
defineProps<{
	data;
}>();
</script>
<template>
	<LabelValue :label="'Sorgeberechtigte(r):'" :value="data.sorgType" />
	<LabelValue :label="'Nachname:'" :value="data.familyName" />
	<LabelValue :label="'Vorname:'" :value="data.firstName" />
	<LabelValue :label="'Telefon:'" :value="data.phone" />
	<LabelValue :label="'eMail:'" :value="data.email" />
	<LabelValue :label="'Wohnort:'" :value="data.city" />
	<LabelValue :label="'PLZ:'" :value="data.zip" />
	<LabelValue :label="'Strasse:'" :value="data.street" />
</template>
