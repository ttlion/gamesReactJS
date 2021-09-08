
import React, { useState } from 'react';
import { VerticalBar, HorizontalBar } from './Line.jsx';

import { Place } from './Place.jsx';
import { Stage, Sprite, Graphics } from '@inlet/react-pixi';

import { canvasSpecs, boardDimensions } from "./Const.jsx";
import { boardPlacesInitState, makeMove, getGameStatus, initalGameStatus } from "../logic/GameLogic.jsx";
import { playersInitialState } from "../logic/Player.jsx";

export const Board = () => {

    const [playerToMove, setPlayerToMove] = useState(0);
    const [players, setPlayers] = useState(playersInitialState());
    const [places, setPlaces] = useState(boardPlacesInitState());
    const [gameStatus, setGameStatus] = useState(initalGameStatus());

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

    const UpdateGameOnMouseDown = (event) => {

        if (gameStatus.ended) {
            return;
        }

        let boardPlace = getBoardPlaceOfCursor(event.clientX, event.clientY);

        if (boardPlace.row === -1 || boardPlace.col === -1) {
            return;
        }

        let move = makeMove(playerToMove, players, places, boardPlace);

        if (move.success === true) {
            setPlayerToMove(move.nextPlayer);
            setPlaces(move.updatedPlaces);
        }

        setGameStatus(getGameStatus(places));

    };




    return (
        <>
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

            {gameStatus.ended &&
                <div>{"Jogo Terminou"}</div>
            }
        </>

    )

};


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


const getBoardPlaceOfCursor = (cursorX, cursorY) => {

    let place = {
        row: -1,
        col: -1
    }

    if (cursorY > 0 && cursorY < canvasSpecs.canvasHeight) {

        if (cursorY < canvasSpecs.canvasHeight / 3) {
            place.row = 0;
        }
        else if (cursorY < 2 * canvasSpecs.canvasHeight / 3) {
            place.row = 1;
        }
        else {
            place.row = 2;
        }

    }

    if (cursorX > 0 && cursorX < canvasSpecs.canvasWidth) {

        if (cursorX < canvasSpecs.canvasWidth / 3) {
            place.col = 0;
        }
        else if (cursorX < 2 * canvasSpecs.canvasWidth / 3) {
            place.col = 1;
        }
        else {
            place.col = 2;
        }

    }

    return place;

};
