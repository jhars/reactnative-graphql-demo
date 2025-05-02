import React, {useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import TeamsList from '../components/TeamsList';
import { LeagueTeamsScreenRouteProps, BaseNavigationProps } from '../../navigation/types';

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
    <View style={styles.container}>
      <TeamsList teams={league.teams} myTeams={false}/>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => {
          return navigation.navigate('CreateTeam',{
            screen: 'CreateNewTeamConfirmation',
            params: {
              leagueID: league.id, 
              leagueTitle: league.title,
            },
            path: 'Leagues'
        })
        }}>
          <Text style={styles.buttonText}>Join {league.title}</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  footer: {
    height: 100,  
    justifyContent: 'flex-end',
    flexGrow: 1,
    paddingBottom: 100
  },
  button: {
    backgroundColor: 'midnightblue',
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: 'aliceblue',
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingRight: 20,
  }
  
});
