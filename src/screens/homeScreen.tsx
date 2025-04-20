import React, {useContext} from 'react';
import { View, Text, Pressable } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from "../contexts/UserContext"

export default function HomeScreen() {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome, {user?.preferred_username}</Text>
      <Button onPress={() => navigation.navigate('MyTeams')}>
        Go to My Teams
      </Button>
    </View>
  );
}