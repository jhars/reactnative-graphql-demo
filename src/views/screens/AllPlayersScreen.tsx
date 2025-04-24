import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import PlayerRow from '../components/PlayerRow';

//==== GraphQL ========
import { useQuery } from '@apollo/client';
import { GET_SORTED_PLAYERS } from '../../data/queries';
import { Players } from '../../data/types';
//=====================

export default function AllPlayersScreen({route}) {

	// const { availableForLeagueId, position } = route.params

	const [ columns, setColumns ] = useState([
    "Position",
    "Name",
    "Points",
  ])

  const [ selectedColumn, setSelectedColumn ] = useState(null)
  const [ pointsSortDirection, setPoinstsSortDirection ] = useState('DESC')
  const [ positionSortDirection, setPositionSortDirection ] = useState('ASC')
  const [ nameSortDirection, setNameSortDirection ] = useState('ASC')

  //==== GraphQL ======== 
	const { loading, error, data, refetch } = useQuery<Players>(GET_SORTED_PLAYERS, {
		variables: {
		  "orderBy": {
		    "field": "points",
		    "order": pointsSortDirection
		  },
		  "availableForLeagueId": Number(route.params?.availableForLeagueId) || null,
		  "position": route.params?.position || null
		}
	});
	if (loading) return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
	if (error) return <Text>Error: {error.message}</Text>;
	//=====================
	
  // const playerList = data.players;

	const sortTable = (column) => {
	  setSelectedColumn(column)
	  let sortStat
	  let order
	  if (column == "Name") {
	  	sortStat = "lastName"
	  	order = nameSortDirection
	  	setNameSortDirection(order == 'ASC' ? 'DESC' : 'ASC')
	  } else if (column == "Position") {
	  	sortStat = column.toLowerCase()
	  	order = positionSortDirection
	  	setPositionSortDirection(order == 'ASC' ? 'DESC' : 'ASC')
	  } else if (column == "Points") {
	  	sortStat = column.toLowerCase()
	  	order = pointsSortDirection
	  	setPoinstsSortDirection(order == 'ASC' ? 'DESC' : 'ASC')
	  }
	  refetch({"orderBy": {"field": sortStat, "order": order}})
	}


	const tableHeader = () => (
	  <View style={styles.tableHeader}>

		  <TouchableOpacity 
		    style={styles.positionColumnHeader} 
		    onPress={()=> sortTable('Position')}>
		  	<Text style={styles.columnHeaderTxt}>{'Pos.' + "\n▲▼"}</Text>
		  </TouchableOpacity>

		  <TouchableOpacity 
		    style={styles.nameColumnHeader} 
		    onPress={()=> sortTable('Name')}>
		    <Text style={styles.columnHeaderTxt}>{'Name' + "\n  ▲▼"}</Text>
		  </TouchableOpacity>

		  <TouchableOpacity 
		  	style={styles.pointsColumnHeader}
		  	onPress={()=> sortTable('Points')}>
		    <Text style={styles.columnHeaderTxt}>{'Points' + "\n  ▲▼"}</Text>
		  </TouchableOpacity>

		  {route.params?.availableForLeagueId && 

		  	<TouchableOpacity 
		  		style={styles.addColumnHeader}>
		  	  <Text style={styles.columnHeaderTxt}>{'Add'}</Text>
		  	</TouchableOpacity>
			}

	  </View>
	)

	return(
  			<View>
  				<FlatList
  					ListHeaderComponent={tableHeader}
						stickyHeaderIndices={[0]}
				  	data={data?.players}
				  	renderItem={({item}) => <PlayerRow indPlayerStats={item} addPlayerButton={route.params?.availableForLeagueId ?? false} />}
  	      />	
  			</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   tableHeader: {
//     flexDirection: "row",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     backgroundColor: "#37C2D0",
//     height: 50,
//     paddingLeft: 15
//   },
//   positionColumnHeader: {
//     alignItems:"left",
//   },
//   nameColumnHeader: {
//     justifyContent: "flex-start",
//     alignItems:"center",
//     paddingLeft: 20
//   },
//   pointsColumnHeader: {
//   	flex: 2,
//   	flexDirection: "row",
//   	justifyContent: "flex-end",
//   	paddingRight: 60
//   },
//   columnHeaderTxt: {
//     color: "white",
//     fontWeight: "bold",
//   },
// });
