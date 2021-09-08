import React, { useCallback } from 'react';
import { Graphics } from '@inlet/react-pixi';

import { canvasSpecs, boardDimensions } from "./Const.jsx";

export const VerticalBar = ({ x }) => {

    return <Rectangle color={canvasSpecs.color.black}
        x={x - boardDimensions.verticalBarWidth / 2}
        y={0}
        width={boardDimensions.verticalBarWidth}
        height={boardDimensions.verticalBarHeight}
    />

};

export const HorizontalBar = ({ y }) => {

    return <Rectangle color={canvasSpecs.color.black}
        x={0}
        y={y - boardDimensions.horizontalBarHeigth / 2}
        width={boardDimensions.horizontalBarWidth}
        height={boardDimensions.horizontalBarHeigth}
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