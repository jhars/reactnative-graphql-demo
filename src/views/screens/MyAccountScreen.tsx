import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { UserContext } from "../../contexts/UserContext"

export default function MyAccountScreen() {
  const { signOut } = useAuthenticator();
  const { user } = useContext(UserContext);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Email: {user?.email}</Text>
      <Text>Username: {user?.preferred_username}</Text>
      <Button onPress={signOut}>
        Sign Out
      </Button>
    </View>
  );
}