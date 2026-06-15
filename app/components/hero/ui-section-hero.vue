<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { initCardAnimation } from '~~/animations/cardAnimation'
import { initHeroAnimation } from '~~/animations/heroAnimation'
import { useMouseParallax } from '~~/composables/useMouseParallax'
import { ICard } from '~/components/hero/models/i-card'
import HeroServiceCard from '~/components/cards/ui-card-hero-service.vue'
import DotLetterCanvas from '~/components/hero/dot-letter-canvas.vue'

const compliantCardImage = '/images/lab-bg.webp'
const rustCardImage = '/images/rust-team.webp'
const endToEndCardImage = '/images/iot-3.webp'

const cards: ICard[] = [
  {
    id: 'compliant',
    accent: 'Compliant',
    label: ' Software, Hardware and AI Services. One team. Full-cycle.',
    description:
      'From medical devices to industrial automation - we deliver complete enterprise solutions with compliance built-in. Everything under one roof.',
    image: compliantCardImage,
  },
  {
    id: 'rust',
    accent: 'Rust',
    label: ' Development Services.',
    description:
      'Harness the power of Rust to build mission-critical systems that never compromise on performance or security with a reliable Rust development partner.',
    image: rustCardImage,
  },
  {
    id: 'end-to-end',
    accent: 'End-to-End',
    label: ' IoT Services.',
    description:
      'From custom hardware and firmware to cloud software and mobile apps, we deliver connected and ready-to-scale IoT solutions for your business.',
    image: endToEndCardImage,
  },
]

const activeCardId = ref('compliant')
const sectionRef = ref<HTMLElement | null>(null)
const cardRefs = ref<HTMLElement[]>([])

let cleanupHeroAnimation: (() => void) | null = null
let cleanupCardAnimation: (() => void) | null = null

const activeCard = computed(() => cards.find((card) => card.id === activeCardId.value) ?? cards[0])

const mouse = useMouseParallax(sectionRef, { easing: 0.12, strength: 1 })

const setCardRef = (element: Element | null, index: number) => {
  if (!element) {
    return
  }

  cardRefs.value[index] = element as HTMLElement
}

const selectCard = (id: string) => {
  activeCardId.value = id
}

onMounted(async () => {
  await nextTick()

  if (sectionRef.value) {
    cleanupHeroAnimation = initHeroAnimation(sectionRef.value)
  }

  cleanupCardAnimation = initCardAnimation(cardRefs.value.filter(Boolean))
})

onBeforeUnmount(() => {
  cleanupHeroAnimation?.()
  cleanupCardAnimation?.()
})
</script>

<template>
  <section
    ref="sectionRef"
    class="relative overflow-hidden px-3 pb-8 pt-2 sm:px-5 sm:pb-10"
  >
    <div class="mx-auto max-w-[93.75rem] overflow-hidden rounded-[2.15rem] bg-[#f3f2ef] px-5 pb-8 pt-8 shadow-[0_1.5rem_5rem_rgba(15,23,42,0.08)] sm:px-8 sm:pb-10 lg:min-h-[47.5rem] lg:px-10 lg:pt-10">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(16,62,60,0.08),transparent_18%),radial-gradient(circle_at_92%_10%,rgba(148,163,184,0.12),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.85),rgba(255,255,255,0.42))]" />

      <div class="relative grid gap-10 lg:min-h-[42.5rem] lg:grid-cols-[minmax(0,1fr)_minmax(16.25rem,26.875rem)]">
        <div class="relative flex min-h-[22.5rem] flex-col justify-between pt-4 sm:min-h-[26.25rem] lg:min-h-[38.125rem]">
          <div class="pointer-events-none absolute inset-x-0 top-0 h-[38.75rem] lg:left-[39%] lg:right-[-2%]">
            <DotLetterCanvas
              :inside="mouse.inside.value"
              :mouse-x="mouse.x.value"
              :mouse-y="mouse.y.value"
              :norm-x="mouse.normX.value"
              :norm-y="mouse.normY.value"
            />
          </div>

          <div class="relative z-[1] max-w-[58.75rem]">
            <template v-if="activeCard.id === 'compliant'">
              <h1
                class="text-[clamp(3.1rem,7.5vw,5.9rem)] font-[400] leading-[0.93] tracking-[-0.08em] text-[#0d1117]"
                style="font-family: 'Helvetica Neue', Inter, sans-serif;"
              >
                <span data-hero-line class="block">
                  <span class="text-[#103e3c]">{{ activeCard.accent }}</span> Software,
                </span>
                <span data-hero-line class="block">Hardware &amp; AI Services.</span>
                <span data-hero-line class="block">One team. Full-cycle.</span>
              </h1>
            </template>

            <template v-else-if="activeCard.id === 'rust'">
              <h1
                class="text-[clamp(3.1rem,7.5vw,5.9rem)] font-[400] leading-[0.93] tracking-[-0.08em] text-[#0d1117]"
                style="font-family: 'Helvetica Neue', Inter, sans-serif;"
              >
                <span data-hero-line class="block">
                  <span class="text-[#103e3c]">Rust</span> Development
                </span>
                <span data-hero-line class="mt-1 flex flex-wrap items-center gap-3 sm:mt-0">
                  <span>Services</span>
                  <NuxtLink
                    to="#"
                    class="learn-link"
                    aria-label="Learn more"
                  >
                    <span class="learn-link__pill">Learn more</span>
                    <span class="learn-link__arrow">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 17L17 7M9 7H17V15"
                          stroke="currentColor"
                          stroke-width="1.8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </NuxtLink>
                </span>
              </h1>
            </template>

            <template v-else>
              <h1
                class="text-[clamp(3.1rem,7.5vw,5.9rem)] font-[400] leading-[0.93] tracking-[-0.08em] text-[#0d1117]"
                style="font-family: 'Helvetica Neue', Inter, sans-serif;"
              >
                <span data-hero-line class="block">
                  <span class="text-[#103e3c]">End-to-End</span> IoT
                </span>
                <span data-hero-line class="block">Development Services.</span>
                <span data-hero-line class="block">Custom hardware, firmware and cloud.</span>
              </h1>
            </template>
          </div>

          <div class="relative z-[2] mt-10 grid max-w-[40rem] grid-cols-1 gap-5 sm:grid-cols-3">
            <div
              v-for="(card, index) in cards"
              :key="card.id"
              :ref="(el) => setCardRef(el, index)"
              data-hero-card
            >
              <HeroServiceCard
                :accent="card.accent"
                :active="card.id === activeCardId"
                :image="card.image"
                :label="card.label"
                @click="selectCard(card.id)"
              />
            </div>
          </div>
        </div>

        <div class="relative z-[2] flex items-end lg:justify-end">
          <p
            data-hero-body
            class="max-w-[26.875rem] text-[clamp(1.02rem,1.5vw,1.22rem)] font-[400] leading-[1.58] tracking-[-0.03em] text-[#313640]"
            style="font-family: 'Helvetica Neue', Inter, sans-serif;"
          >
            {{ activeCard.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* Learn more */
.learn-link {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  text-decoration: none;
}
.learn-link__pill {
  display: inline-flex;
  height: 3.35rem;
  align-items: center;
  padding: 0 1.55rem;
  border-radius: 624.9375rem;
  background: var(--black);
  color: #fff;
  font-size: 0.96rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  transition: background 0.2s;
}
.learn-link__arrow {
  display: inline-flex;
  width: 3.35rem;
  height: 3.35rem;
  align-items: center;
  justify-content: center;
  border-radius: 624.9375rem;
  background: var(--black);
  color: #fff;
  transition: background 0.2s;
}
.learn-link__arrow svg {
  width: 1.22rem;
  height: 1.22rem;
}
.learn-link:hover .learn-link__pill, .learn-link:hover .learn-link__arrow {
  background: #1a2233;
}
</style>
