import React, {useContext} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
        <TouchableOpacity style={styles.button} onPress={() => {
          return navigation.navigate('MyTeams', {
            screen: 'UserTeams'
          })
        }}>
          <Text style={styles.buttonText}>Go to My Teams</Text>
        </TouchableOpacity>
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