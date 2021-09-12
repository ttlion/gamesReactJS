
import React from 'react';

import { Stage } from "@inlet/react-pixi";
import { boardDimensions, canvasSpecs } from "./Const";

import { Place } from "./Place.jsx";
import { GridBoardCanvas, getPlaceGridHeight, getPlaceGridWidth } from '../../../util/canvas/gridBoard/GridBoardCanvas';

export const BoardCanvas = ({ gameVars, gameSetters }) => {

    return (
        <Stage width={canvasSpecs.canvasWidth}
            height={canvasSpecs.canvasHeight}
            options={{
                backgroundColor: canvasSpecs.color.white
            }}
        >

            <GridBoardCanvas boardWidth={canvasSpecs.canvasWidth}
                boardHeight={canvasSpecs.canvasHeight}
                nbRows={gameVars.boardDims.nbRows}
                horizontalBarHeight={boardDimensions.horizontalBarHeight}
                nbCols={gameVars.boardDims.nbCols}
                verticalBarWidth={boardDimensions.verticalBarWidth}
                gridColor={canvasSpecs.color.black}
            />

            <BoardPlaces
                nbRows={gameVars.boardDims.nbRows}
                nbCols={gameVars.boardDims.nbCols}
                placeHeight={getPlaceGridHeight(canvasSpecs.canvasHeight, gameVars.boardDims.nbRows, boardDimensions.horizontalBarHeight)}
                placeWidth={getPlaceGridWidth(canvasSpecs.canvasWidth, gameVars.boardDims.nbCols, boardDimensions.verticalBarWidth)}
                gameVars={gameVars} gameSetters={gameSetters}
            />

        </Stage>
    )

};

const BoardPlaces = ({ nbRows, nbCols, placeHeight, placeWidth, gameVars, gameSetters }) => {

    let allPlacesArray = [];

    for (let row = 0; row < nbRows; row++) {
        for (let col = 0; col < nbCols; col++) {
            allPlacesArray[row * nbCols + col] =
                <Place row={row} col={col}
                    placeWidth={placeWidth} placeHeight={placeHeight}
                    gameVars={gameVars} gameSetters={gameSetters}
                />;
        }
    }

    return (
        <>
            {allPlacesArray}
        </>
    )
}