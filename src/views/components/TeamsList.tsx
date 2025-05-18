import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import TeamRow from './TeamRow';
import { Team } from '../../data/types';

interface TeamListProps {
	teams: Team[] | undefined,
	myTeams: boolean
}

export default function TeamsList({teams, myTeams}: TeamListProps) {

 	return(
	    <View style={styles.container}>
	      <FlatList
	        data={teams}
	        renderItem={({item}) => <TeamRow team={item} myTeam={myTeams}/>}
	      />
	    </View>
  	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
