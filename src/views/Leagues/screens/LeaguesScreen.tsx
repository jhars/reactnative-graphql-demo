import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import LeagueRow from "../components/LeagueRow";
//==== GraphQL ========
import { useQuery } from "@apollo/client";
import { GET_ALL_LEAGUES } from "../../../data/queries";
import { LeaguesData } from "../../../data/types";
import { ContainerStyles } from "../../../styles/index";
//=====================

export default function LeaguesScreen() {
  useFocusEffect(
    useCallback(() => {
      refetch();
    }, []),
  );
  //==== GraphQL ========
  const { loading, error, data, refetch } =
    useQuery<LeaguesData>(GET_ALL_LEAGUES);
  if (loading)
    return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;
  //=====================

  return (
    <View style={ContainerStyles.container}>
      <FlatList
        data={data?.leagues}
        renderItem={({ item }) => <LeagueRow league={item} />}
      />
    </View>
  );
}
