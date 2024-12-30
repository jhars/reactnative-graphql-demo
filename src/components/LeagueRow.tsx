import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Button } from '@react-navigation/elements';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const LeagueRow = ({league}) => {
  const navigation = useNavigation();

	const {
		title
	} = league;

	return(
		<View style={styles.container}>
      <Button onPress={() => navigation.navigate('LeagueTeamsScreen', {league: league, name: league.title})}>{title}</Button>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    paddingTop:25,
    padding:5,
  },
});

export default LeagueRow;