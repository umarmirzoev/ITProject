<script setup lang="ts">
const offices = [
  {
    country: 'PL Poland',
    address: '123 al. Jerozolimskie, Warsaw, 00-001'
  },
  {
    country: 'CY Cyprus',
    address: '8 Athinon Street, Larnaca, 6023'
  },
  {
    country: 'EE Estonia',
    address: '12 Parda, Tallinn, 10151'
  }
] as const
</script>

<template>
  <section class="service-offices" aria-label="Global offices and enterprise solutions">
    <div class="service-offices__grid">
      <article class="service-offices__card service-offices__card--cta">
        <p class="service-offices__cta-text">
          From medical devices to industrial automation — we deliver complete enterprise solutions with regulatory compliance built-in. Everything under one roof.
        </p>
        <div class="service-offices__cta-footer">
          <span class="service-offices__cta-label">Learn more</span>
          <a href="#contact" class="service-offices__cta-link" aria-label="Learn more">
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
      </article>

      <article class="service-offices__card service-offices__card--map" aria-hidden="true">
        <svg class="service-offices__map" viewBox="0 0 640 360" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="640" height="360" fill="#e8e8e8" />
          <path
            d="M120 120c18-8 42-12 68-8 24 4 48 14 72 10 30-4 58-18 88-12 22 4 40 18 58 34 12 12 18 28 14 44-4 18-18 32-34 42-20 14-44 18-68 16-28-2-54-12-78-24-22-10-46-16-70-12-24 4-46 16-62 32-10 10-18 22-30 28-8 4-18 4-26 0-10-6-16-18-14-30 4-22 22-40 42-52 14-8 30-14 46-18 12-4 24-8 34-16z"
            fill="#d7d7d7"
          />
          <path
            d="M300 210c10-4 22-2 30 6 8 8 10 20 4 30-6 10-18 16-30 14-12-2-22-12-24-24-2-12 6-24 20-26z"
            fill="#d0d0d0"
          />
          <path
            d="M430 170c14-6 30-4 40 8 8 10 8 24-2 34-10 10-26 12-38 4-12-8-16-24-8-36 6-10 16-14 8-10z"
            fill="#d2d2d2"
          />
          <circle cx="248" cy="142" r="11" fill="#103e3c" />
          <circle cx="248" cy="142" r="4.5" fill="#fff" />
          <circle cx="392" cy="214" r="11" fill="#103e3c" />
          <circle cx="392" cy="214" r="4.5" fill="#fff" />
          <circle cx="318" cy="248" r="11" fill="#103e3c" />
          <circle cx="318" cy="248" r="4.5" fill="#fff" />
          <circle cx="286" cy="98" r="11" fill="#103e3c" />
          <circle cx="286" cy="98" r="4.5" fill="#fff" />
        </svg>
      </article>

      <article class="service-offices__card service-offices__card--list">
        <h3 class="service-offices__heading">Our offices</h3>
        <ul class="service-offices__list">
          <li v-for="office in offices" :key="office.country" class="service-offices__item">
            <div class="service-offices__details">
              <strong class="service-offices__country">{{ office.country }}</strong>
              <p class="service-offices__address">{{ office.address }}</p>
            </div>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.service-offices {
  margin-top: 1rem;
  padding: 0 clamp(1rem, 2vw, 2rem) clamp(2.5rem, 5vw, 4rem);
  background: #fff;
}

.service-offices__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  max-width: 1440px;
  margin: 0 auto;
}

.service-offices__card {
  min-height: clamp(18rem, 24vw, 22rem);
  border-radius: 1.25rem;
  overflow: hidden;
}

.service-offices__card--cta {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: clamp(1.5rem, 2.5vw, 2rem);
  background: #103e3c;
  color: #fff;
}

.service-offices__cta-text {
  margin: 0;
  font-size: clamp(1rem, 1.35vw, 1.15rem);
  line-height: 1.55;
  letter-spacing: -0.02em;
}

.service-offices__cta-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
}

.service-offices__cta-label {
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.02em;
}

.service-offices__cta-link {
  display: inline-flex;
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #fff;
  color: #111;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.service-offices__cta-link:hover {
  transform: translateY(-1px);
}

.service-offices__cta-link svg {
  width: 1rem;
  height: 1rem;
}

.service-offices__card--map {
  background: #e8e8e8;
}

.service-offices__map {
  width: 100%;
  height: 100%;
  display: block;
}

.service-offices__card--list {
  padding: clamp(1.5rem, 2.5vw, 2rem);
  background: #f1f1f1;
}

.service-offices__heading {
  margin: 0 0 1.5rem;
  font-size: clamp(1.35rem, 2vw, 1.65rem);
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.03em;
  color: #111;
}

.service-offices__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
}

.service-offices__item {
  display: flex;
  align-items: flex-start;
}

.service-offices__country {
  display: block;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.3;
  color: #111;
}

.service-offices__address {
  margin: 0.2rem 0 0;
  font-size: 0.92rem;
  line-height: 1.45;
  color: #8a8f98;
}

@media (max-width: 1024px) {
  .service-offices__grid {
    grid-template-columns: 1fr;
  }

  .service-offices__card {
    min-height: auto;
  }

  .service-offices__card--map {
    min-height: 16rem;
  }
}
</style>
