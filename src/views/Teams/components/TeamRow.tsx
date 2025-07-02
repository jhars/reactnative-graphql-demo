import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Team } from "../../../data/types";
import { ButtonStyles, ContainerStyles } from "../../../styles/index";

interface TeamRowProps {
  team: Team;
  myTeam: boolean;
}

const TeamRow = ({ team, myTeam }: TeamRowProps) => {
  const navigation = useNavigation();

  // const {
  // 	name
  // } = team;

  return (
    <View style={ContainerStyles.container}>
      <TouchableOpacity
        style={ButtonStyles.primaryButton}
        onPress={() => {
          //JH-NOTE: should try to handle more cleanly
          const navStack = myTeam ? "MyTeams" : "Leagues";
          const screen = myTeam ? "TeamHomeScreen" : "RosterScreen";
          return navigation.navigate(navStack, {
            screen: screen,
            params: { team: team, myTeam: myTeam },
          });
        }}
      >
        <Text style={ButtonStyles.primaryButtonText}>{team.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TeamRow;
