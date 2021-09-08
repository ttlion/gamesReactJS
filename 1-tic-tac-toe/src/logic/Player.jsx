
export const playersInitialState = () => {

    // There are always only two players, so there is no need for complex stuff here..

    return [
        {
            playerNb: 0,
            image: "./bigX.png" // TODO: null here and dependent on user selection
        },
        {
            playerNb: 1,
            image: "./tick.png" // TODO: null here and dependent on user selection
        }
    ]

};