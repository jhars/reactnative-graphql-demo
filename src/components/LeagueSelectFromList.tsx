import React, {useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import {useDispatch, useSelector} from 'react-redux';
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