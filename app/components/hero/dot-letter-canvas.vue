<script setup lang="ts">
import gsap from 'gsap'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps<{
  normX: number
  normY: number
  mouseX: number
  mouseY: number
  inside: boolean
  letter?: 'I' | 'A'
}>()

type Dot = {
  x: number
  y: number
  baseX: number
  baseY: number
  depth: number
  radius: number
}

const canvasRef = ref<HTMLCanvasElement | null>(null)
const opacityState = { value: 0 }

let ctx: CanvasRenderingContext2D | null = null
let dots: Dot[] = []
let animationId = 0
let resizeObserver: ResizeObserver | null = null
let width = 0
let height = 0

const buildDots = () => {
  if (!canvasRef.value) {
    return
  }

  const rect = canvasRef.value.getBoundingClientRect()
  width = rect.width
  height = rect.height

  const dpr = window.devicePixelRatio || 1
  canvasRef.value.width = Math.floor(width * dpr)
  canvasRef.value.height = Math.floor(height * dpr)
  ctx = canvasRef.value.getContext('2d')

  if (!ctx) {
    return
  }

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  dots = []

  const spacing = Math.max(8, Math.min(12, width / 32))

  const pushDot = (x: number, y: number) => {
    dots.push({
      x,
      y,
      baseX: x,
      baseY: y,
      depth: 0.45 + Math.random() * 0.7,
      radius: 1.05 + Math.random() * 0.45,
    })
  }

  if (props.letter === 'A') {
    const topY = height * 0.04
    const bottomY = height * 0.96
    const apexX = width / 2
    const leftBottomX = width * 0.18
    const rightBottomX = width * 0.82
    const crossbarY = height * 0.49
    const crossbarLeft = width * 0.33
    const crossbarRight = width * 0.67
    const legThickness = width * 0.095
    const crossbarThickness = height * 0.06

    const lineDistance = (
      px: number,
      py: number,
      ax: number,
      ay: number,
      bx: number,
      by: number
    ) => {
      const abx = bx - ax
      const aby = by - ay
      const apx = px - ax
      const apy = py - ay
      const abLenSq = abx * abx + aby * aby
      const t = Math.max(0, Math.min(1, (apx * abx + apy * aby) / abLenSq))
      const closestX = ax + abx * t
      const closestY = ay + aby * t
      const dx = px - closestX
      const dy = py - closestY
      return Math.sqrt(dx * dx + dy * dy)
    }

    for (let y = topY; y <= bottomY; y += spacing) {
      for (let x = width * 0.08; x <= width * 0.92; x += spacing) {
        const leftLeg =
          lineDistance(x, y, apexX, topY, leftBottomX, bottomY) <= legThickness
        const rightLeg =
          lineDistance(x, y, apexX, topY, rightBottomX, bottomY) <= legThickness
        const crossbar =
          y >= crossbarY - crossbarThickness / 2 &&
          y <= crossbarY + crossbarThickness / 2 &&
          x >= crossbarLeft &&
          x <= crossbarRight

        if (leftLeg || rightLeg || crossbar) {
          pushDot(x, y)
        }
      }
    }
  }
  else {
    const stemWidth = width * 0.22
    const stemHeight = height * 0.76
    const capWidth = width * 0.5
    const capHeight = height * 0.12
    const centerX = width / 2
    const stemLeft = centerX - stemWidth / 2
    const stemRight = centerX + stemWidth / 2
    const capLeft = centerX - capWidth / 2
    const capRight = centerX + capWidth / 2
    const topCapY = height * 0.05
    const stemTop = height * 0.12
    const stemBottom = stemTop + stemHeight
    const bottomCapY = height * 0.86

    for (let y = topCapY; y <= topCapY + capHeight; y += spacing) {
      for (let x = capLeft; x <= capRight; x += spacing) {
        pushDot(x, y)
      }
    }

    for (let y = stemTop; y <= stemBottom; y += spacing) {
      for (let x = stemLeft; x <= stemRight; x += spacing) {
        pushDot(x, y)
      }
    }

    for (let y = bottomCapY; y <= bottomCapY + capHeight; y += spacing) {
      for (let x = capLeft; x <= capRight; x += spacing) {
        pushDot(x, y)
      }
    }
  }
}

const render = () => {
  if (!ctx) {
    animationId = window.requestAnimationFrame(render)
    return
  }

  ctx.clearRect(0, 0, width, height)

  const repelRadius = Math.min(width, height) * 0.18
  const pointerX = props.mouseX
  const pointerY = props.mouseY

  dots.forEach((dot, index) => {
    const parallaxX = props.normX * 10 * dot.depth
    const parallaxY = props.normY * 12 * dot.depth
    let repelX = 0
    let repelY = 0

    if (props.inside) {
      const dx = dot.baseX - pointerX
      const dy = dot.baseY - pointerY
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < repelRadius && distance > 0.001) {
        const force = (1 - distance / repelRadius) * 18
        repelX = (dx / distance) * force
        repelY = (dy / distance) * force
      }
    }

    const targetX = dot.baseX + parallaxX + repelX
    const targetY = dot.baseY + parallaxY + repelY

    dot.x += (targetX - dot.x) * 0.12
    dot.y += (targetY - dot.y) * 0.12

    ctx.beginPath()
    ctx.fillStyle = `rgba(16, 62, 60, ${0.26 + ((index % 5) * 0.03 + opacityState.value * 0.58)})`
    ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
    ctx.fill()
  })

  animationId = window.requestAnimationFrame(render)
}

onMounted(() => {
  buildDots()
  gsap.to(opacityState, {
    value: 1,
    duration: 1.1,
    ease: 'power2.out',
  })

  if (canvasRef.value) {
    resizeObserver = new ResizeObserver(() => buildDots())
    resizeObserver.observe(canvasRef.value)
  }

  animationId = window.requestAnimationFrame(render)
})

watch(
  () => [props.normX, props.normY],
  () => {
    if (!canvasRef.value) {
      return
    }
  }
)

onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
  }

  window.cancelAnimationFrame(animationId)
  gsap.killTweensOf(opacityState)
})
</script>

<template>
  <canvas
    ref="canvasRef"
    class="h-full w-full"
  />
</template>
