import React, {useEffect, useState, useCallback} from 'react';
import { Alert, View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, Modal } from 'react-native';
import PlayerRow from '../components/PlayerRow';
import AddPlayerConfirmationModal from '../components/AddPlayerConfirmationModal';
import AllPlayersTableHeader from '../components/AllPlayersTableHeader';
//==== GraphQL ========
import { useQuery } from '@apollo/client';
import { GET_SORTED_PLAYERS } from '../../data/queries';
import { PlayerData, Team, Position, RosterSpot, SortColumnName, Player} from '../../data/types';
//=====================
import { useNavigation, useRoute } from '@react-navigation/native';
import { AvailablePlayersScreenRouteProp } from '../../navigation/types';
//##### NAV ROUTE PROPS########

export default function AllPlayersScreen() {

	const navigation = useNavigation();
	const route = useRoute<AvailablePlayersScreenRouteProp>();

	const [ columns, setColumns ] = useState([
    "Position",
    "Name",
    "Points",
  ])

  const [ selectedColumn, setSelectedColumn ] = useState<SortColumnName|null>(null)
  const [ pointsSortDirection, setPoinstsSortDirection ] = useState('DESC')
  const [ positionSortDirection, setPositionSortDirection ] = useState('ASC')
  const [ nameSortDirection, setNameSortDirection ] = useState('ASC')


  const [ addPlayer, setAddPlayer ] = useState<Player | null>(null);
  const [ modalVisible, setModalVisible ] = useState(false);

  const sortTableCallback = useCallback( (column: SortColumnName) => {
  	sortTable(column)
  }, [pointsSortDirection, positionSortDirection, nameSortDirection]);

  const addPlayerFromPlayerRowCallback = useCallback( (player: Player) => {
  	selectPlayerToAdd(player)
  }, []);

  const cancelModalCallback = useCallback( () => {
  	setModalVisible(false)
  }, []);

  const modalCallBack = useCallback( () => {
  	setModalVisible(false)
  	navigation.goBack();
  }, []);

  const failedToAddPlayerCallback = useCallback( () => {
  	showFailureAlert()
  }, []);

  //==== GraphQL ======== 
	const { loading, error, data, refetch } = useQuery<PlayerData>(GET_SORTED_PLAYERS, {
		variables: {
		  "orderBy": {
		    "field": "points",
		    "order": pointsSortDirection
		  },
		  "availableForLeagueId": Number(route.params?.availableForLeagueId) || null,
		  "position": route.params?.position || null
		}
	});

	const showFailureAlert = () => {
		setModalVisible(false)
		Alert.alert('Unable to Add Player','Player may have been added to another team or there may be network issues', [
		  {
		    text: 'OK',
		    onPress: () => navigation.goBack(),
		  }
		])
	}	

	const selectPlayerToAdd = (player: Player) => {
		setAddPlayer(player)
		setModalVisible(true)
	}

	const sortTable = (column: SortColumnName) => {
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

	if (loading ) return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
	if (error ) return <Text>Error: {error.message}</Text>;
//=====================
	// const ready
	const renderModal = addPlayer && route.params?.team && route.params?.rosterId && route.params?.rosterSpot && route.params?.availableForLeagueId
	return(
		<View>
			{ renderModal && 
  			<Modal
  			  animationType="slide"
  			  transparent={true}
  			  visible={modalVisible}
  			  onRequestClose={() => setModalVisible(!modalVisible)}>
	  			  <AddPlayerConfirmationModal 
	  			  	lastName={addPlayer.lastName}
	  			  	position={addPlayer.position}
	  			  	team={route.params.team}
	  			  	playerId={Number(addPlayer.id)}
	  			  	rosterId={route.params.rosterId}
	  			  	rosterSpot={route.params.rosterSpot}
	  			  	callback={modalCallBack}
	  			  	cancelCallback={cancelModalCallback}
	  			  	failedToAddPlayerCallback={failedToAddPlayerCallback}
	  			  />
  			  
			  </Modal>
			}
			<FlatList
				keyExtractor={(item) => item.id}
				ListHeaderComponent={
					<AllPlayersTableHeader 
						callback={sortTableCallback} 
						availableForLeagueId={route.params?.availableForLeagueId}/>
				}
				stickyHeaderIndices={[0]}
		  	data={data?.players}
		  	renderItem={({item}) =>
		  		  <PlayerRow 
		  				player={item}
		  				addPlayerButton={route.params?.availableForLeagueId ? true : false}
		  				addPlayerCallback={addPlayerFromPlayerRowCallback}
		  		  />
		  	}
      />
		</View>
	);
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});