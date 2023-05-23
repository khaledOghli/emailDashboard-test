<script setup lang="ts">
import { defineAsyncComp } from '@composables/asyncComponent.ts'
const IconLogo = defineAsyncComp(() => import('@icons/IconLogo.vue'))
</script>
<template>
  <div>
    <IconLogo class="menu__logo" />
  </div>
</template>

<style scoped>
.menu__logo {
  /* margin-inline-start: 1rem; */
}
</style>
