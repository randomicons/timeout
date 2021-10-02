/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from 'react'
import React from 'react'
import { SafeAreaView, ScrollView, useColorScheme } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import { NativeRouter, Route } from 'react-router-native'
import Home from './pages/Home'
import CreateLobby from './pages/CreateLobby'
import JoinLobby from './pages/JoinLobby'
import Lobby from './pages/Lobby'

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <NativeRouter>
          <Route exact path={'/'} component={Lobby} />
          <Route path={'/createLobby'} component={CreateLobby} />
          <Route path={'/joinLobby'} component={JoinLobby} />
          <Route path={'/lobby/:lobbyId'} component={Home} />
        </NativeRouter>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
