import React, {memo} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useMutation } from '@apollo/client';
import { ADD_PLAYER_TO_TEAM } from '../../data/mutations';
import { AddPlayerToTeamRosterMutationResponse, RosterSpot, Position, Team } from '../../data/types';

interface AddPlayerConfirmationProps {
  rosterSpot: RosterSpot, 
  rosterId: string, 
  playerId: number, 
  lastName: string, 
  position: Position, 
  team: Team, 
  callback: () => void,
  cancelCallback: () => void,
  failedToAddPlayerCallback: () => void, 
}

const AddPlayerConfirmationModal = ({
  rosterSpot, 
  rosterId, 
  playerId, 
  lastName, 
  position, 
  team, 
  callback, 
  cancelCallback, 
  failedToAddPlayerCallback
}: AddPlayerConfirmationProps) => {
  const [addPlayerToTeam, { data, loading, error }] = useMutation<AddPlayerToTeamRosterMutationResponse>(ADD_PLAYER_TO_TEAM, {
    onCompleted(data) {
      callback()
    },
    errorPolicy: "all",
    onError(err) {
      console.log("Apollo err")
      console.log(err)
      failedToAddPlayerCallback()
    }
  });

  if (error ) return <Text>Error: {error.message}</Text>;

  return(
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>
          Add {lastName} as {position} to {team?.name}?
        </Text>

        <View style={styles.actionButtons}>
          <TouchableOpacity
            style={[styles.button, styles.buttonConfirm]}
            onPress={() => {
                addPlayerToTeam({
                variables: { 
                  teamId: Number(team?.id),
                  playerId: Number(playerId),
                  rosterSpot: rosterSpot,
                  leagueId: Number(team.league.id),
                  position: position,
                  rosterId: rosterId,
                }
              })
            }
            }>

            <Text style={styles.textStyle}>Confirm</Text>

          </TouchableOpacity>

          <TouchableOpacity
              style={[styles.button, styles.buttonCancel]}
              onPress={() => cancelCallback()}>

              <Text style={styles.textStyle}>Cancel</Text>

          </TouchableOpacity>
        </View>
         

      </View>
    </View>
  );
}

// do i need this to be a memo?
export default memo(AddPlayerConfirmationModal);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10
  },
  buttonConfirm: {
    backgroundColor: 'green',
  },
  buttonCancel: {
    backgroundColor: 'goldenrod',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 15
  },
  actionButtons: {
    flexDirection: "row"
  }
});

