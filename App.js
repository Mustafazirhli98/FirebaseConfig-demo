import { StatusBar } from 'expo-status-bar';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { authenticate } from './firebaseConfig';

export default function App() {
  const [user, setUser] = useState(null)

  const auth = authenticate
  const email = "mustafazirhli98@gmail.com"
  const password = "123456789"

  useEffect(() => {
    signInWithEmailAndPassword(auth, email, password).then((UserCredential) => {
      setUser(UserCredential.user)
    }).catch((error) => {
      setUser(error.message)
    });
  }, [])
  console.log(user)

  return (
    <View style={styles.container}>
      <Text>{user ? "login" : "log out"}</Text>
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
