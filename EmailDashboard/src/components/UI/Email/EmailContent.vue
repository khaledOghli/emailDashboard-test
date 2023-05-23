<script setup lang="ts">
import { computed } from 'vue'
import { useEmailStore } from '@stores/emailStore'
import { defineAsyncComp } from '@composables/asyncComponent.ts'
const emailStore = useEmailStore()
import EmailRow from '@components/UI/Email/EmailRow.vue'
const Drawer = defineAsyncComp(() => import('@components/UI/Drawer/Drawer.vue'))
interface Props {
  emailFolder: number
}
const props: Props = defineProps({
  emailFolder: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="email__content">
    <EmailRow
      v-for="email in emailStore.getEmailsByFolder(props.emailFolder)"
      :key="email.id"
      :email="email"
    />
  </div>

  <Drawer :open="emailStore.isModalVisible" />
</template>

<style lang="scss" scoped>
.email__content {
  display: flex;
  flex-direction: column;
}
</style>
