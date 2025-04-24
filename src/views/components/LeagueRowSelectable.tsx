import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';

const LeagueRowSelectable = ({league}) => {
  const navigation = useNavigation();

	return(
		<View style={styles.container}>
        <Button onPress={() => navigation.navigate('CreateNewTeamConfirmation', {leagueID: league.id, leagueName: league.title})}>
          {league.title}
        </Button>
  		
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    paddingTop:25,
    padding:5,
  },
});

export default LeagueRowSelectable;