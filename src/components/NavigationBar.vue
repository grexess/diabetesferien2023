<template>
  <nav class="navbar navbar-expand-lg fixed-top m-2">
    <div class="dropdown">
      <button class="btn m-2" data-bs-toggle="dropdown">
        <i class="bi-sliders" style="font-size: 2rem; color: gray"></i>
      </button>
      <ul class="dropdown-menu">
        <li>
          <a class="dropdown-item" href="#" @click="router.push('/')">Start</a>
          <a class="dropdown-item" href="#" @click="logOut()">Abmelden</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { store } from '../store';

const router = useRouter();
const route = useRoute();

const data = reactive({
  store,
});

function logOut() {
  data.store.isAuthenticated = false;
  router.push('/login');
}
</script>
