
import { Stage } from "@inlet/react-pixi";
import { boardDimensions, canvasSpecs } from "./Const";
import { HorizontalBar, VerticalBar } from "./Line";
import { Place } from "./Place.jsx";

export const BoardCanvas = ({ gameVars, gameSetters }) => {

    return (
        <Stage width={canvasSpecs.canvasWidth}
            height={canvasSpecs.canvasHeight}
            options={{
                backgroundColor: canvasSpecs.color.white
            }}
        >

            <BoardVerticalLines />
            <BoardHorizontalLines />
            <BoardPlaces gameVars={gameVars} gameSetters={gameSetters} />

        </Stage>
    )

};


const BoardVerticalLines = () => {
    return (
        <>
            <VerticalBar x={0} isBorder={true} />
            <VerticalBar x={canvasSpecs.canvasWidth / 3 - boardDimensions.verticalBarWidth / 2} />
            <VerticalBar x={2 * canvasSpecs.canvasWidth / 3 - boardDimensions.verticalBarWidth / 2} />
            <VerticalBar x={canvasSpecs.canvasWidth - boardDimensions.verticalBarWidth / 2} isBorder={true} />
        </>
    )
}

const BoardHorizontalLines = () => {
    return (
        <>
            <HorizontalBar y={0} isBorder={true} />
            <HorizontalBar y={canvasSpecs.canvasHeight / 3 - boardDimensions.horizontalBarHeigth / 2} />
            <HorizontalBar y={2 * canvasSpecs.canvasHeight / 3 - boardDimensions.horizontalBarHeigth / 2} />
            <HorizontalBar y={canvasSpecs.canvasHeight - boardDimensions.horizontalBarHeigth / 2} isBorder={true} />
        </>
    )
}

const BoardPlaces = ({ gameVars, gameSetters }) => {
    return (
        <>
            <Place row={0} col={0} gameVars={gameVars} gameSetters={gameSetters} />
            <Place row={0} col={1} gameVars={gameVars} gameSetters={gameSetters} />
            <Place row={0} col={2} gameVars={gameVars} gameSetters={gameSetters} />

            <Place row={1} col={0} gameVars={gameVars} gameSetters={gameSetters} />
            <Place row={1} col={1} gameVars={gameVars} gameSetters={gameSetters} />
            <Place row={1} col={2} gameVars={gameVars} gameSetters={gameSetters} />

            <Place row={2} col={0} gameVars={gameVars} gameSetters={gameSetters} />
            <Place row={2} col={1} gameVars={gameVars} gameSetters={gameSetters} />
            <Place row={2} col={2} gameVars={gameVars} gameSetters={gameSetters} />
        </>
    )
}