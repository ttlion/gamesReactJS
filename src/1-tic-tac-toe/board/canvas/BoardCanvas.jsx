
import { Stage } from "@inlet/react-pixi";
import { GridBoardCanvas, getPlaceGridHeight, getPlaceGridWidth } from "../../../util/canvas/gridBoard/GridBoardCanvas";
import { boardDimensions, canvasSpecs } from "./Const";
import { Place } from "./Place.jsx";

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
                nbRows={3}
                horizontalBarHeight={boardDimensions.horizontalBarHeight}
                nbCols={3}
                verticalBarWidth={boardDimensions.verticalBarWidth}
                gridColor={canvasSpecs.color.black}
            />

            <BoardPlaces gameVars={gameVars} gameSetters={gameSetters} />

        </Stage>
    )

};


const BoardPlaces = ({ gameVars, gameSetters }) => {

    let placeWidth = getPlaceGridWidth(canvasSpecs.canvasWidth, 3, boardDimensions.verticalBarWidth);
    let placeHeight = getPlaceGridHeight(canvasSpecs.canvasHeight, 3, boardDimensions.horizontalBarHeight);

    return (
        <>
            <Place row={0} col={0} placeWidth={placeWidth} placeHeight={placeHeight} gameVars={gameVars} gameSetters={gameSetters} />
            <Place row={0} col={1} placeWidth={placeWidth} placeHeight={placeHeight} gameVars={gameVars} gameSetters={gameSetters} />
            <Place row={0} col={2} placeWidth={placeWidth} placeHeight={placeHeight} gameVars={gameVars} gameSetters={gameSetters} />

            <Place row={1} col={0} placeWidth={placeWidth} placeHeight={placeHeight} gameVars={gameVars} gameSetters={gameSetters} />
            <Place row={1} col={1} placeWidth={placeWidth} placeHeight={placeHeight} gameVars={gameVars} gameSetters={gameSetters} />
            <Place row={1} col={2} placeWidth={placeWidth} placeHeight={placeHeight} gameVars={gameVars} gameSetters={gameSetters} />

            <Place row={2} col={0} placeWidth={placeWidth} placeHeight={placeHeight} gameVars={gameVars} gameSetters={gameSetters} />
            <Place row={2} col={1} placeWidth={placeWidth} placeHeight={placeHeight} gameVars={gameVars} gameSetters={gameSetters} />
            <Place row={2} col={2} placeWidth={placeWidth} placeHeight={placeHeight} gameVars={gameVars} gameSetters={gameSetters} />
        </>
    )
}