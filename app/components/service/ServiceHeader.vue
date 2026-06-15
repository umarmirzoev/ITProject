<script setup lang="ts">
const serviceCards = [
  'End-to-end IoT development services',
  'Hardware design & development',
  'Embedded development',
  'Rust development',
  'AI & ML services',
  'Data services',
  'Compliance & security',
  'IT services',
  'Custom software development',
]
</script>

<template>
  <section class="service-page">
    <div class="service-page__container">
      <div class="service-page__header">
        <div>
          <p class="service-page__breadcrumb">
            <NuxtLink to="/" class="service-page__breadcrumb-link">Yalantis</NuxtLink>
            <span class="service-page__breadcrumb-separator">→</span>
            <span>Services</span>
          </p>

          <h1 class="service-page__title">
            Yalantis <span>Services</span>
          </h1>
        </div>

        <div class="service-page__copy">
          <p class="service-page__lead">
            Software engineering, hardware development, AI implementation, and more. We can help you at any stage of development.
          </p>
          <p class="service-page__description">
            Whether you’re creating your product from scratch, modernizing it, or continuously improving it, we have the expertise your business requires.
          </p>
        </div>
      </div>

      <div class="service-page__cards">
        <NuxtLink
          v-for="title in serviceCards"
          :key="title"
          to="/services"
          class="service-card"
          aria-label="Open service"
        >
          <span>{{ title }}</span>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M8 16L16 8M16 8H9.5M16 8V14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>

.service-page {
  background: #f5f5f5;
  min-height: 100vh;
  padding: 2rem 0 5rem;
}

.service-page__container {
  width: 100%;
  max-width: 112.5rem;
  margin: 0 auto;
  padding: 0 2rem;
}

.service-page__header {
  min-height: 43.75rem;
  display: flex;
  flex-direction: column;
}

.service-page__breadcrumb {
  margin: 0;
  padding-top: 1.5rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-size: 1rem;
  color: #6b7280;
}

.service-page__breadcrumb-link {
  text-decoration: none;
  color: #111;
  font-weight: 600;
}

.service-page__breadcrumb-separator {
  color: #9ca3af;
}

.service-page__title {
  margin: 1.25rem 0 0;

  font-size: 7.5rem;
  line-height: 0.9;
  letter-spacing: -0.375rem;
  font-weight: 500;

  color: #000;
}

.service-page__title span {
  color: #ff6b00;
}

.service-page__copy {
  margin-top: auto;
  max-width: 93.75rem;
}

.service-page__lead {
  margin: 0;

  font-size: 1.5rem;
  line-height: 1.6;
  font-weight: 500;

  color: #111;
}

.service-page__description {
  margin-top: 0.75rem;

  font-size: 1.25rem;
  line-height: 1.7;

  color: #5b5b5b;
}

.service-page__cards {
  margin-top: 2.5rem;

  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 0.75rem;
}

.service-card {
  min-height: 5.5rem;
  padding: 0 1.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  background: #ececec;
  border-radius: 0.875rem;

  text-decoration: none;
  color: #111;

  transition: all 0.25s ease;
}

.service-card:hover {
  background: #e5e5e5;
  transform: translateY(-0.125rem);
}

.service-card span {
  font-size: 1.125rem;
  line-height: 1.4;
  font-weight: 500;
}

.service-card svg {
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
}

.service-page__cards > .service-card {
  grid-column: span 2;
}

.service-page__cards > .service-card:nth-child(7),
.service-page__cards > .service-card:nth-child(8),
.service-page__cards > .service-card:nth-child(9) {
  grid-column: span 4;
}

@media (max-width: 87.5rem) {
  .service-page__title {
    font-size: 5.625rem;
  }
}

@media (max-width: 75rem) {
  .service-page__cards {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .service-page__cards > .service-card {
    grid-column: span 2;
  }

  .service-page__cards > .service-card:nth-child(7),
  .service-page__cards > .service-card:nth-child(8),
  .service-page__cards > .service-card:nth-child(9) {
    grid-column: span 2;
  }
}

@media (max-width: 48rem) {
  .service-page {
    padding: 1.5rem 0 3rem;
  }

  .service-page__container {
    padding: 0 1rem;
  }

  .service-page__header {
    min-height: auto;
  }

  .service-page__title {
    font-size: 3.5rem;
    letter-spacing: -0.125rem;
  }

  .service-page__lead {
    font-size: 1.125rem;
  }

  .service-page__description {
    font-size: 1rem;
  }

  .service-page__cards {
    grid-template-columns: 1fr;
  }

  .service-page__cards > .service-card,
  .service-page__cards > .service-card:nth-child(7),
  .service-page__cards > .service-card:nth-child(8),
  .service-page__cards > .service-card:nth-child(9) {
    grid-column: span 1;
  }
}
</style>
 
