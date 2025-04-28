import React, {useContext} from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from "../../contexts/UserContext"

export default function HomeScreen() {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <View style={styles.username}>
        <Text style={styles.usernameText}>Welcome, {user?.preferred_username}</Text>  
      </View>

      <View style={styles.myTeams}>
        <Button style={styles.button} onPress={() => navigation.navigate('My Teams')}>
          <Text style={styles.buttonText}>Go to My Teams</Text>
        </Button>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  username: {
    flex: 1,
    marginTop: 25
  },
  usernameText: {
    margin: 10,
    fontSize: 20
  },
  myTeams: {
    height: 100,  
    flexGrow: 1,
  },
  button: {
    backgroundColor: 'darkblue',
  },
  buttonText: {
    color: 'aliceblue',
    fontSize: 20,
    fontWeight: 'bold',
    fontVariant: 'small-caps'
  }
})