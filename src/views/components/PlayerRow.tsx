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
			  <Text>{position}</Text>  
			</View>

			<View style={styles.nameColumn}>
				<Text>{lastName}</Text>
			</View>
			<View style={styles.pointsColumn}>
				<Text>{statistics?.statLineLastSeason.points}</Text>
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
    paddingRight: 10
  },
  addButton: {
    backgroundColor: 'green',
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    color: 'aliceblue',
    fontWeight: "bold"
  }
});
