
import orangeBackground from './../../images/orange.png';
import greyBackground from './../../images/grey.png';
import numberOne from './../../images/number1.png';
import numberTwo from './../../images/number2.png';
import numberThree from './../../images/number3.png';
import numberFour from './../../images/number4.png';
import numberFive from './../../images/number5.png';
import numberSix from './../../images/number6.png';
import numberSeven from './../../images/number7.jpg';
import numberEight from './../../images/number8.png';
import flag from './../../images/flag.jpg';
import bomb from './../../images/bomb.png';

export const canvasSpecs = {
    canvasWidth: 500,
    canvasHeight: 500,
    color: {
        black: 0x000000,
        white: 0xFFFFFF
    }
}

export const boardDimensions = {
    verticalBarWidth: 1,
    horizontalBarHeight: 1,
    percentPlaceFill: 0.5,
}

export const placeImages = {
    covered: orangeBackground,
    empty: greyBackground,
    distanceOne: numberOne,
    distanceTwo: numberTwo,
    distanceThree: numberThree,
    distanceFour: numberFour,
    distanceFive: numberFive,
    distanceSix: numberSix,
    distanceSeven: numberSeven,
    distanceEight: numberEight,
    success: flag,
    unsuccess: bomb
}

