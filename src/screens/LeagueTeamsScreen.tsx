import React, {useEffect} from 'react';
// import { View, Text } from 'react-native';
// import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
// import {useDispatch, useSelector} from 'react-redux';
import TeamsList from '../components/TeamsList';
// import {fetchTeamsByUserAction} from '../actions/teamsAction';
// import {fetchTeamsByLeagueAction} from '../actions/teamsByLeagueAction';

//==== GraphQL ========
import { useQuery } from '@apollo/client';
import { GET_TEAM_ROSTER } from '../data/queries';
import { Teams, RosterForTeamVars } from '../types';
//=====================

export default function LeagueTeamsScreen({route}) {
  const navigation = useNavigation();

  // const teamsForUserList = useSelector((state) => state.teamsForUser);
  // const currentUser = useSelector((state) => state.currentUserSession);
  // const teamsByLeague = useSelector((state) => state.teamsByLeague);

  // const [userTeamInLeague, setUserTeamInLeague] = useState(null);

  useEffect(()=>{
    navigation.setOptions({
          title: route.params.league.title,
        });
    }, []);

  console.log("route.params: ")
  console.log(route.params)
  console.log("route.params")
  return (
    <TeamsList teams={route.params.league.teams} leagueTitle={route.params.league.title} />
  );
}
