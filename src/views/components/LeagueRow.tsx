import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { League } from '../../data/types';

interface LeagueRowProps {
  league: League
}

const LeagueRow = ({league}: LeagueRowProps) => {
  const navigation = useNavigation();

    return(
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button} 
          onPress={() => {
          return navigation.navigate('Leagues',{
            screen: 'LeagueTeamsScreen',
            params: {league: league}
          })
        }}>
          <Text style={styles.buttonText}>{league.title}</Text>
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
    backgroundColor: 'darkblue',
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

export default LeagueRow;