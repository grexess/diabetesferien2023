<script setup>
import { reactive, computed } from 'vue';

import MedicalData from '../components/childrenList/layouts/MedicalData.vue';
import ParentData from '../components/childrenList/layouts/ParentData.vue';
import CampData from '../components/childrenList/layouts/CampData.vue';
import NavigationBar from '../components/NavigationBar.vue';
import { store } from '../store';
import Parse from 'parse/dist/parse.min.js';

// import SettingsDialog from './SettingsDialog.vue';
// import LogoutDialog from './LogoutDialog.vue';

async function fetchData() {
	Parse.initialize('7PzeU2cmYFKLbLnpHzZAfe');
	Parse.serverURL = 'https://www.diabetesferien.de/parse';
	const Child = Parse.Object.extend('Child2023');
	const query = new Parse.Query(Child);
	query.limit(500);
	data.children = await query.find();
}

const data = reactive({
	children: [],
});

fetchData();

const computedData = computed(() => {
	if (!store.filterChildren) {
		return data.children;
	}
	return data.children.filter(
		(e) =>
			e.get('firstName').includes(store.filterChildren) ||
			e.get('familyName').includes(store.filterChildren) ||
			e.get('medicData').doctor.name.toLowerCase().includes(store.filterChildren.toLowerCase()),
	);
});
</script>

<template>
	<NavigationBar />
	<div class="container mt-5">
		<div class="row">
			<div class="col-sm-12 my-2" v-for="item in computedData">
				<div class="card p-0">
					<div class="card-header">{{ item.get('firstName') }} {{ item.get('familyName') }}</div>
					<div class="card-body">
						<div class="row">
							<div class="col-sm-4">
								{{ item.get('gender') === 'female' ? 'weiblich' : 'männlich' }}
							</div>
							<div class="col-sm-4">{{ item.get('birthDay') }}</div>
							<div class="col-sm-4">{{ item.get('attendance') + 1 }}. Teilnahme</div>
						</div>
						<div class="card p-0 my-2">
							<div class="card-header">Medizinische Daten</div>
							<div class="card-body">
								<MedicalData :data="item.get('medicData')" />
							</div>
						</div>
						<div class="card p-0 my-2">
							<div class="card-header">Sorgeberechtigte</div>
							<div class="card-body">
								<ParentData :data="item.get('parentData')" />
							</div>
						</div>
						<div class="card p-0 my-2">
							<div class="card-header">Camp-Daten</div>
							<div class="card-body">
								<CampData :data="item.get('campData') ? item.get('campData') : {}" />
							</div>
						</div>
						<div class="card p-0 my-2" v-if="item.get('additionalData')">
							<div class="card-header">Sonstiges</div>
							<div class="card-body">{{ item.get('additionalData') }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
