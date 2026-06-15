<script setup lang="ts">
const budget = ref(0)
</script>

<template>
  <section id="contact" class="contact">
    <div class="contact__inner">
      <div class="contact__panel">
        <div class="contact__info">
          <h2 class="contact__heading">
            Let's set up a call
          </h2>

          <p class="contact__intro">
            Leave your info and a few words about the project. We'll review it and reach out to
            book a call.
          </p>

          <div class="contact__details">
            <a
              href="mailto:hello@yalantis.com"
              class="contact__detail-link"
            >
              hello@yalantis.com
            </a>

            <a
              href="tel:+12134019311"
              class="contact__detail-link contact__detail-link--phone"
            >
              + 1 213 4019311
            </a>

            <div class="contact__consultation">
              <span class="contact__consultation-dot">R</span>
              <span>Schedule a free consultation</span>
            </div>
          </div>
        </div>

        <form class="contact__form">
          <div class="contact__bubble">
            Welcome to Yalantis, please fill out the form and we'll get back to you.
            <span class="contact__bubble-avatar">YR</span>
          </div>

          <div class="contact__row">
            <label class="contact__field">
              <span class="sr-only">Full name</span>
              <input
                type="text"
                placeholder="Full name*"
                required
              >
            </label>

            <label class="contact__field">
              <span class="sr-only">Your email</span>
              <input
                type="email"
                placeholder="Your email*"
                required
              >
            </label>
          </div>

          <label class="contact__field contact__field--full">
            <span class="sr-only">Project details</span>
            <input
              type="text"
              placeholder="Tell us more about the project*"
              required
            >
          </label>

          <div class="contact__budget">
            <div class="contact__budget-head">
              <span>Approximate budget</span>
              <strong>{{ budget }} (Not selected)</strong>
            </div>

            <input
              v-model="budget"
              class="contact__range"
              :style="{ '--budget-progress': `${budget}%` }"
              type="range"
              min="0"
              max="100"
            >
          </div>

          <label class="contact__upload">
            <input
              type="file"
              hidden
            >
            <span class="contact__upload-icon">+</span>
            <span>Attach a file.</span>
            <small>Please upload all the assets of the project such as docs, xls, zip, etc.</small>
          </label>

          <label class="contact__check">
            <input type="checkbox">
            <span>I accept your Privacy Policy.</span>
          </label>

          <label class="contact__check">
            <input type="checkbox">
            <span>I agree to receive marketing materials and updates from Yalantis.</span>
          </label>

          <p class="contact__privacy">
            We guarantee privacy. This site is protected by reCAPTCHA and the Privacy Policy.
          </p>

          <button
            type="submit"
            class="contact__submit"
          >
            <span class="contact__submit-pill">Send My Request Now</span>
            <span class="contact__submit-arrow">
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
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* Contact */
.contact {
}
.contact__inner {
  max-width: 92rem;
  margin: 0 auto;
}
.contact__panel {
  display: grid;
  grid-template-columns: minmax(17rem, 0.58fr) minmax(0, 1fr);
  gap: clamp(2.2rem, 4.6vw, 4.2rem);
  align-items: start;
  padding: 2.45rem 2.55rem 2.6rem;
  border-radius: 1.35rem;
}
.contact__info, .contact__form {
  animation: contact-rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.contact__form {
  animation-delay: 0.08s;
}
.contact__heading {
  margin: 0;
  color: #1a1f2b;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: clamp(3rem, 3.7vw, 3.65rem);
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.05em;
}
.contact__intro {
  max-width: 18rem;
  margin: 1rem 0 0;
  color: #9aa0ad;
  font-size: 0.72rem;
  line-height: 1.75;
}
.contact__details {
  display: grid;
  gap: 0.72rem;
  margin-top: 5.8rem;
}
.contact__detail-link {
  color: #1a1f2b;
  font-size: 1rem;
  text-decoration: none;
}
.contact__detail-link--phone {
  font-size: 0.92rem;
}
.contact__consultation {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #6e7482;
  font-size: 0.62rem;
}
.contact__consultation-dot {
  display: inline-flex;
  width: 1.15rem;
  height: 1.15rem;
  align-items: center;
  justify-content: center;
  border-radius: 62.4375rem;
  background: var(--orange);
  color: #fff;
  font-size: 0.52rem;
  font-weight: 700;
}
.contact__form {
  display: grid;
  gap: 0.9rem;
  max-width: 40rem;
  justify-self: center;
  width: 100%;
}
.contact__bubble {
  position: relative;
  max-width: 100%;
  padding: 1.15rem 3.25rem 1.15rem 1.35rem;
  border-radius: 62.4375rem;
  background: linear-gradient(180deg, #ececf3 0%, #e8eaf1 100%);
  color: #474d5a;
  font-size: 0.9rem;
  line-height: 1.45;
  box-shadow: inset 0 0.0625rem 0 rgba(255, 255, 255, 0.7);
}
.contact__bubble-avatar {
  position: absolute;
  top: 50%;
  right: 0.5rem;
  display: inline-flex;
  width: 2.15rem;
  height: 2.15rem;
  align-items: center;
  justify-content: center;
  border-radius: 62.4375rem;
  background: linear-gradient(135deg, #d7b89d 0%, #4a5164 100%);
  color: #fff;
  font-size: 0.62rem;
  font-weight: 700;
  transform: translateY(-50%);
}
.contact__row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.8rem;
}
.contact__field input, .contact__upload {
  width: 100%;
  min-height: 2.85rem;
  border: 0.0625rem solid #cfd3dc;
  border-radius: 62.4375rem;
  background: #fff;
}
.contact__field input {
  padding: 0 1.2rem;
  color: #1a1f2b;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.contact__field input:focus {
  border-color: #aeb5c2;
  box-shadow: 0 0 0 0.1875rem rgba(15, 23, 42, 0.05);
}
.contact__field--full input {
  border-radius: 1rem;
}
.contact__budget {
  display: grid;
  gap: 0.35rem;
  padding: 0.22rem 0.15rem 0;
}
.contact__budget-head {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: #8d93a0;
  font-size: 0.66rem;
}
.contact__budget-head strong {
  color: var(--orange);
  font-weight: 600;
}
.contact__range {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 0.42rem;
  border-radius: 62.4375rem;
  background: linear-gradient(90deg, var(--orange) 0%, var(--orange) var(--budget-progress, 0%), rgba(71, 77, 90, 0.22) var(--budget-progress, 0%), rgba(71, 77, 90, 0.22) 100% );
}
.contact__range::-webkit-slider-runnable-track {
  height: 0.42rem;
  border-radius: 62.4375rem;
  background: transparent;
}
.contact__range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 1.2rem;
  height: 1.2rem;
  margin-top: -0.39rem;
  border: 0;
  border-radius: 62.4375rem;
  background: var(--orange);
  box-shadow: 0 0.25rem 0.75rem rgba(16, 62, 60, 0.28);
}
.contact__range::-moz-range-track {
  height: 0.42rem;
  border: 0;
  border-radius: 62.4375rem;
  background: rgba(71, 77, 90, 0.22);
}
.contact__range::-moz-range-progress {
  height: 0.42rem;
  border-radius: 62.4375rem;
  background: var(--orange);
}
.contact__range::-moz-range-thumb {
  width: 1.2rem;
  height: 1.2rem;
  border: 0;
  border-radius: 62.4375rem;
  background: var(--orange);
  box-shadow: 0 0.25rem 0.75rem rgba(16, 62, 60, 0.28);
}
.contact__upload {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.24rem 1rem;
  color: #6f7582;
  font-size: 0.82rem;
  cursor: pointer;
  transition: border-color 0.2s ease, transform 0.2s ease;
}
.contact__upload:hover {
  border-color: #b9bfcb;
  transform: translateY(-0.0625rem);
}
.contact__upload-icon {
  display: inline-flex;
  width: 1.12rem;
  height: 1.12rem;
  align-items: center;
  justify-content: center;
  border: 0.0625rem solid #c9ced8;
  border-radius: 62.4375rem;
  font-size: 0.78rem;
}
.contact__upload small {
  margin-left: auto;
  color: #a1a7b2;
  font-size: 0.56rem;
}
.contact__check {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #8f95a2;
  font-size: 0.64rem;
}
.contact__privacy {
  margin: 0;
  padding: 0.56rem 0.95rem;
  border-radius: 62.4375rem;
  background: #e8f0ef;
  color: #5a7a77;
  font-size: 0.58rem;
  text-align: center;
}
.contact__submit {
  display: inline-flex;
  align-items: center;
  gap: 0.18rem;
  width: fit-content;
  margin: 0 auto;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}
.contact__submit-pill, .contact__submit-arrow {
  display: inline-flex;
  min-height: 2.7rem;
  align-items: center;
  justify-content: center;
  border-radius: 62.4375rem;
  background: #000;
  color: #fff;
}
.contact__submit-pill {
  min-width: 27.5rem;
  padding: 0 1.35rem;
  font-size: 0.84rem;
  font-weight: 500;
}
.contact__submit-arrow {
  width: 2.7rem;
}
.contact__submit-arrow svg {
  width: 0.94rem;
  height: 0.94rem;
}
@keyframes contact-rise {
  from {
    opacity: 0;
    transform: translateY(1.125rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 63.9375rem) {
  .contact__panel {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
  .contact__details {
    margin-top: 2rem;
  }
}
@media (max-width: 47.9375rem) {
  .contact {
    padding-bottom: 2rem;
  }
  .contact__row {
    grid-template-columns: 1fr;
  }
  .contact__upload {
    flex-wrap: wrap;
  }
  .contact__upload small {
    margin-left: 0;
  }
  .contact__submit-pill {
    min-width: 15.5rem;
  }
}
</style>
