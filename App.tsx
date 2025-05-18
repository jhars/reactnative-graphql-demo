// import 'react-native-gesture-handler';//JH- do i need this here?
import React from 'react';
import { View, Text } from 'react-native';
// import { 
//   Authenticator,   
//   defaultDarkModeOverride,
// } from '@aws-amplify/ui-react-native';

import { 
  defaultDarkModeOverride,
  ThemeProvider,
  Authenticator
} from '@aws-amplify/ui-react-native';

import { Amplify } from 'aws-amplify';
import config from './aws-exports';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {Navigation} from './src/navigation';
import { UserProvider } from './src/contexts/UserContext';
import "react-native-devsettings";


Amplify.configure(config);

const client = new ApolloClient({
    uri: 'https://lax-api-04-15d23fe6df01.herokuapp.com/graphql',
  cache: new InMemoryCache()
});
 // <Navigation />
// function App() {
//   return (
//     <ApolloProvider client={client}>
//             <SafeAreaProvider>
//               <UserProvider>
//                {/*<View><Text>Hello World</Text></View>*/}
//                <Navigation />
//               </UserProvider>
//             </SafeAreaProvider>      
//      </ApolloProvider>
//   );
// }

function App() {
  return (
    <ApolloProvider client={client}>
       <ThemeProvider
            colorMode={'dark'}
            theme={{ overrides: [defaultDarkModeOverride]}}>

        <Authenticator.Provider>
          <Authenticator
            Container={(props) => (
              <Authenticator.Container
                {...props}
                style={{ 
                  backgroundColor: 'rgba(6 6 48 / 1.0)',
                }}
              />
            )}
            loginMechanisms={['email']}
            signUpAttributes={['preferred_username']}>

            <SafeAreaProvider>
              <UserProvider>
                <Navigation />
              </UserProvider>
            </SafeAreaProvider>      

          </Authenticator>
          </Authenticator.Provider>
        </ThemeProvider>
     </ApolloProvider>
  );
}

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <ThemeProvider
//         colorMode={'dark'}
//         theme={{ overrides: [defaultDarkModeOverride]}}>
//         <Authenticator.Provider>
//           <Authenticator 
//             Container={(props) => (
//               <Authenticator.Container
//                 {...props}
//                 style={{ 
//                   backgroundColor: 'rgba(6 6 48 / 1.0)',
//                 }}
//               />
//             )}
//             loginMechanisms={['email']}
//             signUpAttributes={['preferred_username']}>
//             <SafeAreaProvider>
//               <UserProvider>
//                 <Navigation />
//               </UserProvider>
//             </SafeAreaProvider>      
//           </Authenticator>
//         </Authenticator.Provider>
//       </ThemeProvider>
//      </ApolloProvider>
//   );
// }

export default App;

