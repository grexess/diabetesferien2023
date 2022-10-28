<script setup lang="ts">
import { reactive, computed } from 'vue';
import NavigationBar from '../components/NavigationBar.vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const data = reactive({
  tiles: [
    {
      title: 'Teilnehmer-Liste',
      text: 'Hier gibt es den Überblick über alle angemeldeten Kinder.',
      image:
        'https://images.pexels.com/photos/939700/pexels-photo-939700.jpeg?w=300',
      route: '/children',
    },
  ],
});
</script>

<template>
  <NavigationBar />
  <div id="wrapper" class="m-5">
    <div class="row row-cols-1 row-cols-md-2 g-4 justify-content-center">
      <div class="col" v-for="item in data.tiles">
        <div class="card zCard" @click="router.push('/children')">
          <img :src="item.image" class="card-img-top" alt="image" />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.zCard {
  cursor: pointer;
  :hover {
    color: red;
  }
}
.zCard:hover {
  background-color: AliceBlue;
}
</style>
