<script setup>
import { reactive, computed } from 'vue';

import StatisticCard from '../components/childrenList/layouts/StatisticCard.vue';
import MedicalData from '../components/childrenList/layouts/MedicalData.vue';
import ParentData from '../components/childrenList/layouts/ParentData.vue';
import CampData from '../components/childrenList/layouts/CampData.vue';
import NavigationBar from '../components/framework/NavigationBar.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';

import { store } from '../store';
import Parse from 'parse/dist/parse.min.js';

// import SettingsDialog from './SettingsDialog.vue';
// import LogoutDialog from './LogoutDialog.vue';

async function fetchData() {
	try {
		data.loading = true;
		Parse.initialize('7PzeU2cmYFKLbLnpHzZAfe');
		Parse.serverURL = 'https://www.diabetesferien.de/parse';
		const Child = Parse.Object.extend('Child2023');
		const query = new Parse.Query(Child);
		query.limit(500);
		data.children = await query.find();
		data.loading = false;
	} catch (error) {
		data.loading = false;
	}
}

const data = reactive({
	children: [],
	loading: false,
});

fetchData();

const computedData = computed(() => {
	backToTop();
	if (store.nameFilter.length === 0 && store.doctorFilter.length === 0) {
		return data.children;
	}

	let filteredChildren = [...data.children];

	if (store.nameFilter.length > 0) {
		filteredChildren = filteredChildren.filter(
			(e) =>
				e.get('firstName').toLowerCase().includes(store.nameFilter.toLowerCase()) ||
				e.get('familyName').toLowerCase().includes(store.nameFilter.toLowerCase()),
		);
	}

	if (store.doctorFilter.length > 0) {
		filteredChildren = filteredChildren.filter((e) =>
			e.get('medicData').doctor.name.toLowerCase().includes(store.doctorFilter.toLowerCase()),
		);
	}

	return filteredChildren;
});

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function getGenderAvatar(value) {
	if (value && value === 'male') {
		return '?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Sunglasses&hairColor=Brown&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light';
	}
	return '?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light';
}
</script>

<template>
	<NavigationBar />
	<LoadingSpinner v-if="data.loading" />
	<div class="container-fluid zContainer">
		<StatisticCard v-if="computedData.length > 0" :data="computedData" />
		<div class="v-row">
			<div class="col-12" v-for="item in computedData">
				<div class="card p-0 flex-grow-1 my-2">
					<div
						class="card-header zCardHeader"
						:style="`background-color:${item.get('gender') === 'female' ? 'Tomato' : 'DodgerBlue'}`"
					>
						{{ item.get('firstName') }} {{ item.get('familyName') }}
					</div>
					<div class="card-body">
						<div class="row">
							<div class="col-8 align-self-center">
								<div class="zText">
									{{ item.get('gender') === 'female' ? 'weiblich' : 'männlich' }}
								</div>
								<div class="zText">{{ item.get('birthDay') }}</div>
								<div class="zText">{{ item.get('attendance') + 1 }}. Teilnahme</div>
							</div>
							<div class="col-4 align-self-center">
								<div class="text-center">
									<img
										:src="`https://avataaars.io/${getGenderAvatar(item.get('gender'))}`"
										class="rounded"
										alt="avatar"
										width="80"
									/>
								</div>
							</div>

							<hr style="width: 100vw; margin-top: 4px" />
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

<style>
#app {
	padding: 0 !important;
}
.zContainer {
	margin-top: 75px;
}

.zCardHeader {
	color: white !important;
	font-weight: 700;
}
</style>
