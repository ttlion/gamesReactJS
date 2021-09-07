
import { Sprite } from '@inlet/react-pixi';

// TODO: Import de um modulo geral
const canvasWidth = 500;
const canvasHeight = 500;
const verticalBarWidth = 10;
const horizontalBarHeigth = 10;



export const Place = ({ row, col, image, showImage }) => {

    if (showImage === false) {
        return (null);
    }

    let placeWidth = canvasWidth / 3 - verticalBarWidth / 2;
    let placeHeight = canvasHeight / 3 - horizontalBarHeigth / 2;

    if (col > 0) {
        placeWidth -= verticalBarWidth / 2;
    }

    if (row > 0) {
        placeHeight -= horizontalBarHeigth / 2;
    }

    let halfLineHorizontalPadding = (col === 0) ? 0 : horizontalBarHeigth / 2;
    let halfLineVerticalPadding = (row === 0) ? 0 : verticalBarWidth / 2;

    return <Sprite
        image={image}
        x={0.05 * placeWidth + halfLineHorizontalPadding + col * canvasWidth / 3}
        y={0.05 * placeHeight + halfLineVerticalPadding + row * canvasHeight / 3}
        width={0.9 * placeWidth}
        height={0.9 * placeHeight}
    />

};
