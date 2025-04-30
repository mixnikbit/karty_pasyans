
const cards = ['бабочка.png', 'большой костёр.png', 'будильник.png', 'венок.png', 'весы.png', 'голубь.png', 'две сабли.png', 'железная дорога.png', 'жук.png', 'журнальный столик.png', 'замок.png', 'змея.png', 'ключ.png', 'книга.png', 'колокол.png', 'коса.png', 'лампочка.png', 'маленький костёр.png', 'мельница.png', 'монета.png', 'неожиданность.png', 'облако.png', 'очки.png', 'папка с документами.png', 'парусник.png', 'подарок.png', 'подкова.png', 'праздничный стол.png', 'руки.png', 'свеча.png', 'сердце.png', 'серп.png', 'солнце.png', 'тропинка.png', 'удар.png', 'флаг.png', 'фужер.png', 'храм.png', 'человек на льдине.png', 'череп.png', 'якорь.png'];
let cardMeanings = {};
let comboMeanings = {};

// Загрузка значений карт
fetch('data/cards.json')
    .then(response => response.json())
    .then(data => {
        cardMeanings = data;
    });

// Загрузка значений сочетаний
fetch('data/combinations.json')
    .then(response => response.json())
    .then(data => {
        comboMeanings = data;
    });

function drawSingleCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    const card = cards[randomIndex];
    const meaning = cardMeanings[card] || "Значение карты не указано.";

    document.getElementById('card-container').innerHTML = `
        <img src="images/${card}" alt="${card}">
        <p><strong>${meaning}</strong></p>
    `;
}

function drawCardPair() {
    let firstIndex = Math.floor(Math.random() * cards.length);
    let secondIndex;
    do {
        secondIndex = Math.floor(Math.random() * cards.length);
    } while (secondIndex === firstIndex);

    const firstCard = cards[firstIndex];
    const secondCard = cards[secondIndex];
    const pairKey1 = `${firstCard} + ${secondCard}`;
    const pairKey2 = `${secondCard} + ${firstCard}`;

    const meaning = comboMeanings[pairKey1] || comboMeanings[pairKey2] || "Значение сочетания не указано.";

    document.getElementById('card-container').innerHTML = `
        <img src="images/${firstCard}" alt="${firstCard}">
        <img src="images/${secondCard}" alt="${secondCard}">
        <p><strong>${meaning}</strong></p>
    `;
}
