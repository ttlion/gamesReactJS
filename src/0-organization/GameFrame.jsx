import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { pageIds } from './Consts';

export const Footer = ({ setPageSelected }) => {

    return (
        <>
            <ListGroup>
                <ListGroup.Item action onClick={() => setPageSelected(pageIds.contentsPage)}>Back to main menu</ListGroup.Item>
            </ListGroup>
        </>
    )

};