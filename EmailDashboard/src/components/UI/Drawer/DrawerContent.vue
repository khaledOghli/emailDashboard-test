<script setup lang="ts">
import { useEmailStore } from '@stores/emailStore'
const emailStore = useEmailStore()
</script>

<template>
  <div class="drawer__content">
    <h2 class="drawer__content-title">
      {{ emailStore.emailOpened.subject }}
    </h2>
    <p class="drawer__content-description">
      {{ emailStore.emailOpened.body }}
    </p>
  </div>
</template>
<style lang="scss" scoped>
.drawer__content {
  margin-top: 1rem;
  padding-inline: 1rem;
  &-title {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: var(--light-900);
  }
  &-description {
    font-size: 1rem;
    color: var(--light-800);
  }
}
</style>
