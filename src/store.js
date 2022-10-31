// store.js
import { reactive } from 'vue';

export const store = reactive({
	nameFilter: '',
	doctorFilter: '',
	setNameFilter(v) {
		this.nameFilter = v;
	},
	setDoctorFilter(v) {
		this.doctorFilter = v;
	},
});
