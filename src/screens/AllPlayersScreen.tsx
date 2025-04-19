import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
// import {useDispatch, useSelector} from 'react-redux';
// import {fetchPlayersAction} from '../actions/playerAction';
// import {fetchPlayersByStatisticAction} from '../actions/playersOrderedByStatisticAction';
import PlayerRow from '../components/PlayerRow';

//==== GraphQL ========
import { useQuery } from '@apollo/client';
import { GET_SORTED_PLAYERS } from '../data/queries';
import { Players } from '../types';
//=====================

export default function AllPlayersScreen() {


	//pass in players from parent component
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
		  }
		}
	});
	if (loading) return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
	if (error) return <Text>Error: {error.message}</Text>;
	//=====================
	
  const playerList = data.players;

  //JH-NOTE: Old Redux
	// const playerList = useSelector((state) => state.playersByStat);
	// const dispatch = useDispatch();
	// const searchPlayers = () => {
	//   dispatch(fetchPlayersByStatisticAction({stat: 'points', order: poinstsSortDirection}))
	// }

	// useEffect(()=>{
	//   searchPlayers();
	// }, []);

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
	  	// order = poinstsSortDirection
	  	order = positionSortDirection
	  	setPositionSortDirection(order == 'ASC' ? 'DESC' : 'ASC')
	  } else if (column == "Points") {
	  	sortStat = column.toLowerCase()
	  	order = pointsSortDirection
	  	// order = positionSortDirection
	  	setPoinstsSortDirection(order == 'ASC' ? 'DESC' : 'ASC')
	  }
	  //JH-NOTE: Old Redux
	  // dispatch(fetchPlayersByStatisticAction({stat: sortStat, order: order}))
	  refetch({"orderBy": {"field": sortStat, "order": order}})
	}


	const tableHeader = () => (
	  <View style={styles.tableHeader}>

		  <TouchableOpacity 
		    style={styles.positionColumnHeader} 
		    onPress={()=> sortTable('Position')}>
		  	<Text style={styles.columnHeaderTxt}>{'Position' + " ▲▼"}</Text>
		  </TouchableOpacity>

		  <TouchableOpacity 
		    style={styles.nameColumnHeader} 
		    onPress={()=> sortTable('Name')}>
		    <Text style={styles.columnHeaderTxt}>{'Name' + " ▲▼"}</Text>
		  </TouchableOpacity>

		  <TouchableOpacity 
		  	style={styles.pointsColumnHeader}
		  	onPress={()=> sortTable('Points')}>
		    <Text style={styles.columnHeaderTxt}>{'Points' + " ▲▼"}</Text>
		  </TouchableOpacity>

	  </View>
	)

	return(
  			<View>
  				<FlatList
  					ListHeaderComponent={tableHeader}
						stickyHeaderIndices={[0]}
				  	data={playerList}
				  	renderItem={({item}) => <PlayerRow indPlayerStats={item} />}
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
  tableRow: {
    flexDirection: "row",
    height: 40,
    alignItems:"center",
  },
  positionColumnHeader: {
    alignItems:"left",
  },
  nameColumnHeader: {
    justifyContent: "flex-start",
    alignItems:"center",
    paddingLeft: 20
  },
  pointsColumnHeader: {
  	flex: 2,
  	flexDirection: "row",
  	justifyContent: "flex-end",
  	paddingRight: 60
  },
  columnHeaderTxt: {
    color: "white",
    fontWeight: "bold",
  },
  columnRowTxt: {
    width:"20%",
    textAlign:"center",
  }
});
