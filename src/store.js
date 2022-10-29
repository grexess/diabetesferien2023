// store.js
import { reactive } from 'vue';

export const store = reactive({
	filterChildren: null,
	setFilter(v) {
		this.filterChildren = v;
	},
});
