<template>
  <a href="#cases" class="service-explore-cases">
    <span class="service-explore-cases__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M8 8L16 16M16 16H9.5M16 16V9.5"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.8"
        />
      </svg>
    </span>
    <span>Explore our cases</span>
  </a>
</template>

<style scoped>
.service-explore-cases {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  width: fit-content;
  margin-top: 1.25rem;
  color: #111;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

.service-explore-cases:hover {
  color: #103e3c;
}

.service-explore-cases__icon {
  display: inline-flex;
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #000;
  color: #fff;
  transition: background 0.2s ease;
}

.service-explore-cases:hover .service-explore-cases__icon {
  background: #103e3c;
}

.service-explore-cases__icon svg {
  width: 1.15rem;
  height: 1.15rem;
}
</style>
