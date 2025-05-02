import React, {useEffect} from 'react';
import { View, Text, TextInput, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LeagueSelectFromList from '../components/LeagueSelectFromList';
import { HeaderBackButton } from '@react-navigation/elements';
//==== GraphQL ========
import { useQuery } from '@apollo/client';
import { GET_ALL_LEAGUES } from '../../data/queries';
import { LeaguesData } from '../../data/types';
//=====================
import { BaseNavigationProps } from '../../navigation/types';

export default function SelectLeagueFromList() {
  const navigation = useNavigation<BaseNavigationProps>();

  useEffect(()=>{
    navigation.setOptions({
      title: "Select League to Join",
      headerLeft: () => <HeaderBackButton displayMode={"minimal"} onPress={() => {
        navigation.navigate('MyTeams')
      }}/>
    });
  }, []);

  //==== GraphQL ======== 
  const { loading, error, data } = useQuery<LeaguesData>(GET_ALL_LEAGUES);
  if (loading) return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;
  //=====================
  
  return (
    <View style={styles.container}>
        <LeagueSelectFromList leagues={data?.leagues}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});