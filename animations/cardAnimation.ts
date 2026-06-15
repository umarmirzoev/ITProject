import gsap from 'gsap'

export function initCardAnimation(cards: HTMLElement[]) {
  const cleanups: Array<() => void> = []

  cards.forEach((card) => {
    const enter = () => {
      gsap.to(card, {
        y: -5,
        scale: 1.018,
        duration: 0.28,
        ease: 'power2.out',
      })
    }

    const leave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    card.addEventListener('mouseenter', enter)
    card.addEventListener('mouseleave', leave)

    cleanups.push(() => {
      card.removeEventListener('mouseenter', enter)
      card.removeEventListener('mouseleave', leave)
      gsap.killTweensOf(card)
    })
  })

  return () => {
    cleanups.forEach((cleanup) => cleanup())
  }
}
