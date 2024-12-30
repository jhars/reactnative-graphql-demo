import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Button } from '@react-navigation/elements';
import {useDispatch, useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {createNewTeamForLeague} from '../actions/createNewTeamAction';
import { AsyncActionState } from '../actions/asyncAction';


const CreateNewTeamConfirmation = ({route}) => {
  const navigation = useNavigation();
  const currentUser = useSelector((state) => state.currentUserSession);
  const newTeam = useSelector((state) => state.createNewTeam);
  const {leagueID, leagueName, teamname} = route.params
  const dispatch = useDispatch();

  console.log("leagueID, leagueName, teamname")
  console.log(leagueID, leagueName, teamname)

  if (newTeam.status == AsyncActionState.Succeeded) {
    navigation.navigate('UserTeams') 
  }

  useEffect(()=>{
  }, []);

  return(
    <View style={styles.container}>
      <Button onPress={() => dispatch(createNewTeamForLeague({userId: currentUser.id, leagueId: leagueID, name: teamname}))}>Add {teamname} to {leagueName}</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:25,
    padding:5,
  },
});

export default CreateNewTeamConfirmation;