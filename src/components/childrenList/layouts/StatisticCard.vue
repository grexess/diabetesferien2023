<template>
	<div class="row">
		<div class="col-12">
			<div class="card p-0 my-2">
				<div class="d-flex justify-content-center">
					<div class="p-2">
						<div class="">
							<span class="fs-3 text">{{ props.data.length }}</span>
							<span class="d-block zText opacity-50">{{
								props.data.length > 1 ? 'Anmeldungen' : 'Anmeldung'
							}}</span>
						</div>
					</div>
					<div class="p-2">
						<Pie :chartData="chartData" :chartOptions="chartOptions" style="width: 60px" />
					</div>
					<div class="p-2" v-if="props.data.filter((e) => e.get('gender') === 'female').length > 0">
						<div class="">
							<span style="color: tomato" class="fs-3 text">{{
								props.data.filter((e) => e.get('gender') === 'female').length
							}}</span>
							<span style="color: tomato" class="d-block zText opacity-50">Mädchen</span>
						</div>
					</div>
					<div class="p-2" v-if="props.data.filter((e) => e.get('gender') === 'male').length > 0">
						<div class="">
							<span style="color: dodgerblue" class="fs-3 text">{{
								props.data.filter((e) => e.get('gender') === 'male').length
							}}</span>
							<span style="color: dodgerblue" class="d-block zText opacity-50">{{
								props.data.length > 1 ? 'Jungen' : 'Junge'
							}}</span>
						</div>
					</div>
					<div class="p-2">
						<div class="">
							<span style="" class="fs-3 text">{{ averageAge() }}</span>
							<span style="" class="d-block zText opacity-50"
								>{{ props.data.length > 1 ? '&#8709;' : '' }} Alter</span
							>
						</div>
					</div>
					<div
						class="p-2"
						v-if="
							props.data.length > 1 &&
							props.data.filter((e) => e.get('gender') === 'female').length > 0
						"
					>
						<div class="">
							<span style="color: tomato" class="fs-3 text">{{ averageAge('female') }}</span>
							<span style="color: tomato" class="d-block zText opacity-50">&#8709; Mädchen</span>
						</div>
					</div>
					<div
						class="p-2"
						v-if="
							props.data.length > 1 &&
							props.data.filter((e) => e.get('gender') === 'male').length > 0
						"
					>
						<div class="">
							<span style="color: dodgerblue" class="fs-3 text">{{ averageAge('male') }}</span>
							<span style="color: dodgerblue" class="d-block zText opacity-50">&#8709; Jungen</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from 'vue';
import moment from 'moment';
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const chartData = computed(() => {
	return {
		datasets: [
			{
				backgroundColor: ['tomato', 'dodgerblue'],
				data: [
					props.data.filter((e) => e.get('gender') === 'female').length,
					props.data.filter((e) => e.get('gender') === 'male').length,
				],
			},
		],
	};
});

const chartOptions = {
	plugins: {
		tooltip: {
			enabled: false, // <-- this option disables tooltips
		},
	},
};

function averageAge(v) {
	const ages = v
		? props.data.filter((e) => e.get('birthDay').length > 0 && e.get('gender') === v)
		: props.data.filter((e) => e.get('birthDay').length > 0);

	let age = 0;
	ages.forEach((e) => {
		age += moment().diff(moment(e.get('birthDay'), 'DD.MM.YYYY'), 'years');
	});
	return (age / ages.length).toFixed(1);
}

const props = defineProps(['data']);
</script>
