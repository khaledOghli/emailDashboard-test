<script setup lang="ts">
import { useEmailStore } from '@stores/emailStore'
const emailStore = useEmailStore()
interface Props {
  email: Object
}
const props: Props = defineProps({
  email: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="email__content__row" :class="{ 'email__content__row-read': props.email.read }">
    <div class="email__content__row__checkbox">
      <input
        type="checkbox"
        @change="emailStore.checkEmail(props.email.id)"
        :value="props.email.checked"
        :checked="props.email.checked"
      />
    </div>
    <div class="email__content__row__summary" @click="emailStore.openEmail(email)">
      <p>
        {{ props.email.subject }}
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.email__content__row {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  transition-property: background-color, box-shadow;
  transition-duration: var(--main-transition);
  transition-timing-function: var(--main-transition-easing);
  &:first-of-type {
    border-top: 1px solid #e0e0e0;
  }
  &__checkbox {
    margin-inline-end: 1rem;
    padding-inline-start: 1rem;
  }
  &-read {
    background-color: var(--light-300);
    opacity: 0.5;
  }
  &:hover {
    background-color: var(--sidebar-bg-hover);
    box-shadow: inset 4px 0px 0px 0px var(--primary-500);
  }
  &__summary {
    flex: 1;
    padding: 1rem 0;
    cursor: pointer;
    p {
      font-size: 1rem;
      font-weight: 500;
      color: var(--light-900);
    }
  }
}
</style>
