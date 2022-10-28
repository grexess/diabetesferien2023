<template>
  <div class="row mx-2">
    <div class="col"><hr class="zHr" /></div>
    <div class="col align-self-center col-md-auto zText">{{ data }}</div>
    <div class="col"><hr class="zHr" /></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ data: String }>();
</script>

<style scoped>
.zHr {
  border-top: 1px solid LightSeaGreen;
}
.zText {
  color: LightSeaGreen;
  font-weight: 600;
}
</style>
