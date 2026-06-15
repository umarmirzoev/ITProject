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

const detailCards = [
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
  }
]

const currentService = 'End-to-end IoT services'
</script>

<template>
  <section class="service-detail">
    <div class="service-detail__container">
      <div class="service-detail__sidebar">
        <nav class="service-detail__nav">
          <ul class="service-detail__list">
            <li v-for="(service, idx) in services" :key="service.title" class="service-detail__item">
              <button 
                :class="[
                  'service-detail__link',
                  { 'service-detail__link--active': service.type === 'main' }
                ]"
                :aria-current="service.type === 'main' ? 'page' : undefined"
              >
                {{ service.title }}
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div class="service-detail__main">
        <div class="service-detail__header">
          <h1 class="service-detail__title">
            End-to-end
            <span class="service-detail__highlight">IoT services</span>
          </h1>

          <a href="#contact" class="service-detail__header-link" aria-label="Contact for this service">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17L17 7M17 7H9.5M17 7V15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
            </svg>
          </a>
        </div>

        <p class="service-detail__lead">
          We provide <strong>truly comprehensive, ready-to-scale IoT solutions</strong> tailored for your business. Our expertise covers the full spectrum, from designing custom hardware and specialized firmware to building intuitive cloud platforms and responsive mobile applications, ensuring a unified and powerful system.
        </p>

        <div class="service-detail__cards">
          <article v-for="card in detailCards" :key="card.title" class="service-detail__card">
            <h2 class="service-detail__card-title">{{ card.title }}</h2>
            <p class="service-detail__card-text">{{ card.description }}</p>

            <a href="#contact" class="service-detail__card-action" aria-label="Learn more">
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
.service-detail {
  background: #f5f5f5;
  padding: 3rem 2rem;
  min-height: 100vh;
}

.service-detail__container {
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 4rem;
}

.service-detail__sidebar {
  display: flex;
  flex-direction: column;
}

.service-detail__nav {
  position: sticky;
  top: 2rem;
}

.service-detail__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.service-detail__item {
  display: block;
}

.service-detail__link {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 1rem;
  color: #999;
  text-align: left;
  transition: color 0.3s ease;
  font-weight: 400;
}

.service-detail__link:hover {
  color: #666;
}

.service-detail__link--active {
  color: #111;
  font-weight: 600;
}

.service-detail__main {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.service-detail__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
}

.service-detail__title {
  margin: 0;
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 400;
  line-height: 1.2;
  color: #111;
}

.service-detail__highlight {
  color: #103e3c;
  display: inline;
}

.service-detail__header-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  background: #000;
  border-radius: 50%;
  color: #fff;
  text-decoration: none;
  transition: background 0.3s ease;
  flex-shrink: 0;
}

.service-detail__header-link:hover {
  background: #333;
}

.service-detail__header-link svg {
  width: 1.5rem;
  height: 1.5rem;
}

.service-detail__lead {
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.7;
  color: #555;
}

.service-detail__lead strong {
  color: #111;
  font-weight: 600;
}

.service-detail__cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.service-detail__card {
  background: #e8e8e8;
  padding: 2.5rem;
  border-radius: 1.5rem;
  position: relative;
  transition: background 0.3s ease;
}

.service-detail__card:hover {
  background: #ddd;
}

.service-detail__card-title {
  margin: 0 0 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #111;
}

.service-detail__card-text {
  margin: 0 0 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
}

.service-detail__card-action {
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

.service-detail__card-action:hover {
  background: #333;
}

.service-detail__card-action svg {
  width: 1.25rem;
  height: 1.25rem;
}

@media (max-width: 1024px) {
  .service-detail__container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .service-detail__nav {
    position: static;
  }

  .service-detail__list {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .service-detail__cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .service-detail {
    padding: 2rem 1rem;
  }

  .service-detail__title {
    font-size: 2rem;
  }

  .service-detail__header {
    flex-direction: column;
  }

  .service-detail__header-link {
    align-self: flex-start;
  }
}
</style>
