import { Text, View } from 'react-native'
import React from 'react'
import Section from '../components/Section'
import { Link } from 'react-router-native'
import tw from 'tailwind-react-native-classnames'

const Home = () => {
  return (
    <View title="Time Out">
      <Text style={tw`bg-red-500npm pt-16 mx-auto`}>Welcome to Time Out!</Text>
      <Section>
        <Link to={'/joinLobby'}>
          <Text>Join Lobby</Text>
        </Link>
      </Section>
      <Section>
        <Link to={'/createLobby'}>
          <Text>Create Lobby</Text>
        </Link>
      </Section>
      <Section>
        <Link to={'/lobby'}>
          <Text>Time OUT! </Text>
        </Link>
      </Section>
      <Section>
        <Link to={'/discuss'}>
          <Text>Discuss </Text>
        </Link>
      </Section>
      {/*<LearnMoreLinks />*/}
    </View>
  )
}

export default Home
