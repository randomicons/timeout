/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from 'react'
import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import { NativeRouter, Route } from 'react-router-native'
import Home from './pages/Home'
import CreateLobby from "./pages/CreateLobby";

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
          <Route exact path={'/'} component={Home} />
          <Route path={'/createLobby'} component={CreateLobby} />
          <Route path={'/joinLobby'} component={Home} />
          <Route path={'/lobby/:lobbyId'} component={Home} />
        </NativeRouter>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
