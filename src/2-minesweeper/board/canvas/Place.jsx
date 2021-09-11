
import { Sprite } from '@inlet/react-pixi';
import { boardDimensions, placeImages } from './Const';

export const Place = ({ row, col, placeWidth, placeHeight, gameVars, gameSetters }) => {

    let leftPadding = boardDimensions.verticalBarWidth + ((1 - boardDimensions.percentPlaceFill) / 2) * placeWidth;
    let placeX = leftPadding + col * (boardDimensions.verticalBarWidth + placeWidth);

    let topPadding = boardDimensions.horizontalBarHeight + ((1 - boardDimensions.percentPlaceFill) / 2) * placeHeight;
    let placeY = topPadding + row * (boardDimensions.horizontalBarHeight + placeHeight);

    if (gameVars.places[row * gameVars.boardDims.nbCols + col].up === true) {

        if (gameVars.places[row * gameVars.boardDims.nbCols + col].image === placeImages.empty) {
            return <Sprite
                image={gameVars.places[row * gameVars.boardDims.nbCols + col].image}
                x={placeX - leftPadding + boardDimensions.verticalBarWidth}
                y={placeY - topPadding + boardDimensions.horizontalBarHeight}
                width={placeWidth}
                height={placeHeight}
            />
        } else {
            return <Sprite
                image={gameVars.places[row * gameVars.boardDims.nbCols + col].image}
                x={placeX}
                y={placeY}
                width={placeWidth * boardDimensions.percentPlaceFill}
                height={placeHeight * boardDimensions.percentPlaceFill}
            />
        }

    } else {
        return <Sprite
            image={placeImages.covered}
            x={placeX - leftPadding + boardDimensions.verticalBarWidth}
            y={placeY - topPadding + boardDimensions.horizontalBarHeight}
            width={placeWidth}
            height={placeHeight}
        />
    }

};

