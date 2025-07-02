import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import LeagueSelectFromList from "../components/LeagueSelectFromList";
//==== GraphQL ========
import { useQuery } from "@apollo/client";
import { GET_ALL_LEAGUES } from "../../../data/queries";
import { LeaguesData } from "../../../data/types";
//=====================
import { BaseNavigationProps } from "../../../navigation/navTypes";
import { ContainerStyles } from "../../../styles/index";

export default function SelectLeagueFromList() {
  const navigation = useNavigation<BaseNavigationProps>();

  useEffect(() => {
    navigation.setOptions({
      title: "Select League to Join",
      headerLeft: () => (
        <HeaderBackButton
          displayMode={"minimal"}
          onPress={() => {
            navigation.navigate("MyTeams");
          }}
        />
      ),
    });
  }, []);

  //==== GraphQL ========
  const { loading, error, data } = useQuery<LeaguesData>(GET_ALL_LEAGUES);
  if (loading)
    return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;
  //=====================

  return (
    <View style={ContainerStyles.container}>
      <LeagueSelectFromList leagues={data?.leagues} />
    </View>
  );
}
