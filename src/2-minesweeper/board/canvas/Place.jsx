
import { Sprite } from '@inlet/react-pixi';
import { boardDimensions, placeImages, resultTypes } from './Const';
import { updateGameOnMouseClick } from '../../logic/GameLogic';

export const Place = ({ row, col, placeWidth, placeHeight, gameVars, gameSetters }) => {

    let leftPadding = boardDimensions.verticalBarWidth + ((1 - boardDimensions.percentPlaceFill) / 2) * placeWidth;
    let placeX = leftPadding + col * (boardDimensions.verticalBarWidth + placeWidth);

    let topPadding = boardDimensions.horizontalBarHeight + ((1 - boardDimensions.percentPlaceFill) / 2) * placeHeight;
    let placeY = topPadding + row * (boardDimensions.horizontalBarHeight + placeHeight);

    if (gameVars.gameStatus.ended) {

        if (gameVars.places[row * gameVars.boardDims.nbCols + col].image === placeImages.unsuccess) {
            if (gameVars.gameStatus.result === resultTypes.win) {
                return <DisplayWinPlace
                    placeX={placeX}
                    placeY={placeY}
                    leftPadding={leftPadding}
                    topPadding={topPadding}
                    placeWidth={placeWidth}
                    placeHeight={placeHeight}
                />
            }
            else if (row === gameVars.gameStatus.losingCoords.row && col === gameVars.gameStatus.losingCoords.col) {
                return <DisplayLosePlace
                    placeX={placeX}
                    placeY={placeY}
                    leftPadding={leftPadding}
                    topPadding={topPadding}
                    placeWidth={placeWidth}
                    placeHeight={placeHeight}
                />
            }
        }

        return <DisplayUpPlace
            place={gameVars.places[row * gameVars.boardDims.nbCols + col]}
            placeX={placeX}
            placeY={placeY}
            leftPadding={leftPadding}
            topPadding={topPadding}
            placeWidth={placeWidth}
            placeHeight={placeHeight}
        />

    }
    else {

        if (gameVars.places[row * gameVars.boardDims.nbCols + col].up) {

            return <DisplayUpPlace
                place={gameVars.places[row * gameVars.boardDims.nbCols + col]}
                placeX={placeX}
                placeY={placeY}
                leftPadding={leftPadding}
                topPadding={topPadding}
                placeWidth={placeWidth}
                placeHeight={placeHeight}
            />

        } else {
            return <Sprite
                image={placeImages.covered}
                x={placeX - leftPadding + boardDimensions.verticalBarWidth}
                y={placeY - topPadding + boardDimensions.horizontalBarHeight}
                width={placeWidth}
                height={placeHeight}
                interactive={true}
                pointerdown={() => updateGameOnMouseClick(row, col, gameVars, gameSetters)}
            />
        }

    }

};

const DisplayUpPlace = ({ place, placeX, placeY, leftPadding, topPadding, placeWidth, placeHeight }) => {
    if (place.image === placeImages.empty) {
        return <Sprite
            image={place.image}
            x={placeX - leftPadding + boardDimensions.verticalBarWidth}
            y={placeY - topPadding + boardDimensions.horizontalBarHeight}
            width={placeWidth}
            height={placeHeight}
        />
    } else {
        return <Sprite
            image={place.image}
            x={placeX}
            y={placeY}
            width={placeWidth * boardDimensions.percentPlaceFill}
            height={placeHeight * boardDimensions.percentPlaceFill}
        />
    }
}


const DisplayWinPlace = ({ placeX, placeY, leftPadding, topPadding, placeWidth, placeHeight }) => {
    return <>
        <Sprite
            image={placeImages.winBackground}
            x={placeX - leftPadding + boardDimensions.verticalBarWidth}
            y={placeY - topPadding + boardDimensions.horizontalBarHeight}
            width={placeWidth}
            height={placeHeight}
        />
        <Sprite
            image={placeImages.success}
            x={placeX}
            y={placeY}
            width={placeWidth * boardDimensions.percentPlaceFill}
            height={placeHeight * boardDimensions.percentPlaceFill}
        />
    </>
}

const DisplayLosePlace = ({ placeX, placeY, leftPadding, topPadding, placeWidth, placeHeight }) => {
    return <>
        <Sprite
            image={placeImages.loseBackground}
            x={placeX - leftPadding + boardDimensions.verticalBarWidth}
            y={placeY - topPadding + boardDimensions.horizontalBarHeight}
            width={placeWidth}
            height={placeHeight}
        />
        <Sprite
            image={placeImages.unsuccess}
            x={placeX}
            y={placeY}
            width={placeWidth * boardDimensions.percentPlaceFill}
            height={placeHeight * boardDimensions.percentPlaceFill}
        />
    </>
}