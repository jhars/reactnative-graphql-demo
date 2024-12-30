import React, {useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTeamsByUserAction} from '../actions/teamsAction';
import TeamRow from './TeamRow';
import { useNavigation } from '@react-navigation/native';

export default function TeamsList({teams}) {

 	return(
	    <View style={styles.container}>
	      <FlatList
	        data={teams}
	        renderItem={({item}) => <TeamRow team={item} />}
	      />  
	    </View>
  	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // justifyContent: 'center',
  }
});
