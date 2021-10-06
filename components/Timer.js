import React from 'react'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { Animated, Text, View } from 'react-native'
import { Link } from 'react-router-native'
import tw from 'tailwind-react-native-classnames'

const Timer = () =>{
    return(
        
<CountdownCircleTimer 
      isPlaying
      duration={60}
      colors={[
        ['#004777', 0.4],
        ['#f7b801', 0.4],
        ['#A30000', 0.2],
       
      ]}>
      {({ remainingTime, animatedColor }) => (
        <View>
          <Text style={{ fontSize: 100, }}>&#128148;</Text>
          <Animated.Text style={{ color: animatedColor }}>
            {remainingTime}
          </Animated.Text>
        </View>
      
      )}
    </CountdownCircleTimer>
    
    )}

export default Timer