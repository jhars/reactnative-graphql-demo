import React, {useEffect, useCallback} from 'react';
import { StyleSheet, ActivityIndicator, Text } from 'react-native';
import RosterList from '../components/RosterList';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

//==== GraphQL ========
import { useQuery } from '@apollo/client';
import { GET_TEAM_ROSTER } from '../../data/queries';
import { Roster } from '../../data/types';
//=====================

export default function RosterScreen({route}) {
  const navigation = useNavigation();

  const { team, myTeam } = route.params

  useEffect(()=>{
    navigation.setOptions({
          title: team.name,
        });
    // JH-NOTE: not sure if this refetch is necessary anymore
    // refetch()
  }, []);

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      refetch()
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
    )

  //JH-NOTE: Query with parameters here...
  const { loading, error, data, refetch } = useQuery<Roster>(GET_TEAM_ROSTER, {
    variables: { teamId: Number(team.id) }
  });

  if (loading) return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;

  const roster = data?.roster
  console.log("roster: ")
  console.log(roster)
  console.log("========")

  return(
    <RosterList roster={roster} myTeam={myTeam} />
  );
}
