import React, {useContext, useEffect} from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import TeamsList from '../components/TeamsList';
import { useQuery } from '@apollo/client';
import { GET_TEAMS } from '../../data/queries';
import { Teams } from '../../data/types';
import { UserContext } from "../../contexts/UserContext"

export default function MyTeamsScreen() {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);

  useEffect(()=>{
    refetch();
  }, []);

  //==== GraphQL ======== 
  const { loading, error, data, refetch } = useQuery<Teams>(GET_TEAMS, {
    variables: { ownerId: user?.id }
  });

  if (loading) return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;
  //=====================

  return (
    <View style={styles.container}>
      <TeamsList teams={data?.teams} myTeams={true}/>
      <View style={styles.footer}>
        <Button style={styles.button} onPress={() => navigation.navigate('CreateNewTeamScreen')}>
          <Text style={styles.buttonText}>Add New Team</Text>
        </Button>
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
    marginBottom: 25,
    marginTop: 25,
  },
  button: {
    backgroundColor: 'darkblue',
  },
  buttonText: {
    color: 'aliceblue',
    fontSize: 20,
    fontWeight: 'bold',
    fontVariant: 'small-caps'
  }
});
