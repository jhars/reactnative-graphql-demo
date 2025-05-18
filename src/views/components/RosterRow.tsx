import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Team, RosterSpot, Position, Player, SelectDropPlayerObject } from '../../data/types';

interface RosterRowProps {
  dropPlayerCallback: (player: SelectDropPlayerObject) => void, 
  rosterId: string | undefined,
  rosterSpot: RosterSpot,
  position: Position | undefined,
  playerInfo: Player | undefined,
  myTeam: boolean | undefined,
  teamInfo: Team | undefined
}

const RosterRow = ({
  dropPlayerCallback,
  rosterId,
  rosterSpot,
  position,
  playerInfo,
  myTeam,
  teamInfo
}: RosterRowProps) => {
  const navigation = useNavigation();
  
  const addDropButton = () => {
    if(playerInfo) {
      return (
        <View style={styles.dropAddColumn} testId={"rosterRowDropButtonID"}>
          <TouchableOpacity style={styles.dropButton} onPress={() => {
            dropPlayerCallback({
              leagueId: Number(teamInfo?.league?.id),
              playerId: Number(playerInfo.id),
              rosterSpot: rosterSpot,
              rosterId: String(rosterId),
              playerInfo: playerInfo
            })
          }}>
            <Text style={styles.buttonText}>Drop</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={styles.dropAddColumn} testId={"rosterRowAddButtonID"}>
          <TouchableOpacity style={styles.addButton} onPress={() => {
            return navigation.navigate('MyTeams', {
              screen: 'AvailablePlayersScreen',
              params: {
                availableForLeagueId: Number(teamInfo?.league?.id),
                position: position,
                team: teamInfo,
                rosterSpot: rosterSpot,
                rosterId: rosterId 
              }
            })
          }}>
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
        <Text style={styles.rowText}>{playerInfo?.lastName ?? "(empty)"}</Text>
      </View>

      <View style={styles.pointsColumn}>
        <Text style={styles.rowText}>{playerInfo?.statistics.statLineLastSeason.points ?? "  "}</Text>
      </View>

      { myTeam && addDropButton() }

    </View>
	);
}
//JH-NOTE: may not need this, see addPlayer memo
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
    paddingRight: 10,
    width: 25
  },
  rowText: {
  },
  buttonText: {
    fontSize: 12,
    color: 'aliceblue',
    fontWeight: "bold"
  },
  addButton: {
    backgroundColor: 'green',
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
  },
  dropButton: {
    backgroundColor: 'darkred',
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
  }
});