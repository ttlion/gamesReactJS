
export const boardPlacesInitState = () => {

    let initialPlaces = [];
    for (let i = 0; i < 3; i++) {
        initialPlaces[i] = [];
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            initialPlaces[i][j] = {
                playerNb: -1,
                background: "./orange.png",
                image: null
            }
        }
    }

    return initialPlaces;

};

export const initalGameStatus = () => {
    return {
        ended: false,
        winnerPlayerNb: -1
    }
};


export const updateGameOnMouseClick = (row, col, gameVars, gameSetters) => {

    if (gameVars.gameStatus.ended) {
        return;
    }

    if (row === -1 || col === -1) {
        return;
    }

    let move = makeMove(gameVars.playerToMove, gameVars.players, gameVars.places, row, col);

    if (move.success === true) {
        gameSetters.setPlayerToMove(move.nextPlayer);
        gameSetters.setPlaces(move.updatedPlaces);
    }

    gameSetters.setGameStatus(getGameStatus(gameVars.places));

};

export const makeMove = (playerToMove, players, places, row, col) => {

    let move = {
        success: false,
        nextPlayer: playerToMove,
        updatedPlaces: places,
    }

    if (places[row][col].playerNb === -1) {

        places[row][col].playerNb = players[playerToMove].playerNb;
        places[row][col].image = players[playerToMove].image;

        move.success = true;
        move.nextPlayer = playerToMove === 0 ? 1 : 0;

    }

    return move;

};

export const getGameStatus = (places) => {

    let gameStatus = {
        ended: checkIfAllPlacesFilled(places),
        winnerPlayerNb: -1
    }

    let winner = getWinnerFromConditions(places);

    if (winner !== -1) {
        gameStatus.ended = true;
        gameStatus.winnerPlayerNb = winner;
    }

    return gameStatus;

}


const getWinnerFromConditions = (places) => {

    // Check if any player has a full row
    for (let row = 0; row < 3; row++) {

        let playerNbsRow = [];
        for (let col = 0; col < 3; col++) {
            playerNbsRow[col] = places[row][col].playerNb;
        }

        if (playerNbsRow[0] === playerNbsRow[1] && playerNbsRow[0] === playerNbsRow[2]) {
            return playerNbsRow[0];
        }

    }

    // Check if any player has a full col
    for (let col = 0; col < 3; col++) {

        let playerNbsCol = [];
        for (let row = 0; row < 3; row++) {
            playerNbsCol[row] = places[row][col].playerNb;
        }

        if (playerNbsCol[0] === playerNbsCol[1] && playerNbsCol[0] === playerNbsCol[2]) {
            return playerNbsCol[0];
        }

    }

    // Check one diagonal
    if (places[0][0].playerNb === places[1][1].playerNb
        && places[0][0].playerNb === places[2][2].playerNb) {

        return places[0][0].playerNb;

    }

    // Check other diagonal
    if (places[2][0].playerNb === places[1][1].playerNb
        && places[2][0].playerNb === places[0][2].playerNb) {

        return places[2][0].playerNb;

    }

    return -1;

};


const checkIfAllPlacesFilled = (places) => {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (places[row][col].playerNb === -1) {
                return false;
            }
        }
    }
    return true;
};
