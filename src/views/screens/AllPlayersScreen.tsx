import React, {useState, useCallback} from 'react';
import { Alert, View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, Modal } from 'react-native';
import PlayerRow from '../components/PlayerRow';
import AddPlayerConfirmationModal from '../components/AddPlayerConfirmationModal';
import RosterTableHeader from '../components/AllPlayersTableHeader';
//==== GraphQL ========
import { useQuery } from '@apollo/client';
import { GET_SORTED_PLAYERS } from '../../data/queries';
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

  const sortTableCallback = useCallback( (column) => {
  	sortTable(column)
  }, [pointsSortDirection, positionSortDirection, nameSortDirection]);

  const playerRowCallback = useCallback( (player) => {
  	selectPlayerToAdd(player)
  }, []);

  const cancelModalCallback = useCallback( (show) => {
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

	const showFailureAlert = (player) => {
		setModalVisible(false)
		Alert.alert('Unable to Add Player','Player may have been added to another team or there may be network issues', [
		  {
		    text: 'OK',
		    onPress: () => navigation.goBack(),
		  }
		])
	}	

	const selectPlayerToAdd = (player) => {
		setAddPlayer(player)
		setModalVisible(true)
	}

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

	if (loading ) return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
	if (error ) return <Text>Error: {error.message}</Text>;
//=====================
	return(
		<View>
			{ route.params?.availableForLeagueId && 
  			<Modal
  			  animationType="slide"
  			  transparent={true}
  			  visible={modalVisible}
  			  onRequestClose={() => setModalVisible(!modalVisible)}>
  			  <AddPlayerConfirmationModal 
  			  	lastName={addPlayer?.lastName}
  			  	position={addPlayer?.position}
  			  	team={route.params?.team}
  			  	playerId={addPlayer?.id}
  			  	rosterId={route.params?.rosterId}
  			  	rosterSpot={route.params?.rosterSpot}
  			  	callback={modalCallBack}
  			  	cancelCallback={cancelModalCallback}
  			  	visible={modalVisible}
  			  	failedToAddPlayerCallback={failedToAddPlayerCallback}
  			  />
			  </Modal>
			}
			<FlatList
				keyExtractor={(item) => item.id}
				ListHeaderComponent={
					<RosterTableHeader 
						callback={sortTableCallback} 
						availableForLeagueId={route.params?.availableForLeagueId}/>
				}
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
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});