import { Button, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const JoinLobby = () => {
  const [password, setPassword] = useState('')
  const [lobbyId, setLobbyId] = useState('')
  return (
    <View>
      <TextInput
        styles={styles.input}
        value={lobbyId}
        onChangeText={setLobbyId}
        placeholder="lobby id"
      />
      <TextInput
        styles={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="password"
        secureTextEntry
      />
      <Button title={'Join'} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

export default JoinLobby
