import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Team } from '../../data/types';

interface TeamRowProps {
  team: Team,
  myTeam: boolean,
}

const TeamRow = ({team, myTeam}: TeamRowProps) => {
  const navigation = useNavigation();

	const {
		name
	} = team;

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => {
        const navStack = myTeam ? 'MyTeams' : 'Leagues'
        return navigation.navigate(navStack, {
          screen: 'RosterScreen',
          params: { team: team, myTeam: myTeam}
        })
      }}>
        <Text style={styles.buttonText}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:5,
  },
  button: {
    flex: 1,
    backgroundColor: 'steelblue',
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: 'aliceblue',
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 25
  }
});

export default TeamRow;