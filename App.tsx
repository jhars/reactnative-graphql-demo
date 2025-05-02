import 'react-native-gesture-handler';//JH- do i need this here?
import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react-native';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {Navigation} from './src/navigation';
import { UserProvider } from './src/contexts/UserContext';
import "react-native-devsettings";

Amplify.configure(config);

const client = new ApolloClient({
  // uri: 'https://lax-api-04-15d23fe6df01.herokuapp.com/graphql',
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Authenticator.Provider>
        <Authenticator 
          loginMechanisms={['email']}
          signUpAttributes={['preferred_username']}>
          <SafeAreaProvider>
            <UserProvider>
              <Navigation />
            </UserProvider>
          </SafeAreaProvider>      
        </Authenticator>
      </Authenticator.Provider>
     </ApolloProvider>
  );
}

export default App;

