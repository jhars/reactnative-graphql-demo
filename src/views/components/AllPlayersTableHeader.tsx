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
		  	<Text style={styles.positionHeaderTxt}>{'Pos.' + "\n▲▼"}</Text>
		  </TouchableOpacity>

		  <TouchableOpacity 
		  	testID={"nameColumnSortHeaderButtonTestID"}
		    style={styles.nameColumnHeader} 
		    onPress={()=> sortTable('lastName')}>
		    <Text style={styles.nameHeaderTxt}>{'Name' + "\n  ▲▼"}</Text>
		  </TouchableOpacity>

		  <TouchableOpacity 
		  	testID={"pointsColumnSortHeaderButtonTestID"}
		  	style={styles.pointsColumnHeader}
		  	onPress={()=> sortTable('points')}>
		    <Text style={styles.pointsHeaderTxt}>{'Points' + "\n  ▲▼"}</Text>
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
    flex:2,
    alignItems: 'center'
  },
  nameColumnHeader: {
    flex:4,
  },
  pointsColumnHeader: {
    flex: 2,
  },
  addColumnHeader: {
    flex:2,
  },
  nameHeaderTxt: {
    color: "white",
    fontWeight: "bold",
  },
  pointsHeaderTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
    alignSelf: 'center'
  },
  positionHeaderTxt: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13
  },
  columnHeaderTxt: {
    color: "white",
    fontWeight: "bold",
    alignSelf: 'center'
  }
})


 