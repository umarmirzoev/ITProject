<script setup lang="ts">
const services = [
  {
    title: 'End-to-End IoT Development Services',
    description:
      'From custom hardware and firmware to cloud software and mobile apps, we deliver connected, ready-to-scale IoT solutions for your business.'
  },
  {
    title: 'Embedded Development',
    description:
      'At the heart of every smart device is robust firmware. We specialize in creating stable and secure embedded systems that you can depend on.'
  },
  {
    title: 'Hardware Design and Development',
    description:
      'From vision, engineering, and prototype builds to full-cycle hardware development, from initial schematics and PCB design to production-ready prototypes.'
  },
  {
    title: 'Software Development',
    description:
      'Great products require great software. Our teams build robust web, mobile, and cloud applications designed to support and expand your connected ecosystem.'
  },
  {
    title: 'Data & AI',
    description:
      'Transform your data into a strategic asset. We implement AI and machine learning models to uncover insights, automate processes, and build smart features.'
  }
] as const
</script>

<template>
  <section class="services">
    <div class="services__inner">
      <div class="services__intro">
        <h2 class="services__heading">
          <span class="services__brand">Yalantis</span>
          <span class="services__accent">Services</span>
        </h2>

        <div class="services__info">
          <p class="services__text">
            <span class="services__text-strong">
              Yalantis main expertise lies in IoT and custom software development.
            </span>
            <span class="services__text-light">
              Along with that, we also offer a wide range of expert services to cover all
              necessary IT needs.
            </span>
          </p>

          <a
            href="#"
            class="services__cta"
            aria-label="View all services"
          >
            <span class="services__cta-pill">View all services</span>
            <span class="services__cta-arrow">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7 17L17 7M17 7H8.5M17 7V15.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.8"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div class="services__list">
        <article
          v-for="service in services"
          :key="service.title"
          class="services__card"
        >
          <div class="services__card-copy">
            <h3 class="services__card-title">
              {{ service.title }}
            </h3>

            <p class="services__card-text">
              {{ service.description }}
            </p>
          </div>

          <span
            class="services__card-action"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 16L16 8M16 8H9.5M16 8V14.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
              />
            </svg>
          </span>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* Services */
.services {
  padding: 0.75rem var(--px) 2.8rem;
  background: #fff;
}
.services__inner {
  display: grid;
  grid-template-columns: minmax(18rem, 0.98fr) minmax(0, 1.18fr);
  gap: clamp(0.4rem, 1vw, 0.8rem);
  max-width: var(--max);
  margin: 0 auto;
  align-items: start;
}
.services__intro {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  padding: 0.15rem 0 0;
}
.services__heading {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  font-size: clamp(2.8rem, 4.5vw, 3.6rem);
  font-weight: 300;
  line-height: 0.95;
  letter-spacing: -0.07em;
  color: #0d1322;
}
.services__brand,
.services__accent {
  display: block;
  color: var(--orange);
}
.services__brand {
  color: #161d2b;
}
.services__info {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;
  padding-top: clamp(1.2rem, 2vw, 2rem);
}
.services__text {
  max-width: 31rem;
  margin: 0;
  color: #676f7d;
  font-size: 1rem;
  line-height: 1.62;
  letter-spacing: -0.015em;
}
.services__text-strong,
.services__text-light {
  display: block;
}
.services__text-strong {
  color: #18202f;
  font-weight: 500;
  white-space: nowrap;
}
.services__text-light {
  margin-top: 0.25rem;
  color: #7d8695;
  font-weight: 400;
}
.services__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.18rem;
  width: fit-content;
  text-decoration: none;
}
.services__cta-pill, .services__cta-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.6rem;
  border-radius: 62.4375rem;
  background: #0d1322;
  color: #fff;
  transition: transform 0.2s ease, background 0.2s ease;
}
.services__cta-pill {
  padding: 0 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: -0.01em;
}
.services__cta-arrow {
  width: 2.6rem;
  flex-shrink: 0;
}
.services__cta-arrow svg {
  width: 0.82rem;
  height: 0.82rem;
}
.services__cta:hover .services__cta-pill, .services__cta:hover .services__cta-arrow {
  background: #1b2436;
  transform: translateY(-0.0625rem);
}
.services__list {
  display: grid;
  gap: 0.42rem;
  max-width: 45rem;
  justify-self: end;
  width: 100%;
}
.services__card {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.7rem;
  min-height: 5.3rem;
  padding: 0.82rem 0.78rem 0.76rem 0.84rem;
  border: 0.0625rem solid #efeff3;
  border-radius: 0.5rem;
  background: linear-gradient(180deg, #fafafa 0%, #f5f5f7 100%);
  box-shadow: inset 0 0.0625rem 0 rgba(255, 255, 255, 0.9);
}
.services__card-copy {
  min-width: 0;
}
.services__card-title {
  margin: 0;
  color: #1c2432;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.18;
  letter-spacing: -0.025em;
}
.services__card-text {
  margin: 0.24rem 0 0;
  color: #939ba7;
  font-size: 0.6rem;
  line-height: 1.5;
  letter-spacing: -0.01em;
}
.services__card-action {
  display: inline-flex;
  width: 1.32rem;
  height: 1.32rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 62.4375rem;
  background: #111318;
  color: #fff;
  margin-top: 0;
}
.services__card-action svg {
  width: 0.62rem;
  height: 0.62rem;
}
@media (max-width: 63.9375rem) {
  .services__inner {
    grid-template-columns: 1fr;
  }
  .services__intro {
    gap: 1.5rem;
  }
  .services__info {
    gap: 1.5rem;
    padding-top: 0;
  }
  .services__text {
    max-width: 34rem;
  }
  .services__list {
    max-width: none;
    justify-self: stretch;
  }
  .services__text-strong {
    white-space: normal;
  }
}
@media (max-width: 47.9375rem) {
  .services {
    padding: 1rem var(--px) 2rem;
  }
  .services__heading {
    gap: 0.4rem;
    font-size: clamp(2.5rem, 12vw, 3.6rem);
    flex-wrap: wrap;
  }
  .services__info {
    gap: 1.25rem;
  }
  .services__card {
    min-height: 0;
    padding: 1rem;
  }
  .services__card-title {
    font-size: 1rem;
  }
  .services__card-text {
    font-size: 0.78rem;
  }
}
</style>
