import React, {useEffect} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { League } from '../../data/types';
import { BaseNavigationProps } from '../../navigation/navTypes';
import { ButtonStyles, ContainerStyles } from '../styles/index';

interface LeagueRowSelectableProps {
  league: League
}

const LeagueRowSelectable = ({league}: LeagueRowSelectableProps) => {
  const {navigate} = useNavigation<BaseNavigationProps>();

	return(
		<View style={ContainerStyles.container}>
        <TouchableOpacity style={ButtonStyles.secondaryButton} onPress={() => {
          return navigate('CreateTeam', {
            screen: 'CreateNewTeamConfirmation',
            params: {leagueID: Number(league.id), leagueTitle: league.title},
            path: 'SelectLeagueFromList'
          })}
        }>
          <Text style={ButtonStyles.secondaryButtonText}>{league.title}</Text>
        </TouchableOpacity>
  		
		</View>
	);
}

export default LeagueRowSelectable;