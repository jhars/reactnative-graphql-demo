import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { ADD_TEAM_TO_LEAGUE } from '../data/mutations';
import { useMutation } from '@apollo/client';
import { UserContext } from "../contexts/UserContext"


const CreateNewTeamConfirmation = ({route}) => {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);
  const {leagueID, leagueName, teamname} = route.params

  const [addTeam, { data, loading, error }] = useMutation(ADD_TEAM_TO_LEAGUE, {
    variables: {
      "ownerId": String(user.id),
      "name": teamname,
      "leagueId": Number(leagueID),
    },
    onCompleted(data) {
      // if (!data.addTeam) console.log(data)
      navigation.navigate('UserTeams')
    },
    errorPolicy: "all",
    onError(err) {
      console.log("Apollo err")
      console.log(err)
      console.log("***********")
    }
  });

  return(        
    <View style={styles.container}>
      <Button onPress={() => addTeam()}>Add {teamname} to {leagueName}</Button>
      { error &&
        <Text>Error: {error.message}</Text>
      }
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