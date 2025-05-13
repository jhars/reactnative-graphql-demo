import React, {useContext, useEffect, useCallback} from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect} from '@react-navigation/native';
import TeamsList from '../components/TeamsList';
import { useQuery } from '@apollo/client';
import { GET_TEAMS } from '../../data/queries';
import { TeamsData } from '../../data/types';
import { UserContext } from "../../contexts/UserContext";
import { ButtonStyles, ContainerStyles } from '../styles/index';

export default function MyTeamsScreen() {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);

  useEffect(()=>{
    navigation.setOptions({
      title: "My Teams",
      initialRouteName: 'MyTeams'
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [])
  )

  const { loading, error, data, refetch } = useQuery<TeamsData>(GET_TEAMS, {
    variables: { ownerId: user?.id }
  });

  if (loading) return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={ContainerStyles.container}>
      <TeamsList teams={data?.teams} myTeams={true}/>
      <View style={styles.footer}>
        <TouchableOpacity style={ButtonStyles.actionButton} onPress={() => {
          return  navigation.navigate('CreateTeam', {
            screen: 'SelectLeagueFromList',
            path: 'MyTeams'
          })
        }}>
          <Text style={ButtonStyles.actionButtonText}>Add New Team</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginBottom: 25,
    marginTop: 25,
  }
});
