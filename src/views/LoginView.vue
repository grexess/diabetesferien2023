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
      <button class="w-100 btn btn-lg btn-primary" type="submit" @click="login">
        Sign in
      </button>
    </form>
  </main>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { store } from '../store.js';

import Parse from 'parse/dist/parse.min.js';
Parse.initialize('8PzeU2cmYFKLbLnpHzZAfe');
Parse.serverURL = 'https://test.diabetesferien.de/parse';

const router = useRouter();
const route = useRoute();

const data = reactive({
  username: '',
  password: '',
  store,
});

async function login() {
  try {
    debugger;
    const user = await Parse.User.logIn(data.username, data.password);
    data.store.isAuthenticated = user ? true : false;
    router.push({
      name: 'Start',
    });
  } catch (error) {
    debugger;
  }
}
</script>
