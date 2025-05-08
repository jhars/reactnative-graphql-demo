import React, {useState, memo} from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { SortColumnName } from '../../data/types';
import { HeaderStyles } from '../styles/index';

interface AllPlayersTableHeaderProps {
	callback(sortStat: string, sortDirection: string): any;
	availableForLeagueId: number | undefined;
	statCriteria: string;
	sortOrder: string;
}

const AllPlayersTableHeader = ({statCriteria, sortOrder, callback, availableForLeagueId }: AllPlayersTableHeaderProps) => {

	const [ selectedColumn, setSelectedColumn ] = useState<SortColumnName|null>(null)
	const [ sortDirection, setSortDirection ] = useState(sortOrder)
	const [ sortStat, setSortStat ] = useState(statCriteria)

	const sortTable = (column: SortColumnName) => {
	  setSelectedColumn(column)
	  callback(column, sortDirection)
	}

	return(
	  <View style={HeaderStyles.tableHeader}>

		  <TouchableOpacity 
		  	testID={"positionColumnSortHeaderButtonTestID"}
		    style={styles.positionColumnHeader} 
		    onPress={()=> sortTable('position')}>
		  	<Text style={styles.columnHeaderTxt}>{'Pos.' + "\n▲▼"}</Text>
		  </TouchableOpacity>

		  <TouchableOpacity 
		  	testID={"nameColumnSortHeaderButtonTestID"}
		    style={styles.nameColumnHeader} 
		    onPress={()=> sortTable('lastName')}>
		    <Text style={styles.columnHeaderTxt}>{'Name' + "\n  ▲▼"}</Text>
		  </TouchableOpacity>

		  <TouchableOpacity 
		  	testID={"pointsColumnSortHeaderButtonTestID"}
		  	style={styles.pointsColumnHeader}
		  	onPress={()=> sortTable('points')}>
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

export default AllPlayersTableHeader;
// export default memo(AllPlayersTableHeader);

const styles = StyleSheet.create({
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


 