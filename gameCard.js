export const createGameCard = (defaultIcon, images) => {
    const card = document.createElement('div');
    card.classList.add('game-card');
    const notFlippedCardI = document.createElement('div');
    const flippedImage = document.createElement('img');
    flippedImage.src = `${images}`;

    card.append(flippedImage, notFlippedCardI);

    return card;
}
