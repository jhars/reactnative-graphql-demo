import React, {useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Button } from '@react-navigation/elements';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import LeagueRow from './LeagueRow';

export default function LeaguesList({leagues}) {
    return(
      <View>
        <FlatList
          data={leagues}
          renderItem={({item}) => <LeagueRow league={item} />}
        />  
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
