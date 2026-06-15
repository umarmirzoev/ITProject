<script lang="ts" setup>
import { computed } from 'vue'
import ServiceDetailPage from '~/components/service/ServiceDetailPage.vue'

const services = [
  'End-to-End IoT Services',
  'Hardware Design & Development',
  'Embedded Development',
  'Rust Development',
  'AI & ML Services',
  'Data Services',
  'Compliance and Security',
  'IT Services',
  'Custom Software Development',
  'Cross-Industry Services'
] as const

type ServiceName = (typeof services)[number]

const route = useRoute()
const router = useRouter()

const slugify = (name: string) =>
  name.toLowerCase().replace(/&/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

const fromSlug = (slug: string): ServiceName =>
  services.find((s) => slugify(s) === slug) ?? services[0]

const selectedService = computed<ServiceName>(() =>
  fromSlug(String(route.params.name ?? ''))
)

const onChange = (service: ServiceName) => {
  const slug = slugify(service)
  if (slug !== route.params.name) {
    router.replace(`/services/${slug}`)
  }
}

useSeoMeta({
  title: () => `${selectedService.value} — ItGraf`,
  description: 'ItGraf delivers end-to-end IoT, hardware, and embedded engineering services.',
  ogTitle: () => `${selectedService.value} — ItGraf`,
  ogType: 'website'
})
</script>

<template>
  <main>
    <ServiceDetailPage :initial-service="selectedService" @change="onChange" />
  </main>
</template>

<style scoped></style>
