/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState,useRef,createRef,useEffect} from 'react';


import {
   Button,
   View,
   Text,
    Animated,
    Easing

} from 'react-native';

import {
    globalContainer,
    ballbig,
    globalContainerHeaderDashboard,
    ballsmall, flexContainerDiretionColumn, flexContainerCentered
} from "./style/positioning";
import {accent} from "./style/colors";
import {Draggable} from "./component/Draggable";
import {Counter} from "./component/Counter";


const fatherBall =
    {
        name: 'father',
        total: 8,
        real:5,
        title: 'Consumidos ',
        icon: 'call',
        style: ballbig,
    };
let balls = [
    {
        name: 'ballcall',
        total: 2,
        real:1,
        title: 'MIN',
        icon: 'call',
        style: ballsmall
    },
    {
        name: 'ballsms',
        total: 30,
        real:7,
        title: 'SMS',
        icon: 'sms',
        style: ballsmall
    },
    {
        name: 'balldata',
        total: 10,
        real:1,
        title: 'GB',
        icon: 'data',
        style: ballsmall
    }
]

const App: () => React$Node = () => {
    let refBalls = [];
    const [father,setfather] = useState(useRef().current);
    // let father = useRef(null).current;
    const [isReady, setIsReady] = useState(false);
    const [fatherPosition,setfatherPosition] = useState({radius:80,x:0,y:0});
    const [play,setPlay] = useState(false);
    const [start,setStart] = useState(5);
    const [end,setEnd] = useState(0);
    const [onIncrement,setIncrement] = useState(true);
    const animationValue = new Animated.Value(0);
    const counterAnimation = new Animated.Value(0);
    const shakeMotion = new Animated.Value(0);
    const [counter,setCounter] = useState(1);
    const [open,setOpen] = useState(false);
    const duration = 2500;


    useEffect(() => {

        onloadDragFather();
        // increment(8);



    }, [father]);
    const onloadDragFather = () => {

        if(father) {

            father.measureInWindow((ox,oy,width,height,pageX,pageY)=> {
                fatherPosition.x = pageX;
                fatherPosition.y = pageY;
                let flag = true;
                const total = balls.length;

                balls.forEach((item,index)=>{
                    const value = ((width/2)*total)+(index/Math.random());
                    if(flag)
                    {
                        balls[index].style = {...ballsmall,marginRight:value}
                    }else{

                        balls[index].style = {...ballsmall,marginLeft:value+15}
                    }
                    flag = !flag;
                })
                setIsReady(true);

            })
            // increment(5);
        }
    }

    const getPosition = (ref) => {

        // ref.measureInWindow((ox,oy,width,height) => {
        //     console.log(ox,oy)
        // })

    }

    const isCollition = (ball1,ball2) => {
        var dx = ball1.x - ball2.x;
        var dy = ball1.y - ball2.y;
        var distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < ball1.radius + ball2.radius) {
            // collision detected!
            console.log('toparon')
        }

    }
    const searchCollition = (name,position) => {

        if(name === 'father') {
             fatherPosition.x = position.x._value;
             fatherPosition.y = position.y._value;
            // father.measureInWindow((ox,oy,width,height) => {
            //     console.log(ox,oy)
            // })

        }else{
            const ball = {radius:40,x:position.x._value,y:position.y._value}
            isCollition(fatherPosition,ball);
        }
        animateCounterAnimation(8)



    }



    const onDrag = (name,position) => {
        searchCollition(name,position)
    }

    const increment = (value) => {
        setEnd(start+value)
        console.log(start,end,play,value)
        setIncrement(true);
        setPlay(true);


    }
    const decrement = (value) => {
        setEnd(start+value)
        setIncrement(false);
        setPlay(true);

    }

    const animateCircle = () => {
        if (open) {
            incrementNumber();
        } else {
            Animated.timing(animationValue, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }).start(() => setOpen(true));
        }
    };

    const animateCounterAnimation = (iteration) => {
        Animated.loop(
        Animated.timing(counterAnimation, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true
        }),
            {
                iterations: iteration
            }).start(() => counterAnimation.setValue(0));
    };

    const shakeMotionAnimation = () => {
        Animated.timing(shakeMotion, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true
        }).start(() => shakeMotion.setValue(0));
    };

    const decreaseNumber = () => {
        if (counter > 0) {
            setCounter( counter - 1 );
            animateCounterAnimation();
        } else {
            shakeMotionAnimation();
        }
    };


    const incrementNumber = () => {
        setCounter(counter + 1 );
        animateCounterAnimation();
    };


    return (
      <View style={[globalContainer,{backgroundColor:accent}]}>
          <View style={globalContainerHeaderDashboard}>
              {isReady &&
              balls.map((item,index) => (
                  <Draggable  Ref={(c) =>{refBalls.push(c)}}
                              key={index} name={item.name} isFather={false} move={true} style={[item.style]} onPress={onDrag}>
                      <Text style={{fontWeight:'bold'}}>{item.title.toUpperCase()}</Text>
                  </Draggable>
              ))
              }
              <Draggable Ref={(c)=> setfather(c)}
                          name={'father'} isFather={true}  style={fatherBall.style} onPress={onDrag}>
                  <View style={[flexContainerDiretionColumn,flexContainerCentered,{marginBottom: 20}]}>
                      {/*{play &&*/}
                      {/*  <Counter start={start} end={end} onFinish={(s) => {setStart(s); setPlay(false) }}/>*/}
                      {/*}*/}
                      {/*{!play &&*/}
                      {/*  <Text style={{fontSize:46,fontWeight:'bold'}}>{start}</Text>*/}
                      {/*}*/}
                      <Counter
                          counterAnimation={counterAnimation}
                          shakeMotion={shakeMotion}
                          counter={counter}
                          animationValue={animationValue}
                      />
                      <Text style={{fontSize:16}}> DE {fatherBall.total}</Text>
                      <Text style={{fontSize:16}}> {fatherBall.title.toUpperCase()}</Text>
                  </View>
              </Draggable>


             </View>
      </View>
  );
};



export default App;


