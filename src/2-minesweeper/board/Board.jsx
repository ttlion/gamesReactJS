
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { BoardCanvas } from "./canvas/BoardCanvas.jsx";
import { InitialInfo, PlayerForm, PlayerWonMessage, TiedGameMessage, boardDimsInitialState } from "../player/Player.jsx";


export const MineSweeperBoard = () => {

    const [boardDims, setBoardDims] = useState(boardDimsInitialState());


    let gameVars = {
        boardDims: boardDims,
    }

    let gameSetters = {
        setBoardDims: setBoardDims,
    }

    return (

        <Container>

            <Row className="mt-1 justify-content-center">
                <InitialInfo />
            </Row>

            <Row className="mt-2 justify-content-center">
                <PlayerForm gameVars={gameVars}
                    gameSetters={gameSetters}
                />
            </Row>

            <Row className="mt-2 mb-2 justify-content-center">

                <BoardCanvas
                    gameVars={gameVars}
                    gameSetters={gameSetters}
                />

            </Row>

        </Container >

    )

};
