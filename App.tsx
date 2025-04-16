import 'react-native-gesture-handler';//JH- do i need this here?

import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react-native';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {Provider} from 'react-redux';
import store from './src/reducers/store';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import {Navigation} from './src/navigation'

Amplify.configure(config);

const client = new ApolloClient({
  // uri: 'https://lax-api-04-15d23fe6df01.herokuapp.com/graphql',
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Authenticator.Provider>
          <Authenticator>
            <SafeAreaProvider>
              <Navigation />
            </SafeAreaProvider>      
          </Authenticator>
        </Authenticator.Provider>
      </Provider>
     </ApolloProvider>
  );
}

//can i pass props of user id, username to navigation comppnent?
// function App() {
//   return (
//     <Provider store={store}>
//       <Authenticator.Provider>
//         <Authenticator>
//           <SafeAreaProvider>
//             <Navigation />
//           </SafeAreaProvider>      
//         </Authenticator>
//       </Authenticator.Provider>
//     </Provider>
//   );
// }

export default App;

