<script setup lang="ts">
const models = [
  {
    title: 'Time and\nMaterials',
    description:
      'Ideal for long-term projects with dynamic requirements, this model provides the flexibility to alter scope and workloads as your vision evolves over time.',
    featured: true
  },
  {
    title: 'Fixed\nPrice',
    description:
      'When you have clear requirements and a set deadline, our Fixed Price model delivers your project on budget while we manage the entire development lifecycle.'
  },
  {
    title: 'Managed\nTeam',
    description:
      'Seamlessly extend your team with our experts. We provide skilled professionals who integrate with your processes and values while we manage their performance.'
  },
  {
    title: 'Managed\nProduct',
    description:
      'Let us be your product co-creator. We take on wide-ranging responsibility, providing the development team and managing the complete lifecycle to build your product together.'
  },
  {
    title: 'Managed\nService',
    description:
      'Need expert help with a function like design, development, or QA? We provide a fully managed team of specialists to handle that entire process for you.'
  }
] as const
</script>

<template>
  <section class="engagement">
    <div class="engagement__inner">
      <div class="engagement__hero">
        <button
          type="button"
          class="engagement__floating"
          aria-label="Select your plan"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M8 8L16 16M16 16V9.5M16 16H9.5"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.8"
            />
          </svg>
        </button>

        <span class="engagement__floating-label">Select Your Plan</span>

        <div class="engagement__hero-content">
          <h2 class="engagement__heading">Engagement models</h2>

          <p class="engagement__hero-text">
            Each project has its own unique traits. Flexibility is not an option for us, it's a
            basic principle of partnership.
          </p>
        </div>
      </div>

      <div class="engagement__grid">
        <article
          v-for="model in models"
          :key="model.title"
          class="engagement__card"
          :class="{ 'engagement__card--featured': model.featured }"
        >
          <h3 class="engagement__card-title">
            <span
              v-for="line in model.title.split('\n')"
              :key="line"
              class="engagement__card-title-line"
            >
              {{ line }}
            </span>
          </h3>

          <p class="engagement__card-text">
            {{ model.description }}
          </p>

          <a
            v-if="model.featured"
            href="#"
            class="engagement__cta"
          >
            <span class="engagement__cta-pill">Contact us</span>
            <span class="engagement__cta-arrow">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
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
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* =========================
   Engagement Section
========================= */

.engagement {
  padding: 0 var(--px) 3rem;
  background: #ffffff;
}

.engagement__inner {
  width: 100%;
  max-width: var(--max);
  margin: 0 auto;
}

/* =========================
   HERO
========================= */

.engagement__hero {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  min-height: 29rem;

  padding: 0 6rem;

  overflow: hidden;

  border-radius: 0.75rem;

  background: #000;
  color: #fff;
}

.engagement__hero-content {
  width: 100%;
  max-width: 50rem;

  margin-left: auto;
  margin-right: 1rem;

  transform: translateY(-0.6rem);

  text-align: right;
}

.engagement__heading {
  margin: 0;

  color: #fff;

  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: clamp(3.4rem, 4.5vw, 5rem);
  font-weight: 300;
  line-height: 0.9;
  letter-spacing: -0.08em;
}

.engagement__hero-text {
  max-width: 34rem;

  margin-top: 2rem;
  margin-left: auto;

  color: rgba(255, 255, 255, 0.74);

  font-size: 1rem;
  line-height: 1.85;
  letter-spacing: -0.02em;
}

/* =========================
   Floating Button
========================= */

.engagement__floating {
  position: absolute;

  left: 0.8rem;
  bottom: 0.8rem;

  width: 2.3rem;
  height: 2.3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 999px;

  background: #fff;
  color: #000;

  cursor: pointer;

  z-index: 5;
}

.engagement__floating svg {
  width: 1rem;
  height: 1rem;
}

.engagement__floating-label {
  position: absolute;

  left: 4rem;
  bottom: 1.42rem;

  color: rgba(255, 255, 255, 0.72);

  font-size: 0.74rem;
  letter-spacing: -0.02em;
}

/* =========================
   GRID
========================= */

.engagement__grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  background: #fff;
}

/* =========================
   CARD
========================= */

.engagement__card {
  display: flex;
  flex-direction: column;

  min-height: 20rem;

  padding: 1.8rem 1.6rem 1.4rem;

  border-right: 1px solid #d8dbe2;

  background: #fff;
}

.engagement__card:last-child {
  border-right: none;
}

.engagement__card--featured {
  
}

.engagement__card-title {
  margin: 0;

  color: #121826;
  font-size: clamp(2.8rem, 2vw, 6rem);
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -0.06em;
}

.engagement__card-title-line {
  display: block;
}

.engagement__card-text {
  margin-top: 2.4rem;

  color: #8c93a1;

  font-size: 1.05rem;
  line-height: 1.95;
  letter-spacing: -0.01em;
}

/* =========================
   CTA
========================= */

.engagement__cta {
  display: inline-flex;
  align-items: center;

  gap: 0.35rem;

  width: fit-content;

  margin-top: auto;

  text-decoration: none;
}

.engagement__cta-pill,
.engagement__cta-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 2.6rem;
  border-radius: 62.4375rem;
  background: #000;
  color: #fff;
  transition: transform 0.2s ease, background 0.2s ease;
}

.engagement__cta-pill {
  padding: 0 1.2rem;

  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.engagement__cta-arrow {
  width: 2.6rem;
  flex-shrink: 0;
}

.engagement__cta-arrow svg {
  width: 0.92rem;
  height: 0.92rem;
}

.engagement__cta:hover .engagement__cta-pill,
.engagement__cta:hover .engagement__cta-arrow {
  background: #1a1a1a;
  transform: translateY(-0.0625rem);
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1440px) {
  .engagement__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1024px) {
  .engagement__hero {
    justify-content: flex-start;

    padding: 3rem 5rem;
  }

  .engagement__hero-content {
    max-width: 100%;

    margin: 0;

    transform: none;

    text-align: left;
  }

  .engagement__hero-text {
    margin-left: 0;
  }

  .engagement__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .engagement {
    padding-bottom: 2rem;
  }

  .engagement__hero {
    min-height: auto;

    padding: 2rem 1.2rem 3rem;
  }

  .engagement__heading {
    font-size: clamp(2.4rem, 11vw, 3.4rem);
  }

  .engagement__hero-text {
    font-size: 0.9rem;
  }

  .engagement__grid {
    grid-template-columns: 1fr;
  }

  .engagement__card {
    min-height: auto;

    border-right: none;

  }

  .engagement__card:last-child {
    border-bottom: none;
  }

  .engagement__floating {
    left: 0.7rem;
    bottom: 0.7rem;
  }

  .engagement__floating-label {
    left: 3.2rem;
    bottom: 1.28rem;
  }
}
</style>