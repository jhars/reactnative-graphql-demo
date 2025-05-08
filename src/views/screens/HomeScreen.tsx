import React, {useContext} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from "../../contexts/UserContext"
import { ButtonStyles, ContainerStyles } from '../styles/index';

export default function HomeScreen() {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);

  return (
    <View style={ContainerStyles.container}>
      <View style={styles.username}>
        <Text style={styles.usernameText}>Welcome, {user?.preferred_username}</Text>  
      </View>

      <View style={styles.myTeams}>
        <TouchableOpacity style={[ButtonStyles.primaryButton]} onPress={() => {
          return navigation.navigate('MyTeams', {
            screen: 'UserTeams'
          })
        }}>
          <Text style={ButtonStyles.primaryButtonText}>Go to My Teams</Text>
        </TouchableOpacity>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  username: {
    flex: 1,
    marginTop: 25,
  },
  usernameText: {
    margin: 10,
    fontSize: 20,
    color: 'white',
  },
  myTeams: {
    height: 100,  
    flexGrow: 1,
    padding: 10,
  },
})