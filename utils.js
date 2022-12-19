export const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}


export const duplicateArray = (array) => array.reduce((res, current) => res.concat([current, current]), []);


export const createImagesArray = () => {
    const animeImagesArray = ['pict/1.webp', 'pict/2.webp', 'pict/3.webp', 'pict/4.webp', 'pict/5.webp', 'pict/6.webp', 'pict/7.webp', 'pict/8.webp'];
    return animeImagesArray;
}

