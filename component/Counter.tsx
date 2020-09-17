import React, { useEffect, useState } from 'react';

import {
    View,
    Text,
    Animated

} from 'react-native';

// type Props = {
//     start?: number;
//     end: number;
//     increment?: boolean;
//     onFinish?: any
// };

type Props = {
    counterAnimation: any,
    shakeMotion: any,
    animationValue: any,
    counter: any
};
// export function Counter ({ start = 0, increment = true, end, onFinish }: Props)  {
export function Counter ({ counterAnimation = 0, shakeMotion = true, animationValue, counter }: Props)  {
    // const [counter, setCounter] = useState(start);
    // const [timeout, settimeout] = useState(start);
    //
    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         if(counter < end)
    //         {
    //             if(increment){
    //                 setCounter(counter + 1);
    //             }else {
    //                 setCounter(counter - 1);
    //             }
    //         }else {
    //             stop()
    //             if(onFinish){
    //                 onFinish(counter)
    //             }
    //
    //
    //         }
    //     }, 300);
    //     settimeout(timeout);
    //
    //     const stop = () => {
    //         clearInterval(timeout);
    //     }
    //
    //
    //     return () => {
    //         clearTimeout(timeout);
    //     };
    // }, [counter]);
    //
    //
    //
    // return (<View>
    //     <Text style={{fontSize:46,fontWeight:'bold'}}>{counter}</Text>
    // </View>);
    const textStyle = counterAnimation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1.5, 1]
    });

    const textStyleTransform = {
        transform: [{ scale: textStyle }]
    };

    const shakeMotionTransform = {
        transform: [
            {
                translateX: shakeMotion.interpolate({
                    inputRange: [0, 0.08, 0.25, 0.41, 0.58, 0.75, 0.92, 1],
                    outputRange: [0, -10, 10, -10, 10, -5, 5, 0]
                })
            }
        ]
    };

    const counterDisplayTransforms = {
        transform: [
            {
                translateX: animationValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [120, 100]
                })
            }
        ]
    };

    const conditionalStyle = () =>
        counter > 0 ? textStyleTransform : shakeMotionTransform;

    return (
        <Animated.View >
            <Animated.Text style={[styles.textStyle, conditionalStyle()]}>
                {counter}
            </Animated.Text>
        </Animated.View>
    );
}

const styles = {
    textStyle: {
        fontSize: 46,
        fontWeight:'bold',
    }
};
