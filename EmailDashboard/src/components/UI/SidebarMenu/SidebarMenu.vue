<script setup lang="ts">
import { defineAsyncComp } from '@composables/asyncComponent.ts'
const SidebarMenuHeader = defineAsyncComp(() => import('./SidebarMenuHeader.vue'))
const SidebarMenuLinks = defineAsyncComp(() => import('./SidebarMenuLinks.vue'))
</script>

<template>
  <div class="emailApp__sidebar">
    <SidebarMenuHeader />
    <div class="emailApp__sidebar__content">
      <SidebarMenuLinks />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.emailApp__sidebar {
  background-color: var(--sidebar-bg);
  border-right: 1px solid var(--sidebar-stroke);
  padding: 1.5rem;

  &__content {
    margin-top: 2rem;
  }
}
</style>
