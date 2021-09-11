
import { placeImages } from '../board/canvas/Const';

export const boardPlacesInitState = (nbRows, nbCols) => {

    let initialPlaces = [];

    for (let row = 0; row < nbRows; row++) {
        for (let col = 0; col < nbCols; col++) {
            initialPlaces[row * nbCols + col] = {
                up: true,
                image: placeImages.empty,
            }
        }
    }

    let placesWithUnsuccess = getRandomizedUnsuccess(nbRows * nbCols, initialPlaces);

    fillOnesTwosThrees(nbRows, nbCols, placesWithUnsuccess, initialPlaces);

    return initialPlaces;

};

const getRandomizedUnsuccess = (totalNbPlaces, initialPlaces) => {

    let totalNbUnsuccesses = Math.round(0.2 * totalNbPlaces);

    let placesWithUnsuccess = new Set();

    for (let i = 0; i < totalNbUnsuccesses; i++) {
        let randomPlace = getRandomInt(0, totalNbPlaces);
        while (placesWithUnsuccess.has(randomPlace)) {
            randomPlace = getRandomInt(0, totalNbPlaces);
        }
        placesWithUnsuccess.add(randomPlace);
        initialPlaces[randomPlace].image = placeImages.unsuccess;
    }

    return placesWithUnsuccess;

}

const fillOnesTwosThrees = (nbRows, nbCols, placesWithUnsuccess, initialPlaces) => {

    placesWithUnsuccess.forEach((placeUnsuccess) => {

        let row = getRow(placeUnsuccess, nbCols);
        let col = getCol(placeUnsuccess, nbCols);

        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {

                if ((i === 0 && j == 0)
                    || row + i < 0 || row + i >= nbRows
                    || col + j < 0 || col + j >= nbCols) {
                    continue;
                }

                addUnsuccessNearPlace(row + i, col + j, nbRows, nbCols, initialPlaces);
            }
        }

    })

}

const addUnsuccessNearPlace = (row, col, nbRows, nbCols, initialPlaces) => {

    let currImage = initialPlaces[row * nbCols + col].image;
    if (currImage === placeImages.unsuccess) {
        return;
    }

    if (currImage === placeImages.empty) {
        initialPlaces[row * nbCols + col].image = placeImages.distanceOne;
    }
    else if (currImage === placeImages.distanceOne) {
        initialPlaces[row * nbCols + col].image = placeImages.distanceTwo;
    }
    else if (currImage === placeImages.distanceTwo) {
        initialPlaces[row * nbCols + col].image = placeImages.distanceThree;
    }
    else if (currImage === placeImages.distanceThree) {
        initialPlaces[row * nbCols + col].image = placeImages.distanceFour;
    }
    else if (currImage === placeImages.distanceFour) {
        initialPlaces[row * nbCols + col].image = placeImages.distanceFive;
    }
    else if (currImage === placeImages.distanceFive) {
        initialPlaces[row * nbCols + col].image = placeImages.distanceSix;
    }
    else if (currImage === placeImages.distanceSix) {
        initialPlaces[row * nbCols + col].image = placeImages.distanceSeven;
    }
    else if (currImage === placeImages.distanceSeven) {
        initialPlaces[row * nbCols + col].image = placeImages.distanceEight;
    }

}

const getRow = (index, nbCols) => {
    return Math.floor(index / nbCols);
}

const getCol = (index, nbCols) => {
    return index - nbCols * getRow(index, nbCols);
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export const initialGameStatus = () => {
    return {
        started: false,
        ended: false,
        victory: false
    }
};

// export const startGameStatus = () => {
//     return {
//         started: true,
//         ended: false,
//         victory: false
//     }
// };


// export const updateGameOnMouseClick = (row, col, gameVars, gameSetters) => {

//     TODO
//     if (!gameVars.gameStatus.started || gameVars.gameStatus.ended) {
//         return;
//     }

//     if (row === -1 || col === -1) {
//         return;
//     }

//     let move = makeMove(gameVars.playerToMove, gameVars.players, gameVars.places, row, col);

// };

