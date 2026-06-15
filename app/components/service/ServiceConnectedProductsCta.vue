<template>
  <aside class="connected-products-cta" aria-label="Connected products call to action">
    <div class="connected-products-cta__panel">
      <div class="connected-products-cta__copy">
        <h3 class="connected-products-cta__title">
          Build connected, intelligent products – all in one place
        </h3>
        <p class="connected-products-cta__text">
          Our cross-functional teams deliver IoT devices, backend systems, AI modules, and user-facing apps as a single integrated solution.
        </p>
      </div>

      <a href="#contact" class="connected-products-cta__button">Contact us</a>

      <p class="connected-products-cta__quote">
        “<strong>IT evolves rapidly.</strong> We help you to be ahead from the first day of our cooperation.”
      </p>
    </div>
  </aside>
</template>

<style scoped>
.connected-products-cta {
  margin-top: 1rem;
  padding: 0 clamp(1rem, 2vw, 2rem) clamp(3rem, 6vw, 5rem);
  background: #fff;
}

.connected-products-cta__panel {
  position: relative;
  width: 98%;
  max-width: 1440px;
  margin: 0 auto;
  min-height: clamp(22rem, 34vw, 28rem);
  padding: clamp(2.8rem, 4.8vw, 4rem) clamp(2.2rem, 4.5vw, 3.8rem) clamp(3.2rem, 5vw, 4.2rem);
  border-radius: 2rem;
  background: #103e3c;
  color: #fff;
  overflow: hidden;
}

.connected-products-cta__copy {
  max-width: min(44rem, 72%);
}

.connected-products-cta__title {
  margin: 0;
  font-size: clamp(1.9rem, 3.2vw, 2.75rem);
  font-weight: 400;
  line-height: 1.18;
  letter-spacing: -0.035em;
}

.connected-products-cta__text {
  margin: 1.15rem 0 0;
  max-width: 34rem;
  font-size: clamp(1rem, 1.35vw, 1.15rem);
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.94);
}

.connected-products-cta__button {
  position: absolute;
  right: clamp(2.2rem, 4.5vw, 3.8rem);
  bottom: clamp(3.4rem, 5.2vw, 4.3rem);
  display: inline-flex;
  min-height: 3rem;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.75rem;
  border-radius: 999px;
  background: #fff;
  color: #111827;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.connected-products-cta__button:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 22px rgba(255, 255, 255, 0.22);
}

.connected-products-cta__quote {
  position: absolute;
  right: clamp(2.2rem, 4.5vw, 3.8rem);
  bottom: clamp(1.2rem, 2vw, 1.55rem);
  margin: 0;
  max-width: 24rem;
  font-size: clamp(0.88rem, 1vw, 0.96rem);
  line-height: 1.35;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.9);
  text-align: right;
}

.connected-products-cta__quote strong {
  font-weight: 600;
  color: #fff;
}

@media (max-width: 900px) {
  .connected-products-cta__panel {
    min-height: 0;
    padding-bottom: 6.5rem;
  }

  .connected-products-cta__copy {
    max-width: 100%;
  }

  .connected-products-cta__button {
    right: 1.5rem;
    bottom: 4.6rem;
  }

  .connected-products-cta__quote {
    left: 1.5rem;
    right: 1.5rem;
    bottom: 1.2rem;
    max-width: none;
    text-align: left;
  }
}

@media (max-width: 640px) {
  .connected-products-cta {
    padding: 0 0.75rem 1.5rem;
  }

  .connected-products-cta__panel {
    padding: 1.6rem 1.25rem 6.25rem;
    border-radius: 1.5rem;
  }

  .connected-products-cta__title {
    font-size: clamp(1.55rem, 7vw, 1.9rem);
  }

  .connected-products-cta__button {
    right: 1.25rem;
    bottom: 4.35rem;
  }

  .connected-products-cta__quote {
    left: 1.25rem;
    right: 1.25rem;
  }
}
</style>
