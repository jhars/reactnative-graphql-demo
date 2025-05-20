import { View, Text, StyleSheet} from 'react-native';
import { HeaderStyles, RowStyles } from '../styles/index';

interface RosterTableHeaderProps {
	myTeam: boolean | undefined;
}

const RosterTableHeader = ({myTeam}: RosterTableHeaderProps) => {
	return(
		<View style={HeaderStyles.tableHeader}>

		  <View style={RowStyles.positionColumn} >
		    <Text style={styles.columnHeaderTxt}>Pos.</Text>  
		  </View>

		  <View 
		    style={RowStyles.nameColumn}>
		    <Text style={styles.nameHeaderTxt}>Name</Text>
		  </View>

		  <View 
		    style={RowStyles.pointsColumn}>
		    <Text style={styles.pointsHeaderTxt}>Points</Text>
		  </View>

		  { myTeam && 
		    <View 
		    	testID={"actionColumnHeaderTestID"}
		      style={RowStyles.dropAddPlayerColumn}>
		      <Text style={styles.actionHeaderTxt}>Action</Text>
		    </View>        
		  }

		</View>
	)
}

export default RosterTableHeader

const styles = StyleSheet.create({
	// positionColumnHeader: {
	//   flex:1,
	//   flexGrow: 2,
	//   alignItems: 'center'
	// },
	columnHeaderTxt: {
	  color: "white",
	  fontWeight: "bold",
	  alignSelf: 'center'
	},
	nameHeaderTxt: {
	  color: "white",
	  fontWeight: "bold",
	},
	pointsHeaderTxt: {
	  color: "white",
	  fontWeight: "bold",
	  alignSelf: 'center'
	},
	actionHeaderTxt: {
	  color: "white",
	  fontWeight: "bold",
	},
})