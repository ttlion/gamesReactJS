
import React from 'react';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';

export const boardDimsInitialState = () => {
    return {
        nbRows: 2,
        nbCols: 3,
    }
};


export const InitialInfo = () => {
    return <Alert variant="info" className="mb-0 text-center">
        <Alert.Heading>Minesweeper</Alert.Heading>
        <p className="mb-0">
            {"This is a simple minesweeper game done in ReactJS using React PIXI."}
            <br />
            {"TODO: More info here"}
        </p>
    </Alert>
};

export const PlayerForm = ({ gameVars, gameSetters }) => {

    const startGame = () => {
        //TODO
    }

    const resetGame = () => {
        //TODO
        document.getElementById("minesweeper-form").reset();
    }

    const setNbRows = (nbRows) => {
        gameSetters.setBoardDims({
            nbRows: nbRows,
            nbCols: gameVars.boardDims.nbCols,
        });
    }

    const setNbCols = (nbCols) => {
        gameSetters.setBoardDims({
            nbRows: gameVars.boardDims.nbRows,
            nbCols: nbCols,
        });
    }

    return <Form id="minesweeper-form">
        <Row className="justify-content-center" >
            < Col md={4} xs={6} className="text-center" >
                <Form.Label>Nb rows</Form.Label>
                <Form.Control className="text-center" placeholder={"Enter Nb rows"}
                    onChange={e => setNbRows(parseInt(e.target.value))}
                />
            </Col >
            <Col md={4} xs={6} className="text-center">
                <Form.Label>Nb cols</Form.Label>
                <Form.Control className="text-center" placeholder={"Enter Nb cols"}
                    onChange={e => setNbCols(parseInt(e.target.value))}
                />
            </Col>
        </Row >

        <Row className="mt-1 justify-content-center" >
            <Col md={4} xs={6} className="d-grid">
                <Button variant="success" onClick={startGame} disabled={false}>
                    Start Game
                </Button>
            </Col>
            <Col md={4} xs={6} className="d-grid">
                <Button variant="warning" onClick={resetGame} disabled={false}>
                    Reset
                </Button>
            </Col>
        </Row>
    </Form >

};
