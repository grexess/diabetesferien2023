<template>
	<!-- Large-->
	<!-- <span class="d-none d-sm-block"> -->
	<div class="row py-2">
		<div class="col-6">
			<div class="input-group position-relative d-inline-flex align-items-center">
				<input
					v-model="nameFilter"
					type="text"
					class="form-control form-control-sm"
					placeholder="Name"
				/>
				<i
					v-if="nameFilter.length > 0"
					class="bi bi-x position-absolute"
					style="right: 8px; cursor: pointer; z-index: 100"
					@click="nameFilter = ''"
				>
				</i>
			</div>
		</div>
		<div class="col-6">
			<div class="input-group position-relative d-inline-flex align-items-center">
				<input
					v-model="doctorFilter"
					type="text"
					class="form-control form-control-sm"
					placeholder="Diabetologe/-in"
				/>
				<i
					v-if="doctorFilter.length > 0"
					class="bi bi-x position-absolute"
					style="right: 8px; cursor: pointer; z-index: 100"
					@click="doctorFilter = ''"
				>
				</i>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { store } from '../../store';

const nameFilter = ref('');
const doctorFilter = ref('');

watch(nameFilter, (newFilter) => {
	store.setNameFilter(newFilter);
});
watch(doctorFilter, (newFilter) => {
	store.setDoctorFilter(newFilter);
});
</script>
