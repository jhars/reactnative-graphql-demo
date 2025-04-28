import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';

const LeagueRowSelectable = ({league}) => {
  const navigation = useNavigation();

	return(
		<View style={styles.container}>
        <Button style={styles.button} onPress={() => navigation.navigate('CreateNewTeamConfirmation', {leagueID: league.id, leagueName: league.title})}>
          <Text style={styles.buttonText}>{league.title}</Text>
        </Button>
  		
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:5,
  },
  button: {
    backgroundColor: 'darkblue',
  },
  buttonText: {
    color: 'aliceblue'
  }
});

export default LeagueRowSelectable;