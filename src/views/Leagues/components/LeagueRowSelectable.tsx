import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ButtonStyles, ContainerStyles } from "../../../styles/index";
import { League } from "../../data/types";
import { BaseNavigationProps } from "../../navigation/navTypes";

interface LeagueRowSelectableProps {
  league: League;
}

const LeagueRowSelectable = ({ league }: LeagueRowSelectableProps) => {
  const { navigate } = useNavigation<BaseNavigationProps>();

  return (
    <View style={ContainerStyles.container}>
      <TouchableOpacity
        style={ButtonStyles.secondaryButton}
        onPress={() => {
          return navigate("CreateTeam", {
            screen: "CreateNewTeamConfirmation",
            params: { leagueID: Number(league.id), leagueTitle: league.title },
            path: "SelectLeagueFromList",
          });
        }}
      >
        <Text style={ButtonStyles.secondaryButtonText}>{league.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LeagueRowSelectable;
