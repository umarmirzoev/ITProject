<script setup lang="ts">
const props = defineProps<{
  accent: string
  label: string
  image: string
  active?: boolean
}>()
</script>

<template>
  <button
    type="button"
    class="group relative min-h-[5.75rem] overflow-hidden rounded-[1.05rem] border border-white/60 bg-[#8f939e]/25 text-left shadow-[0_10px_30px_rgba(15,23,42,0.09)] transition-transform duration-300"
    :class="props.active ? 'ring-1 ring-white/60' : ''"
  >
    <img
      :src="image"
      alt=""
      class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
    >
    <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,24,31,0.08)_0%,rgba(20,24,31,0.6)_100%)]" />

    <div class="relative z-[1] flex h-full items-end px-4 pb-3">
      <p class="max-w-[11rem] text-[0.67rem] font-medium leading-[1.05] tracking-[-0.03em] text-white sm:text-[0.82rem]">
        <span class="text-[#103e3c]">{{ accent }}</span>
        {{ label }}
      </p>
    </div>

    <span
      class="absolute inset-x-3 bottom-[-0.9rem] h-[0.24rem] rounded-full bg-[#e3e4ea]"
      aria-hidden="true"
    >
      <span
        class="block h-full rounded-full bg-[#103e3c] transition-all duration-300"
        :class="props.active ? 'w-[56%]' : 'w-[0%]'"
      />
    </span>
  </button>
</template>
