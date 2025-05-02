import React, {useEffect, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, ActivityIndicator, Text, View, FlatList } from 'react-native';
import LeagueRow from '../components/LeagueRow';

//==== GraphQL ========
import { useQuery } from '@apollo/client';
import { GET_ALL_LEAGUES } from '../../data/queries';
import { LeaguesData } from '../../data/types';
//=====================
// import { LeaguesScreenRouteProp } from '../../navigation/types';

export default function LeaguesScreen() {

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      refetch()
      return () => {};
    }, [])
  )
  //==== GraphQL ======== 
  const { loading, error, data, refetch } = useQuery<LeaguesData>(GET_ALL_LEAGUES);
  if (loading) return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;
  //=====================

  return(
    <View style={styles.container}>
      <FlatList
        data={data?.leagues}
        renderItem={({item}) => <LeagueRow league={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
