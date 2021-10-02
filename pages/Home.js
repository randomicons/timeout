import { Button, View } from 'react-native'
import React from 'react'
import Section from '../components/Section'

const Home = () => {
  return (
    <View title="Time Out">
      <Section>
        <Button title={'Join Lobby'} onClick={() => {
        }} />
      </Section>
      <Section>
        <Button title={'Create Lobby'} onClick={() => {
        }} />
      </Section>
      {/*<LearnMoreLinks />*/}
    </View>
  )
}

export default Home
