import React from "react";
import { FlatList, View } from "react-native";
import { ContainerStyles } from "../../../styles/index";
import { League } from "../../data/types";
import LeagueRowSelectable from "./LeagueRowSelectable";

interface LeagueSelectFromListProps {
  leagues: League[] | undefined;
}

export default function LeagueSelectFromList({
  leagues,
}: LeagueSelectFromListProps) {
  return (
    <View style={ContainerStyles.container}>
      <FlatList
        data={leagues}
        renderItem={({ item }) => <LeagueRowSelectable league={item} />}
      />
    </View>
  );
}
