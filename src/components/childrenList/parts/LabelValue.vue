<template>
  <div class="row">
    <div class="col">
      <div class="text-end zLabel">{{ label }}</div>
    </div>
    <div class="col">
      <div class="text-start zText">{{ value }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: String; value: String }>();
</script>
