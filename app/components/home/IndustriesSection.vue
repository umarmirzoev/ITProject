<script setup lang="ts">
const industryCards = [
  {
    tag: 'Industrial & Manufacturing',
    title: '',
    description:
      'Robot software and IoT solutions to enable smart factory transformations and industrial automation.',
    tone: 'warm',
    image: '/images/industry-factory.webp',
    imagePosition: 'center center'
  },
  {
    tag: 'Logistics & Supply Chain',
    title: '',
    description: '',
    tone: 'cool',
    image: '/images/industry-logistics.webp',
    imagePosition: 'center center'
  }
] as const
</script>

<template>
  <section class="industries">
    <div class="industries__inner">
      <div class="industries__intro">
        <h1 class="industries__heading">
          Industries we work with
        </h1>

        <p class="industries__text">
          While our main expertise lies within <strong>Healthcare, Logistics &amp; Supply Chain, <br> 
          Automotive and Industrial Manufacturing,</strong> we have proven experience and are open <br>
          to delivering tech solutions into other industries.
        </p>
      </div>

      <div class="industries__gallery">
        <article
          v-for="(card, index) in industryCards"
          :key="card.tag"
          class="industries__card"
          :class="['industries__card--' + card.tone, {
            'industries__card--large': index === 0,
            'industries__card--small': index === 1
          }]"
        >
          <div class="industries__media">
            <span class="industries__tag">{{ card.tag }}</span>

            <img
              v-if="card.image"
              :src="card.image"
              :alt="card.tag"
              class="industries__image"
              :style="{ objectPosition: card.imagePosition }"
            >

            <div
              v-else
              class="industries__placeholder"
            />
          </div>

          <div class="industries__card-footer">
            <p
              v-if="card.description"
              class="industries__caption"
            >
              {{ card.description }}
            </p>

            <button
              type="button"
              class="industries__card-action"
              aria-label="Next industry"
            >
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
            </button>
          </div>
        </article>

        <div class="industries__nav">
          <button
            type="button"
            class="industries__nav-btn"
            aria-label="Previous industries"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M15 6L9 12L15 18"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
              />
            </svg>
          </button>

          <button
            type="button"
            class="industries__nav-btn"
            aria-label="Next industries"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.8"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* Industries */
.industries {
  padding: clamp(2.5rem, 4vw, 4rem) var(--px) 3rem;
  background: #fff;
}
.industries__inner {
  display: grid;
  grid-template-columns: minmax(20rem, 0.9fr) minmax(0, 1.25fr);
  gap: clamp(1.5rem, 3vw, 2.8rem);
  max-width: var(--max);
  margin: 0 auto;
}
.industries__intro {
  display: flex;
  flex-direction: column;

}
.industries__heading {
  margin: 0;
  max-width: 30rem;
  color: #0d1322;
  font-size: clamp(5rem, 6vw, 4.25rem);
  font-weight: 400;
  line-height: 1.02;
  letter-spacing: -0.045em;
  margin-top: 6rem;
}
.industries__text {
  max-width: 80rem;
  margin: 0;
  color: #6c7380;
  font-size: 1.14rem;
  line-height: 1.72;
  letter-spacing: -0.01em;
  margin-top: 20rem;
}
.industries__text strong {
  color: #141b29;
  font-weight: 700;
}
.industries__gallery {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.78fr);
  gap: 1rem;
  align-content: start;
}
.industries__card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 1.15rem;
  background: #eceef3;
}
.industries__card--large {
  min-height: clamp(40rem, 52vw, 52rem);
}
.industries__card--small {
  min-height: clamp(24rem, 34vw, 30rem);
}
.industries__card--warm {
  background: linear-gradient(180deg, rgba(38, 27, 23, 0.18), rgba(17, 12, 10, 0.4)), linear-gradient(135deg, #c48d4a 0%, #705236 40%, #221c1e 100%);
}
.industries__card--cool {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(18, 22, 31, 0.3)), linear-gradient(160deg, #dfe5f4 0%, #97a88d 48%, #56613f 100%);
}
.industries__media {
  position: relative;
  display: flex;
  flex: 1;
  min-height: 0;
  overflow: hidden;
  border-radius: 1.05rem 1.05rem 0 0;
}
.industries__media::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(12, 16, 25, 0) 56%, rgba(12, 16, 25, 0.52) 84%, rgba(12, 16, 25, 0.9) 100%), linear-gradient(90deg, rgba(16, 18, 26, 0.22) 0%, rgba(16, 18, 26, 0.02) 28%, rgba(16, 18, 26, 0) 100%);
  pointer-events: none;
}
.industries__tag {
  position: absolute;
  top: 0.45rem;
  left: 0.45rem;
  z-index: 1;
  display: inline-flex;
  min-height: 2rem;
  align-items: center;
  padding: 0rem 1rem;
  border: 0.0625rem solid rgba(17, 24, 39, 0.08);
  border-radius: 62.4375rem;
  background: rgba(255, 255, 255, 0.92);
  color: #7b7f86;
  font-size: 1rem;
  line-height: 1;
  letter-spacing: -0.015em;
  backdrop-filter: blur(0.5rem);
  box-shadow: 0 0.5rem 1.25rem rgba(15, 23, 42, 0.08);
}
.industries__placeholder {
  display: block;
  flex: 1;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.18), transparent 30%), linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(0, 0, 0, 0.08));
}
.industries__image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
}
.industries__card-footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1rem;
  margin-top: -2.8rem;
  padding: 0 0.5rem 0.45rem;
  position: relative;
  z-index: 1;
}
.industries__caption {
  max-width: 12rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.56rem;
  line-height: 1.4;
  letter-spacing: -0.01em;
}
.industries__card-action,
.industries__nav-btn {
  display: inline-flex;
  width: 1.7rem;
  height: 1.7rem;
  align-items: center;
  justify-content: center;
  border: 0.0625rem solid rgba(17, 24, 39, 0.18);
  border-radius: 62.4375rem;
  background: rgba(255, 255, 255, 0.98);
  color: #3d4654;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
}
.industries__card-action svg,
.industries__nav-btn svg {
  width: 0.8rem;
  height: 0.8rem;
}
.industries__card-action:hover,
.industries__nav-btn:hover {
  transform: translateY(-0.0625rem);
  background: #fff;
}
.industries__card-action {
  flex-shrink: 0;
}
.industries__nav {
  display: flex;
  grid-column: 2;
  justify-content: flex-end;
  gap: 0.22rem;
  padding-top: 1rem;
  align-self: start;
}
.industries__nav-btn {
  width: 1.95rem;
  height: 1.95rem;
  border-color: #cfd4dc;
  background: #fff;
}
@media (max-width: 63.9375rem) {
  .industries__inner {
    grid-template-columns: 1fr;
  }
  .industries__intro {
    gap: 2rem;
  }
  .industries__text {
    max-width: 36rem;
    margin-left: 0;
  }
  .industries__heading {
    margin-left: 0;
  }
}
@media (max-width: 47.9375rem) {
  .industries {
    padding-bottom: 2rem;
  }
  .industries__heading {
    max-width: none;
    font-size: clamp(2.7rem, 11vw, 3.35rem);
  }
  .industries__text {
    max-width: 18rem;
    font-size: 0.7rem;
    line-height: 1.66;
  }
  .industries__gallery {
    grid-template-columns: 1fr;
  }
  .industries__card {
    min-height: 23rem;
  }
  .industries__nav {
    grid-column: auto;
  }
}
</style>
