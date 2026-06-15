<template>
  <section class="service-footer-cta">
    <div class="service-footer-cta__container">
      <p class="service-footer-cta__text">
        Yalantis provides a seamless journey from concept and prototyping to production-ready hardware and software.
      </p>
      <div class="service-footer-cta__actions">
        <NuxtLink to="#contact" class="service-footer-cta__button">
          Book a Consultation
        </NuxtLink>
        <NuxtLink to="#contact" class="service-footer-cta__icon" aria-label="Book a consultation">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M7 17L17 7M17 7H9.5M17 7V15.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service-footer-cta {
  margin-top: 2.5rem;
  padding: 4.5rem 3rem;
  border-radius: 2.5rem;
  background: #103e3c;
}
.service-footer-cta__container {
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}
.service-footer-cta__text {
  margin: 0;
  color: #ffffff;
  font-size: 1.125rem;
  line-height: 1.7;
  max-width: 60%;
  text-align: center;
  opacity: 0.95;
}
.service-footer-cta__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}
.service-footer-cta__button,
.service-footer-cta__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: #ffffff;
  color: #111827;
  text-decoration: none;
  box-shadow: 0 1.125rem 3.125rem rgba(17, 24, 39, 0.18);
}
.service-footer-cta__button {
  min-height: 4rem;
  padding: 0 2.5rem;
  font-size: 1rem;
  font-weight: 600;
}
.service-footer-cta__icon {
  width: 4rem;
  height: 4rem;
}
.service-footer-cta__icon svg {
  width: 1.5rem;
  height: 1.5rem;
}
@media (max-width: 64rem) {
  .service-footer-cta__container {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }
  .service-footer-cta__actions {
    justify-content: center;
    width: 100%;
  }
  .service-footer-cta__text {
    text-align: center;
  }
}
</style>
