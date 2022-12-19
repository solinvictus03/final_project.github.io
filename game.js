
import { createGameCard } from "./gameCard.js";
import { createImagesArray, duplicateArray, shuffle } from "./utils.js";

 const startGame = () => {
    let firstCard = null;
    let secondCard = null;
    let clickable = true;

    const gameSection = document.querySelector('.game-section__container');
    const gameTable = document.createElement('div');
    const cardsIcons = createImagesArray();
    const duplicatedCardsIcons = duplicateArray(cardsIcons);
    const restartBtn = document.createElement('button');
