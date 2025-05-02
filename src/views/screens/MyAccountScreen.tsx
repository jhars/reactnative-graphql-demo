import React, {useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { UserContext } from "../../contexts/UserContext"

export default function MyAccountScreen() {
  const { signOut } = useAuthenticator();
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <View style={styles.userData}>
        <Text style={styles.userRow}>Email: {user?.email}</Text>
        <Text style={styles.userRow}>Username: {user?.preferred_username}</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={signOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  userData: {
    flex: 1,
    marginTop: 25
  },
  userRow: {
    margin: 10,
    fontSize: 20
  },
  footer: {
    height: 100,  
    justifyContent: 'flex-end',
    flexGrow: 1,
    paddingBottom: 50
  },
  button: {
    backgroundColor: 'darkblue',
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: 'aliceblue',
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
  }
})


