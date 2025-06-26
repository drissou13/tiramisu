const translations = {
  fr: {
    headline: "Bienvenue chez <span class='highlight'>Tiramisu Délices</span>",
    subtitle: "Un nuage de douceur, une pincée d’amour, et un tiramisu inoubliable...",
    discover: "Découvrir nos créations",
    extra: "Préparez vos papilles, l'aventure gourmande commence ici 🍰",
    "menu-title": "Nos créations maison",
    "fraise-title": "Tiramisu Fraise <span class='price'>7,00 €</span>",
    "fraise-desc": "🍓 Une crème légère et onctueuse, des fraises fraîches et juteuses, le tout sur un biscuit moelleux imbibé juste comme il faut… Un dessert doux, frais, et ultra gourmand qui fond dans la bouche 😍 Parfait pour une pause fruitée ou pour finir un repas en beauté. Commandes ouvertes — laisse-toi tenter, il n’attend que toi ! 🍓",
    "cookie-title": "Tiramisu Cookie <span class='price'>7,00 €</span>",
    "cookie-desc": "🍪 Le tiramisu cookie de @cj.tiramisu, c’est la rencontre parfaite entre fondant et croquant ! Une crème onctueuse, des éclats de cookies ultra gourmands, et un biscuit imbibé tout doux pour un mélange irrésistible. Chaque cuillère est un pur moment de réconfort 🤤 À partager… ou pas ! Commandes ouvertes — ne résiste plus à la tentation ! 📬🍪",
    "speculoos-title": "Tiramisu Spéculoos <span class='price'>7,00 €</span>",
    "speculoos-desc": "✨ Le tiramisu spéculoos de @cj.tiramisu, c’est la douceur épicée qui fait fondre tous les cœurs ! Une crème onctueuse mariée au croquant des biscuits spéculoos, pour un équilibre parfait entre douceur et caractère 🔥 Un classique revisé avec amour, à savourer sans modération. Commandes ouvertes — laisse-toi emporter par cette gourmandise pleine de réconfort ! 📬🍂",
    "mns-title": "Tiramisu M&Ns <span class='price'>7,00 €</span>",
    "mns-desc": "🍫 Un kaléidoscope de saveurs chocolatées t’attend avec notre tiramisu M&Ns ! Une crème douce et onctueuse, ponctuée de morceaux de M&Ns colorés et croquants. Une fête pour les yeux et le palais — pour petits et grands gourmands ! 😋"
  },
  en: {
    headline: "Welcome to <span class='highlight'>Tiramisu Delights</span>",
    subtitle: "A cloud of sweetness, a pinch of love, and an unforgettable tiramisu...",
    discover: "Discover our creations",
    extra: "Get ready — your sweet adventure starts here 🍰",
    "menu-title": "Our Signature Creations",
    "fraise-title": "Strawberry Tiramisu <span class='price'>€7.00</span>",
    "fraise-desc": "🍓 Light and creamy, with juicy strawberries on a soft, perfectly soaked biscuit... A fresh, sweet dessert that melts in your mouth. Perfect for a fruity break or a beautiful end to a meal. Open for orders — it's waiting for you!",
    "cookie-title": "Cookie Tiramisu <span class='price'>€7.00</span>",
    "cookie-desc": "🍪 Cookie tiramisu by @cj.tiramisu is the perfect blend of soft and crunchy! Creamy layers, cookie chunks, and a delicately soaked base. Every spoonful is comfort food heaven. Open for orders — don't resist the craving!",
    "speculoos-title": "Speculoos Tiramisu <span class='price'>€7.00</span>",
    "speculoos-desc": "✨ The speculoos tiramisu by @cj.tiramisu is the spicy sweetness everyone loves! Creamy and crunchy, with spiced cookie layers. A cozy classic reimagined with love. Open for orders — taste the warmth!",
    "mns-title": "M&Ns Tiramisu <span class='price'>€7.00</span>",
    "mns-desc": "🍫 A chocolate rainbow awaits in our M&Ns tiramisu! Creamy goodness with colorful, crunchy pieces of M&Ns. A party for your taste buds. Open for all sweet lovers!"
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = translations[lang][key] || el.innerHTML;
  });
}

function showMessage() {
  const message = document.getElementById("extraMessage");
  message.classList.remove("hidden");
  setTimeout(() => {
    message.classList.add("visible");
  }, 100);
}

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("orderConfirmation").classList.remove("hidden");
});