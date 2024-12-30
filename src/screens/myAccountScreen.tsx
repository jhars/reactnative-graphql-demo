import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import {currentUserAction} from '../actions/currentUserAction';
import {useDispatch, useSelector} from 'react-redux';

export default function MyAccountScreen() {
  const { signOut } = useAuthenticator();
  
  // From Global Redux State
  const currentUser = useSelector((state) => state.currentUserSession);

  const dispatch = useDispatch();

  useEffect(()=>{
     // dispatch(currentUserAction());
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Email: {currentUser.email}</Text>
      <Button onPress={signOut}>
        Sign Out
      </Button>
    </View>
  );
}