import { Button, Text, View } from "react-native"
import { StyleSheet } from "react-native";
import React from "react";
import tw from 'tailwind-react-native-classnames';
import { Link } from "react-router-native";



const Discuss = () =>{
    return(
        <View>

<Text style={tw`pt-16 mx-auto text-xl bg-white  `}>  Discuss !</Text>

<Link to={'/'}>
          <Text>Back to Home</Text>
</Link>
        </View>

    
    )}





export default Discuss