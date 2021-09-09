
import React from 'react';
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

export const PlayerForm = () => {

    return <Form>
        <Row className="justify-content-center" >
            <Col md={4} xs={6} className="text-center">
                <Form.Label>Player 1</Form.Label>
                <Form.Control className="text-center" placeholder={"Enter Player 1 name"} readOnly={false} />
            </Col>
            <Col md={4} xs={6} className="text-center">
                <Form.Label>Player 2</Form.Label>
                <Form.Control className="text-center" placeholder={"Enter Player 2 name"} readOnly={false} />
            </Col>
        </Row>

        <Row className="mt-1 justify-content-center" >
            <Col md={4} xs={6} className="d-grid">
                <Button variant="success" onClick={() => console.log("Start Game clicked!")} disabled={false}>
                    Start Game
                </Button>
            </Col>
            <Col md={4} xs={6} className="d-grid">
                <Button variant="warning" onClick={() => console.log("Re-start Game clicked!")} disabled={true}>
                    Re-start Game
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