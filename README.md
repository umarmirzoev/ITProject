# ItGraf Website

## О проекте

Это фронтенд-проект на Nuxt 4 для сайта ItGraf. Основная задача — адаптация компонентов и моделей под читаемую структуру, а также замена всех оранжевых акцентов на новый цвет `#103e3c`.

## Что было сделано

1. Замена цвета:
   - Заменил все ярко-оранжевые цвета и связанные градиенты на `#103e3c`.
   - Включил замену цвета в анимации буквы A в компоненте `DotLetterCanvas`.
   - Обновил боксы и тени, использующие `rgba(255, 102, 0, ...)`.

2. Структура моделей и компонентов:
   - Переименовал компонент `app/components/hero/HeroSection.vue` в `app/components/hero/ui-section-hero.vue`.
   - Переименовал компонент `app/components/cards/HeroServiceCard.vue` в `app/components/cards/ui-card-hero-service.vue`.
   - Переименовал компонент `app/components/hero/DotLetterCanvas.vue` в `app/components/hero/dot-letter-canvas.vue`.
   - Переименовал модель `app/components/hero/models/HeroSection.ts` в `app/components/hero/models/i-card.ts`.

3. Интерфейсы и типы:
   - В `app/components/hero/models/i-card.ts` интерфейс переименован в `ICard`.
   - В `app/components/hero/ui-section-hero.vue` импортирован интерфейс `ICard`.
   - Удалён локальный `type HeroCard` из `ui-section-hero.vue`.
   - Тип `cards` теперь задан как `ICard[]`.

4. Обновление импортов:
   - `ui-section-hero.vue` теперь импортирует `~/components/cards/ui-card-hero-service.vue`.
   - `ui-section-hero.vue` и `app/components/home/SpotlightSection.vue` импортируют `~/components/hero/dot-letter-canvas.vue`.

5. Проверка:
   - Проверил изменённые файлы на синтаксические ошибки.

## Файлы, затронутые правками

- `app/components/hero/ui-section-hero.vue`
- `app/components/hero/models/i-card.ts`
- `app/components/cards/ui-card-hero-service.vue`
- `app/components/hero/dot-letter-canvas.vue`
- `app/components/header/StickyHeader.vue`
- `app/components/home/HeaderSection.vue`
- `app/components/home/ContactSection.vue`
- `app/components/home/HomePartnerSection.vue`
- `app/components/home/JourneySection.vue`
- `app/components/home/ReferralBannerSection.vue`
- `app/components/home/SpotlightSection.vue`

## Как запускать

```bash
npm install
npm run dev
```

## Примечание

README обновлён под текущие изменения и содержит описание конкретных исправлений, выполненных по заданию.
