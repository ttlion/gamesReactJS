
import React, { useState } from 'react';
import { VerticalBar, HorizontalBar } from './Lines.jsx';

import { Place } from './Place.jsx';
import { Stage, Sprite, Graphics } from '@inlet/react-pixi';

// TODO: Import de um modulo geral
const canvasWidth = 500;
const canvasHeight = 500;
const white = 0xFFFFFF;

export const Board = () => {

    let initialPlaces = [];
    for (let i = 0; i < 3; i++) {
        initialPlaces[i] = [];
    }

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            initialPlaces[i][j] = {
                image: null,
                showImage: false
            }
        }
    }


    const [places, setPlaces] = useState(initialPlaces);

    const [dummyStateToActivateMouseDown, setDummyStateToActivateMouseDown] = useState(true);




    const UpdateGameOnMouseDown = (event) => {
        setDummyStateToActivateMouseDown(!dummyStateToActivateMouseDown);

        let cursorX = event.clientX;
        let cursorY = event.clientY;

        if (cursorX < 0 || cursorY < 0
            || cursorX > canvasWidth
            || cursorY > canvasHeight) {
            return;
        }

        let row = getRowOfCursor(cursorY);
        let col = getColOfCursor(cursorX);

        console.log(row);
        console.log(col);

        places[row][col] = {
            image: "./bigX.png",
            showImage: !places[row][col].showImage
        }

        setPlaces(places);


    };


    const getRowOfCursor = (cursorX) => {
        if (cursorX < canvasWidth / 3) {
            return 0;
        }
        else if (cursorX < 2 * canvasWidth / 3) {
            return 1;
        }
        else {
            return 2;
        }
    }

    const getColOfCursor = (cursorY) => {
        if (cursorY < canvasHeight / 3) {
            return 0;
        }
        else if (cursorY < 2 * canvasHeight / 3) {
            return 1;
        }
        else {
            return 2;
        }
    }


    return (
        <div onMouseDown={UpdateGameOnMouseDown} width={canvasWidth} height={canvasHeight}>

            <Stage options={{ backgroundColor: white }} >

                <VerticalBar x={canvasWidth / 3} />
                <VerticalBar x={2 * canvasWidth / 3} />

                <HorizontalBar y={canvasHeight / 3} />
                <HorizontalBar y={2 * canvasHeight / 3} />

                <Place row={0} col={0} image={places[0][0].image} showImage={places[0][0].showImage} />
                <Place row={0} col={1} image={places[0][1].image} showImage={places[0][1].showImage} />
                <Place row={0} col={2} image={places[0][2].image} showImage={places[0][2].showImage} />

                <Place row={1} col={0} image={places[1][0].image} showImage={places[1][0].showImage} />
                <Place row={1} col={1} image={places[1][1].image} showImage={places[1][1].showImage} />
                <Place row={1} col={2} image={places[1][2].image} showImage={places[1][2].showImage} />

                <Place row={2} col={0} image={places[2][0].image} showImage={places[2][0].showImage} />
                <Place row={2} col={1} image={places[2][1].image} showImage={places[2][1].showImage} />
                <Place row={2} col={2} image={places[2][2].image} showImage={places[2][2].showImage} />

            </Stage>

        </div>

    )

};




