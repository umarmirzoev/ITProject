<script setup lang="ts">
const services = [
  {
    title: 'End-to-End IoT Services',
    type: 'main'
  },
  {
    title: 'Hardware Design & Development',
    type: 'secondary'
  },
  {
    title: 'Embedded Development',
    type: 'secondary'
  },
  {
    title: 'Rust Development',
    type: 'secondary'
  },
  {
    title: 'AI & ML Services',
    type: 'secondary'
  },
  {
    title: 'Data Services',
    type: 'secondary'
  },
  {
    title: 'Compliance and Security',
    type: 'secondary'
  },
  {
    title: 'IT Services',
    type: 'secondary'
  },
  {
    title: 'Custom Software Development',
    type: 'secondary'
  },
  {
    title: 'Cross-Industry Services',
    type: 'secondary'
  }
]

const serviceCards = [
  {
    title: 'IoT software development',
    description: 'We architect and build the cloud platforms, mobile apps, and data pipelines necessary to connect, manage, and scale your entire IoT solution.'
  },
  {
    title: 'IoT product development',
    description: 'Our team guides your connected device from initial concept and prototyping through to mass production and market launch.'
  },
  {
    title: 'IoT app development',
    description: 'We build mobile and web applications that connect end users to their devices, supporting onboarding, real-time monitoring, alerts, and remote control across iOS, Android, and the browser.'
  },
  {
    title: 'IoT consulting',
    description: 'Our strategic expertise helps you define your IoT roadmap, select the right technologies, and identify high-impact opportunities for your business.'
  },
  {
    title: 'IoT compliance',
    description: 'Yalantis handles documentation and certification readiness of your IoT product from HIPAA and GDPR to FCC and IEC 62443.'
  },
  {
    title: 'IoT security',
    description: 'We protect your connected devices and platforms with secure boot, end-to-end encryption, and continuous vulnerability assessment built into the product from day one.'
  },
  {
    title: 'IoT data analytics',
    description: 'Our experts turn raw telemetry from your connected devices into actionable insight, using purpose-built analytics pipelines and visualization layers that highlight what matters.'
  },
  {
    title: 'IoT integration',
    description: 'We connect your IoT solution to your existing enterprise systems, third-party platforms, and cloud services, so data flows cleanly across your business.'
  },
  {
    title: 'IoT team extension',
    description: 'Our experienced IoT engineers extend your in-house capacity, integrate into your workflows on dedicated, long-term assignments.'
  }
]
</script>

<template>
  <section class="service-catalog">
    <div class="service-catalog__container">
      <div class="service-catalog__sidebar">
        <nav class="service-catalog__nav">
          <ul class="service-catalog__list">
            <li v-for="service in services" :key="service.title" class="service-catalog__item">
              <button 
                :class="[
                  'service-catalog__link',
                  { 'service-catalog__link--active': service.type === 'main' }
                ]"
                :aria-current="service.type === 'main' ? 'page' : undefined"
              >
                {{ service.title }}
              </button>
            </li>
          </ul>
        </nav>

        <a href="#cases" class="service-catalog__explore">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M8 16L16 8M16 8H9.5M16 8V14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
          </svg>
          <span>Explore our cases</span>
        </a>
      </div>

      <div class="service-catalog__main">
        <div class="service-catalog__grid">
          <article 
            v-for="(card, idx) in serviceCards" 
            :key="card.title" 
            :class="[
              'service-catalog__card',
              {
                'service-catalog__card--wide': idx === 4
              }
            ]"
          >
            <div class="service-catalog__card-content">
              <h3 class="service-catalog__card-title">{{ card.title }}</h3>
              <p class="service-catalog__card-text">{{ card.description }}</p>
            </div>

            <a href="#contact" class="service-catalog__card-action" aria-label="Learn more">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M8 16L16 8M16 8H9.5M16 8V14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
              </svg>
            </a>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-catalog {
  background: #f5f5f5;
  padding: 3rem 2rem;
}

.service-catalog__container {
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
}

.service-catalog__sidebar {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
}

.service-catalog__nav {
  position: sticky;
  top: 2rem;
}

.service-catalog__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.service-catalog__item {
  display: block;
}

.service-catalog__link {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 0.95rem;
  color: #999;
  text-align: left;
  transition: color 0.3s ease;
  font-weight: 400;
  letter-spacing: -0.01em;
}

.service-catalog__link:hover {
  color: #666;
}

.service-catalog__link--active {
  color: #111;
  font-weight: 600;
}

.service-catalog__explore {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  width: fit-content;
  padding: 1rem;
  border-radius: 50px;
  background: #000;
  color: #fff;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: background 0.3s ease;
}

.service-catalog__explore:hover {
  background: #333;
}

.service-catalog__explore svg {
  width: 1.25rem;
  height: 1.25rem;
}

.service-catalog__main {
  display: flex;
  flex-direction: column;
}

.service-catalog__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  auto-rows: auto;
}

.service-catalog__card {
  background: #e8e8e8;
  padding: 2.5rem;
  border-radius: 1.5rem;
  position: relative;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background 0.3s ease;
}

.service-catalog__card:hover {
  background: #ddd;
}

.service-catalog__card--wide {
  grid-column: span 1;
}

.service-catalog__card-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.service-catalog__card-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #111;
}

.service-catalog__card-text {
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
}

.service-catalog__card-action {
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: #000;
  border-radius: 50%;
  color: #fff;
  text-decoration: none;
  transition: background 0.3s ease;
}

.service-catalog__card-action:hover {
  background: #333;
}

.service-catalog__card-action svg {
  width: 1.25rem;
  height: 1.25rem;
}

@media (max-width: 1024px) {
  .service-catalog__container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .service-catalog__nav {
    position: static;
  }

  .service-catalog__list {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .service-catalog__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .service-catalog {
    padding: 2rem 1rem;
  }

  .service-catalog__container {
    gap: 1rem;
  }

  .service-catalog__sidebar {
    gap: 2rem;
  }

  .service-catalog__card {
    padding: 2rem;
    min-height: auto;
  }
}
</style>
