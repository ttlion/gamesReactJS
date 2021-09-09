
import React, { useState } from 'react';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';

export const playersInitialState = () => {
    return [
        {
            playerNb: 0,
            image: "./bigX.png" // TODO: null here and dependent on user selection
        },
        {
            playerNb: 1,
            image: "./tick.png" // TODO: null here and dependent on user selection
        }
    ]
};


export const InitialInfo = () => {
    return <Alert variant="info" className="text-center">
        <Alert.Heading>Tic-tac-toe</Alert.Heading>
        <p className="mb-0">
            {"Game info yet to be inserted here"}
        </p>
    </Alert>
};

export const PlayerForm = ({ gameVars, gameSetters }) => {

    const [gameInProgress, setGameInProgress] = useState(gameVars.gameStatus.started && !gameVars.gameStatus.ended);

    const startGame = () => {
        gameVars.gameStatus.started = true;
        gameSetters.setGameStatus(gameVars.gameStatus);
        setGameInProgress(true);
    }

    const resetGame = () => {
        gameVars.gameStatus.started = false;
        gameVars.gameStatus.ended = false;
        gameVars.gameStatus.winnerPlayerNb = -1;
        gameSetters.setGameStatus(gameVars.gameStatus);
        setGameInProgress(false);
    }

    return <Form>
        <Row className="justify-content-center" >
            <Col md={4} xs={6} className="text-center">
                <Form.Label>Player 1</Form.Label>
                <Form.Control className="text-center" placeholder={"Enter Player 1 name"} readOnly={gameInProgress} />
            </Col>
            <Col md={4} xs={6} className="text-center">
                <Form.Label>Player 2</Form.Label>
                <Form.Control className="text-center" placeholder={"Enter Player 2 name"} readOnly={gameInProgress} />
            </Col>
        </Row>

        <Row className="mt-1 justify-content-center" >
            <Col md={4} xs={6} className="d-grid">
                <Button variant="success" onClick={startGame} disabled={gameInProgress}>
                    Start Game
                </Button>
            </Col>
            <Col md={4} xs={6} className="d-grid">
                <Button variant="warning" onClick={resetGame} disabled={!gameInProgress}>
                    Reset
                </Button>
            </Col>
        </Row>
    </Form>

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