import { StatusBar } from 'expo-status-bar';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { authenticate } from './firebaseConfig';

export default function App() {
  const [token, setToken] = useState("")

  // const email = "mustafazirhli98@gmail.com"
  // const password = "123456789"
  // useEffect(() => {
  //   const login = async () => {
  //     await signInWithEmailAndPassword(authenticate, email, password).then((UserCredentials) => {
  //       setToken(UserCredentials.user)
  //     }).catch((error) => {
  //       console.log(error)
  //     });
  //   }
  //   login()
  // }
  //   , [])

  const createUser = () => {
    const email = "123456@gmail.com"
    const password = "123456789"
    createUserWithEmailAndPassword(authenticate, email, password).then((UserCredentials) => {
      setToken(UserCredentials._tokenResponse.idToken)
    }).catch((error) => {
      console.log(error)
    })
  }

  const logOut = () => {
    setToken("")
  }

  return (
    <View style={styles.container}>
      <Text>{token ? "login" : "logged out"}</Text>
      <Button title={token ? "logout" : "Sign Up"} onPress={token ? logOut : createUser} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
