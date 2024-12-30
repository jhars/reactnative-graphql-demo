import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const PlayerRow = ({indPlayerStats}) => {

	const {
		Jersey,
		FirstName,
		LastName,
		goals,
		assists,
		points
	} = indPlayerStats;

	return(
		<View style={styles.container}>
			<Text style={styles.numberColumn}>{Jersey}</Text>
			<View style={styles.nameColumn}>
				<Text>{FirstName}</Text>
				<Text>{LastName}</Text>
			</View>
			<View style={styles.pointsColumn}>
				<Text>{points}</Text>
			</View>
		</View>
	);
}

export default PlayerRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'left',
    height: 50,
    paddingLeft: 15,
    paddingTop:30,
  },
  numberColumn: {
    alignItems:"left",
  },
  nameColumn: {
    alignItems:"center",
    paddingLeft: 20,
    flexDirection: "row",
  },
  pointsColumn: {
  	flex: 2,
  	flexDirection: "row",
  	justifyContent: "flex-end",
  	alignItems: 'center',
  	paddingRight: 80
  },

});