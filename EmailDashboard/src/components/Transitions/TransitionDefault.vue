<template>
  <transition name="slide-fade" mode="out-in" appear>
    <slot></slot>
  </transition>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.18s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.25s cubic-bezier(1, .6, 0.6, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>