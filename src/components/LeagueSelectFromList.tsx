import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { Button } from '@react-navigation/elements';
import LeagueRowSelectable from './LeagueRowSelectable';

export default function LeagueSelectFromList({leagues, disabled, teamname}) {

    return(
    	<View>
			{ !disabled &&
				<FlatList
	  			data={leagues}
	  			renderItem={({item}) => <LeagueRowSelectable league={item} disabled={true} teamname={teamname}/>}
				/> 
		    }
    	</View>
    );
}