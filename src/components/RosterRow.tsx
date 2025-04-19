import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const RosterRow = ({position, playerInfo}) => {

	return(

    <View style={styles.container}>

      <View style={styles.positionColumn}>
        <Text style={styles.positionText}>{position}</Text>  
      </View>
      

      <View style={styles.nameColumn}>
        <Text style={styles.nameText}>{playerInfo?.lastName ?? "EMPTYYYYYYYYYYYY"}</Text>
      </View>

      <View style={styles.pointsColumn}>
        <Text>{playerInfo?.statistics.statLineLastSeason.points}</Text>
      </View>

    </View>
	);
}

export default RosterRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: '#fff',
    height: 50,
    paddingLeft: 15,
    paddingTop:30,
    paddingRight: 80,
  },
  positionColumn: {
    flex:1,
    flexGrow: 3,
  },
  positionText: {
    textAlign: 'center'
  },
  nameColumn: {
    flex:1,
    flexGrow: 10,
    paddingLeft: 25,
  },
  pointsColumn: {
    flex:1,
    alignItems: 'flex-end'
  },
});