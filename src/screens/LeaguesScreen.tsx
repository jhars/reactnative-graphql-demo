import React, {useEffect} from 'react';
import { StyleSheet, ActivityIndicator, Text } from 'react-native';
import LeaguesList from '../components/LeaguesList';

//==== GraphQL ========
import { useQuery } from '@apollo/client';
import { GET_ALL_LEAGUES } from '../data/queries';
import { Leagues } from '../types';
//=====================

export default function LeaguesScreen() {

  //==== GraphQL ======== 
  const { loading, error, data } = useQuery<Leagues>(GET_ALL_LEAGUES);
  if (loading) return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;
  //=====================

  return(
    <LeaguesList leagues={data?.leagues} />
  );
}
