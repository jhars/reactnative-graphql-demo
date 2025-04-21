import React, {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import TeamsList from '../components/TeamsList';

export default function LeagueTeamsScreen({route}) {
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
          title: route.params.league.title,
        });
    }, []);

  return (
    <TeamsList teams={route.params.league.teams} leagueTitle={route.params.league.title} />
  );
}
