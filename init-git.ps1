# Скрипт для инициализации Git репозитория
# Запустите этот скрипт после того, как Git будет доступен

Write-Host "Инициализация Git репозитория..." -ForegroundColor Green

# Проверка наличия Git
try {
    $gitVersion = git --version
    Write-Host "Git найден: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "ОШИБКА: Git не найден. Пожалуйста, перезапустите терминал после установки Git." -ForegroundColor Red
    exit 1
}

# Инициализация репозитория
Write-Host "`nИнициализация репозитория..." -ForegroundColor Yellow
git init

# Проверка статуса
Write-Host "`nПроверка статуса..." -ForegroundColor Yellow
git status

# Добавление всех файлов
Write-Host "`nДобавление файлов..." -ForegroundColor Yellow
git add .

# Создание первого коммита
Write-Host "`nСоздание первого коммита..." -ForegroundColor Yellow
git commit -m "Initial commit: FastBoard site"

Write-Host "`n✅ Репозиторий успешно инициализирован!" -ForegroundColor Green
Write-Host "`nСледующие шаги:" -ForegroundColor Cyan
Write-Host "1. Создайте репозиторий на GitHub/GitLab" -ForegroundColor White
Write-Host "2. Выполните: git remote add origin <URL_вашего_репозитория>" -ForegroundColor White
Write-Host "3. Выполните: git push -u origin main" -ForegroundColor White
