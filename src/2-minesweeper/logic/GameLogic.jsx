
import { placeImages, placeTypes, resultTypes } from '../board/canvas/Const';

export const boardPlacesInitState = (nbRows, nbCols) => {

    let initialPlaces = [];

    for (let row = 0; row < nbRows; row++) {
        for (let col = 0; col < nbCols; col++) {
            initialPlaces[row * nbCols + col] = {
                up: false,
                type: placeTypes.empty,
                image: placeImages.empty,
            }
        }
    }

    let placesWithUnsuccess = getRandomizedUnsuccess(nbRows * nbCols, initialPlaces);

    fillOnesTwosThrees(nbRows, nbCols, placesWithUnsuccess, initialPlaces);

    return initialPlaces;

};

export const initialGameStatus = (totalNbPlaces) => {
    return {
        started: false,
        ended: false,
        result: resultTypes.progress,
        losingCoords: {
            row: -1,
            col: -1
        },
        numberUnsuccessPlaces: getTotalNumberUnsuccesses(totalNbPlaces),
        numberCoveredPlaces: totalNbPlaces
    }
};

const getTotalNumberUnsuccesses = (totalNbPlaces) => {
    // TODO: I could adjust this variable according to difficulty mode
    return Math.ceil(0.1 * totalNbPlaces);
}

const getRandomizedUnsuccess = (totalNbPlaces, initialPlaces) => {

    let totalNbUnsuccesses = getTotalNumberUnsuccesses(totalNbPlaces);

    let placesWithUnsuccess = new Set();

    for (let i = 0; i < totalNbUnsuccesses; i++) {
        let randomPlace = getRandomInt(0, totalNbPlaces);
        while (placesWithUnsuccess.has(randomPlace)) {
            randomPlace = getRandomInt(0, totalNbPlaces);
        }
        placesWithUnsuccess.add(randomPlace);
        initialPlaces[randomPlace].type = placeTypes.unsuccess;
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
        initialPlaces[row * nbCols + col].type = placeTypes.number;
        initialPlaces[row * nbCols + col].image = placeImages.distanceOne;
    }
    else if (currImage === placeImages.distanceOne) {
        initialPlaces[row * nbCols + col].type = placeTypes.number;
        initialPlaces[row * nbCols + col].image = placeImages.distanceTwo;
    }
    else if (currImage === placeImages.distanceTwo) {
        initialPlaces[row * nbCols + col].type = placeTypes.number;
        initialPlaces[row * nbCols + col].image = placeImages.distanceThree;
    }
    else if (currImage === placeImages.distanceThree) {
        initialPlaces[row * nbCols + col].type = placeTypes.number;
        initialPlaces[row * nbCols + col].image = placeImages.distanceFour;
    }
    else if (currImage === placeImages.distanceFour) {
        initialPlaces[row * nbCols + col].type = placeTypes.number;
        initialPlaces[row * nbCols + col].image = placeImages.distanceFive;
    }
    else if (currImage === placeImages.distanceFive) {
        initialPlaces[row * nbCols + col].type = placeTypes.number;
        initialPlaces[row * nbCols + col].image = placeImages.distanceSix;
    }
    else if (currImage === placeImages.distanceSix) {
        initialPlaces[row * nbCols + col].type = placeTypes.number;
        initialPlaces[row * nbCols + col].image = placeImages.distanceSeven;
    }
    else if (currImage === placeImages.distanceSeven) {
        initialPlaces[row * nbCols + col].type = placeTypes.number;
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

export const updateGameOnMouseClick = (row, col, gameVars, gameSetters) => {

    if (!gameVars.gameStatus.started || gameVars.gameStatus.ended) {
        return;
    }

    if (row === -1 || col === -1) {
        return;
    }

    let placedClicked = gameVars.places[row * gameVars.boardDims.nbCols + col];

    if (placedClicked.type === placeTypes.empty) {
        turnEmptyPlacesUp(row, col, gameVars.boardDims.nbRows, gameVars.boardDims.nbCols, gameVars.places, gameVars.gameStatus);
        gameSetters.setPlaces([...gameVars.places]);
    }
    else if (placedClicked.type === placeTypes.number) {
        placedClicked.up = true;
        gameVars.places[row * gameVars.boardDims.nbCols + col] = placedClicked;
        gameVars.gameStatus.numberCoveredPlaces--;
        gameSetters.setPlaces([...gameVars.places]);
    }
    else if (placedClicked.type === placeTypes.unsuccess) {
        placedClicked.up = true;
        gameVars.places[row * gameVars.boardDims.nbCols + col] = placedClicked;
        gameSetters.setPlaces([...gameVars.places]);

        gameVars.gameStatus.result = resultTypes.lose;
        gameVars.gameStatus.ended = true;

        gameVars.gameStatus.losingCoords = {
            row: row,
            col: col
        }

    }

    if (gameVars.gameStatus.numberCoveredPlaces === gameVars.gameStatus.numberUnsuccessPlaces) {
        gameVars.gameStatus.result = resultTypes.win;
        gameVars.gameStatus.ended = true;
    }

    gameSetters.setGameStatus({ ...gameVars.gameStatus });


};

const turnEmptyPlacesUp = (row, col, nbRows, nbCols, places, gameStatus) => {

    if (places[row * nbCols + col].up) {
        return;
    }

    places[row * nbCols + col].up = true;
    gameStatus.numberCoveredPlaces--;

    if (places[row * nbCols + col].type !== placeTypes.empty) {
        return;
    }

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {

            if ((i === 0 && j == 0)
                || row + i < 0 || row + i >= nbRows
                || col + j < 0 || col + j >= nbCols) {
                continue;
            }

            turnEmptyPlacesUp(row + i, col + j, nbRows, nbCols, places, gameStatus);

        }
    }

};

