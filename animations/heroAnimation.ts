import gsap from 'gsap'

export function initHeroAnimation(root: HTMLElement) {
  const lines = root.querySelectorAll<HTMLElement>('[data-hero-line]')
  const body = root.querySelector<HTMLElement>('[data-hero-body]')
  const cards = root.querySelectorAll<HTMLElement>('[data-hero-card]')
  const nav = root.querySelector<HTMLElement>('[data-hero-nav]')

  const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } })

  timeline
    .from(nav, {
      y: -18,
      opacity: 0,
      duration: 0.7,
    })
    .from(
      lines,
      {
        y: 46,
        opacity: 0,
        filter: 'blur(8px)',
        duration: 0.95,
        stagger: 0.09,
      },
      '-=0.3'
    )
    .from(
      body,
      {
        y: 28,
        opacity: 0,
        duration: 0.8,
      },
      '-=0.55'
    )
    .from(
      cards,
      {
        y: 20,
        opacity: 0,
        duration: 0.75,
        stagger: 0.08,
      },
      '-=0.45'
    )

  return () => timeline.kill()
}
