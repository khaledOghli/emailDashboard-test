<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { defineAsyncComp } from '@composables/asyncComponent.ts'
const SidebarMenu = defineAsyncComp(() => import('@components/UI/SidebarMenu/SidebarMenu.vue'))
</script>

<template>
  <div class="emailApp">
    <SidebarMobileMenu v-if="false" />
    <SidebarMenu />
    <RouterView />
  </div>
</template>

<style scoped>
.emailApp {
  display: grid;
  grid-template-columns: var(--sidebar-width) 3.5fr;
  height: 100vh;
}
@media (max-width: 768px) {
  .emailApp {
    grid-template-columns: 1fr;
  }
}
</style>
