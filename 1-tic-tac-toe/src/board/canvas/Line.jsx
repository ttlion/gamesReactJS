import React, { useCallback } from 'react';
import { Graphics } from '@inlet/react-pixi';

import { canvasSpecs, boardDimensions } from "./Const.jsx";

export const VerticalBar = ({ x, isBorder = false }) => {

    return <Rectangle color={canvasSpecs.color.black}
        x={x}
        y={0}
        width={isBorder ? boardDimensions.verticalBarWidth / 2 : boardDimensions.verticalBarWidth}
        height={boardDimensions.verticalBarHeight - boardDimensions.horizontalBarHeigth / 2}
    />

};

export const HorizontalBar = ({ y, isBorder = false }) => {

    return <Rectangle color={canvasSpecs.color.black}
        x={0}
        y={y}
        width={boardDimensions.horizontalBarWidth - boardDimensions.verticalBarWidth / 2}
        height={isBorder ? boardDimensions.horizontalBarHeigth / 2 : boardDimensions.horizontalBarHeigth}
    />

};

const Rectangle = ({ color, x, y, width, height }) => {

    const draw = useCallback((g) => {

        g.clear();
        g.beginFill(color);
        g.drawRect(x, y, width, height);
        g.endFill();

    }, [color, x, y, width, height]);

    return <Graphics draw={draw} />;

};
