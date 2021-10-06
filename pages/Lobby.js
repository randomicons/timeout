import React from 'react'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { Animated, Text, View } from 'react-native'
import { Link } from 'react-router-native'
import tw from 'tailwind-react-native-classnames'
import Timer from "../components/Timer"

const Lobby = () => {

  
  return (
    
        <View>
          <Timer/>
        <Text style={tw`pt-16 text-md  mx-auto`}>Hello</Text>
        <Text style={tw`pt-16 text-md  mx-auto`}>Please Stop Talking and Write Down What You Feel!</Text>

        </View>


      
  )
}

export default Lobby
