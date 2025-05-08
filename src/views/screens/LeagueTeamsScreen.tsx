import React, {useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import TeamsList from '../components/TeamsList';
import { LeagueTeamsScreenRouteProps, BaseNavigationProps } from '../../navigation/navTypes';
import { ButtonStyles, ContainerStyles } from '../styles/index';

export default function LeagueTeamsScreen() {
  const navigation = useNavigation<BaseNavigationProps>();
  const route = useRoute<LeagueTeamsScreenRouteProps>();

  const { league } = route.params

  useEffect(()=>{
    navigation.setOptions({
      title: league.title,
    });
  }, []);

  return (
    <View style={ContainerStyles.container}>
      <TeamsList teams={league.teams} myTeams={false}/>
      <View style={styles.footer}>
        <TouchableOpacity style={ButtonStyles.actionButton} onPress={() => {
          return navigation.navigate('CreateTeam',{
            screen: 'CreateNewTeamConfirmation',
            params: {
              leagueID: league.id, 
              leagueTitle: league.title,
            },
            path: 'Leagues'
        })
        }}>
          <Text style={ButtonStyles.actionButtonText}>Join {league.title}</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 100,  
    justifyContent: 'flex-end',
    flexGrow: 1,
    paddingBottom: 100
  },
});
