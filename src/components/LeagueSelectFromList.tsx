import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { Button } from '@react-navigation/elements';
import LeagueRowSelectable from './LeagueRowSelectable';

export default function LeagueSelectFromList({leagues}) {

    return(
    	<View>
  			<FlatList
  				data={leagues}
  				renderItem={({item}) => <LeagueRowSelectable league={item} />}
  			/> 
    	</View>
    );
}