import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Team } from '../../data/types';
import { ButtonStyles, ContainerStyles } from '../styles/index';


interface TeamRowProps {
	team: Team,
	myTeam: boolean,
}

const TeamRow = ({team, myTeam}: TeamRowProps) => {
	const navigation = useNavigation();

	return(
		<View style={ContainerStyles.container}>
			<TouchableOpacity style={ButtonStyles.primaryButton} onPress={() => {
				const navStack = myTeam ? 'MyTeams' : 'Leagues'
				return navigation.navigate(navStack, {
					screen: 'RosterScreen',
					params: { team: team, myTeam: myTeam}
				})
			}}>
				<Text style={ButtonStyles.primaryButtonText}>{team.name}</Text>
			</TouchableOpacity>
		</View>
	);
}

export default TeamRow;