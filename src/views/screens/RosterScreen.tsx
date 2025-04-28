import React, {useEffect, useState, useCallback} from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Alert, View, Text, StyleSheet, ScrollView, Modal, ActivityIndicator} from 'react-native';
import RosterTableHeader from '../components/RosterTableHeader';
import RosterRow from '../components/RosterRow';
import DropPlayerConfirmationModal from '../components/DropPlayerConfirmationModal'
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
  }, []);

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      refetch()
      return () => {};
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
    refetch()
    setModalVisible(false)
  }, []);

  const cancelModalCallback = useCallback( (show) => {
    setModalVisible(false)
  }, []);

  const failedToDropPlayerCallback = useCallback( () => {
    showFailureAlert()
  }, []);

  const showFailureAlert = (player) => {
    setModalVisible(false)
    Alert.alert('Unable to Drop Player','Player may have started games this week or there may be network issues', [
      {
        text: 'OK'
      }
    ])
  } 

  const { loading, error, data, refetch } = useQuery<Roster>(GET_TEAM_ROSTER, {
    variables: { teamId: Number(team.id) }
  });

  const roster = data?.roster

  if (loading) return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;

    return (
      <View style={styles.container}>
        <RosterTableHeader myTeam={myTeam}/>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}>
            
            <DropPlayerConfirmationModal 
              rosterSpot={dropPlayer?.rosterSpot}
              playerId={dropPlayer?.playerInfo.id}
              lastName={dropPlayer?.playerInfo.lastName}
              position={dropPlayer?.playerInfo.position}
              roster={roster}
              modalCallback={modalCallback}
              cancelCallback={cancelModalCallback}
              failedToDropPlayerCallback={failedToDropPlayerCallback}
              visible={modalVisible}/>

          </Modal>
        <ScrollView>
          <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"GOALIE"} position={"G"} playerInfo={roster.goalie} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
          <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"DEFENSE1"} position={"D"} playerInfo={roster.defense1} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
          <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"DEFENSE2"} position={"D"} playerInfo={roster.defense2} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
          <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"LSM"} position={"LSM"} playerInfo={roster.lsm} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
          <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"SSDM"} position={"SSDM"} playerInfo={roster.ssdm} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
          <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"FO"} position={"FO"} playerInfo={roster.fo} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
          <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"MIDFIELD1"} position={"M"} playerInfo={roster.midfield1} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
          <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"MIDFIELD2"} position={"M"} playerInfo={roster.midfield2} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
          <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"ATTACK1"} position={"A"} playerInfo={roster.attack1} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
          <RosterRow callback={rosterRowCallback} rosterId={roster.id} rosterSpot={"ATTACK2"} position={"A"} playerInfo={roster.attack2} myTeam={myTeam} leagueId={roster?.teamInfo?.league?.id} team={roster?.teamInfo}/>
        </ScrollView>      
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
