<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useEmailStore } from '@stores/emailStore'
import { onClickOutside } from '@vueuse/core'
import DrawerHeader from './DrawerHeader.vue'
import DrawerContent from './DrawerContent.vue'
const emailStore = useEmailStore()
interface Props {
  open: boolean
}
const props: Props = defineProps({
  open: Boolean
})
const target = ref(null)
onClickOutside(target, () => emailStore.closeEmail())
const open = computed(() => (props.open ? 'visible' : 'hidden'))
const closeDrawer = (event: { key: string }) => {
  if (event.key === 'Escape' && props.open) {
    emailStore.closeEmail()
  }
}
onMounted(() => {
  window.addEventListener('keydown', closeDrawer)
  return () => window.removeEventListener('keydown', closeDrawer)
})
onUnmounted(() => {
  window.removeEventListener('keydown', closeDrawer)
})
</script>

<template>
  <div class="overlay"></div>
  <div class="drawer" v-bind:class="{ open: props.open }" ref="target">
    <DrawerHeader />
    <DrawerContent />
  </div>
</template>

<style scoped>
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 100;
  transform: translateX(100%);
  transition: transform 0.3s ease-out;
  padding: 1.5rem;
}
.drawer.open {
  transform: translateX(0);
}
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  visibility: v-bind(open);
}
</style>
