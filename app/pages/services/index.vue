<script lang="ts" setup>
import ServiceHeader from '~/components/service/ServiceHeader.vue'
import ServiceDetailPage from '~/components/service/ServiceDetailPage.vue'
import HomeEngagementSection from '~/components/home/EngagementSection.vue'
import HomePartnershipCultureSection from '~/components/home/HomePartnershipCultureSection.vue'
import HomeFaqSection from '~/components/home/FaqSection.vue'
import HomeContactSection from '~/components/home/ContactSection.vue'
import HomeReferralBannerSection from '~/components/home/ReferralBannerSection.vue'

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
    <ServiceSuccessStories />
    <ServiceConnectedProductsCta />
    <div class="services-engagement">
      <HomeEngagementSection />
    </div>
    <ServiceOfficesSection />
    <div class="services-culture">
      <HomePartnershipCultureSection />
    </div>
    <div class="services-faq">
      <HomeFaqSection />
    </div>
    <div class="services-contact">
      <HomeContactSection />
    </div>
    <div class="services-referral">
      <HomeReferralBannerSection />
    </div>
  </main>
</template>

<style scoped>
.services-engagement {
  --max: 90rem;
  --px: clamp(1rem, 2.8vw, 2.75rem);
  margin-top: 1rem;
  background: #fff;
}

.services-culture {
  --max: 90rem;
  --px: clamp(1rem, 2.8vw, 2.75rem);
  margin-top: 1rem;
  background: #fff;
}

.services-faq {
  --max: 90rem;
  --px: clamp(1rem, 2.8vw, 2.75rem);
  margin-top: 1rem;
  background: #fff;
}

.services-contact {
  --orange: #103e3c;
  --max: 90rem;
  --px: clamp(1rem, 2.8vw, 2.75rem);
  margin-top: 1rem;
  background: #fff;
}

.services-referral {
  --max: 90rem;
  --px: clamp(1rem, 2.8vw, 2.75rem);
  margin-top: 1rem;
  background: #fff;
}
</style>
