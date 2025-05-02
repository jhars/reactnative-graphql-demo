import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LeagueRowSelectable from './LeagueRowSelectable';
import { League } from '../../data/types';

interface LeagueSelectFromListProps {
  leagues: League[] | undefined
}

export default function LeagueSelectFromList({leagues}: LeagueSelectFromListProps) {
  return(
  	<View style={styles.container}>
			<FlatList
				data={leagues}
				renderItem={({item}) => <LeagueRowSelectable league={item} />}
			/> 
  	</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})