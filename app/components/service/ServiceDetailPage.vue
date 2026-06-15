<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const selectedService = ref<ServiceName>('End-to-End IoT Services')
const cardsScrollContainer = ref<HTMLElement | null>(null)


// “Медленное” переключение по wheel: ставим состояние перехода и throttling
const isTransitioning = ref(false)
let wheelLockUntil = 0

const currentCardIndex = ref(0)


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

const servicesData: Record<string, Array<{ title: string; description: string }>> = {
  'End-to-End IoT Services': [
    { title: 'IoT software development', description: 'We architect and build the cloud platforms, mobile apps, and data pipelines necessary to connect, manage, and scale your entire IoT solution.' },
    { title: 'IoT product development', description: 'Our team guides your connected device from initial concept and prototyping through to mass production and market launch.' },
    { title: 'IoT app development', description: 'We build mobile and web applications that connect end users to their devices, supporting onboarding, real-time monitoring, alerts, and remote control across iOS, Android, and the browser.' },
    { title: 'IoT consulting', description: 'Our strategic expertise helps you define your IoT roadmap, select the right technologies, and identify high-impact opportunities for your business.' }
  ],
  'Hardware Design & Development': [
    { title: 'PCB design and layout', description: 'We specialize in multi-layer PCB design and layout, focusing on signal integrity, power efficiency, and design for manufacturability (DFM).' },
    { title: 'Industrial design', description: 'Our design partners create aesthetically compelling and ergonomic product enclosures that enhance user interaction and align with your brand identity.' },
    { title: 'Power electronics design', description: 'We engineer sophisticated power supply solutions, from battery management systems (BMS) to high-efficiency converters, ensuring stable power for your device.' },
    { title: 'Mechanical engineering', description: 'We provide complete mechanical design services, including 3D modeling, thermal analysis, and enclosure design to ensure your hardware is robust and durable.' }
  ],
  'Embedded Development': [
    { title: 'Firmware development', description: 'We write clean, efficient, and reliable low-level code that controls your hardware\'s core functions and ensures optimal performance.' },
    { title: 'Edge computing', description: 'We empower your devices with on-board processing capabilities, enabling real-time decision-making, reduced latency, and lower data transmission costs.' },
    { title: 'GUI development', description: 'We design and implement intuitive and responsive graphical user interfaces (GUIs) for embedded screens, prioritizing usability and a modern user experience.' },
    { title: 'Wireless communication protocols', description: 'Our engineers are experts in integrating and optimizing a wide range of wireless protocols, including Wi-Fi, Bluetooth, LoRaWAN, and Cellular (LTE-M/NB-IoT).' }
  ],
  'Rust Development': [
    { title: 'Rust backend services', description: 'Build fast, reliable backend services using Rust with memory safety guarantees.' },
    { title: 'Embedded Rust', description: 'Leverage Rust for embedded systems development with superior performance and safety.' },
    { title: 'CLI tools', description: 'Create powerful command-line applications using modern Rust practices.' },
    { title: 'Performance optimization', description: 'Optimize your Rust applications for maximum speed and efficiency.' }
  ],
  'AI & ML Services': [
    { title: 'Machine learning models', description: 'Design and train custom ML models tailored to your specific business needs.' },
    { title: 'AI integration', description: 'Seamlessly integrate AI capabilities into your existing products and platforms.' },
    { title: 'Data processing pipelines', description: 'Build scalable data processing and analysis pipelines for AI applications.' },
    { title: 'Computer vision', description: 'Develop advanced computer vision solutions for your applications.' }
  ],
  'Data Services': [
    { title: 'Data analytics', description: 'Transform raw data into actionable insights with advanced analytics techniques.' },
    { title: 'Data engineering', description: 'Build robust data pipelines and infrastructure for data processing at scale.' },
    { title: 'Business intelligence', description: 'Create comprehensive BI solutions to drive data-driven decision making.' },
    { title: 'Data visualization', description: 'Design intuitive visualizations that tell compelling data stories.' }
  ],
  
  'Compliance and Security': [
    { title: 'Security audits', description: 'Comprehensive security assessments and vulnerability testing of your systems.' },
    { title: 'Compliance consulting', description: 'Navigate complex compliance requirements including HIPAA, GDPR, and more.' },
    { title: 'Security implementation', description: 'Implement security best practices and frameworks across your organization.' },
    { title: 'Incident response', description: 'Rapid response and remediation for security incidents.' }
  ],
  'IT Services': [
    { title: 'Infrastructure management', description: 'Manage and optimize your IT infrastructure for performance and reliability.' },
    { title: 'Cloud services', description: 'Migrate to and optimize cloud infrastructure for your operations.' },
    { title: 'DevOps solutions', description: 'Implement modern DevOps practices for continuous delivery and deployment.' },
    { title: 'System monitoring', description: 'Real-time monitoring and alerting for your critical systems.' }
  ],
  'Custom Software Development': [
    { title: 'Web application development', description: 'Build modern web applications using cutting-edge technologies.' },
    { title: 'Mobile app development', description: 'Create native and cross-platform mobile applications.' },
    { title: 'API development', description: 'Design and develop robust APIs for your platform ecosystem.' },
    { title: 'Legacy modernization', description: 'Modernize legacy systems while preserving business logic.' }
  ],
  'Cross-Industry Services': [
    { title: 'Healthcare solutions', description: 'Specialized services for the healthcare and medical device industry.' },
    { title: 'Financial services', description: 'Financial technology solutions with enterprise-grade security.' },
    { title: 'Manufacturing solutions', description: 'Industry-specific solutions for manufacturing and industrial applications.' },
    { title: 'Logistics optimization', description: 'Optimize your supply chain and logistics operations.' }
  ]
}

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


const currentSubServices = computed(() => {
  return servicesData[selectedService.value as ServiceName] ?? []
})

const getDisplayTitle = (title: string) => {
  const parts = title.split(' ')
  const lastWord = parts.pop()
  return { main: parts.join(' '), highlight: lastWord }
}

const handleScroll = (e: WheelEvent) => {
  const container = cardsScrollContainer.value
  if (!container) return

  e.preventDefault()

  if (e.deltaY > 0) {
    // Scroll down - next service
    const currentIndex = services.indexOf(selectedService.value)
    if (currentIndex < services.length - 1) {
      selectedService.value = services[currentIndex + 1]
      currentCardIndex.value = 0
    }
  } else {
    // Scroll up - previous service
    const currentIndex = services.indexOf(selectedService.value)
    if (currentIndex > 0) {
      selectedService.value = services[currentIndex - 1]
      currentCardIndex.value = 0
    }
  }
}

onMounted(() => {
  if (cardsScrollContainer.value) {
    cardsScrollContainer.value.addEventListener('wheel', handleScroll, { passive: false })
  }
})

onUnmounted(() => {
  if (cardsScrollContainer.value) {
    cardsScrollContainer.value.removeEventListener('wheel', handleScroll)
  }
})
</script>

<template>
  <section class="service-detail-page">
<div class="service-detail-page__container">
      <a id="End-to-End IoTServices" class="sr-only" aria-hidden="true" />
      <a id="Hardware Design &Development" class="sr-only" aria-hidden="true" />
      <a id="EmbeddedDevelopment" class="sr-only" aria-hidden="true" />
      <aside class="service-detail-page__sidebar">
        <nav class="service-detail-page__nav">
          <ul class="service-detail-page__list">
            <li v-for="service in services" :key="service" class="service-detail-page__item">
              <button 
                :class="[
                  'service-detail-page__link',
                  { 'service-detail-page__link--active': service === selectedService }
                ]"
                :aria-current="service === selectedService ? 'page' : undefined"
                @click="selectedService = service"
              >
                {{ service }}
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      <main class="service-detail-page__main">
        <div class="service-detail-page__header">
          <h1 class="service-detail-page__title">
            <span>{{ getDisplayTitle(selectedService).main }}</span>
            <span class="service-detail-page__accent">{{ getDisplayTitle(selectedService).highlight }}</span>
          </h1>

          <a href="#contact" class="service-detail-page__header-icon" aria-label="Contact for this service">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17L17 7M17 7H9.5M17 7V15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
            </svg>
          </a>
        </div>

        <p class="service-detail-page__description">
          {{ serviceDescriptions[selectedService] }}
        </p>

        <div class="service-detail-page__grid" ref="cardsScrollContainer">
          <article v-for="service in currentSubServices" :key="service.title" class="service-detail-page__card">
            <div class="service-detail-page__card-content">
              <h3 class="service-detail-page__card-title">{{ service.title }}</h3>
              <p class="service-detail-page__card-description">{{ service.description }}</p>
            </div>
            <a href="#contact" class="service-detail-page__card-icon" aria-label="Learn more">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 17L17 7M17 7H9.5M17 7V15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" />
              </svg>
            </a>
          </article>
        </div>
      </main>
    </div>
  </section>
</template>

<style scoped>
.service-detail-page {
  background: #f5f5f5;
  padding: 2rem 2rem;
}

.service-detail-page__container {
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 4rem;
}

.service-detail-page__sidebar {
  display: flex;
  flex-direction: column;
}

.service-detail-page__nav {
  position: sticky;
  top: 2rem;
  height: fit-content;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
}

.service-detail-page__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.service-detail-page__item {
  display: block;
}

.service-detail-page__link {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: 0.9rem;
  color: #999;
  text-align: left;
  transition: color 0.3s ease;
  font-weight: 400;
}

.service-detail-page__link:hover {
  color: #666;
}

.service-detail-page__link--active {
  color: #111;
  font-weight: 600;
}

.service-detail-page__main {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.service-detail-page__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
}

.service-detail-page__title {
  margin: 0;
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 400;
  line-height: 1.2;
  color: #111;
}

.service-detail-page__accent {
  color: #ff6400;
  display: inline;
  font-weight: 400;
}

.service-detail-page__header-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem;
  height: 3.5rem;
  background: #000;
  border-radius: 50%;
  color: #fff;
  text-decoration: none;
  transition: background 0.3s ease;
  flex-shrink: 0;
}

.service-detail-page__header-icon:hover {
  background: #333;
}

.service-detail-page__header-icon svg {
  width: 1.5rem;
  height: 1.5rem;
}

.service-detail-page__description {
  margin: 0;
  font-size: 1.125rem;
  line-height: 1.7;
  color: #555;
  max-width: 90%;
}

.service-detail-page__description strong {
  color: #111;
  font-weight: 600;
}

.service-detail-page__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.service-detail-page__card {
  background: #e8e8e8;
  padding: 2.5rem;
  border-radius: 1.5rem;
  transition: background 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 250px;
}

.service-detail-page__card-content {
  flex: 1;
}

.service-detail-page__card-title {
  margin: 0 0 1.5rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #111;
}

.service-detail-page__card-description {
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  padding-right: 3rem;
}

.service-detail-page__card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: #000;
  border-radius: 50%;
  color: #fff;
  text-decoration: none;
  transition: background 0.3s ease;
  flex-shrink: 0;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
}

.service-detail-page__card-icon:hover {
  background: #333;
}

.service-detail-page__card-icon svg {
  width: 1.2rem;
  height: 1.2rem;
}

.service-detail-page__card:hover {
  background: #ddd;
}

.service-detail-page__card-description {
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
}

@media (max-width: 1024px) {
  .service-detail-page__container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .service-detail-page__nav {
    position: static;
    max-height: none;
  }

  .service-detail-page__list {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.8rem;
  }

  .service-detail-page__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .service-detail-page {
    padding: 1.5rem 1rem;
  }

  .service-detail-page__container {
    gap: 1.5rem;
  }

  .service-detail-page__title {
    font-size: 2rem;
  }

  .service-detail-page__header {
    flex-direction: column;
  }

  .service-detail-page__description {
    max-width: 100%;
  }
}
</style>
