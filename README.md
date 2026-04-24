# Conference Program Guide

Интерактивный путеводитель по программе конференции на основе исследования аудитории smalltech/midtech.

## Публикация на GitHub Pages

### Шаг 1. Создайте репозиторий на GitHub

1. Зайдите на [github.com](https://github.com) и нажмите **New repository**
2. Дайте репозиторию имя, например: `conference-program-guide`
3. Сделайте его **Public**
4. Нажмите **Create repository**

### Шаг 2. Загрузите файлы

**Вариант A — через браузер (без Git):**
1. В созданном репозитории нажмите **Add file → Upload files**
2. Перетащите все файлы из папки `smalltech_site/` (не саму папку, а её содержимое)
3. Нажмите **Commit changes**

**Вариант B — через Git:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/ВАШ_ЛОГИН/conference-program-guide.git
git push -u origin main
```

### Шаг 3. Включите GitHub Pages

1. Перейдите в **Settings → Pages**
2. В разделе **Source** выберите ветку `main`, папку `/ (root)`
3. Нажмите **Save**
4. Через 1–2 минуты сайт будет доступен по адресу:
   `https://ВАШ_ЛОГИН.github.io/conference-program-guide/`

### Шаг 4. Подключите свой домен (опционально)

1. В **Settings → Pages → Custom domain** введите ваш поддомен, например `program.yourdomain.com`
2. В DNS вашего домена добавьте **CNAME-запись**:
   - Имя: `program` (или нужный поддомен)
   - Значение: `ВАШ_ЛОГИН.github.io`
3. Нажмите **Save** и подождите распространения DNS (до 24 часов)

> **Важно:** для GitHub Pages используется CNAME-запись, а не A-запись с IP-адресом.

## Структура файлов

```
├── index.html        # Главная страница
├── style.css         # Стили
├── app.js            # Интерактивность и данные треков
├── images/
│   ├── hero.webp     # Изображение в шапке
│   ├── trackmap.webp # Карта треков
│   ├── panels.webp   # Панели
│   └── poster.webp   # Постер программы
└── README.md         # Эта инструкция
```
