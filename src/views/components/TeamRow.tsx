import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Button } from '@react-navigation/elements';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const TeamRow = ({team, myTeam}) => {
  const navigation = useNavigation();

	const {
		name
	} = team;

  return(
    <View style={styles.container}>
      <Button style={styles.button} onPress={() => navigation.navigate('RosterScreen', { team: team, myTeam: myTeam})}>
        <Text style={styles.buttonText}>{name}</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:5,
  },
  button: {
    backgroundColor: 'steelblue',
  },
  buttonText: {
    color: 'aliceblue'
  }
});

export default TeamRow;