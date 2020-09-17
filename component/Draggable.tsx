import React, { useRef,useEffect,useState,useCallback,createRef  } from "react";
import {
    View,
    PanResponder,
    Animated,
    Text,
    ImageBackground,
    StyleSheet

} from "react-native";
import {flexContainerCentered} from "../style/positioning";

export function Draggable (props) {
    const {isFather = false,style,move = false,duration = 2500,onPress,name,Ref,...rest} = props
     // console.log(style)
    const pan = useRef(new Animated.ValueXY()).current;
    const panAux = useRef(new Animated.ValueXY()).current;
    // const [refdrag,setrefdrag] = useState(useRef(null).current);

    const scale = new Animated.Value(1);
    let dimensions = { width: 0, height: 0 };
    let rotate = '0deg';
    useEffect(() => {
         onFloating();
    })

    const onFloating = () => {

        if(move) {
           Animated.loop(
                Animated.sequence([
                    Animated.timing(pan, {
                        toValue: {x: pan.x._value,y: pan.y._value+20},
                        duration: duration,
                        useNativeDriver: true
                    }),
                    Animated.timing(pan, {
                        toValue: {x: pan.x._value,y: pan.y._value},
                        duration: duration,
                        useNativeDriver: true
                    })

                ])

            ).start();
        }

    }
    const onRelease = () => {
        pan.flattenOffset();
        panAux.setValue({x: pan.x._value,y: pan.y._value})
        onPress(name,pan)
        Animated.spring(
            scale,
            { toValue: 1, friction: 3, useNativeDriver: true }
        ).start();
        onFloating()
    }


    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove:Animated.event([
                    null,
                    { dx: pan.x, dy: pan.y }
                ],{ useNativeDriver: false }
            ),
            onPanResponderRelease: () => onRelease(),
            onPanResponderGrant: () => {
                pan.setValue({
                    x: panAux.x._value,
                    y: panAux.y._value,
                });
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value,
                })
                pan.setValue({x: 0, y: 0})
                Animated.spring(
                    scale,
                    { toValue: 1.1, friction: 3 ,useNativeDriver: true}
                ).start();

            }
        })
    ).current;

    const onLayout = (event) => {
        const { width, height } = event.nativeEvent.layout;
        dimensions = {width: width, height:height};
    };

    const styles = StyleSheet.create({
        backgroundImage: {
            width:'100%',
            height:'100%',
            ...flexContainerCentered,
        }
    });
    return (
             <Animated.View ref={Ref}

                onLayout={onLayout}
                style = {[style,{transform: [{ translateX: pan.x }, { translateY: pan.y },{rotate}, {scale}]}]}
                {...panResponder.panHandlers}
            >
                <ImageBackground
                    source={require('../assets/ball.png')}
                    resizeMode = 'cover'
                    style={styles.backgroundImage}
                >
                    {rest.children}
                </ImageBackground>

             </Animated.View>
    );
}

