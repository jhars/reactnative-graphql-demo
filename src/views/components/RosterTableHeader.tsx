import { View, Text, StyleSheet} from 'react-native';
import { HeaderStyles } from '../styles/index';

interface RosterTableHeaderProps {
	myTeam: boolean | undefined;
}

const RosterTableHeader = ({myTeam}: RosterTableHeaderProps) => {
	return(
		<View style={HeaderStyles.tableHeader}>

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

		  { myTeam && 
		    <View 
		    	testID={"actionColumnHeaderTestID"}
		      style={styles.dropAddColumnHeader}>
		      <Text style={styles.columnHeaderTxt}>Action</Text>
		    </View>        
		  }

		</View>
	)
}

export default RosterTableHeader

const styles = StyleSheet.create({
	// tableHeader: {
	//   flex: 1,
	//   flexDirection: "row",
	//   alignItems: "center",
	//   backgroundColor: "darkblue",
	//   height: 50,
	// },
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
	  width: 25
	},
	columnHeaderTxt: {
	  color: "white",
	  fontWeight: "bold",
	},
})