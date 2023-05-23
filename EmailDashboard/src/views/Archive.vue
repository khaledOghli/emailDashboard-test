<script setup lang="ts">
import EmailActions from '@components/UI/Email/EmailActions.vue'
import EmailContent from '@components/UI/Email/EmailContent.vue'
import EmailHeader from '@components/UI/Email/EmailHeader.vue'
</script>
<template>
  <div id="inbox" class="app_content">
    <EmailHeader />
    <EmailActions :type="1" :emailFolder="2" />
    <EmailContent :emailFolder="2" />
  </div>
</template>

<style></style>
