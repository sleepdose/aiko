const texts = {
    en: {
        title: "Hey I'm Aiko",
        description: "Meet, a spirited anime girl with a unique charm, embodying the playful essence of a raccoon. She captures the hearts of everyone she meets. Dressed in a traveler's outfit, she is always ready for adventure.",
        ticker: "PLAY, COMMUNICATE, EARN — DISCOVER NEW HORIZONS OF THE CRYPTO WORLD TODAY",
        developer: "DEVELOPER"
    },
    ru: {
        title: "Привет, я Айко",
        description: "Знакомьтесь, энергичная девушкой-аниме с уникальным шармом, воплощающей игривую сущность енота. Она покоряет сердца всех, кого встречает. В одежде путешественника она всегда готова к приключениям.",
        ticker: "ИГРАЙ, ОБЩАЙСЯ, ЗАРАБАТЫВАЙ — ОТКРЫВАЙ НОВЫЕ ГОРИЗОНТЫ КРИПТОМИРА УЖЕ СЕГОДНЯ",
        developer: "РАЗРАБОТЧИКИ"
    }
};

function setLanguage(lang) {
    document.getElementById('title').innerText = texts[lang].title;
    document.getElementById('description').innerText = texts[lang].description;
    document.getElementById('ticker-text').innerText = texts[lang].ticker;
    document.getElementById('developer').innerText = texts[lang].developer;
}

// Устанавливаем язык по умолчанию
setLanguage('en');
