<script setup lang="ts">
import { ref, computed } from 'vue'
import { useEmailStore } from '@stores/emailStore'
import IconClose from '@icons/IconClose.vue'
import IconEmailReaded from '@icons/IconEmailReaded.vue'
import IconDelete from '@icons/IconDelete.vue'
import IconInbox from '@icons/IconInbox.vue'
const emailStore = useEmailStore()
</script>

<template>
  <div class="drawer__header">
    <div class="drawer__header-close">
      <button class="ghost" @click="emailStore.closeEmail">
        <IconClose class="icon" />
        <span> Close (Esc) </span>
      </button>
    </div>
    <div class="drawer__header-actions">
      <button class="ghost" @click="emailStore.markAsReadById(emailStore.emailOpened.id)">
        <IconEmailReaded class="icon" />
        Marks as read
      </button>
      <button
        class="ghost"
        @click="emailStore.returnToInboxById(emailStore.emailOpened.id)"
        v-if="emailStore.emailOpened.folder !== 1"
      >
        <IconInbox class="icon" />
        Inbox
      </button>
      <button
        class="ghost"
        @click="emailStore.archiveEmailsById(emailStore.emailOpened.id)"
        v-if="emailStore.emailOpened.folder !== 2"
      >
        <IconDelete class="icon" />
        Archive
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.drawer__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-close {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>
