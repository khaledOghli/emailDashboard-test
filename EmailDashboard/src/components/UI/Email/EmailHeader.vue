<script setup lang="ts">
import { useRoute } from 'vue-router'
const $route = useRoute()
const title = $route.meta.title
</script>
<template>
  <div class="email__header">
    <h1>{{ title }}</h1>
  </div>
</template>

<style lang="scss" scoped>
.email__header {
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
  &::v-deep(h1) {
    color: var(--light-1000);
    font-size: 2rem;
    font-weight: 500;
  }
}
</style>
