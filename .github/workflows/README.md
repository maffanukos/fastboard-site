# GitHub Pages Deployment

Этот workflow автоматически деплоит сайт на GitHub Pages при каждом push в ветку `main`.

## Настройка

1. Перейдите в Settings → Pages вашего репозитория
2. В разделе "Source" выберите "GitHub Actions"
3. Добавьте секрет `NEXT_PUBLIC_YANDEX_MAPS_API_KEY` в Settings → Secrets and variables → Actions

## Переменные окружения

- `NEXT_PUBLIC_YANDEX_MAPS_API_KEY` - ключ API для Yandex Maps (добавьте в Secrets)

## Примечание

Если ваш репозиторий называется не `username.github.io`, раскомментируйте `basePath` в `next.config.ts`:
```typescript
basePath: '/fastboard-site',
```
