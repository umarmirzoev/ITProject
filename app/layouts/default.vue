<script setup lang="ts">
import HomeNavbarSection from '~/components/home/NavbarSection.vue'
import HomeMegaFooterSection from '~/components/home/MegaFooterSection.vue'
</script>

<template>
  <div>
    <HomeNavbarSection />
    <slot />
    <HomeMegaFooterSection />
  </div>
</template>
