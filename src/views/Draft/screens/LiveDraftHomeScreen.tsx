import { HeaderBackButton } from "@react-navigation/elements";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { UserContext } from "../../../contexts/UserContext";
import {
  BaseNavigationProps,
  TeamHomeScreenRouteProp,
} from "../../../navigation/navTypes";
import { ButtonStyles, ContainerStyles } from "../../../styles/index";
import { CountdownComponent } from "../components/CountdownComponent";

export default function LiveDraftHomeScreen() {
  const { navigate, setOptions } = useNavigation<BaseNavigationProps>();
  const { params, path } = useRoute<TeamHomeScreenRouteProp>();
  const { user } = useContext(UserContext);

  useEffect(() => {
    setOptions({
      title: "Live Draft Screen",
      headerLeft: () => (
        <HeaderBackButton
          displayMode={"minimal"}
          onPress={() => {
            // navigation.navigate('UserTeams')
            return navigate(path as never);
          }}
        />
      ),
    });
  }, []);

  return (
    <View style={ContainerStyles.container}>
      <View style={styles.username}>
        <Text style={styles.usernameText}>
          Welcome to the Draft, {user?.preferred_username}
        </Text>
      </View>

      {useIsFocused() ? <CountdownComponent /> : null}

      <View style={styles.myTeams}>
        <TouchableOpacity
          style={[ButtonStyles.primaryButton]}
          onPress={() => {
            console.log("view available players");
          }}
        >
          <Text style={ButtonStyles.primaryButtonText}>
            View Available Players
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  countdown: {
    flex: 1,
    marginTop: 25,
  },
  countdownText: {
    margin: 10,
    fontSize: 20,
    color: "white",
  },
  username: {
    flex: 1,
    marginTop: 25,
  },
  usernameText: {
    margin: 10,
    fontSize: 20,
    color: "white",
  },
  myTeams: {
    height: 100,
    flexGrow: 1,
    padding: 10,
  },
});
