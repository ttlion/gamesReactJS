import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export const Footer = ({ setPageSelected }) => {

    return (
        <>
            <ListGroup>
                <ListGroup.Item action onClick={() => setPageSelected(0)}>Back to main menu</ListGroup.Item>
            </ListGroup>
        </>
    )

};