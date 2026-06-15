<script lang="ts" setup>
import ServiceDetailPage from '~/components/service/ServiceDetailPage.vue'

const { name } = useRoute().params
</script>

<template>
  <main>
    <ServiceDetailPage />
  </main>
</template>

<style scoped></style>

