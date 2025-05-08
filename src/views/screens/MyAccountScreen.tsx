import React, {useContext} from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { UserContext } from "../../contexts/UserContext";
import { ButtonStyles, ContainerStyles } from '../styles/index';

export default function MyAccountScreen() {
  const { signOut } = useAuthenticator();
  const { user } = useContext(UserContext);

  return (
    <View style={ContainerStyles.container}>
      <View style={styles.userData}>
        <Text style={styles.userRow}>Email: {user?.email}</Text>
        <Text style={styles.userRow}>Username: {user?.preferred_username}</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={ButtonStyles.actionButton} onPress={signOut}>
          <Text style={ButtonStyles.actionButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  userData: {
    flex: 1,
    marginTop: 25
  },
  userRow: {
    margin: 10,
    fontSize: 20,
    color: 'white',
  },
  footer: {
    height: 100,  
    justifyContent: 'flex-end',
    flexGrow: 1,
    paddingBottom: 50
  },
})


