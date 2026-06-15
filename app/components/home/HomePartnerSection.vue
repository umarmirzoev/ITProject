<template>
  <section class="partner">
    <div class="partner__inner">
      <div class="partner__panel">
        <div class="partner__copy">
          <h2 class="partner__title">
            Your full cycle product development engineering partner
          </h2>

          <p class="partner__text">
            Not just problem-solving and tech expertise, we strive to become your business
            partner.
          </p>
        </div>

        <a
          href="#"
          class="partner__cta"
        >
          Contact us
        </a>

        <p class="partner__quote">
          "IT evolves rapidly. We help you to be ahead from the first day of our cooperation."
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* Partner */
.partner {
  padding: 0 var(--px) 2rem;
  background: #fff;
}
.partner__inner {
  max-width: var(--max);
  margin: 0 auto;
}
.partner__panel {
  position: relative;
  display: grid;
  min-height: clamp(21rem, 29vw, 23.5rem);
  padding: clamp(2.7rem, 4.4vw, 3.7rem) clamp(2.3rem, 5vw, 3.9rem) clamp(3.1rem, 4.5vw, 3.9rem);
  border-radius: 2rem;
  background: linear-gradient(180deg, #103e3c 0%, #103e3c 100%);
  overflow: hidden;
}
.partner__copy {
  max-width: none;
}
.partner__title {
  margin: 0;
  color: #fff;
  font-size: clamp(1.78rem, 2.55vw, 2.2rem);
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.035em;
  white-space: nowrap;
}
.partner__text {
  max-width: none;
  margin: 1.2rem 0 0;
  color: rgba(255, 255, 255, 0.92);
  font-size: clamp(1.08rem, 1.2vw, 1.14rem);
  line-height: 1.5;
  letter-spacing: -0.02em;
  white-space: nowrap;
}
.partner__cta {
  position: absolute;
  right: clamp(3rem, 5.3vw, 4.4rem);
  bottom: clamp(3.2rem, 5vw, 4.1rem);
  display: inline-flex;
  min-height: 3rem;
  align-items: center;
  justify-content: center;
  padding: 0.65rem 1.6rem;
  border-radius: 62.4375rem;
  background: #fff;
  color: #111827;
  font-size: 1.02rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.partner__cta:hover {
  transform: translateY(-0.0625rem);
  box-shadow: 0 0.625rem 1.375rem rgba(255, 255, 255, 0.22);
}
.partner__quote {
  position: absolute;
  right: clamp(2.2rem, 4.2vw, 3.15rem);
  bottom: clamp(1.3rem, 1.8vw, 1.55rem);
  margin: 0;
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.94rem;
  line-height: 1.35;
  letter-spacing: -0.02em;
  text-align: right;
  white-space: nowrap;
}
@media (max-width: 63.9375rem) {
  .partner__panel {
    min-height: 0;
    gap: 1.5rem;
    padding-bottom: 4.8rem;
  }
  .partner__quote {
    left: 1.5rem;
    right: 1.5rem;
    bottom: 4.6rem;
    white-space: normal;
    text-align: left;
  }
  .partner__title {
    white-space: normal;
  }
  .partner__text {
    white-space: normal;
  }
}
@media (max-width: 47.9375rem) {
  .partner {
    padding-bottom: 1.4rem;
  }
  .partner__panel {
    padding: 1.5rem 1.1rem 5.8rem;
    border-radius: 1.4rem;
  }
  .partner__title {
    font-size: clamp(1.5rem, 6.8vw, 1.8rem);
    line-height: 1.3;
  }
  .partner__text {
    margin-top: 0.85rem;
    font-size: 0.9rem;
  }
  .partner__cta {
    right: 1.1rem;
    bottom: 1.1rem;
    min-height: 2.85rem;
    padding-inline: 1.2rem;
    font-size: 0.96rem;
  }
  .partner__quote {
    right: 1.1rem;
    left: 1.1rem;
    bottom: 4.35rem;
    font-size: 0.88rem;
    line-height: 1.4;
  }
}
</style>
