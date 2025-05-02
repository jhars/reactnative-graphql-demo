import React, {useContext, useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ADD_TEAM_TO_LEAGUE } from '../../data/mutations';
import { useMutation } from '@apollo/client';
import { UserContext } from "../../contexts/UserContext"
import { CreateNewTeamConfirmationScreenRouteProp, BaseNavigationProps } from '../../navigation/types';

const CreateNewTeamConfirmation = () => {
  const {navigate, setOptions} = useNavigation<BaseNavigationProps>();
  const {params, path} = useRoute<CreateNewTeamConfirmationScreenRouteProp>();
  const { user } = useContext(UserContext);
  const {leagueID, leagueTitle } = params
  const [teamname, onChangeText] = useState('');

  useEffect(()=>{
    setOptions({
      title: "Create Team Name",
      headerLeft: () => <HeaderBackButton displayMode={"minimal"} onPress={() => {
        // JH-NOTE: a bit hacky, but ok for now...
        return navigate(path as never)
      }}/>
    });

  }, []);


  const [addTeam, { data, loading, error }] = useMutation(ADD_TEAM_TO_LEAGUE, {
    onCompleted(data) {
      // navigation.navigate('MyTeams', {screen:'UserTeams'})
      navigate('MyTeams', {screen:'UserTeams'})
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
        <TouchableOpacity
          style={styles.button}
          disabled={teamname.length <= 0}
          onPress={() => addTeam({variables: { ownerId: String(user.id), name: teamname, leagueId: Number(leagueID) }})}>
          <Text style={styles.buttonText}>Add {teamname} to {leagueTitle}</Text>
        </TouchableOpacity>

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
  button: {
    backgroundColor: 'darkblue',
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: 'aliceblue',
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 25
  },
});

export default CreateNewTeamConfirmation;