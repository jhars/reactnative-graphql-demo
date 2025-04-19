import React, {useEffect} from 'react';
import { StyleSheet, ActivityIndicator, Text } from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import {fetchLeaguesAction} from '../actions/leaguesAction';
// import {fetchTeamsByUserAction} from '../actions/teamsAction';
import LeaguesList from '../components/LeaguesList';

//==== GraphQL ========
import { useQuery } from '@apollo/client';
import { GET_ALL_LEAGUES } from '../data/queries';
import { Leagues } from '../types';
//=====================

export default function LeaguesScreen() {
  // const leagueList = useSelector((state) => state.allLeagues);
  // const currentUser = useSelector((state) => state.currentUserSession);

  // const dispatch = useDispatch(); 

  // useEffect(()=>{
  //   dispatch(fetchLeaguesAction())
  //   dispatch(fetchTeamsByUserAction())
  // }, []);

  //==== GraphQL ======== 
  const { loading, error, data } = useQuery<Leagues>(GET_ALL_LEAGUES);
  if (loading) return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;
  //=====================

  //JH-NOTE: logic for no leeagues

  return(
    <LeaguesList leagues={data?.leagues} />
  );
}
