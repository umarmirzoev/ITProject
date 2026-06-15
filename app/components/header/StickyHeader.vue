  <script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const items = [
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '#' },
    { label: 'Success Stories', href: '#' },
    { label: 'Solution Hub', href: '#' },
    { label: 'Company', href: '#' },
    { label: 'Insights', href: '#' },
]


const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 18
} 
          

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="sticky top-0 z-50 px-3 pt-3 sm:px-5">
    <nav
      data-hero-nav
      class="mx-auto flex max-w-[1500px] items-center justify-between gap-6 rounded-[2rem] border border-white/80 px-4 py-3 shadow-[0_18px_50px_rgba(17,24,39,0.08)] transition-all duration-300 sm:px-8"
      :class="isScrolled ? 'bg-white/72 backdrop-blur-xl shadow-[0_18px_65px_rgba(17,24,39,0.14)]' : 'bg-white/92'"
    >
      <NuxtLink
        to="/"
        class="shrink-0 text-[2rem] font-semibold leading-none tracking-[-0.08em] text-[#141a26] sm:text-[2.35rem]"
        style="font-family: 'Helvetica Neue', Inter, sans-serif;"
      >
        yalantis
      </NuxtLink>

      <div class="hidden items-center justify-center gap-[clamp(1.8rem,3vw,3.8rem)] xl:flex">
        <NuxtLink
          v-for="item in items"
          :key="item.label"
          :to="item.href"
          class="group relative text-[0.88rem] font-medium uppercase tracking-[0.18em] text-[#171d2a]"
        >
          <span class="transition-colors duration-200 group-hover:text-[#103e3c]">{{ item.label }}</span>
          <span class="absolute inset-x-0 -bottom-2 h-px origin-left scale-x-0 bg-[#103e3c] transition-transform duration-300 group-hover:scale-x-100" />
        </NuxtLink>
      </div>

      <NuxtLink
        to="#contact"
        class="inline-flex min-h-[3.75rem] shrink-0 items-center justify-center rounded-full bg-[#103e3c] px-6 text-[0.92rem] font-semibold uppercase tracking-[0.16em] text-white transition-transform duration-300 hover:scale-[1.03] hover:bg-[#103e3c] sm:px-9"
      >
        Contact us
      </NuxtLink>
    </nav>
  </header>
</template>
