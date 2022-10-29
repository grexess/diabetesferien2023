<template>
	<nav class="navbar bg-light fixed-top p-0">
		<div class="container-fluid p-0">
			<div class="dropdown">
				<button class="btn" data-bs-toggle="dropdown">
					<i class="bi-sliders" style="font-size: 2rem; color: gray"></i>
				</button>
				<ul class="dropdown-menu">
					<li>
						<a class="dropdown-item" href="#" @click="router.push('/')">Start</a>
						<a class="dropdown-item" href="#" @click="logOut()">Abmelden</a>
					</li>
				</ul>
			</div>
			<div class=""><FilterBar v-if="route.name === 'Children'" /></div>
			<div style="width: 58px">&nbsp;</div>
		</div>
	</nav>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import Parse from 'parse/dist/parse.min.js';
import FilterBar from './childrenList/FilterBar.vue';
const router = useRouter();
const route = useRoute();

async function logOut() {
	try {
		await Parse.User.logOut();
		router.push('/login');
	} catch (error) {
		this.logOut();
	}
}
</script>
