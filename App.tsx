import React from "react";
import { Image, Platform, View } from "react-native";

import {
  Authenticator,
  defaultDarkModeOverride,
  ThemeProvider,
} from "@aws-amplify/ui-react-native";

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { Amplify } from "aws-amplify";
import "react-native-devsettings";
import { SafeAreaProvider } from "react-native-safe-area-context";
import awsmobile from "./aws-exports";
import { UserProvider } from "./src/contexts/UserContext";
import { Navigation } from "./src/navigation";

import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";

Amplify.configure(awsmobile);

const isAndroidLocalDev =
  // eslint-disable-next-line eqeqeq
  process.env.EXPO_PUBLIC_APP_VARIANT == "development" &&
  Platform.OS === "android";

const ApiUrl = isAndroidLocalDev
  ? process.env.EXPO_PUBLIC_ANDROID_LOCAL_API_URL
  : process.env.EXPO_PUBLIC_LAXFAN_API_URL;

const httpLink = new HttpLink({
  uri: ApiUrl,
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: `${ApiUrl}/subscriptions`,
  }),
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider
        colorMode={"dark"}
        theme={{ overrides: [defaultDarkModeOverride] }}
      >
        <Authenticator.Provider>
          <Authenticator
            Container={(props) => (
              <Authenticator.Container
                {...props}
                style={{
                  backgroundColor: "rgba(6 6 48 / 1.0)",
                }}
              />
            )}
            Header={() => {
              return (
                <View>
                  <Image
                    source={require("./assets/images/laxFan-Logo-01.png")}
                    style={{
                      alignSelf: "center",
                      resizeMode: "contain",
                      width: 250,
                      height: 250,
                    }}
                  />
                </View>
              );
            }}
            loginMechanisms={["email"]}
            signUpAttributes={[
              "preferred_username",
              "given_name",
              "family_name",
            ]}
          >
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

export default App;
