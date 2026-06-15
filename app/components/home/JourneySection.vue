<script setup lang="ts">
const journeySteps = [
  {
    title: 'Briefing',
    description: 'Your product vision is mapped to clear technical requirements.',
    arcStyle: 'dashed'
  },
  {
    title: 'Prototyping',
    description: 'A functional proof-of-concept is built for early validation.',
    arcStyle: 'dashed'
  },
  {
    title: 'Design',
    description: 'Crafting a user-centric and market-ready product design.',
    arcStyle: 'dashed'
  },
  {
    title: 'Implementation',
    description: 'Developing secure software and compliant hardware.',
    arcStyle: 'solid'
  }
] as const
</script>

<template>
  <section class="journey">
    <div class="journey__inner">
      <div class="journey__panel">
        <p class="journey__lead">
          <strong>Yalantis provides a seamless journey</strong> from concept and prototyping to
          production-ready hardware and scalable software.
        </p>

        <div class="journey__grid">
          <article
            v-for="step in journeySteps"
            :key="step.title"
            class="journey__item"
          >
            <div
              class="journey__arc"
              :class="`journey__arc--${step.arcStyle}`"
              aria-hidden="true"
            />

            <h2 class="journey__title">
              {{ step.title }}
            </h2>

            <p class="journey__description">
              {{ step.description }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* Journey */
.journey {
  padding: 1.1rem var(--px) 2rem;
}
.journey__inner {
  max-width: var(--max);
  margin: 0 auto;
}
.journey__panel {
  position: relative;
  overflow: hidden;
  min-height: clamp(43rem, 52vw, 53rem);
  padding: clamp(3rem, 5.2vw, 5.4rem) clamp(1.5rem, 4vw, 4.4rem) clamp(2.5rem, 4.2vw, 3.3rem);
  border-radius: 2rem;
  background: radial-gradient(circle at top right, rgba(255, 255, 255, 0.1), transparent 24%), linear-gradient(180deg, #103e3c 0%, #103e3c 100%);
  box-shadow: 0 1.5rem 3.75rem rgba(16, 62, 60, 0.2);
}
.journey__lead {
  max-width: min(84rem, 100%);
  margin: 0;
  color: #fff;
  font-size: clamp(2rem, 4.8vw, 4rem);
  font-weight: 300;
  line-height: 1.26;
  letter-spacing: -0.05em;
}
.journey__lead strong {
  font-weight: 600;
}
.journey__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(1.2rem, 2vw, 2.2rem);
  margin-top: clamp(3.2rem, 6.5vw, 6rem);
}
.journey__item {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-width: 0;
}
.journey__arc {
  width: min(100%, 28rem);
  aspect-ratio: 1.58 / 1;
  margin-bottom: clamp(1.6rem, 2.5vw, 2.15rem);
  border-top-left-radius: 62.4375rem;
  border-top-right-radius: 62.4375rem;
  border-top: 0.125rem solid rgba(255, 255, 255, 0.8);
  border-left: 0.125rem solid rgba(255, 255, 255, 0.8);
  border-right: 0.125rem solid rgba(255, 255, 255, 0.8);
  border-bottom: 0;
}
.journey__arc--dashed {
  border-top-style: dotted;
  border-left-style: dotted;
  border-right-style: dotted;
  opacity: 0.72;
}
.journey__arc--solid {
  opacity: 1;
}
.journey__title {
  margin: 0;
  color: #fff;
  font-size: clamp(1.9rem, 2.4vw, 2.2rem);
  font-weight: 500;
  letter-spacing: -0.04em;
}
.journey__description {
  max-width: 16rem;
  margin: 0.8rem 0 0;
  color: rgba(255, 255, 255, 0.96);
  font-size: clamp(1rem, 1.25vw, 1.08rem);
  line-height: 1.65;
  letter-spacing: -0.03em;
}
@media (max-width: 79.9375rem) {
  .journey__panel {
    min-height: 0;
  }
  .journey__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 47.9375rem) {
  .journey {
    padding-bottom: 1.25rem;
  }
  .journey__panel {
    min-height: 0;
    padding: 2rem 1.25rem 1.5rem;
    border-radius: 1.6rem;
  }
  .journey__lead {
    font-size: clamp(1.8rem, 8vw, 2.45rem);
    line-height: 1.22;
  }
  .journey__grid {
    grid-template-columns: 1fr;
    gap: 1.75rem;
    margin-top: 2.25rem;
  }
  .journey__arc {
    width: min(100%, 22rem);
    margin-bottom: 1.15rem;
  }
  .journey__title {
    font-size: 1.75rem;
  }
  .journey__description {
    max-width: none;
    margin-top: 0.6rem;
    font-size: 0.98rem;
  }
}
</style>
