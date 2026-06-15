<script setup lang="ts">
import HomeContactSection from '~/components/home/ContactSection.vue'
import HomeEngagementSection from '~/components/home/EngagementSection.vue'
import HomeFaqSection from '~/components/home/FaqSection.vue'
import HomeSpotlightSection from '~/components/home/SpotlightSection.vue'
import HomeIndustriesSection from '~/components/home/IndustriesSection.vue'
import HomeJourneySection from '~/components/home/JourneySection.vue'
import HomePartnershipCultureSection from '~/components/home/HomePartnershipCultureSection.vue'
import HomePartnerSection from '~/components/home/HomePartnerSection.vue'
import HomeReferralBannerSection from '~/components/home/ReferralBannerSection.vue'
import HomeServicesSection from '~/components/home/ServicesSection.vue'
import HomeTrustSection from '~/components/home/HomeTrustSection.vue'
</script>

<template>
  <div class="page">
    <HomeSpotlightSection />
    <HomeTrustSection />
    <HomeJourneySection />
    <HomeServicesSection />
    <HomePartnerSection />
    <HomeIndustriesSection />
    <HomeEngagementSection />
    <HomePartnershipCultureSection />
    <HomeFaqSection />
    <HomeContactSection />
    <HomeReferralBannerSection />
  </div>
</template>

<style scoped lang="scss">
/* Yalantis Rust hero — match mockup */
.page {
  --orange: #103e3c;
  --black: #0a0f1a;
  --gray: #5b6472;
  --max: 118.75rem;
  --px: clamp(1rem, 2.8vw, 2.75rem);
}
.page {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background: #fff;
}
</style>
