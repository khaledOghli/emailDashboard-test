<script setup lang="ts">
import IconEmailReaded from '@icons/IconEmailReaded.vue'
import IconDelete from '@icons/IconDelete.vue'
import IconInbox from '@icons/IconInbox.vue'
import { useEmailStore } from '@stores/emailStore'
const emailStore = useEmailStore()
interface Props {
  emailFolder: number
  type: number
}
const props: Props = defineProps({
  emailFolder: {
    type: Number,
    required: true
  },
  type: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="email__actions">
    <div>
      <input
        id="email__actions__checkbox"
        type="checkbox"
        v-model="emailStore.allEmailsSelected[props.type].value"
        @change="(e) => emailStore.checkAllEmails(emailStore.allEmailsSelected[props.type].value)"
        class="email__actions__checkbox"
      />
      <label for="email__actions__checkbox">
        Email Selected ({{ emailStore.getEmailsCheckedByFolder(props.emailFolder).length }})
      </label>
    </div>
    <div>
      <button class="ghost" @click="emailStore.markAsRead">
        <IconEmailReaded class="icon" />
        Marks as read
      </button>
      <button v-if="props.emailFolder === 2" class="ghost" @click="emailStore.returnToInbox">
        <IconInbox class="icon" />
        Inbox
      </button>
      <button v-else-if="props.emailFolder === 1" class="ghost" @click="emailStore.archiveEmails">
        <IconDelete class="icon" />
        Archive
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.email__actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  &:first-of-type {
    border-top: 1px solid #e0e0e0;
  }
  &__checkbox {
    margin-right: 1rem;
  }
}
</style>
