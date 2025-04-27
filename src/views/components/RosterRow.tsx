import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RosterRow = ({callback, rosterId, rosterSpot, position, playerInfo, myTeam, leagueId, team}) => {
  const navigation = useNavigation();
  
  const addDropButton = () => {
    if(playerInfo) {
      return (
        <View style={styles.dropAddColumn}>
          <TouchableOpacity onPress={() => {
            console.log('Drop Player')
            // leagueId: team?.league?.id,
            callback({
              leagueId: leagueId,
              playerId: playerInfo.id,
              rosterSpot: rosterSpot,
              rosterId: rosterId,
              playerInfo: playerInfo
            })
          }}>
            <Text style={styles.buttonText}>Drop</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={styles.dropAddColumn}>
          <TouchableOpacity onPress={() => navigation.navigate('AvailablePlayersScreen', {
            availableForLeagueId: leagueId,
            position: position,
            team: team,
            rosterSpot: rosterSpot,
            rosterId: rosterId
          })}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }

	return(
    <View style={styles.container}>

      <View style={styles.positionColumn}>
        <Text style={styles.rowText}>{position}</Text>  
      </View>

      <View style={styles.nameColumn}>
        <Text style={styles.rowText}>{playerInfo?.lastName ?? "ReEMPTYY"}</Text>
      </View>

      <View style={styles.pointsColumn}>
        <Text style={styles.rowText}>{playerInfo?.statistics.statLineLastSeason.points ?? "  "}</Text>
      </View>

      { myTeam && addDropButton() }

    </View>
	);
}
//JH-NOTE: may not need this, just copying add Player structure...
export default memo(RosterRow);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
    height: 50,
    paddingTop:30,
  },
  positionColumn: {
    flex:1,
    flexGrow: 2,
    alignItems: 'center'
  },
  nameColumn: {
    flex:1,
    flexGrow: 5,
  },
  pointsColumn: {
    flexGrow:1,
  },
  dropAddColumn: {
    flexGrow:1,
  },
  rowText: {
  },
  buttonText: {
    // fontSize: 40,
  }
});