import React, { useCallback } from 'react';
import { Graphics } from '@inlet/react-pixi';

export const VerticalBar = ({ x, width, height, color }) => {

    return <Rectangle color={color}
        x={x}
        y={0}
        width={width}
        height={height}
    />

};

export const HorizontalBar = ({ y, width, height, color }) => {

    return <Rectangle color={color}
        x={0}
        y={y}
        width={width}
        height={height}
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
