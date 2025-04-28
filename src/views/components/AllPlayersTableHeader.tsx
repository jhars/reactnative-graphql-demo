import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface AllPlayersTableHeaderProps {
	callback(column: string): any;
	availableForLeagueId: number;
}

export default AllPlayersTableHeader = (props: AllPlayersTableHeaderProps) => {
	return(
	  <View style={styles.tableHeader}>

		  <TouchableOpacity 
		    style={styles.positionColumnHeader} 
		    onPress={()=> props.callback('Position')}>
		  	<Text style={styles.columnHeaderTxt}>{'Pos.' + "\n▲▼"}</Text>
		  </TouchableOpacity>

		  <TouchableOpacity 
		    style={styles.nameColumnHeader} 
		    onPress={()=> props.callback('Name')}>
		    <Text style={styles.columnHeaderTxt}>{'Name' + "\n  ▲▼"}</Text>
		  </TouchableOpacity>

		  <TouchableOpacity 
		  	style={styles.pointsColumnHeader}
		  	onPress={()=> props.callback('Points')}>
		    <Text style={styles.columnHeaderTxt}>{'Points' + "\n  ▲▼"}</Text>
		  </TouchableOpacity>

		  {props.availableForLeagueId && 

		  	<View style={styles.addColumnHeader}>
		  	  <Text style={styles.columnHeaderTxt}>{'Add'}</Text>
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
    backgroundColor: "#37C2D0",
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


 