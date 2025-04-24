import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const PlayerRow = ({indPlayerStats, addPlayerButton}) => {

	const {
		lastName,
		jersey,
		position,
		statistics
	} = indPlayerStats;

	return(
		<View style={styles.container}>

			<View style={styles.positionColumn}>
			  <Text style={styles.positionText}>{position}</Text>  
			</View>

			<View style={styles.nameColumn}>
				<Text>{lastName}</Text>
			</View>
			<View style={styles.pointsColumn}>
				<Text>{statistics.statLineLastSeason.points}</Text>
			</View>

      {addPlayerButton && 
        <View style={styles.addPlayerColumn}>
          <Text>Add</Text>
        </View>
      }
		</View>
	);
}

export default PlayerRow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
    height: 50,
    paddingTop:30,
  },
  positionColumn: {
    flex:1,
    flexGrow: 2,
    alignItems: 'center'
  },
  nameColumn: {
    flex:1,
    flexGrow: 5,
  },
  pointsColumn: {
    flexGrow:1,
  },
  addPlayerColumn: {
    flexGrow:1,
  }
});
