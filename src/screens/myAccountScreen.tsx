import React, {useEffect} from 'react';
import { View, Text } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import {currentUserAction} from '../actions/currentUserAction';

export default function MyAccountScreen() {
  const { user, signOut } = useAuthenticator();
  const { setupEmail, toForgotPassword} = useAuthenticator(context => [context.user]);
  const { route } = useAuthenticator(context => [context.route]);

  console.log("AWS Cognito User Info (from userAuthenricator):")
  
  console.log("user: ")
  console.log(user)
  
  console.log("route: ")
  console.log(route)
  
  console.log("setupEmail: ")
  console.log(setupEmail)

  console.log("AWS AWS AWS AWS AWS AWS AWS AWS AWS AWS AWS")
  
  // From Global Redux State
  // const currentUser = useSelector((state) => state.currentUserSession);
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //    // dispatch(currentUserAction());
  // }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Email: {"EMAIL PLACEHOLDER"}</Text>
      <Button onPress={signOut}>
        Sign Out
      </Button>

      <Button onPress={setupEmail}>
        Setup Email
      </Button>

      <Button onPress={toForgotPassword}>
        Forgot Password
      </Button>
    </View>
  );
}