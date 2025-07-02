import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Team } from "../../../data/types";
import TeamRow from "./TeamRow";

interface TeamListProps {
  teams: Team[] | undefined;
  myTeams: boolean;
}

export default function TeamsList({ teams, myTeams }: TeamListProps) {
  return (
    <View style={styles.container}>
      <FlatList
        data={teams}
        renderItem={({ item }) => <TeamRow team={item} myTeam={myTeams} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
