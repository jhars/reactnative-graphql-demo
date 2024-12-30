import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPlayersForTeamAction} from '../actions/playersForTeamAction';
import TeamPlayersList from '../components/TeamPlayersList';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function TeamPlayerScreen({route}) {
  const navigation = useNavigation();

	const teamPlayerList = useSelector((state) => state.playersForTeam);

	const dispatch = useDispatch();

  console.log("= = = = route = = = ");
  console.log(route);

	useEffect(()=>{
    dispatch(fetchPlayersForTeamAction(route.params.team.id))
    navigation.setOptions({
          title: route.params.team.name,
        });
	}, []);

	return(
		<TeamPlayersList players={teamPlayerList}/>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
