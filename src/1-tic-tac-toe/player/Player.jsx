
import React from 'react';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { boardPlacesInitState, initialGameStatus, startGameStatus } from "../logic/GameLogic.jsx";

import bigX from '../images/bigX.png';
import tick from '../images/tick.png';

export const playersInitialState = () => {
    return [
        {
            playerNb: 0,
            playerName: null,
            image: bigX
        },
        {
            playerNb: 1,
            playerName: null,
            image: tick
        }
    ]
};


export const InitialInfo = () => {
    return <Alert variant="info" className="mb-0 text-center">
        <Alert.Heading>Tic-tac-toe</Alert.Heading>
        <p className="mb-0">
            {"This is a simple tic-tac-toe game done in ReactJS using React PIXI."}
            <br />
            {"To play, just insert the players' names and click \"Start Game\"."}
            <br />
            {"You can click \"Reset\" in the middle of a game or during a game, which puts everything in its initial state."}
        </p>
    </Alert>
};

export const PlayerForm = ({ gameVars, gameSetters }) => {

    const startGame = () => {
        gameSetters.setGameStatus(startGameStatus());
    }

    const resetGame = () => {
        document.getElementById("tic-tac-toe-players-form").reset();
        gameSetters.setPlayerToMove(0);
        gameSetters.setPlayers(playersInitialState());
        gameSetters.setPlaces(boardPlacesInitState());
        gameSetters.setGameStatus(initialGameStatus());
    }

    const setPlayerName = (name, playerNb) => {
        gameVars.players[playerNb].playerName = name;
        gameSetters.setPlayers(gameVars.players);
    }

    return <Form id="tic-tac-toe-players-form">
        <Row className="justify-content-center" >
            < Col md={4} xs={6} className="text-center" >
                <Form.Label>Player 1</Form.Label>
                <Form.Control className="text-center" placeholder={"Enter Player 1 name"}
                    readOnly={gameVars.gameStatus.started}
                    onChange={e => setPlayerName(e.target.value, 0)}
                />
            </Col >
            <Col md={4} xs={6} className="text-center">
                <Form.Label>Player 2</Form.Label>
                <Form.Control className="text-center" placeholder={"Enter Player 2 name"}
                    readOnly={gameVars.gameStatus.started}
                    onChange={e => setPlayerName(e.target.value, 1)}
                />
            </Col>
        </Row >

        <Row className="mt-1 justify-content-center" >
            <Col md={4} xs={6} className="d-grid">
                <Button variant="success" onClick={startGame} disabled={gameVars.gameStatus.started}>
                    Start Game
                </Button>
            </Col>
            <Col md={4} xs={6} className="d-grid">
                <Button variant="warning" onClick={resetGame} disabled={!gameVars.gameStatus.started}>
                    Reset
                </Button>
            </Col>
        </Row>
    </Form >

};

export const PlayerWonMessage = ({ playerName }) => {
    return <Alert variant="success" className="text-center">
        {"Game ended, winner is " + playerName}
    </Alert>;
};


export const TiedGameMessage = () => {
    return <Alert variant="dark" className="text-center">
        {"Game ended in a tie"}
    </Alert>
};