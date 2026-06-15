<script setup lang="ts">
const footerPreviewImage = '/images/rust-team.webp'

const serviceLinks = [
  'End-to-End IoT Services',
  'Embedded Services',
  'Hardware Development',
  'Rust Development',
  'Software Development',
  'Cross-Industry Services',
  'Data Services',
  'AI & ML Services',
  'Security & Compliance',
  'IT Services',
  'Dedicated Development Teams',
]

const industryLinks = [
  'Healthcare',
  'Industrial & Manufacturing',
  'Logistics & Supply Chain',
  'Pharma',
  'Financial',
  'Other Industries',
]

const solutionLinks = [
  'ERP systems',
  'CPQ',
  'HMI systems',
  'UCPaaS',
  'IoT platform',
  'Productive ML Model',
  'Payments System',
  'Authorization Accelerator',
  'DevOps Accelerator',
  'V-Quality',
  'AI-powered virtual assistant',
  'DevOps service accelerator',
  'Customer Wallet',
]

const topLinks = ['Case Studies', 'Company', 'Insights']

const socialLinks = [
  { label: 'LinkedIn', short: 'in' },
  { label: 'Facebook', short: 'f' },
  { label: 'Dribbble', short: 'd' },
  { label: 'Instagram', short: 'ig' },
]

const legalLinks = [
  'Cookies notice',
  'Privacy notice',
  'Quality policy',
  "Yalantis Sustainability Policy",
]
</script>

<template>
  <section class="footer">
    <div class="footer__inner">
      <div class="footer__panel">
        <div class="footer__grid">
          <div class="footer__column footer__column--services">
            <h3 class="footer__title">
              Services
              <span aria-hidden="true">в†—</span>
            </h3>
            <ul class="footer__list">
              <li v-for="item in serviceLinks" :key="item">
                <a href="#" class="footer__link">
                  {{ item }}
                  <span aria-hidden="true">вЊ„</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="footer__column">
            <h3 class="footer__title">
              Industries
              <span aria-hidden="true">в†—</span>
            </h3>
            <ul class="footer__list footer__list--tight">
              <li v-for="item in industryLinks" :key="item">
                <a href="#" class="footer__link">
                  {{ item }}
                  <span aria-hidden="true">вЊ„</span>
                </a>
              </li>
            </ul>

            <div class="footer__partnership">
              <p class="footer__title footer__title--small">Partnership:</p>
              <a href="#" class="footer__link footer__link--plain">
                AWS Advanced Tier Partner
              </a>
            </div>
          </div>

          <div class="footer__column">
            <h3 class="footer__title">
              Solutions
              <span aria-hidden="true">в†—</span>
            </h3>
            <ul class="footer__list footer__list--tight">
              <li v-for="item in solutionLinks" :key="item">
                <a href="#" class="footer__link">
                  {{ item }}
                </a>
              </li>
            </ul>
          </div>

          <div class="footer__aside">
            <div class="footer__aside-top">
              <h3 class="footer__title">
                Clients
                <span aria-hidden="true">в†—</span>
              </h3>
              <ul class="footer__list footer__list--tight footer__list--links">
                <li v-for="item in topLinks" :key="item">
                  <a href="#" class="footer__link">
                    {{ item }}
                  </a>
                </li>
              </ul>
            </div>

            <div class="footer__contacts">
              <a href="mailto:hello@yalantis.com" class="footer__contact">
                hello@yalantis.com
              </a>
              <a href="tel:+12134015311" class="footer__contact">+1 213 4015311</a>
            </div>

            <div class="footer__cta">
              <p class="footer__cta-title">Let's set up a 30-minute call.</p>
              <p class="footer__cta-text">
                No risks, no surprises. Free of charge.
              </p>
            </div>

            <a href="#" class="footer__card" aria-label="Pick a time">
              <img
                :src="footerPreviewImage"
                alt=""
                class="footer__card-image"
              >
              <div class="footer__card-overlay">
                <span>Pick a time</span>
                <span class="footer__card-arrow" aria-hidden="true">в†—</span>
              </div>
            </a>
          </div>
        </div>

        <div class="footer__bottom">
          <div class="footer__socials">
            <span class="footer__label">We are here:</span>
            <a
              v-for="item in socialLinks"
              :key="item.label"
              href="#"
              class="footer__social"
              :aria-label="item.label"
            >
              {{ item.short }}
            </a>
          </div>

          <div class="footer__legal">
            <span>Copyright В© 2025 Yalantis - software engineering and IT consulting company. All rights reserved.</span>
            <a v-for="item in legalLinks" :key="item" href="#" class="footer__legal-link">
              {{ item }}
            </a>
          </div>

          <div class="footer__location">St. One Map</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* Mega Footer */
.footer {
  padding: 0 var(--px) 1.4rem;
  background: #fff;
}
.footer__inner {
  max-width: var(--max);
  margin: 0 auto;
}
.footer__panel {
  overflow: hidden;
  border-radius: 1.1rem;
  border-top: 0.0625rem solid rgba(255, 255, 255, 0.45);
  background: radial-gradient(circle at top right, rgba(255, 129, 32, 0.09), transparent 24%), #030303;
  color: #f8f8f8;
  box-shadow: 0 1.25rem 3rem rgba(0, 0, 0, 0.16);
}
.footer__grid {
  display: grid;
  grid-template-columns: 1.25fr 0.95fr 0.95fr minmax(18rem, 1.3fr);
  gap: 1.8rem;
  min-height: 28rem;
  padding: 1.05rem 1rem 1.15rem;
}
.footer__column, .footer__aside {
  animation: mega-footer-rise 0.75s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.footer__column:nth-child(2) {
  animation-delay: 0.08s;
}
.footer__column:nth-child(3) {
  animation-delay: 0.14s;
}
.footer__column:nth-child(4) {
  animation-delay: 0.18s;
}
.footer__aside {
  animation-delay: 0.22s;
}
.footer__column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.footer__column--services {
  padding-right: 1.1rem;
}
.footer__column--clients {
  padding-right: 0.8rem;
}
.footer__title {
  margin: 0;
  color: #f8f8f8;
  font-size: 0.86rem;
  font-weight: 500;
  line-height: 1.2;
}
.footer__title span {
  color: rgba(255, 255, 255, 0.8);
}
.footer__title--small {
  font-size: 0.88rem;
}
.footer__list {
  display: grid;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
.footer__list--tight {
  gap: 0.42rem;
}
.footer__link {
  display: inline-flex;
  align-items: center;
  gap: 0.28rem;
  color: rgba(255, 255, 255, 0.66);
  font-size: 0.78rem;
  line-height: 1.3;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
}
.footer__link:hover, .footer__contact:hover, .footer__legal-link:hover {
  color: #fff;
  transform: translateX(0.1875rem);
}
.footer__link span {
  opacity: 0.65;
}
.footer__link--plain {
  font-size: 0.8rem;
}
.footer__list--links {
  gap: 0.6rem;
}
.footer__partnership {
  display: grid;
  gap: 0.4rem;
  margin-top: auto;
  padding-top: 1rem;
}
.footer__aside {
  display: grid;
  align-content: start;
  gap: 1rem;
}
.footer__aside-top {
  display: grid;
  gap: 0.75rem;
}
.footer__contacts {
  display: grid;
  gap: 0.38rem;
  padding-top: 0.25rem;
}
.footer__contact {
  width: fit-content;
  color: rgba(255, 255, 255, 0.68);
  font-size: 0.67rem;
  text-decoration: none;
  transition: color 0.2s ease, transform 0.2s ease;
}
.footer__cta {
  display: grid;
  gap: 0.14rem;
}
.footer__cta-title {
  margin: 0;
  color: #fff;
  font-size: 1.28rem;
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.04;
}
.footer__cta-text {
  margin: 0;
  color: rgba(255, 255, 255, 0.63);
  font-size: 0.76rem;
  line-height: 1.35;
}
.footer__card {
  position: relative;
  display: block;
  min-height: 12rem;
  overflow: hidden;
  border-radius: 1rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.02)), linear-gradient(135deg, rgba(48, 80, 108, 0.55), rgba(34, 38, 47, 0.9));
  text-decoration: none;
  box-shadow: inset 0 0 0 0.0625rem rgba(255, 255, 255, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.footer__card:hover {
  transform: translateY(-0.1875rem);
  box-shadow: inset 0 0 0 0.0625rem rgba(255, 255, 255, 0.12), 0 1rem 1.75rem rgba(0, 0, 0, 0.28);
}
.footer__card-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center right;
  transform: scale(1.1);
}
.footer__card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(12, 16, 24, 0.04) 0%, rgba(7, 9, 14, 0.12) 48%, rgba(6, 7, 10, 0.68) 100%), linear-gradient(90deg, rgba(4, 6, 10, 0.08), transparent 40%);
}
.footer__card-overlay {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
  color: #fff;
  font-size: 0.94rem;
  font-weight: 500;
}
.footer__card-arrow {
  display: inline-flex;
  width: 2rem;
  height: 2rem;
  align-items: center;
  justify-content: center;
  border-radius: 62.4375rem;
  background: rgba(255, 255, 255, 0.94);
  color: #171c28;
}
.footer__bottom {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
  padding: 0.55rem 1rem 0.6rem;
  border-top: 0.0625rem solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.02);
}
.footer__socials, .footer__legal {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.footer__socials {
  gap: 0.4rem;
}
.footer__legal {
  justify-content: center;
  gap: 0.7rem;
}
.footer__label, .footer__location, .footer__legal span, .footer__legal-link {
  color: rgba(255, 255, 255, 0.58);
  font-size: 0.48rem;
  line-height: 1.3;
  text-decoration: none;
}
.footer__social {
  display: inline-flex;
  width: 1.2rem;
  height: 1.2rem;
  align-items: center;
  justify-content: center;
  border-radius: 62.4375rem;
  border: 0.0625rem solid rgba(255, 255, 255, 0.22);
  color: #fff;
  font-size: 0.48rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}
.footer__social:hover {
  transform: translateY(-0.0625rem);
  border-color: rgba(255, 255, 255, 0.45);
  background: rgba(255, 255, 255, 0.08);
}
@keyframes mega-footer-rise {
  from {
    opacity: 0;
    transform: translateY(1.125rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media (max-width: 73.75rem) {
  .footer__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .footer__partnership {
    margin-top: 0;
  }
  .footer__bottom {
    grid-template-columns: 1fr;
    justify-items: start;
  }
  .footer__legal {
    justify-content: flex-start;
  }
}
@media (max-width: 47.9375rem) {
  .footer {
    padding-bottom: 1rem;
  }
  .footer__grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    min-height: 0;
    padding: 0.95rem 0.85rem 1rem;
  }
  .footer__meta {
    gap: 0.9rem;
  }
  .footer__meta-link {
    font-size: 1rem;
  }
  .footer__cta-title {
    font-size: 1.05rem;
  }
  .footer__card {
    min-height: 6.5rem;
  }
  .footer__bottom {
    padding: 0.65rem 0.85rem 0.8rem;
  }
}
</style>
