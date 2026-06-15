<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import DotLetterCanvas from '~/components/hero/dot-letter-canvas.vue'
import { useMouseParallax } from '~~/composables/useMouseParallax'

const heroLabImage = '/images/lab-bg.webp'
const endToEndFrame2 = '/images/iot-1.webp'
const endToEndFrame3 = '/images/iot-2.webp'
const endToEndFrame4 = '/images/iot-3.webp'

type HeroSlide = {
  accent: string
  topDark: string
  middle: string
  bottom: string
  description: string
  cardAccent: string
  cardText: string
  image: string
  imageAlt: string
  imagePosition?: string
  frames?: string[]
  hideVisual?: boolean
}

const slides: HeroSlide[] = [
  {
    accent: 'Compliant',
    topDark: ' Software,',
    middle: 'Hardware and AI',
    bottom: 'Services',
    description:
      'One team, full cycle. We combine compliant software, embedded expertise and hardware integration for complex products.',
    cardAccent: 'Compliant',
    cardText: 'Software, hardware and AI services.',
    image: heroLabImage,
    imageAlt: 'Laboratory automation equipment',
    imagePosition: 'center center',
    hideVisual: true,
  },
  {
    accent: 'Rust',
    topDark: ' Development',
    middle: 'Services',
    bottom: '',
    description:
      'Harness the power of Rust to build mission-critical systems that never compromise on performance or security with a reliable Rust development partner.',
    cardAccent: 'Rust',
    cardText: 'Development services.',
    image: heroLabImage,
    imageAlt: 'Laboratory automation equipment',
    imagePosition: 'center center',
  },
  {
    accent: 'End-to-End',
    topDark: ' IoT',
    middle: 'Development',
    bottom: 'Services',
    description:
      'With 17 years of expertise, we offer advanced IoT services, full-cycle development, system integration, analytics and maintenance.',
    cardAccent: 'End-to-End',
    cardText: 'IoT services.',
    image: endToEndFrame2,
    imageAlt: 'End-to-end IoT device reveal',
    imagePosition: 'center center',
    frames: [endToEndFrame2, endToEndFrame3, endToEndFrame4],
  },
]

const activeIndex = ref(1)
const isPaused = ref(false)
const activeFrameIndex = ref(0)
const sectionRef = ref<HTMLElement | null>(null)

let rotationTimeout: ReturnType<typeof setTimeout> | null = null
let frameRotationTimeout: ReturnType<typeof setTimeout> | null = null

const activeSlide = computed(() => slides[activeIndex.value])
const isBackgroundHero = computed(() => activeIndex.value === 1)
const isCompliantHero = computed(() => activeIndex.value === 0)
const activeHeroFrame = computed(() => {
  const frames = activeSlide.value.frames

  if (!frames?.length) {
    return activeSlide.value.image
  }

  return frames[activeFrameIndex.value] || frames[0]
})
const mouse = useMouseParallax(sectionRef, { easing: 0.12, strength: 1 })

const scheduleNextSlide = () => {
  if (rotationTimeout) {
    clearTimeout(rotationTimeout)
  }

  rotationTimeout = setTimeout(() => {
    if (!isPaused.value) {
      activeIndex.value = (activeIndex.value + 1) % slides.length
    }

    scheduleNextSlide()
  }, 7000)
}

const selectSlide = (index: number) => {
  activeIndex.value = index
  scheduleNextSlide()
}

const pauseRotation = () => {
  isPaused.value = true
}

const resumeRotation = () => {
  isPaused.value = false
}

const stopFrameRotation = () => {
  if (frameRotationTimeout) {
    clearTimeout(frameRotationTimeout)
    frameRotationTimeout = null
  }
}

const scheduleFrameRotation = () => {
  stopFrameRotation()

  const frames = activeSlide.value.frames
  if (!frames?.length) {
    activeFrameIndex.value = 0
    return
  }

  frameRotationTimeout = setTimeout(() => {
    activeFrameIndex.value = (activeFrameIndex.value + 1) % frames.length
    scheduleFrameRotation()
  }, 1300)
}

onMounted(() => {
  scheduleNextSlide()
  scheduleFrameRotation()
})

onBeforeUnmount(() => {
  if (rotationTimeout) {
    clearTimeout(rotationTimeout)
  }

  stopFrameRotation()
})

watch(activeIndex, () => {
  activeFrameIndex.value = 0
  scheduleFrameRotation()
})
</script>

<template>
  <section
    ref="sectionRef"
    class="spotlight"
    :class="{ 'is-background-hero': isBackgroundHero, 'is-compliant-hero': isCompliantHero }"
  >
    <div
      class="spotlight__bg"
      :class="{ 'is-hidden': !isBackgroundHero }"
    >
      <img
        :src="heroLabImage"
        alt=""
      >
      <div class="spotlight__bg-fade" />
    </div>

    <div class="spotlight__ambient" />
    <div
      v-if="isCompliantHero"
      class="spotlight__dot-letter"
      aria-hidden="true"
    >
      <DotLetterCanvas
        letter="A"
        :inside="mouse.inside.value"
        :mouse-x="mouse.x.value"
        :mouse-y="mouse.y.value"
        :norm-x="mouse.normX.value"
        :norm-y="mouse.normY.value"
      />
    </div>

    <div
      class="spotlight__inner"
      @mouseenter="pauseRotation"
      @mouseleave="resumeRotation"
    >
      <div class="spotlight__content">
        <div class="spotlight__copy">
          <Transition name="hero-copy" mode="out-in">
            <div :key="`${activeIndex}-copy`" class="spotlight__copy-frame">
              <h1 class="spotlight__heading">
                <span class="spotlight__line spotlight__line--top">
                  <span class="spotlight__accent">{{ activeSlide.accent }}</span>
                  <span class="spotlight__dark">{{ activeSlide.topDark }}</span>
                </span>
                <span class="spotlight__line spotlight__line--middle">
                  {{ activeSlide.middle }}
                </span>
                <span class="spotlight__line spotlight__line--bottom">
                  <span class="spotlight__services">{{ activeSlide.bottom || '' }}</span>
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
            </div>
          </Transition>
        </div>

        <div class="spotlight__rail">
          <button
            v-for="(slide, index) in slides"
            :key="slide.cardAccent"
            type="button"
            class="spotlight__rail-card"
            :class="{ 'is-active': index === activeIndex }"
            @click="selectSlide(index)"
          >
            <img
              :src="slide.image"
              :alt="slide.imageAlt"
              class="spotlight__rail-image"
            >
            <span class="spotlight__rail-shade" />
            <span class="spotlight__rail-copy">
              <span class="spotlight__rail-accent">{{ slide.cardAccent }}</span>
              <span>{{ slide.cardText }}</span>
            </span>
            <span class="spotlight__rail-progress" />
          </button>
        </div>
      </div>

      <div class="spotlight__aside">
        <Transition name="hero-visual" mode="out-in">
          <div
            v-if="!isBackgroundHero && !activeSlide.hideVisual"
            :key="`${activeIndex}-visual`"
            class="spotlight__visual-card"
          >
            <Transition name="hero-frame" mode="out-in">
              <img
                :key="`${activeIndex}-${activeFrameIndex}`"
                :src="activeHeroFrame"
                :alt="activeSlide.imageAlt"
                class="spotlight__visual-image"
                :class="{ 'is-sequence-frame': !!activeSlide.frames?.length }"
                :style="{ objectPosition: activeSlide.imagePosition || 'center center' }"
              >
            </Transition>
          </div>
        </Transition>

        <Transition name="hero-copy" mode="out-in">
          <p :key="`${activeIndex}-text`" class="spotlight__text">
            {{ activeSlide.description }}
          </p>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* Hero */
.spotlight {
  position: relative;
  min-height: clamp(38rem, 47vw, 47rem);
  overflow: hidden;
  padding: 0 var(--px) 1.9rem;
  background: radial-gradient(circle at 16% 18%, rgba(16, 62, 60, 0.08), transparent 20%), radial-gradient(circle at 76% 24%, rgba(129, 170, 255, 0.08), transparent 22%), linear-gradient(180deg, #fff 0%, #fbfbfc 100%);
}
.spotlight__bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.spotlight__bg.is-hidden {
  opacity: 0;
  transform: scale(1.02);
}
.spotlight__bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  filter: saturate(0.98) brightness(1.02);
  animation: hero-bg-drift 10s ease-in-out infinite alternate;
}
.spotlight__bg-fade {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.1) 30%, rgba(255, 255, 255, 0.52) 58%, rgba(255, 255, 255, 0.9) 76%, rgba(255, 255, 255, 0.98) 100%), radial-gradient(circle at 16% 58%, rgba(255, 255, 255, 0.52), transparent 24%), radial-gradient(circle at 86% 12%, rgba(255, 255, 255, 0.28), transparent 18%);
}
.spotlight__ambient {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(circle at 41% 56%, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0) 30%), radial-gradient(circle at 36% 45%, rgba(245, 246, 250, 0.86), rgba(255, 255, 255, 0) 44%);
  animation: hero-ambient-float 9s ease-in-out infinite alternate;
}
.spotlight__dot-letter {
  position: absolute;
  top: 0.4rem;
  right: 18%;
  width: min(20rem, 24vw);
  height: min(43rem, 88%);
  pointer-events: none;
  opacity: 0.95;
}
.spotlight__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(22rem, 0.92fr);
  align-items: stretch;
  gap: 2.2rem;
  max-width: var(--max);
  margin: 0 auto;
  padding: 1.3rem 0 0;
}
.spotlight__content {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: clamp(36rem, 44vw, 43rem);
}
.spotlight__copy {
  display: flex;
  align-items: center;
  padding-top: 0.8rem;
}
.spotlight__copy-frame {
  width: 100%;
}
.spotlight__heading {
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.065em;
}
.spotlight__line {
  display: block;
}
.spotlight__line--top {
  font-size: clamp(4rem, 7.4vw, 6.4rem);
  line-height: 0.9;
}
.spotlight__line--middle {
  font-size: clamp(4rem, 7.4vw, 6.4rem);
  line-height: 0.88;
  color: var(--black);
}
.spotlight__accent {
  color: var(--orange);
}
.spotlight__dark {
  color: var(--black);
}
.spotlight__line--bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1rem;
  margin-top: 0.1rem;
  line-height: 1;
}
.spotlight__services {
  min-height: 1em;
  font-size: clamp(4rem, 7.4vw, 6.4rem);
  font-weight: 600;
  line-height: 0.9;
  letter-spacing: -0.065em;
  color: var(--black);
}
.spotlight__line--bottom .learn-link {
  flex-shrink: 0;
  margin-bottom: 0.15rem;
}
.spotlight__rail {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.7rem;
  padding: 0 0 0.65rem;
  max-width: 54rem;
}
.spotlight__rail-card {
  position: relative;
  display: flex;
  min-height: 8.15rem;
  align-items: flex-end;
  overflow: hidden;
  padding: 0.88rem 0.84rem;
  border: 0;
  border-radius: 1.15rem;
  background: rgba(0, 0, 0, 0.08);
  color: #fff;
  text-align: left;
  cursor: pointer;
  transition: transform 0.28s ease, box-shadow 0.28s ease, opacity 0.28s ease;
}
.spotlight__rail-card:hover {
  transform: translateY(-0.1875rem);
  box-shadow: 0 0.875rem 1.875rem rgba(17, 23, 36, 0.14);
}
.spotlight__rail-card.is-active {
  box-shadow: 0 1.125rem 2.125rem rgba(17, 23, 36, 0.16);
}
.spotlight__rail-image, .spotlight__visual-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.spotlight__rail-image {
  position: absolute;
  inset: 0;
}
.spotlight__rail-shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(13, 15, 21, 0.08) 0%, rgba(13, 15, 21, 0.62) 100%), linear-gradient(90deg, rgba(13, 15, 21, 0.32), rgba(13, 15, 21, 0.06));
}
.spotlight__rail-copy {
  position: relative;
  z-index: 1;
  max-width: 12rem;
  font-size: 0.78rem;
  line-height: 1.08;
  letter-spacing: -0.02em;
}
.spotlight__rail-accent {
  color: var(--orange);
}
.spotlight__rail-progress {
  position: absolute;
  right: 0.75rem;
  bottom: -0.92rem;
  left: 0.75rem;
  height: 0.28rem;
  overflow: hidden;
  border-radius: 62.4375rem;
  background: #e6e7ec;
}
.spotlight__rail-progress::after {
  content: "";
  display: block;
  width: 0;
  height: 100%;
  border-radius: inherit;
  background: var(--orange);
}
.spotlight__rail-card.is-active .spotlight__rail-progress::after {
  width: 100%;
  animation: hero-progress 7s linear forwards;
}
.spotlight__aside {
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  gap: 1.25rem;
  padding-top: 0.7rem;
}
.spotlight__visual-card {
  position: relative;
  min-height: 31rem;
  overflow: hidden;
  border-radius: 2rem;
  background: radial-gradient(circle at top, rgba(255, 255, 255, 0.94), rgba(246, 247, 249, 0.72) 58%, rgba(255, 255, 255, 0.32) 100%);
}
.spotlight__visual-card::after {
  content: "";
  position: absolute;
  inset: auto 0 0;
  height: 26%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8));
}
.spotlight__visual-image {
  display: block;
  object-fit: contain;
  filter: saturate(1.02) contrast(1.02);
  animation: hero-visual-float 8s ease-in-out infinite alternate;
}
.spotlight__visual-image.is-sequence-frame {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center center;
  padding: 2rem;
  transform-origin: center center;
  filter: saturate(1.02) contrast(1.01) drop-shadow(0 1.5rem 2.375rem rgba(17, 23, 36, 0.12));
  animation: hero-sequence-float 1.05s ease-in-out infinite alternate;
}
.spotlight__text {
  max-width: 30rem;
  margin: 0 0 0 auto;
  font-size: clamp(1.02rem, 1.36vw, 1.18rem);
  line-height: 1.62;
  letter-spacing: -0.03em;
  color: #2a3140;
  text-align: left;
}
.spotlight.is-background-hero .spotlight__inner {
  grid-template-columns: minmax(0, 1fr);
  min-height: clamp(38rem, 47vw, 47rem);
}
.spotlight.is-background-hero .spotlight__content {
  min-height: clamp(38rem, 47vw, 47rem);
}
.spotlight.is-background-hero .spotlight__copy {
  align-items: flex-start;
  padding-top: 2rem;
}
.spotlight.is-background-hero .spotlight__heading {
  max-width: 36rem;
}
.spotlight.is-background-hero .spotlight__line--top, .spotlight.is-background-hero .spotlight__line--middle, .spotlight.is-background-hero .spotlight__services {
  font-size: clamp(3.7rem, 6.4vw, 5.35rem);
}
.spotlight.is-background-hero .spotlight__line--middle, .spotlight.is-background-hero .spotlight__services {
  padding-left: 3.4rem;
}
.spotlight.is-background-hero .spotlight__rail {
  max-width: 37rem;
  gap: 1.9rem;
}
.spotlight.is-background-hero .spotlight__rail-card {
  min-height: 8.75rem;
}
.spotlight.is-background-hero .spotlight__rail-copy {
  max-width: 12.5rem;
  font-size: 0.81rem;
}
.spotlight.is-background-hero .spotlight__aside {
  position: absolute;
  right: 0.2rem;
  bottom: 2.2rem;
  width: min(100%, 29rem);
  padding-top: 0;
}
.spotlight.is-background-hero .spotlight__text {
  max-width: 29rem;
  margin: 0;
  color: #303642;
  font-size: clamp(1rem, 1.24vw, 1.12rem);
  line-height: 1.56;
}
.spotlight.is-compliant-hero .spotlight__inner {
  grid-template-columns: minmax(0, 1fr) minmax(18rem, 28rem);
}
.spotlight.is-compliant-hero .spotlight__copy {
  align-items: flex-start;
  padding-top: 3rem;
}
.spotlight.is-compliant-hero .spotlight__heading {
  max-width: 58rem;
}
.spotlight.is-compliant-hero .spotlight__aside {
  padding-top: 0;
  align-items: end;
}
.spotlight.is-compliant-hero .spotlight__text {
  max-width: 28rem;
  margin-bottom: 2rem;
}
.hero-copy-enter-active, .hero-copy-leave-active, .hero-visual-enter-active, .hero-visual-leave-active, .hero-frame-enter-active, .hero-frame-leave-active {
  transition: opacity 0.52s ease, transform 0.52s ease, filter 0.52s ease;
}
.hero-copy-enter-from, .hero-copy-leave-to {
  opacity: 0;
  transform: translateY(1.125rem);
  filter: blur(0.5rem);
}
.hero-visual-enter-from, .hero-visual-leave-to {
  opacity: 0;
  transform: translateX(1.625rem) scale(0.98);
  filter: blur(0.625rem);
}
.hero-frame-enter-from, .hero-frame-leave-to {
  opacity: 0;
  transform: translateY(0.5rem) scale(1);
  filter: blur(0.375rem);
}
@keyframes hero-progress {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes hero-ambient-float {
  from {
    opacity: 0.75;
    transform: translate3d(-1.5%, 0, 0) scale(1);
  }
  to {
    opacity: 1;
    transform: translate3d(1.5%, -1.2%, 0) scale(1.03);
  }
}
@keyframes hero-bg-drift {
  from {
    transform: translateY(-0.6%);
  }
  to {
    transform: translateY(0.8%);
  }
}
@keyframes hero-visual-float {
  from {
    transform: translateY(-0.5rem);
  }
  to {
    transform: translateY(0.5rem);
  }
}
@keyframes hero-sequence-float {
  from {
    transform: translateY(-0.25rem) scale(0.995);
  }
  to {
    transform: translateY(0.25rem) scale(1.005);
  }
}
@media (max-width: 63.9375rem) {
  .spotlight {
    padding-bottom: 2.4rem;
  }
  .spotlight__inner {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .spotlight__content {
    min-height: 0;
  }
  .spotlight__copy {
    min-height: 20rem;
  }
  .spotlight__aside {
    grid-template-rows: auto auto;
    padding-top: 0;
  }
  .spotlight__dot-letter {
    right: 10%;
    width: min(16rem, 28vw);
  }
  .spotlight__visual-card {
    min-height: 23rem;
  }
  .spotlight__text {
    max-width: none;
    margin-left: 0;
  }
  .spotlight__rail {
    gap: 1.25rem;
  }
}
@media (max-width: 47.9375rem) {
  .spotlight {
    min-height: 0;
    padding-bottom: 2rem;
  }
  .spotlight__inner {
    gap: 1.6rem;
    padding-top: 0.75rem;
  }
  .spotlight__copy {
    min-height: 15rem;
    padding-top: 0.4rem;
  }
  .spotlight__line--top, .spotlight__line--middle, .spotlight__services {
    font-size: clamp(2.8rem, 13vw, 3.55rem);
  }
  .spotlight__line--bottom {
    align-items: flex-start;
    gap: 0.8rem;
  }
  .spotlight__rail {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .spotlight__rail-card {
    min-height: 6.6rem;
  }
  .spotlight__dot-letter {
    top: 0.8rem;
    right: 4%;
    width: 10rem;
    height: 22rem;
    opacity: 0.68;
  }
  .spotlight__visual-card {
    min-height: 18rem;
    border-radius: 1.35rem;
  }
  .spotlight__text {
    font-size: 0.98rem;
  }
}
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
