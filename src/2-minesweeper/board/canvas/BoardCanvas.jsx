
import React from 'react';
import { Container } from 'react-bootstrap';

import { Stage } from "@inlet/react-pixi";
import { boardDimensions, canvasSpecs, placeDimensions } from "./Const";
import { HorizontalBar, VerticalBar } from "./Line";
import { Place } from "./Place.jsx";

export const BoardCanvas = ({ gameVars, gameSetters }) => {

    let placeHeight = (canvasSpecs.canvasHeight - (gameVars.boardDims.nbRows + 1) * boardDimensions.horizontalBarHeight) / gameVars.boardDims.nbRows;
    let placeWidth = (canvasSpecs.canvasWidth - (gameVars.boardDims.nbCols + 1) * boardDimensions.verticalBarWidth) / gameVars.boardDims.nbCols;

    return (
        <Container>
            <Stage width={canvasSpecs.canvasWidth}
                height={canvasSpecs.canvasHeight}
                options={{
                    backgroundColor: canvasSpecs.color.white
                }}
            >

                <BoardLines
                    nbRows={gameVars.boardDims.nbRows + 1} spaceBetweenRows={placeHeight}
                    nbCols={gameVars.boardDims.nbCols + 1} spaceBetweenCols={placeWidth}
                />

                <BoardPlaces nbRows={gameVars.boardDims.nbRows} nbCols={gameVars.boardDims.nbCols}
                    placeHeight={placeHeight} placeWidth={placeWidth}
                />

            </Stage>
        </Container>
    )

};

const BoardLines = ({ nbRows, spaceBetweenRows, nbCols, spaceBetweenCols }) => {

    let allHorizontalLinesArray = [];
    let allVerticalLinesArray = [];

    for (let i = 0; i < nbRows; i++) {
        allHorizontalLinesArray[i] = <HorizontalBar y={i * (boardDimensions.horizontalBarHeight + spaceBetweenRows)} />;
    }

    for (let i = 0; i < nbCols; i++) {
        allVerticalLinesArray[i] = <VerticalBar x={i * (boardDimensions.verticalBarWidth + spaceBetweenCols)} />;
    }

    return (
        <>
            {allHorizontalLinesArray}
            {allVerticalLinesArray}
        </>
    )
}

const BoardPlaces = ({ nbRows, nbCols, placeHeight, placeWidth }) => {

    let allPlacesArray = [];

    for (let row = 0; row < nbRows; row++) {
        for (let col = 0; col < nbCols; col++) {
            allPlacesArray[row * nbCols + col] =
                <Place row={row} col={col} placeWidth={placeWidth} placeHeight={placeHeight} />;
        }
    }

    return (
        <>
            {allPlacesArray}
        </>
    )
}