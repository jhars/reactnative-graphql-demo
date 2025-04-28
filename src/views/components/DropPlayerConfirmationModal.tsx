import React, {memo} from 'react';
import { Alert, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useMutation } from '@apollo/client';
import { REMOVE_PLAYER_FROM_TEAM } from '../../data/mutations';

const DropPlayerConfirmationModal = ({rosterSpot, playerId, lastName, position, roster, modalCallback, visible, cancelCallback}) => {
  const [dropPlayerFromTeam, { data, loading, error }] = useMutation(REMOVE_PLAYER_FROM_TEAM, {
    onCompleted(data) {
      console.log("Drop Player Request Complete")
      modalCallback()
    },
    errorPolicy: "all",
    onError(err) {
      console.log("Apollo err")
      console.log(err)
      console.log("***********")
    }
  });

  if (error) return <Text>Error: {error.message}</Text>;


  return(
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Drop  ({position}){lastName} as your {rosterSpot} from {roster?.teamInfo?.name}?
          </Text>
           
          <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
              		dropPlayerFromTeam({
              	  	variables: { 
              			  leagueId: Number(roster?.teamInfo?.league?.id),
              			  playerId: Number(playerId),
              			  rosterSpot: rosterSpot,
              			  rosterId: roster.id
              	  	}
              		})
              }}>

              <Text style={styles.textStyle}>Confirm</Text>

          </TouchableOpacity>

          <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => cancelCallback(visible)}>

              <Text style={styles.textStyle}>Cancel</Text>

          </TouchableOpacity>
        </View>
      </View>
  );
}

export default memo(DropPlayerConfirmationModal);

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
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
