import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

type MouseParallaxOptions = {
  easing?: number
  strength?: number
}

export function useMouseParallax(
  target: Ref<HTMLElement | null>,
  options: MouseParallaxOptions = {}
) {
  const easing = options.easing ?? 0.14
  const strength = options.strength ?? 1

  const inside = ref(false)
  const x = ref(0)
  const y = ref(0)
  const normX = ref(0)
  const normY = ref(0)

  let frameId = 0
  let rect: DOMRect | null = null
  let targetNormX = 0
  let targetNormY = 0
  let targetX = 0
  let targetY = 0

  const updateRect = () => {
    rect = target.value?.getBoundingClientRect() ?? null
  }

  const animate = () => {
    x.value += (targetX - x.value) * easing
    y.value += (targetY - y.value) * easing
    normX.value += (targetNormX - normX.value) * easing
    normY.value += (targetNormY - normY.value) * easing
    frameId = window.requestAnimationFrame(animate)
  }

  const handleMove = (event: PointerEvent) => {
    if (!rect) {
      updateRect()
    }

    if (!rect) {
      return
    }

    const localX = event.clientX - rect.left
    const localY = event.clientY - rect.top
    const nextNormX = ((localX / rect.width) * 2 - 1) * strength
    const nextNormY = ((localY / rect.height) * 2 - 1) * strength

    inside.value = true
    targetX = localX
    targetY = localY
    targetNormX = nextNormX
    targetNormY = nextNormY
  }

  const reset = () => {
    inside.value = false
    targetNormX = 0
    targetNormY = 0
    targetX = rect ? rect.width / 2 : 0
    targetY = rect ? rect.height / 2 : 0
  }

  onMounted(() => {
    updateRect()
    reset()

    const element = target.value
    if (!element) {
      return
    }

    element.addEventListener('pointermove', handleMove)
    element.addEventListener('pointerenter', handleMove)
    element.addEventListener('pointerleave', reset)
    window.addEventListener('resize', updateRect)
    window.addEventListener('scroll', updateRect, { passive: true })

    frameId = window.requestAnimationFrame(animate)
  })

  onBeforeUnmount(() => {
    const element = target.value

    if (element) {
      element.removeEventListener('pointermove', handleMove)
      element.removeEventListener('pointerenter', handleMove)
      element.removeEventListener('pointerleave', reset)
    }

    window.removeEventListener('resize', updateRect)
    window.removeEventListener('scroll', updateRect)
    window.cancelAnimationFrame(frameId)
  })

  return {
    inside,
    x,
    y,
    normX,
    normY,
  }
}
