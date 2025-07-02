import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ButtonStyles, ContainerStyles } from "../../../styles/index";
import { League } from "../../data/types";

interface LeagueRowProps {
  league: League;
}

const LeagueRow = ({ league }: LeagueRowProps) => {
  const navigation = useNavigation();

  return (
    <View style={ContainerStyles.container}>
      <TouchableOpacity
        style={ButtonStyles.secondaryButton}
        onPress={() => {
          return navigation.navigate("Leagues", {
            screen: "LeagueTeamsScreen",
            params: { league: league },
          });
        }}
      >
        <Text style={ButtonStyles.secondaryButtonText}>{league.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LeagueRow;
