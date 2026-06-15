<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'

const services = [
  'End-to-End IoT Services',
  'Hardware Design & Development',
  'Embedded Development',
  'Rust Development',
  'AI & ML Services',
  'Data Services',
  'Compliance and Security',
  'IT Services',
  'Custom Software Development',
  'Cross-Industry Services'
] as const

type ServiceName = (typeof services)[number]

const props = withDefaults(
  defineProps<{ initialService?: ServiceName }>(),
  { initialService: 'End-to-End IoT Services' }
)

const emit = defineEmits<{ (e: 'change', service: ServiceName): void }>()

const serviceDescriptions: Record<ServiceName, string> = {
  'End-to-End IoT Services': 'We provide truly comprehensive, ready-to-scale IoT solutions tailored for your business. Our expertise covers the full spectrum, from designing custom hardware and specialized firmware to building intuitive cloud platforms and responsive mobile applications, ensuring a unified and powerful system.',
  'Hardware Design & Development': 'We translate your vision into reality through meticulous engineering. Our team manages the full-cycle hardware development process, handling everything from initial schematics and complex PCB design to the delivery of polished, production-ready prototypes optimized for manufacturing.',
  'Embedded Development': 'Robust firmware forms the heart of every smart device. Our specialization lies in engineering exceptionally stable and secure embedded systems, meticulously designed for reliability and performance, giving you a foundation you can implicitly trust.',
  'Rust Development': 'Harness the power of Rust for systems programming. We specialize in building high-performance, memory-safe applications that deliver exceptional speed and reliability without sacrificing security.',
  'AI & ML Services': 'Transform raw data into intelligent insights. Our team designs and deploys machine learning solutions that drive business value, from model development through production deployment.',
  'Data Services': 'Unlock the power of your data. We build robust data infrastructure, implement advanced analytics, and deliver actionable insights that drive strategic decisions.',
  'Compliance and Security': 'Protect your assets with enterprise-grade security. We implement comprehensive security frameworks and ensure compliance with industry standards and regulations.',
  'IT Services': 'Streamline your operations with expert IT services. From infrastructure management to DevOps, we optimize your technology stack for maximum efficiency and reliability.',
  'Custom Software Development': 'Build applications that matter. Our team develops scalable, maintainable software solutions across web, mobile, and desktop platforms.',
  'Cross-Industry Services': 'Industry expertise meets technical excellence. We deliver specialized solutions tailored to the unique challenges of healthcare, fintech, manufacturing, and more.'
}

const servicesData: Record<string, Array<{ title: string; description: string; fullWidth?: boolean }>> = {
  'End-to-End IoT Services': [
    { title: 'IoT software development', description: 'We architect and build the cloud platforms, mobile apps, and data pipelines necessary to connect, manage, and scale your entire IoT solution.' },
    { title: 'IoT product development', description: 'Our team guides your connected device from initial concept and prototyping through to mass production and market launch.' },
    { title: 'IoT app development', description: 'We build mobile and web applications that connect end users to their devices, supporting onboarding, real-time monitoring, alerts, and remote control across iOS, Android, and the browser.' },
    { title: 'IoT consulting', description: 'Our strategic expertise helps you define your IoT roadmap, select the right technologies, and identify high-impact opportunities for your business.' },
    { title: 'IoT compliance', description: 'ItGraf handles documentation and certification readiness of your IoT product from HIPAA and GDPR to FCC and IEC 62443.' },
    { title: 'IoT security', description: 'We protect your connected devices and platforms with secure boot, end-to-end encryption, and continuous vulnerability assessment built into the product from day one.' },
    { title: 'IoT data analytics', description: 'Our experts turn raw telemetry from your connected devices into actionable insight, using purpose-built analytics pipelines and visualization layers that highlight what matters.' },
    { title: 'IoT integration', description: 'We connect your IoT solution to your existing enterprise systems, third-party platforms, and cloud services, so data flows cleanly across your business.' },
    { title: 'IoT team extension', description: 'Our experienced IoT engineers extend your in-house capacity, integrating into your workflows on dedicated, long-term assignments.', fullWidth: true }
  ],
  'Hardware Design & Development': [
    { title: 'PCB design and layout', description: 'We specialize in multi-layer PCB design and layout, focusing on signal integrity, power efficiency, and design for manufacturability (DFM).' },
    { title: 'Industrial design', description: 'Our design partners create aesthetically compelling and ergonomic product enclosures that enhance user interaction and align with your brand identity.' },
    { title: 'Power electronics design', description: 'We engineer sophisticated power supply solutions, from battery management systems (BMS) to high-efficiency converters, ensuring stable power for your device.' },
    { title: 'Mechanical engineering', description: 'We provide complete mechanical design services, including 3D modeling, thermal analysis, and enclosure design to ensure your hardware is robust and durable.' },
    { title: 'FPGA design', description: 'Accelerate complex computations at the hardware level with our custom FPGA design and VHDL/Verilog programming services.', fullWidth: true }
  ],
  'Embedded Development': [
    { title: 'Firmware development', description: 'We write clean, efficient, and reliable low-level code that controls your hardware\'s core functions and ensures optimal performance.' },
    { title: 'Edge computing', description: 'We empower your devices with on-board processing capabilities, enabling real-time decision-making, reduced latency, and lower data transmission costs.' },
    { title: 'GUI development', description: 'We design and implement intuitive and responsive graphical user interfaces (GUIs) for embedded screens, prioritizing usability and a modern user experience.' },
    { title: 'Wireless communication protocols', description: 'Our engineers are experts in integrating and optimizing a wide range of wireless protocols, including Wi-Fi, Bluetooth, LoRaWAN, and Cellular (LTE-M/NB-IoT).', fullWidth: true }
  ],
  'Rust Development': [
    { title: 'Rust consulting', description: 'Our experts provide strategic advice, team training, and code reviews to help you successfully integrate Rust into your existing projects and workflows.' },
    { title: 'Rust for embedded systems', description: 'Rust\'s safety guarantees and performance let us build highly reliable and secure firmware for resource-constrained embedded devices.' },
    { title: 'Rust for high load systems', description: 'We build fast and concurrent backend systems, microservices, and APIs in Rust, designed to handle massive scale and high throughput.', fullWidth: true }
  ],
  'AI & ML Services': [
    { title: 'AI consulting', description: 'Our AI consultants assess your business processes, identify high-value AI use cases, and define a practical roadmap for adoption that fits your data, your team, and your goals.' },
    { title: 'Machine Learning development', description: 'We build, train, and deploy custom machine learning models tailored to your data, your domain, and your accuracy targets.' },
    { title: 'Edge AI development & consulting', description: 'We deploy AI models directly on edge devices, enabling real-time inference, reduced latency, and lower cloud costs while keeping sensitive data on-device.', fullWidth: true }
  ],
  'Data Services': [
    { title: 'Data engineering', description: 'We build and manage scalable data pipelines (ETL/ELT) to collect, process, and organize your data, making it accessible and ready for analysis.' },
    { title: 'Data visualization consulting', description: 'Our team designs dashboards and visualization layers that turn complex datasets into clear, decision-ready views for executives, analysts, and operational teams.' },
    { title: 'Data mining services', description: 'We extract patterns, correlations, and trends from your historical data using statistical methods and machine learning to reveal insights you would otherwise miss.' },
    { title: 'Big Data services', description: 'We harness distributed computing to analyze massive datasets, enabling AI modeling and complex insights at scale.' },
    { title: 'Data science consulting', description: 'Our data scientists work with your team to define data strategy, validate hypotheses, and translate business questions into reliable data products.', fullWidth: true }
  ],
  
  'Compliance and Security': [
    { title: 'Cyber security consulting', description: 'Our consultants assess your current security maturity, identify gaps, and create a roadmap to strengthen your defenses across infrastructure, applications, and operations.' },
    { title: 'PCI compliance', description: 'We guide payment-handling organizations through PCI DSS compliance, from initial gap assessment to remediation and certification readiness.' },
    { title: 'Security & encryption for IoT devices', description: 'ItGraf implements end-to-end encryption and secure boot mechanisms to protect your devices and data from unauthorized access and tampering.' },
    { title: 'Security & encryption for IoT devices', description: 'Implement end-to-end encryption and secure boot mechanisms to protect your devices and data from unauthorized access and tampering.' }
  ],
  'IT Services': [
    { title: 'IT consulting', description: 'Our IT consultants work with your leadership to align technology strategy with business goals, covering infrastructure planning, vendor selection, and modernization roadmaps.' },
    { title: 'Azure consulting', description: 'We help you design, deploy, and optimize Microsoft Azure environments, covering migration, cost management, and architecture best practices.' },
    { title: 'AWS consulting', description: 'Our AWS-certified team architects and operates AWS environments tuned to your performance, security, and cost requirements.' },
    { title: 'Cloud consulting services', description: 'ItGraf advises on cloud strategy across providers, helping you choose the right platforms and migration paths for each workload.' },
    { title: 'DevOps consulting', description: 'We streamline your development lifecycle and enhance reliability with CI/CD pipeline implementation, infrastructure-as-code, and expert cloud migration strategies.', fullWidth: true }
  ],
  'Custom Software Development': [
    { title: 'Solution architecture consulting', description: 'Our architects design scalable, secure, and resilient system blueprints that align your technology stack with your long-term business objectives.' },
    { title: 'Mobile application development', description: 'We create high-performance native (iOS/Android) and cross-platform mobile apps that provide seamless control and interaction with your connected products.' },
    { title: 'SaaS development', description: 'Our experts build multi-tenant SaaS applications with subscription billing, role-based access, and the scalability your customer base requires.' },
    { title: 'Enterprise software development', description: 'ItGraf develops custom enterprise software for large organizations, from ERP and CRM extensions to internal platforms that fit your existing business processes.' },
    { title: 'QA & ATQC (Automated Testing & Quality Control)', description: 'We ensure product excellence through comprehensive quality assurance, from manual testing to the development of sophisticated automated test frameworks.' },
    { title: 'UI/UX design', description: 'We craft user-centric and visually engaging interfaces that simplify complex interactions and deliver an exceptional, intuitive user experience.' }
  ],
  'Cross-Industry Services': [
    { title: 'Predictive maintenance', description: 'We build machine learning models that analyze sensor data to forecast equipment failures before they happen, helping you cut downtime and shift from reactive to condition-based maintenance.' },
    { title: 'Digital twin development', description: 'ItGraf creates dynamic virtual replicas of your physical assets and processes, letting you simulate performance, test scenarios, and optimize operations in real time.' },
    { title: 'Computer vision development', description: 'Our team engineers enterprise-grade computer vision solutions covering optical hardware design, embedded sensor fusion, and cloud-native processing.' },
    { title: 'RPA services', description: 'We automate repetitive, rule-based workflows across your business systems with robotic process automation, freeing your teams to focus on higher-value work.' },
    { title: 'Digital transformation', description: 'ItGraf creates a roadmap and implements your digital transformation strategy, automating and optimizing core processes to increase ROI and prepare your business for new market demands.' },
    { title: 'Wearable app development', description: 'We design and develop applications for wearable devices, from fitness trackers to medical monitors, with close attention to battery life, UX, and the constraints of the specific device class.' }
  ]
}

// slug для якорей и URL
const slugify = (name: string) =>
  name.toLowerCase().replace(/&/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

const partnerCtaAfterIndex = services.indexOf('Embedded Development')
const productCtaAfterIndex = services.indexOf('Custom Software Development')

type PageSegment =
  | { type: 'services'; key: string; services: ServiceName[] }
  | { type: 'partner-cta' }
  | { type: 'product-cta' }

const pageSegments = computed<PageSegment[]>(() => [
  {
    type: 'services',
    key: 'before-partner-cta',
    services: services.slice(0, partnerCtaAfterIndex + 1)
  },
  { type: 'partner-cta' },
  {
    type: 'services',
    key: 'before-product-cta',
    services: services.slice(partnerCtaAfterIndex + 1, productCtaAfterIndex + 1)
  },
  { type: 'product-cta' },
  {
    type: 'services',
    key: 'after-product-cta',
    services: services.slice(productCtaAfterIndex + 1)
  }
])

// Активная услуга — та, чья секция сейчас в зоне видимости
const activeService = ref<ServiceName>(props.initialService)

const sectionEls: Record<string, HTMLElement> = {}
const setSectionRef = (name: string) => (el: any) => {
  if (el) sectionEls[name] = el as HTMLElement
}

let observer: IntersectionObserver | null = null

const getDisplayTitle = (title: string) => {
  const parts = title.split(' ')
  const lastWord = parts.pop()
  return { main: parts.join(' '), highlight: lastWord }
}

// Клик по пункту слева — плавный скролл к секции
const scrollToService = (name: ServiceName) => {
  sectionEls[name]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onMounted(() => {
  // Подсветка активной услуги по тому, что в центре экрана
  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) {
        const name = (visible.target as HTMLElement).dataset.service as ServiceName
        if (name && name !== activeService.value) {
          activeService.value = name
          emit('change', name)
        }
      }
    },
    { rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5, 1] }
  )
  Object.values(sectionEls).forEach((el) => observer?.observe(el))

  // Если открыли с конкретной услугой в URL — проскроллим к ней
  if (props.initialService && props.initialService !== services[0]) {
    nextTick(() => scrollToService(props.initialService))
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <section class="service-detail-page">
    <template v-for="segment in pageSegments" :key="segment.type === 'services' ? segment.key : segment.type">
      <div v-if="segment.type === 'services'" class="service-detail-page__container">
        <aside class="service-detail-page__sidebar">
          <nav class="service-detail-page__nav">
            <ul class="service-detail-page__list">
              <li v-for="service in services" :key="service" class="service-detail-page__item">
                <button
                  :class="[
                    'service-detail-page__link',
                    { 'service-detail-page__link--active': service === activeService }
                  ]"
                  :aria-current="service === activeService ? 'true' : undefined"
                  @click="scrollToService(service)"
                >
                  {{ service }}
                </button>
              </li>
            </ul>
            <ServiceExploreCases />
          </nav>
        </aside>

        <div class="service-detail-page__content">
          <section
            v-for="service in segment.services"
            :key="service"
            :id="slugify(service)"
            :ref="setSectionRef(service)"
            :data-service="service"
            class="service-block"
          >
            <header class="service-block__header">
              <h2 class="service-block__title">
                <span>{{ getDisplayTitle(service).main }}</span>
                <span class="service-block__accent">{{ getDisplayTitle(service).highlight }}</span>
              </h2>
              <a href="#contact" class="service-block__icon" aria-label="Contact for this service">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 17L17 7M17 7H9.5M17 7V15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
                </svg>
              </a>
            </header>

            <p class="service-block__description">
              {{ serviceDescriptions[service] }}
            </p>

            <div class="service-block__grid">
              <article
                v-for="(sub, subIndex) in servicesData[service]"
                :key="`${sub.title}-${subIndex}`"
                :class="['service-card', { 'service-card--full': sub.fullWidth }]"
              >
                <div class="service-card__content">
                  <h3 class="service-card__title">{{ sub.title }}</h3>
                  <p class="service-card__description">{{ sub.description }}</p>
                </div>
                <a href="#contact" class="service-card__icon" aria-label="Learn more">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M7 17L17 7M17 7H9.5M17 7V15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
                  </svg>
                </a>
              </article>
            </div>
          </section>
        </div>
      </div>

      <ServicePartnerCta v-else-if="segment.type === 'partner-cta'" />
      <ServiceProductPartnerCta v-else-if="segment.type === 'product-cta'" />
    </template>
  </section>
</template>

<style scoped>
.service-detail-page {
  background: #f5f5f5;
}

.service-detail-page__container {
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 4rem;
  align-items: start;
  padding: 2rem;
}

/* Сайдбар «прилипает», пока листаются услуги справа */
.service-detail-page__sidebar {
  position: sticky;
  top: 2rem;
  height: fit-content;
}

.service-detail-page__nav {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.service-detail-page__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.service-detail-page__link {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 0.95rem;
  color: #b0b0b0;
  text-align: left;
  font-weight: 400;
  transition: color 0.3s ease, transform 0.3s ease;
}

.service-detail-page__link:hover {
  color: #666;
}

.service-detail-page__link--active {
  color: #111;
  font-weight: 600;
  transform: translateX(0.5rem);
}

/* Правая лента секций */
.service-detail-page__content {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.service-block {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  scroll-margin-top: 2rem;
}

.service-block__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
}

.service-block__title {
  margin: 0;
  font-size: clamp(2rem, 4.5vw, 3rem);
  font-weight: 400;
  line-height: 1.2;
  color: #111;
}

.service-block__accent {
  color: #103e3c;
  display: inline;
}

.service-block__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  background: #000;
  border-radius: 50%;
  color: #fff;
  text-decoration: none;
  flex-shrink: 0;
  transition: background 0.3s ease;
}

.service-block__icon:hover {
  background: #333;
}

.service-block__icon svg {
  width: 1.5rem;
  height: 1.5rem;
}

.service-block__description {
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.7;
  color: #555;
  max-width: 90%;
}

.service-block__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.service-card {
  background: #e8e8e8;
  padding: 2.5rem;
  border-radius: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 230px;
  transition: background 0.3s ease, transform 0.3s ease;
}

.service-card:hover {
  background: #ddd;
  transform: translateY(-4px);
}

.service-card--full {
  grid-column: 1 / -1;
  min-height: 200px;
}

.service-card__content {
  flex: 1;
}

.service-card__title {
  margin: 0 0 1.25rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #111;
}

.service-card__description {
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  padding-right: 3rem;
}

.service-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: #000;
  border-radius: 50%;
  color: #fff;
  text-decoration: none;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  transition: background 0.3s ease;
}

.service-card__icon:hover {
  background: #333;
}

.service-card__icon svg {
  width: 1.2rem;
  height: 1.2rem;
}

/* Появление карточек при въезде в экран (fade + slide) */
@keyframes card-reveal {
  from {
    opacity: 0;
    transform: translateY(2.5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    .service-card {
      animation: card-reveal linear both;
      animation-timeline: view();
      animation-range: entry 0% entry 40%;
    }
  }
}

@media (max-width: 1024px) {
  .service-detail-page__container {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1.5rem;
  }

  .service-detail-page__sidebar {
    position: static;
  }

  .service-detail-page__list {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .service-block__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .service-detail-page__container {
    padding: 1.5rem 1rem;
  }

  .service-block__header {
    flex-direction: column;
  }

  .service-block__title {
    font-size: 2rem;
  }

  .service-block__description {
    max-width: 100%;
  }
}
</style>
