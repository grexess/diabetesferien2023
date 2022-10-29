<template>
	<div class="row">
		<div class="col-sm m-1">
			<div class="input-group position-relative d-inline-flex align-items-center">
				<input
					v-model="filter"
					type="text"
					class="form-control form-control-sm"
					placeholder="Name"
				/>
				<i
					v-if="filter.length > 0"
					class="bi bi-x position-absolute"
					style="right: 8px; cursor: pointer; z-index: 100"
					@click="filter = ''"
				>
				</i>
			</div>
		</div>
		<div class="col-sm m-1">
			<div class="input-group position-relative d-inline-flex align-items-center">
				<input type="text" class="form-control form-control-sm" placeholder="Diabetologe/-in" /><i
					class="bi bi-x position-absolute"
					style="right: 10px; cursor: pointer; z-index: 100"
				>
				</i>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { store } from '../../store';

const filter = ref('');

watch(filter, (newFilter) => {
	store.setFilter(newFilter);
});
</script>
