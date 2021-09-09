
import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import { BoardCanvas } from "./canvas/BoardCanvas.jsx";
import { boardPlacesInitState, initalGameStatus } from "../logic/GameLogic.jsx";
import { playersInitialState } from "../logic/Player.jsx";


export const Board = () => {

    const [playerToMove, setPlayerToMove] = useState(0);
    const [players, setPlayers] = useState(playersInitialState());
    const [places, setPlaces] = useState(boardPlacesInitState());
    const [gameStatus, setGameStatus] = useState(initalGameStatus());

    let gameVars = {
        playerToMove: playerToMove,
        players: players,
        places: places,
        gameStatus: gameStatus
    }

    let gameSetters = {
        setPlayerToMove: setPlayerToMove,
        setPlayers: setPlayers,
        setPlaces: setPlaces,
        setGameStatus: setGameStatus
    }

    return (
        <Container>
            <Row className="justify-content-md-center">

                <BoardCanvas
                    gameVars={gameVars}
                    gameSetters={gameSetters}
                />

                {gameStatus.ended &&
                    <div>{"Game ended, winner is player " + gameStatus.winnerPlayerNb}</div>
                }
            </Row>
        </Container>

    )

};
