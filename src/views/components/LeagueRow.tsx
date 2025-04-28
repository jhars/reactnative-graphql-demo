import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';

const LeagueRow = ({league}) => {
  const navigation = useNavigation();

	const {
		title
	} = league;

	return(
		<View style={styles.container}>
      <Button style={styles.button} onPress={() => navigation.navigate('LeagueTeamsScreen', {league: league, name: league.title})}>
      	<Text style={styles.buttonText}>{title}</Text>
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
    backgroundColor: 'steelblue',
  },
  buttonText: {
    color: 'aliceblue'
  }
});

export default LeagueRow;