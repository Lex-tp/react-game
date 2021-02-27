function fillWithCards(arrayOfCards, field) {
    let indexCard = -1;
    const arrayOfDuplicateCards = shuffleCards(arrayOfCards.concat(arrayOfCards));
    field.forEach((obj) => {
        obj.line.forEach((cardOfField) => {
            indexCard++;
            const card = arrayOfDuplicateCards.shift();
            cardOfField.frontImage = card.src;
            cardOfField.titleCard = card.title;
            cardOfField.index = indexCard;
        });
    });
    return field;
}

function shuffleCards(arrayOfCards) {
    for (let i = arrayOfCards.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arrayOfCards[i], arrayOfCards[j]] = [arrayOfCards[j], arrayOfCards[i]];
    }
    return arrayOfCards;
}

export {fillWithCards};