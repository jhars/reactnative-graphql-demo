import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TeamHomeScreenRouteProp } from "../../../navigation/navTypes";
import { ButtonStyles, ContainerStyles } from "../../../styles/index";

export default function TeamHomeScreen() {
  const navigation = useNavigation();
  const route = useRoute<TeamHomeScreenRouteProp>();

  useEffect(() => {
    navigation.setOptions({
      title: "Team Home",
      headerLeft: () => (
        <HeaderBackButton
          displayMode={"minimal"}
          onPress={() => {
            navigation.navigate("UserTeams");
          }}
        />
      ),
    });
  }, []);

  return (
    <View style={ContainerStyles.container}>
      <View style={styles.actionRow}>
        <TouchableOpacity
          style={ButtonStyles.primaryButton}
          onPress={() => {
            return navigation.navigate("MyTeams", {
              screen: "RosterScreen",
              params: {
                team: route?.params?.team,
                myTeam: route?.params?.myTeam,
              },
            });
          }}
        >
          <Text style={ButtonStyles.primaryButtonText}>
            Go to {route?.params?.team.name} Roster
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionRow}>
        <TouchableOpacity
          style={ButtonStyles.primaryButton}
          onPress={() => {
            return navigation.navigate("LiveDraft", {
              screen: "LiveDraftHomeScreen",
              // path: 'TeamHomeScreen'
              path: "MyTeams",
            });
          }}
        >
          <Text style={ButtonStyles.primaryButtonText}>
            Go to {route?.params?.team.name} Live Draft
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actionRow: {
    padding: 5,
  },
});
