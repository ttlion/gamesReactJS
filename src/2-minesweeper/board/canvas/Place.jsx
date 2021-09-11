
import { Sprite } from '@inlet/react-pixi';
import bigX from "./../../images/bigX.png";
import { boardDimensions } from './Const';

export const Place = ({ row, col, placeWidth, placeHeight }) => {

    let leftPadding = boardDimensions.verticalBarWidth + ((1 - boardDimensions.percentPlaceFill) / 2) * placeWidth;
    let placeX = leftPadding + col * (boardDimensions.verticalBarWidth + placeWidth);

    let topPadding = boardDimensions.horizontalBarHeight + ((1 - boardDimensions.percentPlaceFill) / 2) * placeHeight;
    let placeY = topPadding + row * (boardDimensions.horizontalBarHeight + placeHeight);

    return <Sprite
        image={bigX}
        x={placeX}
        y={placeY}
        width={placeWidth * boardDimensions.percentPlaceFill}
        height={placeHeight * boardDimensions.percentPlaceFill}
    />

};

