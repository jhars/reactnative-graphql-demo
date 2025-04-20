import React, {useEffect} from 'react';
import { View, Text, Pressable } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { useAuthenticator } from '@aws-amplify/ui-react-native';


export default function HomeScreen() {
  const navigation = useNavigation();

  const {user} = useAuthenticator((context) => [context.user]);

  // console.log("AWS Cognito User (from userAuthenricator):")
  // console.log(user)
  // console.log("AWS AWS AWS AWS AWS AWS AWS AWS AWS AWS AWS")

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome, {user.username}</Text>
      <Button onPress={() => navigation.navigate('MyTeams')}>
        Go to My Teams
      </Button>
    </View>
  );
}