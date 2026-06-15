<script setup lang="ts">
import HomeContactSection from '~/components/home/ContactSection.vue'
import HomeEngagementSection from '~/components/home/EngagementSection.vue'
import HomeFaqSection from '~/components/home/FaqSection.vue'
import HomeSpotlightSection from '~/components/home/SpotlightSection.vue'
import HomeIndustriesSection from '~/components/home/IndustriesSection.vue'
import HomeJourneySection from '~/components/home/JourneySection.vue'
import HomeMegaFooterSection from '~/components/home/MegaFooterSection.vue'
import HomeNavbarSection from '~/components/home/NavbarSection.vue'
import HomePartnershipCultureSection from '~/components/home/HomePartnershipCultureSection.vue'
import HomePartnerSection from '~/components/home/HomePartnerSection.vue'
import HomeReferralBannerSection from '~/components/home/ReferralBannerSection.vue'
import HomeServicesSection from '~/components/home/ServicesSection.vue'
import HomeTrustSection from '~/components/home/HomeTrustSection.vue'
</script>

<template>
  <div>
    <HomeNavbarSection />
    <slot />
    <HomeMegaFooterSection />
  </div>
</template>
