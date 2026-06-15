<script setup lang="ts">
import { computed, ref } from 'vue'

type NavItem = { label: string; href: string }
type ServiceCard = {
  id: string
  title: string
  href: string
  items?: string[]
}
type IndustryCard = {
  id: string
  title: string
  href: string
  items?: string[]
  accent?: string
}

const props = withDefaults(
  defineProps<{
    items?: NavItem[]
    logoText?: string
    logoTo?: string
    ctaText?: string
    ctaTo?: string
  }>(),
  {
    logoText: 'Yalantis',
    logoTo: '/',
    ctaText: 'CONTACT US',
    ctaTo: '#'
  }
)

const defaultItems: NavItem[] = [
  { label: 'SERVICES', href: '/services' },
  { label: 'INDUSTRIES', href: '#' },
  { label: 'SUCCESS STORIES', href: '#' },
  { label: 'SOLUTION HUB', href: '#' },
  { label: 'COMPANY', href: '#' },
  { label: 'INSIGHTS', href: '#' }
]

const navItems = computed(() => props.items ?? defaultItems)
const activeMenu = ref<string | null>(null)
const serviceCards: ServiceCard[] = [
  {
    id: 'iot',
    title: 'End-to-End IoT Services',
    href: '/services',
    items: [
      'IoT Product Development',
      'IoT Software Development',
      'IoT App Development',
      'IoT Consulting',
      'IoT Compliance',
      'IoT Security',
      'IoT Data Analytics',
      'IoT Integration',
      'Hire IoT Developers'
    ]
  },
  {
    id: 'embedded',
    title: 'Embedded Development',
    href: '/services',
    items: ['Firmware Development']
  },
  {
    id: 'hardware',
    title: 'Hardware Development',
    href: '/services'
  },
  {
    id: 'teams',
    title: 'Dedicated Development Teams',
    href: '/services'
  },
  {
    id: 'ai',
    title: 'AI & ML Services',
    href: '/services',
    items: [
      'Edge AI Development & Consulting',
      'AI Consulting',
      'Machine Learning Development'
    ]
  },
  {
    id: 'data',
    title: 'Data Services',
    href: '/services',
    items: [
      'Data Engineering',
      'Big Data Services',
      'Data Science Consulting'
    ]
  },
  {
    id: 'infra',
    title: 'IT Infrastructure Services',
    href: '/services',
    items: ['Azure Consulting', 'AWS Consulting', 'DevOps consulting']
  },
  {
    id: 'rust',
    title: 'Rust Development',
    href: '/services'
  },
  {
    id: 'software',
    title: 'Software Development',
    href: '/services',
    items: [
      'UI/UX Design',
      'Mobile App Development',
      'SaaS Development',
      'Enterprise Software Development'
    ]
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    href: '/services',
    items: ['PCI Compliance']
  },
  {
    id: 'all',
    title: 'All Services',
    href: '/services'
  }
]
const industryCards: IndustryCard[] = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    href: '#',
    items: [
      'Medical Devices',
      'IoT Healthcare',
      'SaMD Development',
      'Healthcare Software Development',
      'Healthcare IT Consulting',
      'Healthcare AI Integration & Consulting',
      'EHR and EMR Software Development',
      'Telemedicine App Development',
      'Hospital IT Solutions'
    ]
  },
  {
    id: 'industrial',
    title: 'Industrial & Manufacturing',
    href: '#',
    items: [
      'Industrial IoT Solutions',
      'Legacy Modernization Services',
      'Predictive Maintenance',
      'Computer Vision Development',
      'Digital Twin Development'
    ]
  },
  {
    id: 'financial',
    title: 'Financial',
    href: '#',
    items: [
      'Mobile Banking App Development',
      'Loan Lending App Development',
      'Payment App Development'
    ]
  },
  {
    id: 'smart',
    title: 'Smart Building',
    href: '#'
  },
  {
    id: 'agriculture',
    title: 'Agriculture',
    href: '#'
  },
  {
    id: 'defence',
    title: 'Defence',
    href: '#'
  },
  {
    id: 'automotive',
    title: 'Automotive',
    href: '#'
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply Chain',
    href: '#',
    items: [
      'IoT Services for Logistics',
      'Data Analytics and Engineering'
    ]
  },
  {
    id: 'pharma',
    title: 'Pharma',
    href: '#',
    items: [
      'Cold Chain Software & Hardware Development',
      'Digital Labeling Services'
    ]
  },
  {
    id: 'talk',
    title: 'Questions?\nLet\'s talk',
    href: '#',
    accent: 'Let\'s Talk'
  }
]
const serviceLayoutMap: Record<string, string> = {
  iot: 'xl:col-start-1 xl:row-start-1 xl:row-span-4',
  rust: 'xl:col-start-1 xl:row-start-5',
  embedded: 'xl:col-start-2 xl:row-start-1',
  ai: 'xl:col-start-2 xl:row-start-2 xl:row-span-2',
  software: 'xl:col-start-2 xl:row-start-4 xl:row-span-2',
  hardware: 'xl:col-start-3 xl:row-start-1',
  data: 'xl:col-start-3 xl:row-start-2 xl:row-span-2',
  security: 'xl:col-start-3 xl:row-start-4 xl:row-span-2',
  teams: 'xl:col-start-4 xl:row-start-1',
  infra: 'xl:col-start-4 xl:row-start-2 xl:row-span-2',
  all: 'xl:col-start-4 xl:row-start-4 xl:row-span-2'
}
const industryLayoutMap: Record<string, string> = {
  healthcare: 'xl:col-start-1 xl:row-start-1 xl:row-span-5',
  industrial: 'xl:col-start-2 xl:row-start-1 xl:row-span-3',
  logistics: 'xl:col-start-2 xl:row-start-4 xl:row-span-2',
  financial: 'xl:col-start-3 xl:row-start-1 xl:row-span-3',
  pharma: 'xl:col-start-3 xl:row-start-4 xl:row-span-2',
  smart: 'xl:col-start-4 xl:row-start-1',
  agriculture: 'xl:col-start-4 xl:row-start-2',
  defence: 'xl:col-start-4 xl:row-start-3',
  automotive: 'xl:col-start-4 xl:row-start-4',
  talk: 'xl:col-start-4 xl:row-start-5'
}

function openMenu(label: string) {
  activeMenu.value = label
}

function closeMenu() {
  activeMenu.value = null
}

function isMegaMenu(label: string) {
  return label === 'SERVICES' || label === 'INDUSTRIES'
}

function indicatorWidth(label: string) {
  return label === 'INDUSTRIES' ? 'w-[7.25rem]' : 'w-[5.5rem]'
}

function serviceCardClass(id: string) {
  if (id === 'iot') {
    return 'xl:min-h-[35rem] xl:px-6 xl:pb-[1.45rem] xl:pt-[1.2rem]'
  }

  if (id === 'rust') {
    return 'xl:min-h-[8.625rem] xl:px-6 xl:pb-[1.2rem] xl:pt-[1.15rem]'
  }

  if (id === 'embedded' || id === 'hardware' || id === 'teams') {
    return 'xl:min-h-[8.625rem] xl:px-6 xl:pb-[1.1rem] xl:pt-[1.15rem]'
  }

  return 'xl:min-h-[17.375rem] xl:px-6 xl:pb-[1.25rem] xl:pt-[1.15rem]'
}

function serviceTitleClass(id: string) {
  if (id === 'embedded' || id === 'hardware' || id === 'teams') {
    return 'text-[1.02rem] leading-[1.18] tracking-[-0.03em]'
  }

  return 'text-[1.08rem] leading-[1.18] tracking-[-0.03em]'
}

function serviceListClass(id: string) {
  if (id === 'embedded') {
    return 'mt-auto pt-[2rem] space-y-0 text-[0.92rem] leading-[1.35]'
  }

  if (id === 'iot') {
    return 'mt-auto pt-[3.7rem] space-y-[1rem] text-[0.92rem] leading-[1.35]'
  }

  if (id === 'security') {
    return 'mt-auto pt-[3.9rem] space-y-0 text-[0.92rem] leading-[1.35]'
  }

  return 'mt-auto pt-[3.25rem] space-y-[0.8rem] text-[0.92rem] leading-[1.35]'
}

function industryCardClass(id: string) {
  if (id === 'healthcare') {
    return 'xl:min-h-[34.75rem] xl:px-[1.45rem] xl:pb-[1.05rem] xl:pt-[1.1rem]'
  }

  if (id === 'industrial' || id === 'financial') {
    return 'xl:min-h-[19.625rem] xl:px-[1.45rem] xl:pb-[1.05rem] xl:pt-[1.1rem]'
  }

  if (id === 'logistics' || id === 'pharma') {
    return 'xl:min-h-[14.5rem] xl:px-[1.45rem] xl:pb-[1.05rem] xl:pt-[1.08rem]'
  }

  if (id === 'talk') {
    return 'xl:min-h-[14.5rem] xl:px-[1.35rem] xl:pb-[1rem] xl:pt-[1rem]'
  }

  return 'xl:min-h-[4.375rem] xl:px-[1.35rem] xl:pb-[0.95rem] xl:pt-[0.95rem]'
}

function industryListClass(id: string) {
  if (id === 'healthcare') {
    return 'mt-auto pt-[3.35rem] space-y-[1rem] text-[0.915rem] leading-[1.3]'
  }

  if (id === 'industrial') {
    return 'mt-auto pt-[2.85rem] space-y-[0.88rem] text-[0.915rem] leading-[1.3]'
  }

  if (id === 'financial') {
    return 'mt-auto pt-[3.2rem] space-y-[0.92rem] text-[0.915rem] leading-[1.3]'
  }

  return 'mt-auto pt-[2.35rem] space-y-[0.88rem] text-[0.915rem] leading-[1.3]'
}
</script>

<template>
  <header
    class="nav"
    @mouseleave="closeMenu"
  >
    <div class="nav__bar">
      <NuxtLink
        :to="logoTo"
        class="nav__logo"
      >
        <img
          src="/images/Logo_28ItGraf_29.svg"
          alt="Yalantis logo"
          class="nav__logo-image"
        />
      </NuxtLink>

      <nav
        class="nav__menu"
        aria-label="Primary navigation"
      >
        <div
          v-for="item in navItems"
          :key="item.label"
          class="relative"
          @mouseenter="isMegaMenu(item.label) ? openMenu(item.label) : closeMenu()"
        >
          <NuxtLink
            :to="item.href"
            class="nav__link"
          >
            {{ item.label }}
          </NuxtLink>
          <span
            v-if="isMegaMenu(item.label)"
            class="absolute left-0 top-full mt-4 h-0.5 bg-[#d1d5db] transition-opacity"
            :class="indicatorWidth(item.label)"
            :style="{ opacity: activeMenu === item.label ? 1 : 0 }"
          />
        </div>
      </nav>

      <NuxtLink
        :to="ctaTo"
        class="nav__cta"
      >
        {{ ctaText }}
      </NuxtLink>

      <div
        v-if="activeMenu === 'SERVICES'"
        class="absolute inset-x-0 top-full z-30 mt-1.5"
      >
        <div class="rounded-[2rem] border border-[#ececec] bg-white p-[0.7rem] shadow-[0_1.5rem_4.375rem_rgba(15,23,42,0.12)] backdrop-blur-sm">
          <div class="grid grid-cols-1 gap-3 xl:grid-cols-4 xl:auto-rows-[8.25rem]">
            <article
              v-for="card in serviceCards"
              :key="card.id"
              class="group relative flex min-h-[8.625rem] flex-col overflow-hidden rounded-[1rem] border border-[#efeff2] bg-[linear-gradient(180deg,#fbfbfc_0%,#f3f3f6_100%)] px-6 py-5 transition-colors duration-200 hover:bg-[linear-gradient(180deg,#f9f9fb_0%,#eeeeF2_100%)]"
              :class="[serviceLayoutMap[card.id], serviceCardClass(card.id)]"
            >
              <div
                v-if="card.id === 'all'"
                class="services-orb pointer-events-none absolute -bottom-10 -right-10 h-[15rem] w-[19.375rem] opacity-80"
              />

              <div class="relative z-10 flex items-start justify-between gap-4">
                <NuxtLink
                  :to="card.href"
                  class="max-w-[85%] font-medium text-[#0a0f1a] transition-colors duration-200 group-hover:text-[#05080f]"
                  :class="serviceTitleClass(card.id)"
                >
                  {{ card.title }}
                </NuxtLink>

                <NuxtLink
                  :to="card.href"
                  class="mt-px inline-flex shrink-0 text-[#0d1117] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-label="Open service"
                >
                  <svg
                    class="h-[1.8rem] w-[1.8rem]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M9 7H17V15"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </NuxtLink>
              </div>

              <ul
                v-if="card.items?.length"
                class="relative z-10 font-normal tracking-[-0.02em] text-[#555d69]"
                :class="serviceListClass(card.id)"
              >
                <li
                  v-for="item in card.items"
                  :key="item"
                >
                  <NuxtLink
                    :to="card.href"
                    class="transition-colors duration-200 hover:text-[#111827]"
                  >
                    {{ item }}
                  </NuxtLink>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
      <div
        v-if="activeMenu === 'INDUSTRIES'"
        class="absolute inset-x-0 top-full z-30 mt-1.5"
      >
        <div class="rounded-[2rem] border border-[#ececec] bg-white p-[0.55rem] shadow-[0_1.5rem_4.375rem_rgba(15,23,42,0.12)] backdrop-blur-sm">
          <div class="grid grid-cols-1 gap-[0.78rem] xl:grid-cols-4 xl:auto-rows-[4.375rem]">
            <article
              v-for="card in industryCards"
              :key="card.id"
              class="group relative flex min-h-[4.375rem] flex-col overflow-hidden rounded-[0.95rem] border border-[#efeff2] bg-[linear-gradient(180deg,#fbfbfc_0%,#f3f3f6_100%)] px-6 py-5 transition-colors duration-200 hover:bg-[linear-gradient(180deg,#f9f9fb_0%,#eeeff2_100%)]"
              :class="[industryLayoutMap[card.id], industryCardClass(card.id), card.id === 'talk' ? 'industries-talk-card border-transparent' : '']"
            >
              <template v-if="card.id !== 'talk'">
                <div class="relative z-10 flex items-start justify-between gap-4">
                  <NuxtLink
                    :to="card.href"
                    class="max-w-[85%] whitespace-pre-line text-[1rem] font-medium leading-[1.15] tracking-[-0.035em] text-[#050b16] transition-colors duration-200 group-hover:text-[#05080f]"
                  >
                    {{ card.title }}
                  </NuxtLink>

                  <NuxtLink
                    :to="card.href"
                    class="mt-px inline-flex shrink-0 text-[#0d1117] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-label="Open industry"
                  >
                    <svg
                      class="h-[1.72rem] w-[1.72rem]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 17L17 7M9 7H17V15"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </NuxtLink>
                </div>

                <ul
                  v-if="card.items?.length"
                  class="relative z-10 font-normal tracking-[-0.02em] text-[#555d69]"
                  :class="industryListClass(card.id)"
                >
                  <li
                    v-for="item in card.items"
                    :key="item"
                  >
                    <NuxtLink
                      :to="card.href"
                      class="transition-colors duration-200 hover:text-[#111827]"
                    >
                      {{ item }}
                    </NuxtLink>
                  </li>
                </ul>
              </template>

              <template v-else>
                <div class="absolute inset-0 industries-talk-scene" />
                <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,14,24,0.28)_0%,rgba(8,14,24,0.08)_42%,rgba(8,14,24,0.26)_100%)]" />

                <div class="relative z-10 flex h-full flex-col justify-between">
                  <NuxtLink
                    :to="card.href"
                    class="max-w-[42%] whitespace-pre-line text-[0.98rem] font-medium leading-[1.08] tracking-[-0.035em] text-white"
                  >
                    {{ card.title }}
                  </NuxtLink>

                  <div class="flex items-end justify-between gap-4">
                    <NuxtLink
                      :to="card.href"
                      class="pb-[0.2rem] text-[0.92rem] font-semibold tracking-[-0.02em] text-white"
                    >
                      {{ card.accent }}
                    </NuxtLink>

                    <NuxtLink
                      :to="card.href"
                      class="inline-flex h-[3.45rem] w-[3.45rem] items-center justify-center rounded-full bg-white text-[#0d1117] shadow-[0_0.625rem_1.5rem_rgba(0,0,0,0.18)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-label="Let's talk"
                    >
                      <svg
                        class="h-[1.72rem] w-[1.72rem]"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 17L17 7M9 7H17V15"
                          stroke="currentColor"
                          stroke-width="1.8"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </NuxtLink>
                  </div>
                </div>
              </template>
            </article>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
/* Navbar */
.nav {
  flex-shrink: 0;
  padding: 0.55rem var(--px);
}
.nav__bar {
  position: relative;
  display: flex;
  max-width: var(--max);
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 0.5rem 2.35rem;
  border: 0.0625rem solid #e8e8ec;
  border-radius: 2rem;
  background: #fff;
  box-shadow: 0 0.625rem 1.875rem rgba(15, 23, 42, 0.06);
}
.nav__logo {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}
.nav__logo-image {
  display: block;
  width: auto;
  max-height: 2.5rem;
}
.nav__menu {
  display: none;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: clamp(2rem, 4.2vw, 4.3rem);
}
@media (min-width: 80rem) {
  .nav__menu {
    display: flex;
  }
}
.nav__link {
  font-size: 0.84rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  color: #111827;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s;
}
.nav__link:hover {
  color: var(--orange);
}
.nav__cta {
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  min-height: 4rem;
  min-width: 11.375rem;
  padding: 0.9rem 2.2rem;
  border-radius: 624.9375rem;
  background: var(--orange);
  color: #fff;
  font-size: 0.94rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-decoration: none;
  text-transform: uppercase;
  transition: background 0.2s;
}
.nav__cta:hover {
  background: #ea5f00;
}

.services-orb {
  background-image:
    radial-gradient(circle at 78% 76%, rgba(34, 34, 34, 0.28) 0, rgba(34, 34, 34, 0.28) 0.0938rem, transparent 0.1125rem),
    radial-gradient(circle at 74% 74%, rgba(34, 34, 34, 0.12) 0, rgba(34, 34, 34, 0.12) 0.0625rem, transparent 0.0875rem);
  background-position: 0 0, 0.25rem 0.25rem;
  background-size: 0.5rem 0.5rem, 0.5rem 0.5rem;
  clip-path: ellipse(52% 44% at 67% 63%);
  filter: blur(0.0063rem);
}

.industries-talk-card {
  background: #304557;
}

.industries-talk-scene {
  background-image:
    radial-gradient(circle at 80% 18%, rgba(255, 255, 255, 0.2) 0 8%, transparent 9%),
    radial-gradient(circle at 72% 26%, rgba(32, 17, 12, 0.75) 0 14%, transparent 15%),
    radial-gradient(ellipse at 82% 36%, rgba(190, 104, 24, 0.96) 0 16%, transparent 17%),
    radial-gradient(ellipse at 88% 52%, rgba(167, 84, 18, 0.94) 0 18%, transparent 19%),
    radial-gradient(ellipse at 73% 62%, rgba(87, 37, 20, 0.78) 0 28%, transparent 29%),
    radial-gradient(ellipse at 20% 72%, rgba(70, 47, 37, 0.58) 0 20%, transparent 21%),
    linear-gradient(90deg, rgba(67, 88, 107, 0.92) 0%, rgba(49, 74, 93, 0.88) 38%, rgba(35, 53, 67, 0.38) 58%, rgba(31, 29, 29, 0.12) 100%),
    linear-gradient(125deg, #5e7387 0%, #42586d 30%, #7f522e 68%, #cf6d17 100%);
  background-position: center;
  background-size: cover;
}
</style>
