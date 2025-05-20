import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Team, RosterSpot, Position, Player, SelectDropPlayerObject } from '../../data/types';
import { ButtonStyles, RowStyles } from '../styles/index';

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
        <View style={RowStyles.dropAddPlayerColumn} testId={"rosterRowDropButtonID"}>
          <TouchableOpacity style={ButtonStyles.dropButton} onPress={() => {
            dropPlayerCallback({
              leagueId: Number(teamInfo?.league?.id),
              playerId: Number(playerInfo.id),
              rosterSpot: rosterSpot,
              rosterId: String(rosterId),
              playerInfo: playerInfo
            })
          }}>
            <Text style={ButtonStyles.addDropButtonText}>Drop</Text>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={RowStyles.dropAddPlayerColumn} testId={"rosterRowAddButtonID"}>
          <TouchableOpacity style={ButtonStyles.addButton} onPress={() => {
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
            <Text style={ButtonStyles.addDropButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }

	return(
    <View style={styles.container}>

      <View style={RowStyles.positionColumn}>
        <Text style={styles.rowText}>{position}</Text>  
      </View>

      <View style={RowStyles.nameColumn}>
        <Text style={styles.rowText}>{playerInfo?.lastName ?? "(empty)"}</Text>
      </View>

      <View style={RowStyles.pointsColumn}>
        <Text style={styles.pointsRowText}>{playerInfo?.statistics.statLineLastSeason.points ?? "  "}</Text>
      </View>

      { myTeam && addDropButton() }

    </View>
	);
}
//JH-NOTE: may not need this, see addPlayer memo
export default memo(RosterRow);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: '#fff',
    height: 50,
    paddingTop:15,
    paddingBottom:15,
  },
  rowText: {
    
  },
  pointsRowText: {
    alignSelf: 'center'
  },
});