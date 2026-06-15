<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

type SuccessStory = {
  title: string
  description: string
  tone: string
  href: string
}

const stories: SuccessStory[] = [
  {
    title: 'Medical Device Prototyping and Healthcare App Development for Better Patient Data Connectivity',
    description:
      'ItGraf designed two wearable devices for ECG, oxygen, and blood pressure monitoring, developed a companion mobile app, and helped build a remote patient monitoring platform.',
    tone: 'lavender',
    href: '#'
  },
  {
    title: 'AI App and IoT Integration for Medical Device Manufacturer Leads to 30% Revenue Growth',
    description:
      'ItGraf built HIPAA/FDA-compliant AI healthcare monitoring app for ECG wearables with IoT integration across major US hospital systems. Result: 30% revenue growth, 60+ hospitals signed.',
    tone: 'blue',
    href: '#'
  },
  {
    title: 'AIoT solution with predictive maintenance for logistics company',
    description:
      'We replaced a US telematics company\'s third-party fleet platform with a custom AIoT solution in 10 months, cutting costs by 30% per vehicle and growing their customer base by 20%.',
    tone: 'green',
    href: '#'
  },
  {
    title: 'Scaling ROAR’s Emergency Button System and Reducing Cloud Costs by 60%',
    description:
      'See how ItGraf improved ROAR’s emergency button system with IoT and cloud optimization — 50% cost savings and 8× faster deployments.',
    tone: 'violet',
    href: '#'
  },
  {
    title: 'Industrial IoT device development and AI maintenance platform for compressor manufacturer',
    description:
      'We built custom IoT sensors for explosive industrial environments and an AI predictive maintenance platform that cut a Netherlands compressor manufacturer\'s support costs by 52% in under 12 months.',
    tone: 'industrial',
    href: '#'
  },
  {
    title: '3PL provider prevents $3M+ ROI loss on robotics investment with digital twin technology',
    description:
      'Using a digital twin of their 900,000 sq ft fulfillment center, we found a bottleneck that would have cost a US 3PL provider $3M+ in lost ROI on an $18M robotics investment, before a single robot was deployed.',
    tone: 'teal',
    href: '#'
  }
]

const trackRef = ref<HTMLElement | null>(null)
const canScrollPrev = ref(false)
const canScrollNext = ref(true)

const updateScrollState = () => {
  const track = trackRef.value
  if (!track) return

  const maxScroll = track.scrollWidth - track.clientWidth
  canScrollPrev.value = track.scrollLeft > 4
  canScrollNext.value = track.scrollLeft < maxScroll - 4
}

const scrollByCard = (direction: 1 | -1) => {
  const track = trackRef.value
  if (!track) return

  const card = track.querySelector<HTMLElement>('.success-stories__card')
  const gap = 24
  const step = (card?.offsetWidth ?? 420) + gap
  track.scrollBy({ left: direction * step, behavior: 'smooth' })
}

let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  updateScrollState()
  trackRef.value?.addEventListener('scroll', updateScrollState, { passive: true })

  if (trackRef.value) {
    resizeObserver = new ResizeObserver(updateScrollState)
    resizeObserver.observe(trackRef.value)
  }
})

onUnmounted(() => {
  trackRef.value?.removeEventListener('scroll', updateScrollState)
  resizeObserver?.disconnect()
})
</script>

<template>
  <section id="cases" class="success-stories" aria-label="Our success stories">
    <div class="success-stories__inner">
      <h2 class="success-stories__heading">Our success stories</h2>

      <div class="success-stories__carousel">
        <div ref="trackRef" class="success-stories__track">
          <article
            v-for="(story, index) in stories"
            :key="`${story.title}-${index}`"
            class="success-stories__card"
          >
            <div :class="['success-stories__media', `success-stories__media--${story.tone}`]" />

            <div class="success-stories__body">
              <div class="success-stories__title-row">
                <h3 class="success-stories__title">{{ story.title }}</h3>
                <a :href="story.href" class="success-stories__card-link" aria-label="Read case study">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M8 16L16 8M16 8H9.5M16 8V14.5"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.8"
                    />
                  </svg>
                </a>
              </div>
              <p class="success-stories__description">{{ story.description }}</p>
            </div>
          </article>
        </div>
      </div>

      <div class="success-stories__nav">
        <button
          type="button"
          class="success-stories__nav-btn"
          :disabled="!canScrollPrev"
          aria-label="Previous stories"
          @click="scrollByCard(-1)"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
          </svg>
        </button>
        <button
          type="button"
          class="success-stories__nav-btn"
          :disabled="!canScrollNext"
          aria-label="Next stories"
          @click="scrollByCard(1)"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.success-stories {
  background: #000;
  color: #fff;
  padding: clamp(3rem, 6vw, 5rem) 0 clamp(3.5rem, 6vw, 5.5rem);
  scroll-margin-top: 2rem;
}

.success-stories__inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 3vw, 2rem);
}

.success-stories__heading {
  margin: 0 0 clamp(2rem, 4vw, 3rem);
  font-size: clamp(2.4rem, 5vw, 3.75rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.04em;
}

.success-stories__carousel {
  overflow: hidden;
}

.success-stories__track {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding-bottom: 0.25rem;
}

.success-stories__track::-webkit-scrollbar {
  display: none;
}

.success-stories__card {
  flex: 0 0 clamp(300px, 31vw, 430px);
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  border-radius: 1.25rem;
  overflow: hidden;
  background: #151515;
}

.success-stories__media {
  position: relative;
  height: clamp(220px, 24vw, 300px);
  overflow: hidden;
  background: #222;
}

.success-stories__media--lavender {
  background: linear-gradient(135deg, #ddd0ff 0%, #b8a6ef 45%, #9f8fd9 100%);
}

.success-stories__media--blue {
  background: linear-gradient(135deg, #6f86a8 0%, #4f627f 55%, #3a4d68 100%);
}

.success-stories__media--green {
  background: linear-gradient(135deg, #b7d7c8 0%, #8fbea3 50%, #6ea888 100%);
}

.success-stories__media--violet {
  background: linear-gradient(135deg, #c9b4ff 0%, #9f7fe8 55%, #7d58d4 100%);
}

.success-stories__media--industrial {
  background: linear-gradient(135deg, #8f959c 0%, #6f747a 50%, #555a60 100%);
}

.success-stories__media--teal {
  background: linear-gradient(135deg, #9fd0c4 0%, #6fb0a0 45%, #4f9588 100%);
}

.success-stories__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1rem;
  padding: 1.35rem 1.35rem 1.5rem;
  background: #151515;
}

.success-stories__title-row {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.success-stories__title {
  margin: 0;
  flex: 1;
  font-size: clamp(1.05rem, 1.35vw, 1.2rem);
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: -0.02em;
}

.success-stories__card-link {
  display: inline-flex;
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #fff;
  color: #111;
  text-decoration: none;
  transition: transform 0.2s ease, background 0.2s ease;
}

.success-stories__card-link:hover {
  transform: translateY(-1px);
  background: #f2f2f2;
}

.success-stories__card-link svg {
  width: 0.95rem;
  height: 0.95rem;
}

.success-stories__description {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.72);
}

.success-stories__nav {
  display: flex;
  justify-content: flex-end;
  gap: 0.85rem;
  margin-top: 2rem;
}

.success-stories__nav-btn {
  display: inline-flex;
  width: 3.25rem;
  height: 3.25rem;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.85);
  border-radius: 50%;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s ease, opacity 0.2s ease;
}

.success-stories__nav-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.08);
}

.success-stories__nav-btn:disabled {
  opacity: 0.35;
  cursor: default;
}

.success-stories__nav-btn svg {
  width: 1.2rem;
  height: 1.2rem;
}

@media (max-width: 768px) {
  .success-stories__card {
    flex-basis: min(86vw, 360px);
  }

  .success-stories__nav {
    margin-top: 1.5rem;
  }
}
</style>
