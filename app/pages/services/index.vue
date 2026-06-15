<script lang="ts" setup>
import ServiceHeader from '~/components/service/ServiceHeader.vue'
import ServiceFooterCta from '~/components/service/ServiceFooterCta.vue'
import ServiceDetailPage from '~/components/service/ServiceDetailPage.vue'

useSeoMeta({
  title: 'Services — ItGraf',
  description: 'Software engineering, hardware development, AI implementation, and more. We help you at any stage of development.',
  ogTitle: 'Services — ItGraf',
  ogType: 'website'
})
</script>

<template>
  <main>
    <ServiceHeader />
    <ServiceDetailPage />
    <ServiceFooterCta />
  </main>
</template>

<style scoped></style>
