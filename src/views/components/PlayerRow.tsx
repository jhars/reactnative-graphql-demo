import React, {useState,  useContext, memo} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AddPlayerConfirmationModal from './AddPlayerConfirmationModal'

const PlayerRow = ({player, addPlayerButton, callback}) => {
  const [ addPlayer, setAddPlayer ] = useState(null);
	const { id, lastName, jersey, position, statistics } = player;

	return(
		<View style={styles.container}>

			<View style={styles.positionColumn}>
			  <Text style={styles.positionText}>{position}</Text>  
			</View>

			<View style={styles.nameColumn}>
				<Text>{lastName}</Text>
			</View>
			<View style={styles.pointsColumn}>
				<Text>{statistics?.statLineLastSeason.points}</Text>
			</View>

      {addPlayerButton && 
        <View style={styles.addPlayerColumn}>
          <TouchableOpacity onPress={() => callback(player)}>
            <Text>Add</Text>
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
  }
});
