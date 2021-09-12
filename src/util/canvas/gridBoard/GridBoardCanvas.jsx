
import { HorizontalBar, VerticalBar } from "./Line";


export const GridBoardCanvas = ({ boardWidth, boardHeight, nbRows, horizontalBarHeight, nbCols, verticalBarWidth, gridColor }) => {

    return <BoardLines
        boardWidth={boardWidth}
        boardHeight={boardHeight}
        nbRows={nbRows}
        horizontalBarHeight={horizontalBarHeight}
        nbCols={nbCols}
        verticalBarWidth={verticalBarWidth}
        gridColor={gridColor}
    />

}

export const getPlaceGridWidth = (boardWidth, nbCols, verticalBarWidth) => {
    return (boardWidth - (nbCols + 1) * verticalBarWidth) / nbCols
}

export const getPlaceGridHeight = (boardHeight, nbRows, horizontalBarHeight) => {
    return (boardHeight - (nbRows + 1) * horizontalBarHeight) / nbRows
}

const BoardLines = ({ boardWidth, boardHeight, nbRows, horizontalBarHeight, nbCols, verticalBarWidth, gridColor }) => {

    let allHorizontalLinesArray = [];
    let allVerticalLinesArray = [];

    for (let i = 0; i < nbRows + 1; i++) {
        allHorizontalLinesArray[i] =
            <HorizontalBar
                y={i * (horizontalBarHeight + getPlaceGridHeight(boardHeight, nbRows, horizontalBarHeight))}
                width={boardWidth}
                height={horizontalBarHeight}
                color={gridColor}
            />;
    }

    for (let i = 0; i < nbCols + 1; i++) {
        allVerticalLinesArray[i] =
            <VerticalBar
                x={i * (verticalBarWidth + getPlaceGridWidth(boardWidth, nbCols, verticalBarWidth))}
                width={verticalBarWidth}
                height={boardHeight}
                color={gridColor}
            />;
    }

    return (
        <>
            {allHorizontalLinesArray}
            {allVerticalLinesArray}
        </>
    )
}