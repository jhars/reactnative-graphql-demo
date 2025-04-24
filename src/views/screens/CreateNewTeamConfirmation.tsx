import React, {useContext, useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { ADD_TEAM_TO_LEAGUE } from '../../data/mutations';
import { useMutation } from '@apollo/client';
import { UserContext } from "../../contexts/UserContext"


const CreateNewTeamConfirmation = ({route}) => {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);
  const {leagueID, leagueName } = route.params
  const [teamname, onChangeText] = useState('');

  const [addTeam, { data, loading, error }] = useMutation(ADD_TEAM_TO_LEAGUE, {
    onCompleted(data) {
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
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Team Name"
        value={teamname}
      />
        <Button 
          disabled={teamname.length <= 0}
          onPress={() => addTeam({variables: { ownerId: String(user.id), name: teamname, leagueId: Number(leagueID) }})}>
          Add {teamname} to {leagueName}
        </Button>

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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default CreateNewTeamConfirmation;