
import React, { useState } from 'react';
import { VerticalBar, HorizontalBar } from './Line.jsx';

import { Place } from './Place.jsx';
import { Stage, Sprite, Graphics } from '@inlet/react-pixi';

import { canvasSpecs, boardDimensions } from "./Consts.jsx";

export const Board = () => {

    let initialPlaces = [];
    for (let i = 0; i < 3; i++) {
        initialPlaces[i] = [];
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            initialPlaces[i][j] = {
                image: null
            }
        }
    }


    const [places, setPlaces] = useState(initialPlaces);

    const [playerToMove, setPlayerToMove] = useState(0);

    const [players, setPlayers] = useState([
        {
            playerNb: 0,
            image: "./bigX.png"
        },
        {
            playerNb: 1,
            image: "./tick.png"
        }
    ]);




    const UpdateGameOnMouseDown = (event) => {
        setPlayerToMove(playerToMove === 0 ? 1 : 0);

        let cursorX = event.clientX;
        let cursorY = event.clientY;

        if (cursorX < 0 || cursorY < 0
            || cursorX > canvasSpecs.canvasWidth
            || cursorY > canvasSpecs.canvasHeight) {
            return;
        }

        let row = getRowOfCursor(cursorY);
        let col = getColOfCursor(cursorX);

        console.log(row);
        console.log(col);

        places[row][col] = {
            image: players[playerToMove].image
        }

        setPlaces(places);


    };


    const getRowOfCursor = (cursorX) => {
        if (cursorX < canvasSpecs.canvasWidth / 3) {
            return 0;
        }
        else if (cursorX < 2 * canvasSpecs.canvasWidth / 3) {
            return 1;
        }
        else {
            return 2;
        }
    }

    const getColOfCursor = (cursorY) => {
        if (cursorY < canvasSpecs.canvasHeight / 3) {
            return 0;
        }
        else if (cursorY < 2 * canvasSpecs.canvasHeight / 3) {
            return 1;
        }
        else {
            return 2;
        }
    }

    const BoardVerticalLines = () => {
        return (
            <>
                <VerticalBar x={boardDimensions.verticalBarWidth / 2} />
                <VerticalBar x={canvasSpecs.canvasWidth / 3} />
                <VerticalBar x={2 * canvasSpecs.canvasWidth / 3} />
                <VerticalBar x={canvasSpecs.canvasWidth - boardDimensions.verticalBarWidth / 2} />
            </>
        )
    }

    const BoardHorizontalLines = () => {
        return (
            <>
                <HorizontalBar y={boardDimensions.horizontalBarHeigth / 2} />
                <HorizontalBar y={canvasSpecs.canvasHeight / 3} />
                <HorizontalBar y={2 * canvasSpecs.canvasHeight / 3} />
                <HorizontalBar y={canvasSpecs.canvasHeight - boardDimensions.horizontalBarHeigth / 2} />
            </>
        )
    }

    const BoardPlaces = () => {
        return (
            <>
                <Place row={0} col={0} image={places[0][0].image} />
                <Place row={0} col={1} image={places[0][1].image} />
                <Place row={0} col={2} image={places[0][2].image} />

                <Place row={1} col={0} image={places[1][0].image} />
                <Place row={1} col={1} image={places[1][1].image} />
                <Place row={1} col={2} image={places[1][2].image} />

                <Place row={2} col={0} image={places[2][0].image} />
                <Place row={2} col={1} image={places[2][1].image} />
                <Place row={2} col={2} image={places[2][2].image} />
            </>
        )
    }


    return (
        <div onMouseDown={UpdateGameOnMouseDown}
            width={canvasSpecs.canvasWidth}
            height={canvasSpecs.canvasHeight}
            style={{ justifyContent: 'center' }}
        >

            <Stage options={{ backgroundColor: canvasSpecs.color.white }}>

                <BoardVerticalLines />
                <BoardHorizontalLines />
                <BoardPlaces />

            </Stage>

        </div>

    )

};




