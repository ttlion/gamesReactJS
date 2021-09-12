
import React from 'react';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { boardPlacesInitState, initialGameStatus } from '../logic/GameLogic';

export const boardDimsInitialState = () => {
    return {
        nbRows: 10,
        nbCols: 10,
    }
};


export const InitialInfo = () => {
    return <Alert variant="info" className="mb-0 text-center">
        <Alert.Heading>Minesweeper</Alert.Heading>
        <p className="mb-0">
            {"This is a simple minesweeper game done in ReactJS using React PIXI."}
            <br />
            {"To play, just select the number of rows and columns and press \"Start Game\"."}
            <br />
            {"You can click \"Reset\" in the middle of a game or during a game, which puts everything in its initial state."}
        </p>
    </Alert>
};

export const PlayerForm = ({ gameVars, gameSetters }) => {

    const startGame = () => {
        gameVars.gameStatus.started = true;
        gameSetters.setGameStatus({ ...gameVars.gameStatus });
    }

    const resetGame = () => {
        document.getElementById("minesweeper-form").reset();
        let initialBoardDims = boardDimsInitialState();
        gameSetters.setPlaces(boardPlacesInitState(initialBoardDims.nbRows, initialBoardDims.nbCols));
        gameSetters.setGameStatus(initialGameStatus(initialBoardDims.nbRows * initialBoardDims.nbCols));
        gameSetters.setBoardDims(initialBoardDims);
    }

    const setNbRows = (nbRows) => {
        gameSetters.setPlaces(boardPlacesInitState(nbRows, gameVars.boardDims.nbCols))
        gameSetters.setGameStatus(initialGameStatus(nbRows * gameVars.boardDims.nbCols));
        gameSetters.setBoardDims({
            nbRows: nbRows,
            nbCols: gameVars.boardDims.nbCols,
        });

    }

    const setNbCols = (nbCols) => {
        gameSetters.setPlaces(boardPlacesInitState(gameVars.boardDims.nbRows, nbCols))
        gameSetters.setGameStatus(initialGameStatus(gameVars.boardDims.nbRows * nbCols));
        gameSetters.setBoardDims({
            nbRows: gameVars.boardDims.nbRows,
            nbCols: nbCols,
        });
    }

    return <Form id="minesweeper-form">
        <Row className="justify-content-center" >
            < Col md={2} xs={6} className="text-center" >
                <Form.Label>Number of rows</Form.Label>
                <Form.Control className="text-center" placeholder={gameVars.boardDims.nbRows}
                    readOnly={gameVars.gameStatus.started}
                    onChange={e => setNbRows(parseInt(e.target.value))}
                />
            </Col >
            <Col md={2} xs={6} className="text-center">
                <Form.Label>Number of columns</Form.Label>
                <Form.Control className="text-center" placeholder={gameVars.boardDims.nbCols}
                    readOnly={gameVars.gameStatus.started}
                    onChange={e => setNbCols(parseInt(e.target.value))}
                />
            </Col>
        </Row >

        <Row className="mt-1 justify-content-center" >
            <Col md={2} xs={6} className="d-grid">
                <Button variant="success" onClick={startGame} disabled={gameVars.gameStatus.started}>
                    Start Game
                </Button>
            </Col>
            <Col md={2} xs={6} className="d-grid">
                <Button variant="warning" onClick={resetGame} disabled={!gameVars.gameStatus.started}>
                    Reset
                </Button>
            </Col>
        </Row>
    </Form >

};
