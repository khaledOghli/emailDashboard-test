<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Component Loading....'
  }
})
</script>

<template>
  <div class="d-flex flex-col align-item-center justify-center w-100 !mt-5 min-h-400px">
    <img
      src="@/assets/images/loadingState/fetching-data.svg"
      class="w-300px h-200px"
      fetchPriority="High"
      width="300"
      height="200"
      alt="error icon"
    />
    <h3 class="!mt-1 text-brand-blue-600 dark:text-brand-light-100">
      {{ props.title }}
    </h3>
  </div>
</template>

<style lang="scss" scoped></style>
