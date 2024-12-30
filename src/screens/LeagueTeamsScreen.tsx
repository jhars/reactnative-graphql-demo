import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import TeamsList from '../components/TeamsList';
import {fetchTeamsByUserAction} from '../actions/teamsAction';
import {fetchTeamsByLeagueAction} from '../actions/teamsByLeagueAction';

export default function LeagueTeamsScreen({route}) {
  const navigation = useNavigation();

  const teamsForUserList = useSelector((state) => state.teamsForUser);
  const currentUser = useSelector((state) => state.currentUserSession);
  const teamsByLeague = useSelector((state) => state.teamsByLeague);

  const [userTeamInLeague, setUserTeamInLeague] = useState(null);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchTeamsByLeagueAction(route.params.league.id))
    navigation.setOptions({
          title: route.params.league.title,
        });
    }, []);

  console.log("= = = =teamsByLeague = = = ");
  console.log(teamsByLeague);


    return (
      <TeamsList teams={teamsByLeague} leagueTitle={route.params.league.title} />
    );
  
}
