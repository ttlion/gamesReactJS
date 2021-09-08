
import { Sprite } from '@inlet/react-pixi';
import { updateGameOnMouseClick } from '../../logic/GameLogic.jsx';
import { canvasSpecs, boardDimensions } from "./Const.jsx";

export const Place = ({ row, col, gameVars, gameSetters }) => {

    if (gameVars.places[row][col].image === null
        || gameVars.places[row][col].image === undefined) {

        return (null);
    }

    let placeWidth = canvasSpecs.canvasWidth / 3 - boardDimensions.verticalBarWidth;
    let placeHeight = canvasSpecs.canvasHeight / 3 - boardDimensions.horizontalBarHeigth;


    let leftPadding = (1 - boardDimensions.percentageOfPlaceFilled) / 2 * placeWidth;
    let placeX = leftPadding + boardDimensions.verticalBarWidth / 2 + col * canvasSpecs.canvasWidth / 3;

    let topPadding = (1 - boardDimensions.percentageOfPlaceFilled) / 2 * placeHeight;
    let placeY = topPadding + boardDimensions.horizontalBarHeigth / 2 + row * canvasSpecs.canvasHeight / 3;

    return <Sprite
        image={gameVars.places[row][col].image}
        x={placeX}
        y={placeY}
        width={placeWidth * boardDimensions.percentageOfPlaceFilled}
        height={placeHeight * boardDimensions.percentageOfPlaceFilled}
        interactive={true}
        pointerdown={() => updateGameOnMouseClick(row, col, gameVars, gameSetters)}
    />

};

