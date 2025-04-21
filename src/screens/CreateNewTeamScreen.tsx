import React, {useEffect} from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import LeagueSelectFromList from '../components/LeagueSelectFromList';

//==== GraphQL ========
import { useQuery } from '@apollo/client';
import { GET_ALL_LEAGUES } from '../data/queries';
import { Leagues } from '../types';
//=====================

export default function CreateNewTeamScreen() {
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      title: "Choose League To Join"
    });
  }, []);

  //==== GraphQL ======== 
  const { loading, error, data } = useQuery<Leagues>(GET_ALL_LEAGUES);
  if (loading) return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;
  //=====================

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <LeagueSelectFromList leagues={data.leagues}/>
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