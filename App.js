/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { Node } from 'react'
import React from 'react'
import { SafeAreaView, ScrollView, useColorScheme } from 'react-native'

import { Colors } from 'react-native/Libraries/NewAppScreen'
import { NativeRouter, Route } from 'react-router-native'
import tw from 'tailwind-react-native-classnames';


//Pages
import Home from './pages/Home'
import CreateLobby from './pages/CreateLobby'
import JoinLobby from './pages/JoinLobby'
import Lobby from './pages/Lobby'
import Discuss from './pages/Discuss'


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'light'

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
          <Route path={'/joinLobby'} component={JoinLobby} />
          <Route path={'/lobby'} component={Lobby} />
          <Route path={'/discuss'} component={Discuss} />
          <Route path={'/discuss'} component={Discuss} />
        </NativeRouter>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
