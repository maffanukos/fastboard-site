# Инструкция по настройке Git репозитория

## Шаг 1: Перезапустите терминал
После установки Git необходимо перезапустить терминал, чтобы обновился PATH.

## Шаг 2: Проверьте установку Git
```powershell
git --version
```
Должна отобразиться версия Git (например, `git version 2.x.x`)

## Шаг 3: Настройте Git (если еще не настроен)
```powershell
git config --global user.name "Ваше Имя"
git config --global user.email "ваш@email.com"
```

## Шаг 4: Инициализируйте репозиторий
```powershell
# Инициализация
git init

# Добавление всех файлов
git add .

# Первый коммит
git commit -m "Initial commit: FastBoard site"
```

## Шаг 5: Создайте репозиторий на GitHub
1. Перейдите на https://github.com/new
2. Создайте новый репозиторий (например, `fastboard-site`)
3. НЕ добавляйте README, .gitignore или лицензию (они уже есть)

## Шаг 6: Подключите удаленный репозиторий
```powershell
# Замените YOUR_USERNAME и REPO_NAME на ваши данные
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Переименуйте ветку в main (если нужно)
git branch -M main

# Отправьте код на GitHub
git push -u origin main
```

## Шаг 7: Подключите к Vercel
1. Перейдите на https://vercel.com
2. Импортируйте проект из GitHub
3. Vercel автоматически обнаружит настройки из `vercel.json`
4. Убедитесь, что переменная окружения `NEXT_PUBLIC_YANDEX_MAPS_API_KEY` добавлена в настройках проекта

## Альтернатива: Используйте скрипт
После перезапуска терминала выполните:
```powershell
.\init-git.ps1
```
