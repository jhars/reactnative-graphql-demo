import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPlayersAction} from '../actions/playerAction';
import {fetchPlayersByStatisticAction} from '../actions/playersOrderedByStatisticAction';
import PlayerRow from './PlayerRow';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function TeamPlayerList({players}) {

  [teamPlayers, setTeamPlayers] = useState(players)

	const [ columns, setColumns ] = useState([
    "Number",
    "Name",
    "Points",
  ])

  console.log("TeamPlayerList => players")
  console.log(teamPlayers)

  const [ selectedColumn, setSelectedColumn ] = useState(null)

	const dispatch = useDispatch();

	const sortTable = (column) => {
	}
	
	useEffect(()=>{
    setTeamPlayers(players)
	}, []);

	const tableHeader = () => (
	  <View style={styles.tableHeader}>

		  <View style={styles.numberColumnHeader} >
		  	<Text style={styles.columnHeaderTxt}>#</Text>	
		  </View>

		  <TouchableOpacity 
		    style={styles.nameColumnHeader} 
		    onPress={()=> sortTable('Name')}>
		    <Text style={styles.columnHeaderTxt}>{'Name' + " "}</Text>
		  </TouchableOpacity>

		  <TouchableOpacity 
		    style={styles.pointsColumnHeader} 
		    onPress={()=> sortTable('Points')}>
		    <Text style={styles.columnHeaderTxt}>{'Points' + " "}</Text>
		  </TouchableOpacity>

	  </View>
	)

	return(
  			<View>
  				<FlatList
  					ListHeaderComponent={tableHeader}
  					stickyHeaderIndices={[0]}
  				  data={teamPlayers}
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
  numberColumnHeader: {
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
