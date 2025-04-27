import React, {useEffect, useState, useCallback} from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView, Modal, ActivityIndicator} from 'react-native';
// import RosterList from '../components/RosterList';
import RosterRow from '../components/RosterRow';
import DropPlayerConfirmationModal from '../components/DropPlayerConfirmationModal'
import { DropPlayerRequestObject } from '../../data/types';


//==== GraphQL ========
import { useQuery } from '@apollo/client';
import { GET_TEAM_ROSTER } from '../../data/queries';
import { Roster } from '../../data/types';
//=====================

export default function RosterScreen({route}) {
  const navigation = useNavigation();

  const [ dropPlayer, setDropPlayer ] = useState(null);
  const [ modalVisible, setModalVisible ] = useState(false);

  const { team, myTeam } = route.params

  useEffect(()=>{
    navigation.setOptions({
          title: team.name,
        });
    // JH-NOTE: not sure if this refetch is necessary anymore
    refetch()
  }, []);

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      // refetch({ teamId: Number(team.id) })
      refetch()
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  )

  const selectPlayerToDrop = (player) => {
    setDropPlayer(player)
    setModalVisible(true)
  }
  //JH-NOTE: may want to define type here...
  const rosterRowCallback = useCallback( (player) => {
    selectPlayerToDrop(player)
  }, []);

  const modalCallback = useCallback( () => {
    // Attempt Mutation logic on Modal
    refetch()
    setModalVisible(false)
  }, []);

  //May only need one of these (above/below)

  const cancelModalCallback = useCallback( (show) => {
    setModalVisible(false)
  }, []);

  //JH-NOTE: Query with parameters here...
  const { loading, error, data, refetch } = useQuery<Roster>(GET_TEAM_ROSTER, {
    variables: { teamId: Number(team.id) }
  });

  const roster = data?.roster

  if (loading) return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;

    const tableHeader = () => (
      <View style={styles.tableHeader}>

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
            style={styles.dropAddColumnHeader}>
            <Text style={styles.columnHeaderTxt}>DropAdd</Text>
          </View>        
        }

      </View>
    )

    return (
      <View style={styles.container}>
        {tableHeader()}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              // does this ever run?
              Alert.alert('Modal has been closed.');
              // setModalVisible(!modalVisible);
            }}>
              <DropPlayerConfirmationModal 
                rosterSpot={dropPlayer?.rosterSpot}
                playerId={dropPlayer?.playerInfo.id}
                lastName={dropPlayer?.playerInfo.lastName}
                position={dropPlayer?.playerInfo.position}
                roster={roster}
                modalCallback={modalCallback}
                cancelCallback={cancelModalCallback}
                visible={modalVisible}
              />
            </Modal>
        <ScrollView>
          <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"GOALIE"} position={"G"} playerInfo={roster.goalie} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
          <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"DEFENSE1"} position={"D"} playerInfo={roster.defense1} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
          <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"DEFENSE2"} position={"D"} playerInfo={roster.defense2} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
          <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"LSM"} position={"LSM"} playerInfo={roster.lsm} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
          <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"SSDM"} position={"SSDM"} playerInfo={roster.ssdm} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
          <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"FO"} position={"FO"} playerInfo={roster.fo} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} teamName={roster?.teamInfo}/>
          <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"MIDFIELD1"} position={"M"} playerInfo={roster.midfield1} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
          <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"MIDFIELD2"} position={"M"} playerInfo={roster.midfield2} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
          <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"ATTACK1"} position={"A"} playerInfo={roster.attack1} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
          <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"ATTACK2"} position={"A"} playerInfo={roster.attack2} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
        </ScrollView>      
      </View>
    );

  // return(
  //   <RosterList roster={data?.roster} myTeam={myTeam} />
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tableHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#37C2D0",
    height: 50,
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
  dropAddColumnHeader: {
    flexGrow:1,
  },
  columnHeaderTxt: {
    color: "white",
    fontWeight: "bold",
  },
});
