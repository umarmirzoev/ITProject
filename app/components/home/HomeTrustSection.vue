<script setup lang="ts">
type Brand = {
  id: string
  label: string
  class?: string
}

const brands: Brand[] = [
  { id: 'k', label: 'KВІ', class: 'trust-logo--k' },
  { id: 'healthfully', label: 'Healthfully', class: 'trust-logo--health' },
  { id: 'stromee', label: 'stromee', class: 'trust-logo--low' },
  { id: 'wayne', label: 'Wayne' },
  { id: 'toyota', label: 'TOYOTA TSUSHO', class: 'trust-logo--toyota' },
  { id: 'meroxa', label: 'meroxa', class: 'trust-logo--low' },
  { id: 'viewtrade', label: 'ViewTrade' },
  { id: 'sourcing', label: '123Sourcing', class: 'trust-logo--sm' },
  { id: 'restored', label: 'Restored Health', class: 'trust-logo--sm' }
]
</script>

<template>
  <section class="trust">
    <div class="trust__wrap">
      <div class="trust__pill">
        <p class="trust__label">
          Trusted by leaders:
        </p>

        <div class="trust-marquee">
          <div class="trust-marquee__track">
            <ul
              v-for="copy in 2"
              :key="copy"
              class="trust-marquee__list"
              :aria-hidden="copy === 2"
            >
              <li
                v-for="(brand, index) in brands"
                :key="`${copy}-${brand.id}`"
                class="trust-marquee__item"
                :style="{ animationDelay: `${index * 0.08}s` }"
              >
                <span
                  v-if="brand.id === 'healthfully'"
                  class="trust-logo trust-logo--health"
                >
                  <span class="trust-logo__dot" />
                  {{ brand.label }}
                </span>
                <span
                  v-else
                  class="trust-logo"
                  :class="brand.class"
                >
                  {{ brand.label }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* Trusted by leaders */
.trust {
  flex-shrink: 0;
  padding: 0 var(--px) 1.8rem;
  border-bottom: 0.1875rem solid var(--orange);
}
.trust__wrap {
  max-width: var(--max);
  margin: 0 auto;
  animation: trust-rise 0.85s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.trust__pill {
  display: flex;
  align-items: center;
  gap: clamp(1.25rem, 3vw, 2.5rem);
  padding: 1.35rem clamp(1.5rem, 3vw, 2.5rem);
  border: 0.0625rem solid #ebebed;
  border-radius: 624.9375rem;
  background: #fff;
  box-shadow: 0 0.75rem 2.5rem rgba(15, 23, 42, 0.08);
}
@media (max-width: 63.9375rem) {
  .trust__pill {
    flex-direction: column;
    align-items: flex-start;
    border-radius: 1.75rem;
    padding: 1.25rem 1.5rem;
  }
}
.trust__label {
  flex-shrink: 0;
  font-size: 1.05rem;
  font-weight: 500;
  letter-spacing: -0.025em;
  color: #111827;
  white-space: nowrap;
  animation: trust-label-in 0.7s ease-out 0.15s both;
}
.trust-marquee {
  min-width: 0;
  flex: 1;
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
}
.trust-marquee__track {
  display: flex;
  width: max-content;
  animation: trust-marquee 38s linear infinite;
}
.trust-marquee:hover .trust-marquee__track {
  animation-play-state: paused;
}
.trust-marquee__list {
  display: flex;
  align-items: center;
  gap: clamp(1.75rem, 4vw, 3.5rem);
  padding: 0 clamp(0.75rem, 2vw, 1.5rem);
  list-style: none;
}
.trust-marquee__item {
  flex-shrink: 0;
  animation: trust-logo-pop 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.trust-logo {
  color: #a8afb9;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  white-space: nowrap;
  transition: color 0.25s ease, transform 0.25s ease;
}
.trust-marquee__item:hover .trust-logo {
  color: #7a8494;
  transform: scale(1.04);
}
.trust-logo--k {
  font-size: 1.55rem;
  font-weight: 700;
}
.trust-logo--toyota {
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.14em;
}
.trust-logo--health {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.9rem;
}
.trust-logo__dot {
  width: 1.15rem;
  height: 1.15rem;
  border: 0.0625rem solid #b8bec8;
  border-radius: 624.9375rem;
}
.trust-logo--low {
  text-transform: lowercase;
}
.trust-logo--sm {
  font-size: 0.82rem;
}
@keyframes trust-rise {
  from {
    opacity: 0;
    transform: translateY(1.75rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes trust-label-in {
  from {
    opacity: 0;
    transform: translateX(-0.75rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes trust-logo-pop {
  from {
    opacity: 0;
    transform: scale(0.92);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes trust-marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
@media (prefers-reduced-motion: reduce) {
  .trust__wrap, .trust__label, .trust-marquee__item, .trust-marquee__track {
    animation: none;
  }
}
</style>
