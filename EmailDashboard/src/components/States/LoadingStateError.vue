<script setup>
const props = defineProps({
  errorMessage: { type: String, default: 'Component Failed To Load' },
  errorDescription: { type: String, default: '' }
})
</script>
<template>
  <div class="d-flex flex-col align-item-center justify-center w-100 !mt-5 min-h-400px">
    <img src="@/assets/images/otherState/Failed.svg" width="300" height="300" alt="error icon">
    <h3 class="!mt-5 text-brand-primary-500">
      {{ props.errorMessage }}
    </h3>
    <p class="!mt-5 text-brand-primary-800" v-if="errorDescription && errorDescription !== ''">
      {{ props.errorDescription }}
    </p>
  </div>
</template>


<style lang="scss" scoped>

</style>