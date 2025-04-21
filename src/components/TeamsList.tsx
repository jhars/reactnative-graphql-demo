import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import TeamRow from './TeamRow';

export default function TeamsList({teams}) {

 	return(
	    <View style={styles.container}>
	      <FlatList
	        data={teams}
	        renderItem={({item}) => <TeamRow team={item} />}
	      />  
	    </View>
  	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
