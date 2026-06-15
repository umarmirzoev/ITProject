type TweenVars = Record<string, number | string | undefined> & {
  duration?: number
  ease?: string
  delay?: number
  stagger?: number
}

type TimelineLike = {
  from: (target: TweenTarget, vars: TweenVars, position?: string | number) => TimelineLike
  fromTo: (
    target: TweenTarget,
    fromVars: TweenVars,
    toVars: TweenVars,
    position?: string | number
  ) => TimelineLike
  to: (target: TweenTarget, vars: TweenVars, position?: string | number) => TimelineLike
  kill: () => void
}

type TweenTarget =
  | Element
  | object
  | NodeListOf<Element>
  | Element[]
  | object[]
  | null
  | undefined

const activeAnimations = new WeakMap<object, Animation[]>()
const objectTweens = new WeakMap<object, number[]>()
const elementState = new WeakMap<object, { x: number, y: number, scale: number, opacity?: number }>()

const toArray = (target: TweenTarget) => {
  if (!target) {
    return []
  }

  if (Array.isArray(target)) {
    return target
  }

  if (typeof NodeList !== 'undefined' && target instanceof NodeList) {
    return Array.from(target)
  }

  return [target]
}

const getMs = (value?: number) => (value ?? 0) * 1000

const parsePosition = (position: string | number | undefined, cursor: number) => {
  if (typeof position === 'number') {
    return position * 1000
  }

  if (typeof position === 'string' && position.startsWith('-=')) {
    return cursor - Number.parseFloat(position.slice(2)) * 1000
  }

  return cursor
}

const rememberAnimation = (target: object, animation: Animation) => {
  const current = activeAnimations.get(target) ?? []
  current.push(animation)
  activeAnimations.set(target, current)
}

const clearAnimations = (target: object) => {
  const animations = activeAnimations.get(target) ?? []
  animations.forEach((animation) => animation.cancel())
  activeAnimations.delete(target)

  const frames = objectTweens.get(target) ?? []
  frames.forEach((frame) => cancelAnimationFrame(frame))
  objectTweens.delete(target)
}

const animateObject = (target: Record<string, number>, vars: TweenVars) => {
  clearAnimations(target)

  const duration = getMs(vars.duration)
  const delay = getMs(vars.delay)
  const keys = Object.keys(vars).filter(
    (key) => !['duration', 'ease', 'delay', 'stagger'].includes(key) && typeof vars[key] === 'number'
  )
  const from = Object.fromEntries(keys.map((key) => [key, target[key] ?? 0])) as Record<string, number>
  const to = Object.fromEntries(keys.map((key) => [key, Number(vars[key])])) as Record<string, number>
  const frameIds: number[] = []
  let startTime = 0

  const step = (time: number) => {
    if (!startTime) {
      startTime = time + delay
    }

    if (time < startTime) {
      const frame = requestAnimationFrame(step)
      frameIds.push(frame)
      objectTweens.set(target, frameIds)
      return
    }

    const progress = duration === 0 ? 1 : Math.min(1, (time - startTime) / duration)
    const eased = 1 - Math.pow(1 - progress, 3)

    keys.forEach((key) => {
      target[key] = from[key] + (to[key] - from[key]) * eased
    })

    if (progress < 1) {
      const frame = requestAnimationFrame(step)
      frameIds.push(frame)
      objectTweens.set(target, frameIds)
    }
  }

  const initialFrame = requestAnimationFrame(step)
  frameIds.push(initialFrame)
  objectTweens.set(target, frameIds)
}

const buildTransform = (state: { x: number, y: number, scale: number }) =>
  `translate3d(${state.x}px, ${state.y}px, 0) scale(${state.scale})`

const animateElement = (
  target: Element,
  vars: TweenVars,
  mode: 'to' | 'from',
  delayMs = 0
) => {
  clearAnimations(target)

  const previous = elementState.get(target) ?? { x: 0, y: 0, scale: 1, opacity: 1 }
  const next = {
    x: typeof vars.x === 'number' ? vars.x : previous.x,
    y: typeof vars.y === 'number' ? vars.y : previous.y,
    scale: typeof vars.scale === 'number' ? vars.scale : previous.scale,
    opacity: typeof vars.opacity === 'number' ? vars.opacity : previous.opacity ?? 1,
  }

  const fromState = mode === 'from' ? next : previous
  const toState = mode === 'from' ? { x: 0, y: 0, scale: 1, opacity: 1 } : next
  const filterFrom = mode === 'from' && typeof vars.filter === 'string' ? vars.filter : getComputedStyle(target).filter
  const filterTo = mode === 'from' ? 'blur(0px)' : (typeof vars.filter === 'string' ? vars.filter : getComputedStyle(target).filter)

  const animation = target.animate(
    [
      {
        opacity: `${fromState.opacity}`,
        transform: buildTransform(fromState),
        filter: filterFrom,
      },
      {
        opacity: `${toState.opacity}`,
        transform: buildTransform(toState),
        filter: filterTo,
      },
    ],
    {
      duration: getMs(vars.duration),
      delay: delayMs + getMs(vars.delay),
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fill: 'forwards',
    }
  )

  rememberAnimation(target, animation)
  elementState.set(target, toState)
}

const animateTarget = (
  target: TweenTarget,
  vars: TweenVars,
  mode: 'to' | 'from',
  fromVars?: TweenVars,
  baseDelay = 0
) => {
  const targets = toArray(target)
  const stagger = getMs(vars.stagger)

  targets.forEach((item, index) => {
    const delay = baseDelay + stagger * index

    if (item instanceof Element) {
      if (mode === 'from' && fromVars) {
        animateElement(item, fromVars, 'from', delay)
      }
      else {
        animateElement(item, vars, mode, delay)
      }
    }
    else {
      animateObject(item as Record<string, number>, vars)
    }
  })
}

const to = (target: TweenTarget, vars: TweenVars) => {
  animateTarget(target, vars, 'to')
}

const killTweensOf = (target: TweenTarget) => {
  toArray(target).forEach((item) => clearAnimations(item as object))
}

const timeline = (config?: { defaults?: TweenVars }): TimelineLike => {
  const defaults = config?.defaults ?? {}
  const createdTargets: object[] = []
  let cursor = 0

  const register = (target: TweenTarget) => {
    toArray(target).forEach((item) => createdTargets.push(item as object))
  }

  const api: TimelineLike = {
    from(target, vars, position) {
      const merged = { ...defaults, ...vars }
      const start = parsePosition(position, cursor)
      animateTarget(target, merged, 'from', merged, start)
      register(target)
      cursor = Math.max(cursor, start + getMs(merged.duration) + getMs(merged.stagger) * Math.max(0, toArray(target).length - 1))
      return api
    },
    fromTo(target, fromVars, toVars, position) {
      const merged = { ...defaults, ...toVars }
      const start = parsePosition(position, cursor)
      animateTarget(target, merged, 'from', fromVars, start)
      register(target)
      cursor = Math.max(cursor, start + getMs(merged.duration) + getMs(merged.stagger) * Math.max(0, toArray(target).length - 1))
      return api
    },
    to(target, vars, position) {
      const merged = { ...defaults, ...vars }
      const start = parsePosition(position, cursor)
      animateTarget(target, merged, 'to', undefined, start)
      register(target)
      cursor = Math.max(cursor, start + getMs(merged.duration) + getMs(merged.stagger) * Math.max(0, toArray(target).length - 1))
      return api
    },
    kill() {
      createdTargets.forEach((target) => clearAnimations(target))
    },
  }

  return api
}

const gsap = {
  to,
  killTweensOf,
  timeline,
}

export { killTweensOf, timeline, to }
export default gsap
