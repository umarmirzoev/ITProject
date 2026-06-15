<template>
  <aside class="service-fullscreen-cta" aria-label="End-to-end product partnership call to action">
    <div class="service-fullscreen-cta__inner service-fullscreen-cta__inner--split">
      <div class="service-fullscreen-cta__copy">
        <h3 class="service-fullscreen-cta__title">
          Build your entire product with one end-to-end partner
        </h3>
        <p class="service-fullscreen-cta__text">
          From hardware design to cloud infrastructure and scalable software — we cover the full product lifecycle.
        </p>
      </div>

      <div class="service-fullscreen-cta__actions">
        <a href="#contact" class="service-fullscreen-cta__button">Contact Us Now</a>
        <p class="service-fullscreen-cta__quote">
          <strong>IT evolves rapidly.</strong>
          We help you to be ahead from the first day of our cooperation.
        </p>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.service-fullscreen-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 98%;
  max-width: 98%;
  margin: 1vh auto;
  min-height: calc(100dvh - 2vh);
  padding: clamp(2.5rem, 5vw, 4.5rem);
  border-radius: 2.5rem;
  background: #103e3c;
  color: #fff;
}

.service-fullscreen-cta__inner--split {
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
  align-items: end;
  gap: clamp(2rem, 4vw, 3.5rem);
  width: min(1200px, 92vw);
}

.service-fullscreen-cta__title {
  margin: 0;
  font-size: clamp(2rem, 4.2vw, 3.2rem);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.035em;
}

.service-fullscreen-cta__text {
  margin: 1.25rem 0 0;
  max-width: 36rem;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.92);
}

.service-fullscreen-cta__actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
}

.service-fullscreen-cta__button {
  display: inline-flex;
  min-height: 3.5rem;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 2.25rem;
  border-radius: 999px;
  background: #fff;
  color: #111827;
  font-size: 1.05rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.service-fullscreen-cta__button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(255, 255, 255, 0.2);
}

.service-fullscreen-cta__quote {
  margin: 0;
  max-width: 22rem;
  font-size: clamp(0.88rem, 1.1vw, 0.98rem);
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.88);
  text-align: right;
}

.service-fullscreen-cta__quote strong {
  font-weight: 600;
  color: #fff;
}

@media (max-width: 1024px) {
  .service-fullscreen-cta {
    width: 98%;
    max-width: 98%;
    min-height: calc(100dvh - 2vh);
    padding: 2rem 1.25rem;
    border-radius: 1.75rem;
  }

  .service-fullscreen-cta__inner--split {
    grid-template-columns: 1fr;
    align-items: start;
  }

  .service-fullscreen-cta__actions {
    align-items: flex-start;
  }

  .service-fullscreen-cta__quote {
    max-width: 100%;
    text-align: left;
  }
}
</style>
