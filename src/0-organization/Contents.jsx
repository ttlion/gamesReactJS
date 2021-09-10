import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export const Contents = ({ setPageSelected }) => {

    return (
        <>
            <h1>Available games: </h1>

            <ListGroup>
                <ListGroup.Item action onClick={() => setPageSelected(1)}>Tic-tac-toe</ListGroup.Item>
            </ListGroup>

        </>
    )

};


