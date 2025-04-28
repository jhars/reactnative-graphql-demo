import { View, Text, StyleSheet} from 'react-native';

interface RosterHeaderProps {
	myTeam: boolean;
}

export default RosterTableHeader = (props: RosterHeaderProps) => {
	return(
		<View style={styles.tableHeader}>

		  <View style={styles.positionColumnHeader} >
		    <Text style={styles.columnHeaderTxt}>Pos.</Text>  
		  </View>

		  <View 
		    style={styles.nameColumnHeader}>
		    <Text style={styles.columnHeaderTxt}>Name</Text>
		  </View>

		  <View 
		    style={styles.pointsColumnHeader}>
		    <Text style={styles.columnHeaderTxt}>Points</Text>
		  </View>

		  { props.myTeam && 
		    <View 
		      style={styles.dropAddColumnHeader}>
		      <Text style={styles.columnHeaderTxt}>DropAdd</Text>
		    </View>        
		  }

		</View>
	)
}

const styles = StyleSheet.create({
	tableHeader: {
	  flex: 1,
	  flexDirection: "row",
	  alignItems: "center",
	  backgroundColor: "#37C2D0",
	  height: 50,
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
	dropAddColumnHeader: {
	  flexGrow:1,
	},
	columnHeaderTxt: {
	  color: "white",
	  fontWeight: "bold",
	},
})