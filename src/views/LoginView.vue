<template>
	<main class="form-signin w-100 m-auto">
		<form>
			<h1 class="mb-3 fw-normal">Anmeldung</h1>
			<h3 class="mb-3 fw-normal">Diabetesferien 2023</h3>
			<div class="form-floating mb-3">
				<input
					v-model="data.username"
					type="text"
					class="form-control"
					id="floatingInput"
					placeholder="Benutzername"
					autocomplete="off"
				/>
				<label for="floatingInput">Benutzername</label>
			</div>
			<div class="form-floating mb-3">
				<input
					v-model="data.password"
					type="password"
					class="form-control"
					id="floatingPassword"
					placeholder="Passwort"
					autocomplete="off"
				/>
				<label for="floatingPassword">Passwort</label>
			</div>
			<button class="w-100 btn btn-lg btn-primary" type="submit" @click="login">Sign in</button>
		</form>
	</main>
	<LoginError ref="loginModalRef" :error="data.error" @close="clearData" />
	<LoadingSpinner v-if="data.loading" />
</template>

<script setup>
import { reactive, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { store } from '../store.js';

import LoginError from '../components/loginview/LoginError.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';

import Parse from 'parse/dist/parse.min.js';
Parse.initialize('7PzeU2cmYFKLbLnpHzZAfe');
Parse.serverURL = 'https://www.diabetesferien.de/parse';

const router = useRouter();

const data = reactive({
	username: '',
	password: '',
	error: null,
	store,
	loading: false,
});

let loginModalRef = ref(null);
let loginModal = null;

onMounted(() => {
	loginModal = loginModalRef.value;
});

async function login() {
	try {
		data.loading = true;
		const user = await Parse.User.logIn(data.username, data.password);
		router.push({
			name: 'Start',
		});
		data.loading = false;
	} catch (error) {
		debugger;
		data.loading = false;
		data.error = error;
		loginModal.show();
	}
}

function clearData() {
	data.username = '';
	data.password = '';
	data.error = null;
}
</script>
