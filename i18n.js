/* $MISHKA — i18n (RU/EN)
   Использование:
     <span data-i18n="key">…fallback…</span>
     <p data-i18n-html="key">…html with <b>tags</b>…</p>
     <button data-i18n-caption="key">…</button>  // для data-caption атрибута
*/

const I18N = {
  ru: {
    "meta.title": "$MISHKA — мем-токен помощи приютам в TON",
    "meta.description": "$MISHKA — благотворительный мем-токен в сети TON. Комиссии каждой транзакции собираются в Weekend Pool и идут на корм для приютов собак и котов.",

    "nav.how": "Как это работает",
    "nav.life": "Приют",
    "nav.tokenomics": "Токеномика",
    "nav.transparency": "Прозрачность",
    "nav.buy": "Купить",
    "nav.telegram": "Telegram",

    "hero.eyebrow": "благотворительный мем в TON",
    "hero.lead": "Каждая транзакция кормит хвостатых. Комиссии копятся в&nbsp;<b>Weekend&nbsp;Pool</b>, сообщество выбирает приют, а деньги идут на корм для собак и&nbsp;котов.",
    "hero.cta_buy": "Купить $MISHKA",
    "hero.cta_how": "Как это работает",
    "hero.stat_ton": "blockchain",
    "hero.stat_steps_n": "4 шага",
    "hero.stat_transparent": "прозрачно on-chain",

    "life.kicker": "Жизнь приюта",
    "life.title": "Те, ради кого всё это",
    "life.subtitle": "Реальные кадры: закупка корма, собаки и&nbsp;коты, волонтёрская смена. Кликни на&nbsp;карточку, чтобы посмотреть со&nbsp;звуком.",
    "life.v1_tag": "Закупка корма",
    "life.v1_title": "Чек из ERA — мешок Simba",
    "life.v1_caption": "Закупка корма — чек из зоомагазина ERA, мешок Simba",
    "life.v2_tag": "Собаки",
    "life.v2_title": "Подопечные приюта",
    "life.v2_caption": "Рыжие подопечные приюта",
    "life.v3_tag": "Коты",
    "life.v3_title": "Кошачья комната",
    "life.v3_caption": "Котодомики — кошачья комната приюта",
    "life.v4_tag": "Волонтёры",
    "life.v4_title": "Смена во дворе",
    "life.v4_caption": "Волонтёрская смена — кормление во дворе",

    "how.kicker": "Weekend Pool",
    "how.title": "Как комиссии превращаются <br/>в&nbsp;корм для приютов",
    "how.subtitle": "Четыре шага от транзакции до миски с едой. Всё прозрачно — каждый этап виден в&nbsp;TON-блокчейне.",
    "how.s1_title": "Каждая транзакция — комиссия",
    "how.s1_text": "Часть каждой покупки и продажи $MISHKA автоматически поступает в&nbsp;общий пул.",
    "how.s2_title": "Пул копится всю неделю",
    "how.s2_text": "Все комиссии собираются в&nbsp;единый Weekly&nbsp;Pot. К&nbsp;выходным мы знаем итог.",
    "how.s3_title": "Сообщество голосует",
    "how.s3_text": "Голосование в&nbsp;Telegram&nbsp;— холдеры выбирают приют, который получит помощь.",
    "how.s4_title": "Покупаем корм и уход",
    "how.s4_text": "Деньги идут на еду, лекарства и вольеры. Чеки и&nbsp;отчёты публикуем в&nbsp;канале.",

    "meet.kicker": "Знакомьтесь",
    "meet.title": "Это&nbsp;— Мишка",
    "meet.subtitle": "Тот самый пушистый, ради которого всё затеяно.",

    "why.kicker": "Почему $MISHKA",
    "why.title": "Мем с пользой",
    "why.c1_title": "Реальная помощь",
    "why.c1_text": "Никаких \"когда-нибудь\". Каждые выходные — реальная закупка корма для конкретного приюта.",
    "why.c2_title": "On-chain прозрачность",
    "why.c2_text": "Все потоки — в&nbsp;сети TON. Кошелёк пула публичный, транзакции легко отследить в&nbsp;Tonviewer.",
    "why.c3_title": "Сообщество решает",
    "why.c3_text": "Холдеры голосуют за&nbsp;получателя помощи. Чем дольше держишь — тем сильнее голос.",

    "ca.kicker": "Контракт",
    "ca.title": "Адрес токена в&nbsp;TON",
    "ca.subtitle": "Сохрани адрес и проверяй любые операции в&nbsp;Tonviewer.",
    "ca.copy": "Скопировать",
    "ca.copied": "Скопировано ✓",

    "tr.kicker": "Прозрачность",
    "tr.title": "Каждый перевод — публичный",
    "tr.lead": "Мы не&nbsp;прячем ни&nbsp;один рубль. Банковские квитанции и&nbsp;чеки из&nbsp;зоомагазинов публикуются в&nbsp;Telegram-канале сразу после закупки. Это&nbsp;не&nbsp;просто слова в&nbsp;whitepaper&nbsp;— это конкретные мешки корма, которые завтра окажутся в&nbsp;мисках.",
    "tr.b1": "<b>On-chain</b> — пул и&nbsp;вывод средств видны в&nbsp;TON",
    "tr.b2": "<b>Off-chain</b> — банковские квитанции и&nbsp;чеки магазинов",
    "tr.b3": "<b>В эфире</b> — фото и&nbsp;видео доставки в&nbsp;приют",
    "tr.cta": "Смотреть отчёты в Telegram →",
    "tr.caption": "<b>Ipak Yuli Bank · 08.05.2026</b><br/>Перевод <b>505 500&nbsp;сум</b> на&nbsp;закупку корма для приюта.<span class=\"muted\">Реквизиты получателя — публично в&nbsp;Telegram-отчёте.</span>",

    "buy.kicker": "Купить",
    "buy.title": "Поддержи приют — возьми $MISHKA",
    "buy.subtitle": "Доступен на&nbsp;двух DEX в&nbsp;сети TON. Подключи кошелёк и&nbsp;обменяй TON на&nbsp;$MISHKA.",
    "buy.open": "Открыть ↗",
    "buy.disclaimer": "Это мем-токен с&nbsp;благотворительной механикой. Не&nbsp;инвестиционный совет. Покупай только то, что готов поддержать как донат.",

    "cm.kicker": "Присоединяйся",
    "cm.title": "Сообщество $MISHKA",
    "cm.subtitle": "Анонсы выходного пула, голосования и&nbsp;отчёты по&nbsp;закупкам корма.",
    "cm.tg": "Telegram-канал",
    "cm.x": "X (Twitter)",

    "ft.brand": "— мем-токен помощи приютам в&nbsp;TON.",
    "ft.ca_label": "CA:",
    "ft.meta": "© 2026 $MISHKA Community. Без кого — без приютов."
  },

  en: {
    "meta.title": "$MISHKA — charity meme token on TON helping shelters",
    "meta.description": "$MISHKA is a charity meme token on TON. Every transaction's fee accumulates in the Weekend Pool and goes to food for dog and cat shelters.",

    "nav.how": "How it works",
    "nav.life": "Shelter",
    "nav.tokenomics": "Tokenomics",
    "nav.transparency": "Transparency",
    "nav.buy": "Buy",
    "nav.telegram": "Telegram",

    "hero.eyebrow": "charity meme on TON",
    "hero.lead": "Every transaction feeds the furries. Fees accumulate in the&nbsp;<b>Weekend&nbsp;Pool</b>, the community picks a shelter, and the funds go to food for dogs and&nbsp;cats.",
    "hero.cta_buy": "Buy $MISHKA",
    "hero.cta_how": "How it works",
    "hero.stat_ton": "blockchain",
    "hero.stat_steps_n": "4 steps",
    "hero.stat_transparent": "fully on-chain",

    "life.kicker": "Shelter life",
    "life.title": "Those we&apos;re doing it for",
    "life.subtitle": "Real footage: food runs, dogs and&nbsp;cats, volunteer shifts. Click a&nbsp;card to&nbsp;watch with&nbsp;sound.",
    "life.v1_tag": "Food run",
    "life.v1_title": "Receipt from ERA — Simba bag",
    "life.v1_caption": "Food run — pet store receipt and a Simba dog food bag",
    "life.v2_tag": "Dogs",
    "life.v2_title": "Shelter residents",
    "life.v2_caption": "Ginger shelter dogs",
    "life.v3_tag": "Cats",
    "life.v3_title": "The cat room",
    "life.v3_caption": "Cat trees — the shelter&apos;s cat room",
    "life.v4_tag": "Volunteers",
    "life.v4_title": "Yard shift",
    "life.v4_caption": "Volunteer shift — feeding in the yard",

    "how.kicker": "Weekend Pool",
    "how.title": "How fees turn into <br/>food for shelters",
    "how.subtitle": "Four steps from a transaction to a bowl of food. Every step is visible on the&nbsp;TON blockchain.",
    "how.s1_title": "Every trade pays a fee",
    "how.s1_text": "A small fee from each $MISHKA buy and sell flows automatically into a&nbsp;shared pool.",
    "how.s2_title": "Pool grows all week",
    "how.s2_text": "Fees accumulate in a single Weekly&nbsp;Pot. By&nbsp;the weekend we&nbsp;know the total.",
    "how.s3_title": "Community votes",
    "how.s3_text": "A Telegram vote — holders choose the shelter that&nbsp;will receive help.",
    "how.s4_title": "We buy food & care",
    "how.s4_text": "Funds go to food, meds and kennels. Receipts and reports are&nbsp;published in&nbsp;the&nbsp;channel.",

    "meet.kicker": "Meet the boy",
    "meet.title": "This is Mishka",
    "meet.subtitle": "The fluffy reason this whole thing exists.",

    "why.kicker": "Why $MISHKA",
    "why.title": "A meme that means something",
    "why.c1_title": "Real help",
    "why.c1_text": "No \"someday\". Every weekend — a real food purchase for a specific shelter.",
    "why.c2_title": "On-chain transparency",
    "why.c2_text": "All flows live on&nbsp;TON. The pool wallet is&nbsp;public, transactions are easy to&nbsp;trace in&nbsp;Tonviewer.",
    "why.c3_title": "Community decides",
    "why.c3_text": "Holders vote on the recipient. The longer you hold — the louder your vote.",

    "ca.kicker": "Contract",
    "ca.title": "Token address on&nbsp;TON",
    "ca.subtitle": "Save the address and verify every operation in&nbsp;Tonviewer.",
    "ca.copy": "Copy",
    "ca.copied": "Copied ✓",

    "tr.kicker": "Transparency",
    "tr.title": "Every transfer is public",
    "tr.lead": "We don&apos;t hide a&nbsp;single coin. Bank receipts and pet store checks are&nbsp;posted in the Telegram channel right after every purchase. This isn&apos;t whitepaper talk&nbsp;— these are real bags of food that&nbsp;land in&nbsp;bowls tomorrow.",
    "tr.b1": "<b>On-chain</b> — pool and withdrawals visible on TON",
    "tr.b2": "<b>Off-chain</b> — bank receipts and store checks",
    "tr.b3": "<b>On air</b> — photos and videos of delivery to&nbsp;the shelter",
    "tr.cta": "See reports on Telegram →",
    "tr.caption": "<b>Ipak Yuli Bank · 2026-05-08</b><br/>Transfer of <b>505,500&nbsp;UZS</b> for shelter food.<span class=\"muted\">Recipient details — public in the Telegram report.</span>",

    "buy.kicker": "Buy",
    "buy.title": "Back the shelter — grab $MISHKA",
    "buy.subtitle": "Available on two DEXes on&nbsp;TON. Connect your wallet and swap TON for&nbsp;$MISHKA.",
    "buy.open": "Open ↗",
    "buy.disclaimer": "This is a meme token with charity mechanics. Not&nbsp;financial advice. Only buy what you&apos;re happy to&nbsp;treat as a donation.",

    "cm.kicker": "Join us",
    "cm.title": "$MISHKA community",
    "cm.subtitle": "Weekend pool announcements, votes and food purchase reports.",
    "cm.tg": "Telegram channel",
    "cm.x": "X (Twitter)",

    "ft.brand": "— a charity meme token on&nbsp;TON.",
    "ft.ca_label": "CA:",
    "ft.meta": "© 2026 $MISHKA Community. Made for those with paws."
  }
};

const LANG_KEY = 'mishka.lang';
const SUPPORTED = ['ru', 'en'];

function detectLang(){
  const saved = localStorage.getItem(LANG_KEY);
  if (SUPPORTED.includes(saved)) return saved;
  const nav = (navigator.language || 'ru').slice(0, 2).toLowerCase();
  return SUPPORTED.includes(nav) ? nav : 'ru';
}

function t(key, lang){
  const dict = I18N[lang] || I18N.ru;
  return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : null;
}

function applyLang(lang){
  if (!SUPPORTED.includes(lang)) lang = 'ru';

  document.documentElement.setAttribute('lang', lang);

  // <title> и meta description
  const title = t('meta.title', lang);
  if (title) document.title = title;
  const desc = t('meta.description', lang);
  if (desc){
    let m = document.querySelector('meta[name="description"]');
    if (!m){
      m = document.createElement('meta');
      m.setAttribute('name','description');
      document.head.appendChild(m);
    }
    m.setAttribute('content', desc);
    let og = document.querySelector('meta[property="og:description"]');
    if (og) og.setAttribute('content', desc);
  }
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && title) ogTitle.setAttribute('content', title);

  // textContent (но если значение содержит HTML — авто-переключение на innerHTML)
  const hasHtml = (s) => /[<&]/.test(s);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key, lang);
    if (val === null) return;
    if (hasHtml(val)) el.innerHTML = val;
    else el.textContent = val;
  });

  // innerHTML (для строк с тегами/&nbsp;)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = t(key, lang);
    if (val !== null) el.innerHTML = val;
  });

  // data-caption для видео-карточек
  document.querySelectorAll('[data-i18n-caption]').forEach(el => {
    const key = el.getAttribute('data-i18n-caption');
    const val = t(key, lang);
    if (val !== null) el.setAttribute('data-caption', val);
  });

  // Подсветка активной кнопки переключателя
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });

  localStorage.setItem(LANG_KEY, lang);
  // Чтобы script.js мог среагировать (например, обновить lightbox-подпись)
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

// Кнопки переключателя
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.lang-btn');
  if (!btn) return;
  applyLang(btn.dataset.lang);
});

// Инициализация — применяем выбранный/определённый язык до first paint текста (defer перекрывает DOMContentLoaded)
applyLang(detectLang());
