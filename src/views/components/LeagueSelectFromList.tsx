import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import LeagueRowSelectable from './LeagueRowSelectable';
import { League } from '../../data/types';
import { ContainerStyles } from '../styles/index';

interface LeagueSelectFromListProps {
  leagues: League[] | undefined
}

export default function LeagueSelectFromList({leagues}: LeagueSelectFromListProps) {
  return(
  	<View style={ContainerStyles.container}>
			<FlatList
				data={leagues}
				renderItem={({item}) => <LeagueRowSelectable league={item} />}
			/> 
  	</View>
  );
}