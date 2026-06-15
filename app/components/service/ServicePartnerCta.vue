<template>
  <aside class="service-fullscreen-cta" aria-label="Partnership call to action">
    <div class="service-fullscreen-cta__inner service-fullscreen-cta__inner--centered">
      <div class="service-fullscreen-cta__copy">
        <h3 class="service-fullscreen-cta__title">
          Software development and IoT vendor for long-term cooperation.
        </h3>
        <p class="service-fullscreen-cta__text">
          Not just problem-solving and tech expertise, we strive to become your business partner.
        </p>
      </div>
      <a href="#contact" class="service-fullscreen-cta__button">Contact Us Now</a>
      <p class="service-fullscreen-cta__quote">
        "IT evolves rapidly. We help you to be ahead from the first day of our cooperation."
      </p>
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
  padding: clamp(2rem, 5vw, 4rem);
  border-radius: 2.5rem;
  background: #103e3c;
  color: #fff;
}

.service-fullscreen-cta__inner--centered {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min(56rem, 92vw);
  text-align: center;
}

.service-fullscreen-cta__title {
  margin: 0;
  font-size: clamp(2.1rem, 5vw, 3.5rem);
  font-weight: 400;
  line-height: 1.15;
  letter-spacing: -0.035em;
}

.service-fullscreen-cta__text {
  margin: 1.5rem auto 0;
  max-width: 40rem;
  font-size: clamp(1.05rem, 1.6vw, 1.35rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.92);
}

.service-fullscreen-cta__button {
  display: inline-flex;
  min-height: 3.5rem;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
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
  margin: 1.75rem auto 0;
  max-width: 34rem;
  font-size: clamp(0.95rem, 1.2vw, 1.05rem);
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.88);
  text-align: center;
}

@media (max-width: 1024px) {
  .service-fullscreen-cta {
    width: 98%;
    max-width: 98%;
    min-height: calc(100dvh - 2vh);
    padding: 2rem 1.25rem;
    border-radius: 1.75rem;
  }
}
</style>
