<template>
	<!-- Navbar large -->
	<nav class="navbar bg-light fixed-top p-0">
		<div class="container-fluid p-0">
			<button
				class="btn zDisabledButton"
				@click="router.push('/')"
				:disabled="route.name === 'Start'"
			>
				<i
					class="bi bi-house"
					:style="`font-size: 1.5rem; color: ${route.name === 'Start' ? '#F8F9FA' : 'gray'}`"
				></i>
			</button>
			<FilterBar v-if="route.name === 'Children'" />
			<button class="btn" @click="logoutDialog.show()">
				<i class="bi bi-box-arrow-right mr-2" style="font-size: 1.5rem; color: gray"></i>
			</button>
		</div>
	</nav>
	<!-- Navbar small -->
	<!-- <nav class="navbar bg-light fixed-top p-0 d-sm-none">
		<div class="row p-1">
			<div class="col col-auto">
				<div class="dropdown">
					<button class="btn" data-bs-toggle="dropdown">
						<i class="bi-sliders" style="font-size: 1.5rem; color: gray"></i>
					</button>
					<ul class="dropdown-menu">
						<li>
							<a class="dropdown-item" href="#" @click="router.push('/')">Start</a>
							<a class="dropdown-item" href="#" @click="logOut()">Abmelden</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="col">
				<FilterBar v-if="route.name === 'Children'" />
			</div>
		</div>
	</nav> -->
	<LogoutDialog ref="logoutDialogModal" />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import FilterBar from '../childrenList/FilterBar.vue';
import LogoutDialog from './LogoutDialog.vue';

const router = useRouter();
const route = useRoute();

let logoutDialogModal = ref(null);
let logoutDialog = null;

onMounted(() => {
	logoutDialog = logoutDialogModal.value;
});
</script>

<style>
.zDisabledButton {
	border: 0px !important;
}
</style>
