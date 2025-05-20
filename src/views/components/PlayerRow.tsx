import React, {useState,  useContext, memo} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AddPlayerConfirmationModal from './AddPlayerConfirmationModal';
import { Player } from '../../data/types';

interface PlayerRowProps {
  player: Player, 
  addPlayerButton: boolean, 
  addPlayerCallback: (player: Player) => void
}

const PlayerRow = ({player, addPlayerButton, addPlayerCallback}: PlayerRowProps) => {
	const { id, lastName, position, statistics } = player;

	return(
		<View testId={"playerRowContainerID"} style={styles.container}>

			<View style={styles.positionColumn}>
			  <Text style={styles.columnText}>{position}</Text>  
			</View>

			<View style={styles.nameColumn}>
				<Text style={styles.nameColumnText}>{lastName}</Text>
			</View>
			<View style={styles.pointsColumn}>
				<Text style={styles.pointsColumnText}>{statistics?.statLineLastSeason.points}</Text>
			</View>

      {addPlayerButton && 
        <View style={styles.addPlayerColumn} testID={"addPlayerButtonTestID"}>
          <TouchableOpacity style={styles.addButton} onPress={() => addPlayerCallback(player)}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      }
		</View>
	);
}

export default memo(PlayerRow);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
    height: 50,
    paddingTop:15,
    paddingBottom:15,
  },
  positionColumn: {
    flex:2,
    alignItems: 'center'
  },
  nameColumn: {
    flex:4,
  },
  pointsColumn: {
    flex: 2,
  },
  addPlayerColumn: {
    flex:2,
    alignItems: 'center'
  },
  addButton: {
    backgroundColor: 'green',
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    width: 70
  },
  buttonText: {
    fontSize: 12,
    color: 'aliceblue',
    fontWeight: "bold"
  },
  columnText: {
    alignSelf: 'center'
  },
  nameColumnText: {
  },
  pointsColumnText: {
    alignSelf: 'center'
  },
});
