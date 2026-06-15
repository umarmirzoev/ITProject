<template>
  <section class="culture">
    <div class="culture__inner">
      <div class="culture__panel">
        <div class="culture__hero">
          <h2 class="culture__heading">
            We nurture a culture of meaningful partnership in<br>
            a market that got used to short-term collabs and
            <br>
            untapped potential.
          </h2>

          <div class="culture__actions">
            <a
              href="#"
              class="culture__cta"
            >
              Contact us
            </a>

            <span class="culture__avatar" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* Culture */
.culture {
  padding: 0 var(--px) 3rem;
  background: #fff;
}
.culture__inner {
  max-width: var(--max);
  margin: 0 auto;
}
.culture__panel {
  overflow: hidden;
  border: 0.0625rem solid #d9dde5;
  border-radius: 0.45rem;
  background: linear-gradient(180deg, #fbfbfd 0%, #f3f4f8 100%);
  box-shadow: 0 0.375rem 1rem rgba(15, 23, 42, 0.03);
}
.culture__hero {
  position: relative;
  min-height: 17rem;
  padding: 2.25rem 2.35rem 2rem;
}
.culture__heading {
  max-width: 40rem;
  margin: 0;  
  color: #191e2a;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: clamp(1.45rem, 2.2vw, 1.9rem);
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.024em;
}
.culture__actions {
  position: absolute;
  right: 1rem;
  bottom: 0.85rem;
  display: inline-flex;
  align-items: center;
  gap: 0.38rem;
}
.culture__cta {
  display: inline-flex;
  min-height: 2.7rem;
  align-items: center;
  justify-content: center;
  padding: 0.48rem 1.55rem;
  border-radius: 62.4375rem;
  background: #000;
  color: #fff;
  font-size: 0.88rem;
  font-weight: 500;
  letter-spacing: -0.02em;
  text-decoration: none;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
}
.culture__cta:hover {
  transform: translateY(-0.0625rem);
  box-shadow: 0 0.625rem 1.5rem rgba(0, 0, 0, 0.16);
}
.culture__avatar {
  display: inline-flex;
  width: 2.55rem;
  height: 2.55rem;
  align-items: center;
  justify-content: center;
  border-radius: 62.4375rem;
  border: 0.125rem solid #f4f5f8;
  background-image: url('/images/rust-team.webp');
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 0.25rem 0.75rem rgba(15, 23, 42, 0.12);
}
@media (max-width: 63.9375rem) {
  .culture__hero {
    min-height: 15rem;
  }
  .culture__heading {
    max-width: 100%;
  }
  .culture__actions {
    right: 1rem;
    bottom: 1rem;
  }
}
@media (max-width: 47.9375rem) {
  .culture {
    padding-bottom: 2rem;
  }
  .culture__hero {
    min-height: 12.5rem;
    padding: 1.45rem 1.1rem 3.85rem;
  }
  .culture__heading {
    font-size: clamp(1.28rem, 7vw, 1.65rem);
  }
  .culture__actions {
    right: 0.85rem;
    bottom: 0.95rem;
  }
  .culture__cta {
    min-height: 2.35rem;
    padding-inline: 1.15rem;
    font-size: 0.8rem;
  }
  .culture__avatar {
    width: 2.25rem;
    height: 2.25rem;
  }
}
</style>
