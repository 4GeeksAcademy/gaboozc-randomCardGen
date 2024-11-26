function generateRandomCard() {
  const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace"
  ];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  const suitSymbols = {
    Hearts: "♥",
    Spades: "♠",
    Clubs: "♣",
    Diamonds: "♦"
  };
  return {
    suit: randomSuit,
    value: randomValue,
    symbol: suitSymbols[randomSuit],
    colorClass:
      randomSuit === "hearts" || randomSuit === "Diamonds" ? "red" : "black"
  };
}
function createCard(card) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = (`
    <div class="card">
      <div class="top-left ${card.colorClass}">
        ${card.value} ${card.symbol}
      </div>
      <div class="center suit ${card.colorClass}">${card.symbol}</div>
      <div class="bottom-right ${card.colorClass}">
        ${card.value} ${card.symbol}
      </div>
    </div>
  `);
}
const randomCard = generateRandomCard();
createCard (randomCard);
