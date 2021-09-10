
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { BoardCanvas } from "./canvas/BoardCanvas.jsx";
import { boardPlacesInitState, initialGameStatus } from "../logic/GameLogic.jsx";
import { InitialInfo, PlayerForm, PlayerWonMessage, TiedGameMessage, playersInitialState } from "../player/Player.jsx";


export const TicTacToeBoard = () => {

    const [playerToMove, setPlayerToMove] = useState(0);
    const [players, setPlayers] = useState(playersInitialState());
    const [places, setPlaces] = useState(boardPlacesInitState());
    const [gameStatus, setGameStatus] = useState(initialGameStatus());

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

                {gameStatus.ended &&
                    <Row className="mt-1 justify-content-center">
                        <Col md={8} xs={12} >
                            {
                                (gameStatus.winnerPlayerNb !== -1 ?
                                    <PlayerWonMessage playerName={players[gameStatus.winnerPlayerNb].playerName} />
                                    :
                                    <TiedGameMessage />
                                )
                            }
                        </Col>
                    </Row>
                }
            </Row>

        </Container >

    )

};
