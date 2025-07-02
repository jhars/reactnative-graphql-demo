import { useQuery } from "@apollo/client";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useContext, useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { UserContext } from "../../../contexts/UserContext";
import { GET_TEAMS } from "../../../data/queries";
import { TeamsData } from "../../../data/types";
import { ButtonStyles, ContainerStyles } from "../../../styles/index";
import TeamsList from "../components/TeamsList";

export default function MyTeamsScreen() {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);

  useEffect(() => {
    navigation.setOptions({
      title: "My Teams",
      initialRouteName: "MyTeams",
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, []),
  );

  //==== GraphQL ========
  const { loading, error, data, refetch } = useQuery<TeamsData>(GET_TEAMS, {
    variables: { ownerId: user?.id },
  });

  if (loading)
    return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;
  //=====================

  return (
    <View style={ContainerStyles.container}>
      <TeamsList teams={data?.teams} myTeams={true} />
      <View style={styles.footer}>
        <TouchableOpacity
          style={ButtonStyles.actionButton}
          onPress={() => {
            return navigation.navigate("CreateTeam", {
              screen: "SelectLeagueFromList",
              path: "MyTeams",
            });
          }}
        >
          <Text style={ButtonStyles.actionButtonText}>Add New Team</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    // height: 100,
    justifyContent: "flex-end",
  },
});
