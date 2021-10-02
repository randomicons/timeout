import { Text, View } from 'react-native'
import React from 'react'
import Section from '../components/Section'
import { Link } from 'react-router-native'

const Home = () => {
  return (
    <View title="Time Out">
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
      {/*<LearnMoreLinks />*/}
    </View>
  )
}

export default Home
