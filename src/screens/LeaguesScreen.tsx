import React, {useEffect} from 'react';
import { StyleSheet } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchLeaguesAction} from '../actions/leaguesAction';
import {fetchTeamsByUserAction} from '../actions/teamsAction';
import LeaguesList from '../components/LeaguesList';

export default function LeaguesScreen() {
  const leagueList = useSelector((state) => state.allLeagues);
  const currentUser = useSelector((state) => state.currentUserSession);

  const dispatch = useDispatch(); 

  useEffect(()=>{
    dispatch(fetchLeaguesAction())
    dispatch(fetchTeamsByUserAction())
  }, []);

  // there will always be a league list (for now)
  // no need for logic for no leeagues
  return(
    <LeaguesList leagues={leagueList} />
  );
}
