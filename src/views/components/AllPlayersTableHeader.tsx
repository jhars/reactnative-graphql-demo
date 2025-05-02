import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface AllPlayersTableHeaderProps {
	callback(column: string): any;
	availableForLeagueId: number | undefined;
}

export default ({callback, availableForLeagueId }: AllPlayersTableHeaderProps) => {
	return(
	  <View style={styles.tableHeader}>

		  <TouchableOpacity 
		    style={styles.positionColumnHeader} 
		    onPress={()=> callback('Position')}>
		  	<Text style={styles.columnHeaderTxt}>{'Pos.' + "\n▲▼"}</Text>
		  </TouchableOpacity>

		  <TouchableOpacity 
		    style={styles.nameColumnHeader} 
		    onPress={()=> callback('Name')}>
		    <Text style={styles.columnHeaderTxt}>{'Name' + "\n  ▲▼"}</Text>
		  </TouchableOpacity>

		  <TouchableOpacity 
		  	style={styles.pointsColumnHeader}
		  	onPress={()=> callback('Points')}>
		    <Text style={styles.columnHeaderTxt}>{'Points' + "\n  ▲▼"}</Text>
		  </TouchableOpacity>

		  {availableForLeagueId && 

		  	<View style={styles.addColumnHeader}>
		  	  <Text style={styles.columnHeaderTxt}>{'Action'}</Text>
		  	</View>
			}

	  </View>
	)
}

const styles = StyleSheet.create({
  tableHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "darkblue",
    height: 50,
    paddingLeft: 15
  },
  positionColumnHeader: {
    flex:1,
    flexGrow: 2,
    alignItems: 'center'
  },
  nameColumnHeader: {
    flex:1,
    flexGrow: 5,
  },
  pointsColumnHeader: {
  	flexGrow:1,
    alignItems: 'center'
  },
  addColumnHeader: {
    flexGrow:1,
  },
  columnHeaderTxt: {
    color: "white",
    fontWeight: "bold",
  }
})


 