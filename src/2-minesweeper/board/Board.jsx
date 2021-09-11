
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { BoardCanvas } from "./canvas/BoardCanvas.jsx";
import { InitialInfo, PlayerForm, boardDimsInitialState } from "../player/Player.jsx";
import { boardPlacesInitState, initialGameStatus } from '../logic/GameLogic.jsx';

export const MineSweeperBoard = () => {

    const [boardDims, setBoardDims] = useState(boardDimsInitialState());
    const [places, setPlaces] = useState(boardPlacesInitState(boardDims.nbRows, boardDims.nbCols));
    const [gameStatus, setGameStatus] = useState(initialGameStatus(boardDims.nbRows * boardDims.nbCols))

    let gameVars = {
        boardDims: boardDims,
        places: places,
        gameStatus: gameStatus,
    }

    let gameSetters = {
        setBoardDims: setBoardDims,
        setPlaces: setPlaces,
        setGameStatus: setGameStatus,
    }

    return (

        <Container>

            <Row className="mt-1 justify-content-center">
                <InitialInfo />
            </Row>

            <Row className="mt-2 justify-content-center">
                <PlayerForm gameVars={gameVars} gameSetters={gameSetters} />
            </Row>

            <Row className="mt-2 mb-2 justify-content-center">
                <BoardCanvas gameVars={gameVars} gameSetters={gameSetters} />
            </Row>

        </Container >

    )

};
