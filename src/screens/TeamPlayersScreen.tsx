import React, {useEffect} from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { StyleSheet, ActivityIndicator, Text } from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import {fetchPlayersForTeamAction} from '../actions/playersForTeamAction';
import TeamPlayersList from '../components/TeamPlayersList';
// import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

//==== GraphQL ========
import { useQuery } from '@apollo/client';
import { GET_TEAM_ROSTER } from '../data/queries';
import { Teams, RosterForTeamVars } from '../types';
//=====================

export default function TeamPlayerScreen({route}) {
  const navigation = useNavigation();

  //JH-NOTE: Query with parameters here...

  const { loading, error, data } = useQuery<Teams>(GET_TEAM_ROSTER, {
    variables: { teamsId: 23 }
  });

  if (loading) return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;

	// const teamPlayerList = useSelector((state) => state.playersForTeam);
	// const dispatch = useDispatch();

  console.log("= = = = route = = = ");
  console.log(route);

	useEffect(()=>{
    // dispatch(fetchPlayersForTeamAction(route.params.team.id))
    navigation.setOptions({
          title: route.params.team.name,
        });
	}, []);

	// return(
	// 	<TeamPlayersList players={teamPlayerList}/>
	// );
  console.log("+++ data?.team.roster +++")
  console.log(data?.team.roster)
  console.log("+++++++++++++++++")
  return(
    <TeamPlayersList players={data?.team.roster}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
