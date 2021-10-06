import { Button, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'react-router-native'
import tw from 'tailwind-react-native-classnames'


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
      <Button style={tw`p-16`}title={'Create'} />

    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    paddingTop:50
  },
  button:{justifyContent:'center'},
})

export default CreateLobby
