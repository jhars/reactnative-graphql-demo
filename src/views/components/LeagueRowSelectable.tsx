import React, {useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { League } from '../../data/types';
import { BaseNavigationProps } from '../../navigation/types';

interface LeagueRowSelectableProps {
  league: League
}

const LeagueRowSelectable = ({league}: LeagueRowSelectableProps) => {
  const {navigate} = useNavigation<BaseNavigationProps>();

	return(
		<View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => {
          return navigate('CreateTeam', {
            screen: 'CreateNewTeamConfirmation',
            params: {leagueID: Number(league.id), leagueTitle: league.title},
            path: 'SelectLeagueFromList'
          })}
        }>
          <Text style={styles.buttonText}>{league.title}</Text>
        </TouchableOpacity>
  		
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:5,
  },
  button: {
    flex: 1,
    backgroundColor: 'darkblue',
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: 'aliceblue',
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 25
  }
});

export default LeagueRowSelectable;