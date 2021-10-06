import { Button, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'react-router-native'


const CreateLobby = () => {
  const [password, setPassword] = useState('')
  return (
    <View>
      <TextInput
        styles={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="password"
        secureTextEntry
      />
      <Button class="button" title={'Create'} />

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
  button:{justifyContent:'center'},
})

export default CreateLobby
