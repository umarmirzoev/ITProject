<script setup lang="ts">
const faqs = [
  {
    question: 'What technologies and platforms do you work with?'
  },
  {
    question: 'Can you help with product updates and feature enhancements after launch?'
  },
  {
    question: 'Can you work with companies from different time zones?'
  },
  {
    question: 'Do you provide a free consultation?'
  },
  {
    question: 'Can I hire dedicated developers or a team from Yalantis?'
  },
  {
    question: 'What standards, laws, and regulations do you comply with?'
  }
] as const
</script>

<template>
  <section class="faq">
    <div class="faq__inner">
      <div class="faq__panel">
        <div class="faq__left">
          <h2 class="faq__heading">
            FAQ
          </h2>
        </div>

        <div class="faq__right">
          <article
            v-for="faq in faqs"
            :key="faq.question"
            class="faq__item"
          >
            <div class="faq__button">
              <span class="faq__question">{{ faq.question }}</span>
              <span class="faq__plus">+</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* FAQ */
.faq {
  padding: 0 var(--px) 3rem;
  background: #fff;
}
.faq__inner {
  max-width: var(--max);
  margin: 0 auto;
}
.faq__panel {
  display: grid;
  grid-template-columns: minmax(16rem, 0.95fr) minmax(0, 1fr);
  gap: 0.18rem;
}
.faq__left, .faq__item {
  background: #000;
  border-radius: 0.42rem;
}
.faq__left {
  min-height: 32rem;
  padding: 2.9rem 1.6rem 1.8rem 1.25rem;
  animation: faq-rise 0.75s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.faq__heading {
  margin: 0;
  color: #fff;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: clamp(2.8rem, 4.7vw, 3.95rem);
  font-weight: 300;
  line-height: 0.95;
  letter-spacing: -0.06em;
  transform: translateX(4.2rem);
  animation: faq-title-drift 1s cubic-bezier(0.22, 1, 0.36, 1) 0.08s both;
}
.faq__right {
  display: grid;
  gap: 0.18rem;
}
.faq__item {
  overflow: hidden;
  animation: faq-rise 0.75s cubic-bezier(0.22, 1, 0.36, 1) both;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
}
.faq__item:nth-child(1) {
  animation-delay: 0.03s;
}
.faq__item:nth-child(2) {
  animation-delay: 0.07s;
}
.faq__item:nth-child(3) {
  animation-delay: 0.11s;
}
.faq__item:nth-child(4) {
  animation-delay: 0.15s;
}
.faq__item:nth-child(5) {
  animation-delay: 0.19s;
}
.faq__item:nth-child(6) {
  animation-delay: 0.23s;
}
.faq__button {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.15rem 1rem;
  color: #fff;
  text-align: left;
}
.faq__item:hover {
  transform: translateX(-0.25rem);
  box-shadow: 0 0.75rem 1.75rem rgba(0, 0, 0, 0.24);
  background: #090909;
}
.faq__question {
  font-size: 0.94rem;
  line-height: 1.35;
  letter-spacing: -0.02em;
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.faq__plus {
  display: inline-flex;
  width: 1.45rem;
  height: 1.45rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 62.4375rem;
  background: #fff;
  color: #000;
  font-size: 1rem;
  line-height: 1;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.faq__item:hover .faq__question {
  transform: translateX(0.25rem);
}
.faq__item:hover .faq__plus {
  transform: rotate(90deg) scale(1.05);
  box-shadow: 0 0.5rem 1.25rem rgba(255, 255, 255, 0.2);
}
@keyframes faq-rise {
  from {
    opacity: 0;
    transform: translateY(1.125rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes faq-title-drift {
  from {
    opacity: 0;
    transform: translate(-0.6rem, 0.8rem);
  }
  to {
    opacity: 1;
    transform: translateX(4.2rem);
  }
}
@media (max-width: 63.9375rem) {
  .faq__panel {
    grid-template-columns: 1fr;
  }
  .faq__left {
    min-height: 10rem;
    padding-top: 2rem;
  }
}
@media (max-width: 47.9375rem) {
  .faq {
    padding-bottom: 2rem;
  }
  .faq__left {
    min-height: 8rem;
    padding: 1.9rem 1.1rem 1.1rem 0.95rem;
  }
  .faq__heading {
    font-size: clamp(2.35rem, 11vw, 3.25rem);
  }
  .faq__button {
    padding: 1rem 0.9rem;
  }
}
</style>
