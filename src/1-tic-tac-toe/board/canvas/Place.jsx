
import { Sprite } from '@inlet/react-pixi';
import { updateGameOnMouseClick } from '../../logic/GameLogic.jsx';
import { boardDimensions } from "./Const.jsx";

export const Place = ({ row, col, placeWidth, placeHeight, gameVars, gameSetters }) => {

    let leftPadding = boardDimensions.verticalBarWidth + ((1 - boardDimensions.percentPlaceFill) / 2) * placeWidth;
    let placeX = leftPadding + col * (boardDimensions.verticalBarWidth + placeWidth);

    let topPadding = boardDimensions.horizontalBarHeight + ((1 - boardDimensions.percentPlaceFill) / 2) * placeHeight;
    let placeY = topPadding + row * (boardDimensions.horizontalBarHeight + placeHeight);

    if (gameVars.places[row][col].playerNb === -1) {
        return <Sprite
            image={gameVars.places[row][col].background}
            x={placeX - leftPadding + boardDimensions.verticalBarWidth}
            y={placeY - topPadding + boardDimensions.horizontalBarHeight}
            width={placeWidth}
            height={placeHeight}
            interactive={true}
            pointerdown={() => updateGameOnMouseClick(row, col, gameVars, gameSetters)}
        />
    } else {
        return <>
            <Sprite
                image={gameVars.places[row][col].background}
                x={placeX - leftPadding + boardDimensions.verticalBarWidth}
                y={placeY - topPadding + boardDimensions.horizontalBarHeight}
                width={placeWidth}
                height={placeHeight}
            />
            <Sprite
                image={gameVars.places[row][col].image}
                x={placeX}
                y={placeY}
                width={placeWidth * boardDimensions.percentPlaceFill}
                height={placeHeight * boardDimensions.percentPlaceFill}
            />
        </>
    }

};

