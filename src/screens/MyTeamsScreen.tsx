import React, {useEffect} from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
// import {useDispatch, useSelector} from 'react-redux';
import TeamsList from '../components/TeamsList';
// import {fetchTeamsByUserAction} from '../actions/teamsAction';

export default function MyTeamsScreen() {
  const navigation = useNavigation();

  // const teamsForUserList = useSelector((state) => state.teamsForUser);
  // const currentUser = useSelector((state) => state.currentUserSession);

  // const dispatch = useDispatch(); 

  // useEffect(()=>{
  //   dispatch(fetchTeamsByUserAction(currentUser.id))
  // }, []); 

  return (
    <View style={styles.container}>
      {/*<TeamsList teams={teamsForUserList} />*/}
      <View style={styles.footer}>
        <Button onPress={() => navigation.navigate('CreateNewTeamScreen')}>Add New Team</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  footer: {
    height: 100,  
    justifyContent: 'flex-end',
    flexGrow: 1,
    paddingBottom: 100
  }
  
});
