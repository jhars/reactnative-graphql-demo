import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import LeagueSelectFromList from '../components/LeagueSelectFromList';
// import {fetchLeaguesAction} from '../actions/leaguesAction';

export default function CreateNewTeamScreen() {
  const navigation = useNavigation();
  const leagueList = useSelector((state) => state.allLeagues);

  const [teamname, onChangeText] = useState('');
  // const [number, onChangeNumber] = useState('');

  const dispatch = useDispatch(); 

  useEffect(()=>{
    // dispatch(fetchLeaguesAction())
    navigation.setOptions({
          title: "Create New Team"
        });
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Team Name"
          value={teamname}
        />
        <LeagueSelectFromList leagues={leagueList} disabled={teamname.length == 0 ? true : false} teamname={teamname}/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});