import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { pageIds } from './Consts';

export const Contents = ({ setPageSelected }) => {

    return (
        <>
            <h1>Available games: </h1>

            <ListGroup>
                <ListGroup.Item action onClick={() => setPageSelected(pageIds.ticTacToe)}>Tic-tac-toe</ListGroup.Item>
                <ListGroup.Item action onClick={() => setPageSelected(pageIds.minesweeeper)}>Minesweeper</ListGroup.Item>
            </ListGroup>

        </>
    )

};


