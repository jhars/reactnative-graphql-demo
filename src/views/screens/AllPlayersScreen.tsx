import React, {useState, useCallback} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, Modal } from 'react-native';
import PlayerRow from '../components/PlayerRow';
import AddPlayerConfirmationModal from '../components/AddPlayerConfirmationModal'
//==== GraphQL ========
import { useQuery, useMutation } from '@apollo/client';
import { GET_SORTED_PLAYERS } from '../../data/queries';
import { ADD_PLAYER_TO_TEAM } from '../../data/mutations';
import { Players } from '../../data/types';
//=====================
import { useNavigation } from '@react-navigation/native';

export default function AllPlayersScreen({route}) {
	const navigation = useNavigation();

		const [ columns, setColumns ] = useState([
	    "Position",
	    "Name",
	    "Points",
	  ])

  const [ selectedColumn, setSelectedColumn ] = useState(null)
  const [ pointsSortDirection, setPoinstsSortDirection ] = useState('DESC')
  const [ positionSortDirection, setPositionSortDirection ] = useState('ASC')
  const [ nameSortDirection, setNameSortDirection ] = useState('ASC')

  const [ addPlayer, setAddPlayer ] = useState(null);
  const [ modalVisible, setModalVisible ] = useState(false);

  const playerRowCallback = useCallback( (player) => {
  	selectPlayerToAdd(player)
  }, []);

  const cancelModalCallback = useCallback( (show) => {
  	setModalVisible(false)
  }, []);

  // Once you get this working, try to refactor:

  // 1) Move Table Header View Logic to new Component
  // 2) See if useMutation logic can be moved to modal...?
  // 3) Destructure route?.params (after refactor)
  // 4) Could do 'PlayerList' component, could complicate sort though

  const modalCallBack = useCallback( (pID,lastName,pos,team,LId) => {

		const teamId = route.params?.team.id
		const playerId = pID
		const rosterSpot = route.params?.rosterSpot
		const leagueId = route.params?.availableForLeagueId
		// const leagueId = LId
		// const leagueId = route.params?.team?.league?.id
		const position = pos
		const rosterId = route.params?.rosterId

	  addPlayerToTeam({
	  	variables: { 
	  		teamId: Number(teamId),
	  		playerId: Number(playerId),
	  		rosterSpot: rosterSpot,
	  		leagueId: Number(leagueId),
	  		position: position,
	  		rosterId: rosterId,
	  	}
	  })
  	setModalVisible(false)
  }, []);

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

  	const [addPlayerToTeam, { addPlayerData, addPlayerLoading, addPlayerError }] = useMutation(ADD_PLAYER_TO_TEAM, {
  	  onCompleted(data) {
  	  	//JH-NOTE: 'data' coming from above/below query/mutation?
  	  	console.log("going back??")
  	    navigation.goBack();
  	  },
  	  errorPolicy: "all",
  	  onError(err) {
  	    console.log("Apollo err")
  	    console.log(err)
  	    console.log("***********")
  	  }
  	});

  	const selectPlayerToAdd = (player) => {
  		setAddPlayer(player)
  		setModalVisible(true)
  	}

  	if (loading || addPlayerLoading) return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
  	if (error || addPlayerError) return <Text>Error: {error.message}</Text>;

  	// if (addPlayerLoading) return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
  	// if (addPlayerError) return <Text>Error: {error.message}</Text>;
	//=====================

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
		//JH-NOTE: this could be extracted and sortTable could be sent in a useCallback() method
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

		  	<View style={styles.addColumnHeader}>
		  	  <Text style={styles.columnHeaderTxt}>{'Add'}</Text>
		  	</View>
			}

	  </View>
	)

	//JH-NOTE: when/how is "Alert being used?"
	return(
  		<View>
				{ route.params?.availableForLeagueId && 
	  			<Modal
	  			  animationType="slide"
	  			  transparent={true}
	  			  visible={modalVisible}
	  			  onRequestClose={() => {
	  			  	// does this ever run?
	  			    Alert.alert('Modal has been closed.');
	  			    // setModalVisible(!modalVisible);
	  			 }}>
	  			  <AddPlayerConfirmationModal 
	  			  	lastName={addPlayer?.lastName}
	  			  	position={addPlayer?.position}
	  			  	team={route.params?.team.name}
	  			  	playerId={addPlayer?.id}
	  			  	callback={modalCallBack}
	  			  	cancelCallback={cancelModalCallback}
	  			  	visible={modalVisible}
	  			  />
  			  </Modal>
				}
  				<FlatList
  					keyExtractor={(item) => item.id}
  					ListHeaderComponent={tableHeader}
						stickyHeaderIndices={[0]}
				  	data={data?.players}
				  	renderItem={({item}) =>
				  		  <PlayerRow 
				  				player={item}
				  				addPlayerButton={route.params?.availableForLeagueId ?? false}
				  				callback={playerRowCallback}
				  		  />
				  	}
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
  }
});