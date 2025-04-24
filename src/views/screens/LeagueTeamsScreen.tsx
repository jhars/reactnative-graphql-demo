import React, {useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import TeamsList from '../components/TeamsList';

export default function LeagueTeamsScreen({route}) {
  const navigation = useNavigation();

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
        <Button onPress={() => navigation.navigate('My Teams',{
          screen: 'CreateNewTeamConfirmation',
          params: {
            leagueID: league.id, 
            leagueName: league.title
          }})}>
          Join {league.title}
        </Button>
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
  }
  
});
