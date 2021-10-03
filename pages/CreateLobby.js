import {Button, StyleSheet, TextInput, View} from 'react-native'
import React, {useState} from 'react'
import axios from 'axios'
import {uuid} from 'uuidv4'
import {useHistory} from 'react-router-native'

const CreateLobby = () => {
  const [password, setPassword] = useState('')
  const history = useHistory()
  return (
    <View>
      <TextInput
        styles={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="password"
        secureTextEntry
      />
      <Button
        title={'Create'}
        onClick={async () => {
          history.push(
            await axios.post(
              'https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/timeout-aezpk/service/join_lobby/incoming_webhook/webhook0',
              {userId: uuid()},
            ),
          )
        }}
      />
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
