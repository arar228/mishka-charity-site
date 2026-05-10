# $MISHKA — сайт благотворительного мем-токена в TON

Лендинг токена `$MISHKA` (TON). Каждая транзакция — комиссия в **Weekend Pool**, который сообщество распределяет между приютами для собак и котов: на корм, лекарства и уход.

- **Telegram:** [@mishka_charity](https://t.me/mishka_charity)
- **X (Twitter):** [@mishka_charity](https://x.com/mishka_charity)
- **Контракт (TON):** `EQBuwtx2m-F6_niT6r5UD4xjD0j6__nOohNKlb3U-gKybuZb`
- **Tonviewer:** https://tonviewer.com/EQBuwtx2m-F6_niT6r5UD4xjD0j6__nOohNKlb3U-gKybuZb

---

## Стек

Это статический сайт без билда — три файла плюс ассеты:

```
.
├── index.html       # разметка
├── styles.css       # стили (кремово-золотая палитра)
├── i18n.js          # словари RU/EN + переключатель
├── script.js        # copy CA, lightbox, scroll-reveal, sticky nav
└── assets/
    ├── favicon.svg
    ├── mishka.jpg                # маскот в hero
    ├── m1..m5.jpg                # фото Мишки для ленты стикеров
    ├── v1..v4.mp4 + v1..v4.jpg   # видео приюта + постеры
    └── receipt.jpg               # банковская квитанция
```

Никаких зависимостей, npm, сборки. Открывается прямо из браузера.

---

## Локальный запуск

Достаточно открыть `index.html` в браузере. Если хочешь чтобы видео и Clipboard API работали без капризов:

```bash
# Python (есть на любом Mac/Linux/Win с Python)
python -m http.server 8000
# → http://localhost:8000

# или Node
npx serve .
```

---

## Деплой

Сайт статический, поэтому деплой — это просто заливка содержимого папки на любой статический хостинг.

### GitHub Pages (бесплатно, в один клик)

1. Settings → Pages
2. **Source**: `Deploy from a branch`
3. **Branch**: `main` / `(root)`
4. Save → через минуту сайт по адресу `https://<username>.github.io/<repo>/`

### Netlify (бесплатно, кастомный домен)

1. https://app.netlify.com/start → Connect to GitHub → выбираешь этот репо
2. Build command: `(пусто)`
3. Publish directory: `.`
4. Deploy

### Vercel

1. https://vercel.com/new → Import Git Repository → этот репо
2. Framework preset: **Other**
3. Output directory: `.`
4. Deploy

### Свой VPS / nginx

Просто скопируй содержимое в любую директорию, которая раздаётся nginx:

```nginx
server {
  listen 80;
  server_name mishka.example.com;
  root /var/www/mishka;
  index index.html;
  location / { try_files $uri $uri/ /index.html; }
  # видео — long cache
  location ~* \.(mp4|webm|jpg|png|svg)$ {
    expires 30d;
    add_header Cache-Control "public, immutable";
  }
}
```

---

## Локализация

Тексты лежат словарями в [`i18n.js`](./i18n.js) — два объекта `I18N.ru` и `I18N.en`. Чтобы добавить узбекский / английский / любой другой:

1. Скопируй весь объект `I18N.ru` в новый ключ, например `I18N.uz`.
2. Переведи значения.
3. Добавь кнопку в шапку:
   ```html
   <button type="button" data-lang="uz" class="lang-btn">UZ</button>
   ```
4. Добавь `'uz'` в массив `SUPPORTED` в `i18n.js`.

Выбор языка сохраняется в `localStorage` (ключ `mishka.lang`).

---

## Кеш-бастинг при правках

В `index.html` ссылки на JS/CSS идут с `?v=N`. После каждой правки CSS/JS нужно поднять номер — иначе у пользователей в кеше будет старая версия:

```html
<link rel="stylesheet" href="styles.css?v=6" />
<script src="i18n.js?v=6" defer></script>
<script src="script.js?v=6" defer></script>
```

---

## Дисклеймер

`$MISHKA` — мем-токен с благотворительной механикой. Сайт **не является инвестиционным предложением**. Покупать стоит только то, что готов потерять — лучше относиться к этому как к донату.

Все потоки публикуются в [Telegram-канале](https://t.me/mishka_charity): on-chain транзакции пула + банковские квитанции и чеки из зоомагазинов.
