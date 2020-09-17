import {Platform} from "react-native";

export const shadow = {
    ...Platform.select({
        ios: {
            shadowColor: "rgba(128,98,96,0.09)",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
        },
        android: {
            elevation: 5
        },
    })
}
export const shadowCardOther = {
    ...Platform.select({
        ios: {
            shadowColor: "rgba(128,98,96,0.09)",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.25,
            shadowRadius: 2.84,
        },
        android: {
            elevation: 2
        },
    })
}
export const shadowText = {
    textShadowColor: 'rgba(76,24,20,0.2)',
    textShadowOffset: {width: 0, height: 1},
    textShadowRadius: 10,
}
