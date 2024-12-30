import React, {useEffect} from 'react';
import { View, Text, Pressable } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';//JH: should i dispatch a signout action?
import { useAuthenticator } from '@aws-amplify/ui-react-native';


export default function HomeScreen() {
  const navigation = useNavigation();

  const {user} = useAuthenticator((context) => context.user);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome, {user.username}</Text>
      <Button onPress={() => navigation.navigate('MyTeams')}>
        Go to My Teams
      </Button>
    </View>
  );
}