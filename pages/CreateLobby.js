import { Button, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const CreateLobby = () => {
  const [password, setPassword] = useState('')
  return (
    <View>
      <TextInput
        styles={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="password"
      />
      <Button title={'Create'} />
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

export default CreateLobby
