<template>
  <section class="referral">
    <div class="referral__inner">
      <a
        href="#"
        class="referral__banner"
      >
        <div class="referral__copy">
          <h2 class="referral__title">
            We are open for partnerships too
          </h2>

          <p class="referral__text">
            Check out our referral program. Find out all benefits.
          </p>
        </div>

        <span class="referral__arrow">
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
    </div>
  </section>
</template>

<style scoped lang="scss">
/* Referral */
.referral {
  padding: 0 var(--px) 3rem;
  background: #fff;
}
.referral__inner {
  max-width: var(--max);
  margin: 0 auto;
}
.referral__banner {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  min-height: 9rem;
  padding: 1.15rem 1rem 1.05rem 1rem;
  border-radius: 1.15rem;
  background: linear-gradient(180deg, #103e3c 0%, #103e3c 100%);
  color: #fff;
  text-decoration: none;
  box-shadow: 0 0.875rem 2.25rem rgba(16, 62, 60, 0.18);
  animation: referral-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.referral__banner:hover {
  transform: translateY(-0.125rem);
  box-shadow: 0 1.125rem 2.625rem rgba(16, 62, 60, 0.24);
}
.referral__copy {
  display: grid;
  gap: 2rem;
}
.referral__title {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: clamp(1.9rem, 3vw, 2.45rem);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.04em;
}
.referral__text {
  margin: 0;
  font-size: 0.72rem;
  line-height: 1.45;
  opacity: 0.96;
}
.referral__arrow {
  display: inline-flex;
  width: 1.95rem;
  height: 1.95rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 62.4375rem;
  background: #fff;
  color: #171c28;
  transition: transform 0.25s ease;
}
.referral__banner:hover .referral__arrow {
  transform: rotate(8deg) scale(1.04);
}
.referral__arrow svg {
  width: 0.88rem;
  height: 0.88rem;
}
@keyframes referral-rise {
  from {
    opacity: 0;
    transform: translateY(1.125rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 47.9375rem) {
  .referral {
    padding-bottom: 2rem;
  }
  .referral__banner {
    min-height: 0;
    padding: 0.85rem;
  }
  .referral__copy {
    gap: 1.4rem;
  }
  .referral__title {
    font-size: clamp(1.55rem, 8vw, 2rem);
  }
}
</style>
