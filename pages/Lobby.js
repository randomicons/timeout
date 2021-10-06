import React from 'react'
import { Text, View, ViewComponent } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Timer from "../components/Timer"
import { Link } from "react-router-native";

const Lobby = () => {

  
  return (
   
    <View>
          
          <Text style={tw`pt-16  mx-auto`}>Hello</Text>
          <Text style={tw`pt-16  mx-auto`}>Please Stop Talking and Write Down What You Feel!</Text>
          <Timer style={tw`mx-auto pt-12`}/>
    </View>


      
  )
}

export default Lobby
