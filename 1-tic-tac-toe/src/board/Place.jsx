
import { Sprite } from '@inlet/react-pixi';
import { canvasSpecs, boardDimensions } from "./Consts.jsx";

export const Place = ({ row, col, image }) => {

    if (image === null || image === undefined) {
        return (null);
    }

    let placeWidth = canvasSpecs.canvasWidth / 3 - boardDimensions.verticalBarWidth / 2;
    let placeHeight = canvasSpecs.canvasHeight / 3 - boardDimensions.horizontalBarHeigth / 2;

    if (col > 0) {
        placeWidth -= boardDimensions.verticalBarWidth / 2;
    }

    if (row > 0) {
        placeHeight -= boardDimensions.horizontalBarHeigth / 2;
    }

    let halfLineHorizontalPadding = (col === 0) ? 0 : boardDimensions.horizontalBarHeigth / 2;
    let halfLineVerticalPadding = (row === 0) ? 0 : boardDimensions.verticalBarWidth / 2;

    return <Sprite
        image={image}
        x={0.05 * placeWidth + halfLineHorizontalPadding + col * canvasSpecs.canvasWidth / 3}
        y={0.05 * placeHeight + halfLineVerticalPadding + row * canvasSpecs.canvasHeight / 3}
        width={0.9 * placeWidth}
        height={0.9 * placeHeight}
    />

};
