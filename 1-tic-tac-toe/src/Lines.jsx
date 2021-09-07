import React, { useCallback } from 'react';
import { Graphics } from '@inlet/react-pixi';

// TODO: Import de um modulo geral
const canvasWidth = 500;
const canvasHeight = 500;
const verticalBarWidth = 10;
const verticalBarHeight = canvasHeight;
const horizontalBarWidth = canvasWidth;
const horizontalBarHeigth = 10;
const black = 0x000000;


export const VerticalBar = ({ x }) => {

    return <Rectangle color={black}
        x={x - verticalBarWidth / 2}
        y={0}
        width={verticalBarWidth}
        height={verticalBarHeight}
    />

};

export const HorizontalBar = ({ y }) => {

    return <Rectangle color={black}
        x={0}
        y={y - horizontalBarHeigth / 2}
        width={horizontalBarWidth}
        height={horizontalBarHeigth}
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