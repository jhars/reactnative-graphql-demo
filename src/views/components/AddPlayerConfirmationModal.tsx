import React, {useState, useEffect, memo} from 'react';
// import React from 'react';
import { Alert, View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
// import { View, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const AddPlayerConfirmationModal = ({playerId, lastName, position, team, callback, visible, cancelCallback}) => {
  const navigation = useNavigation();

  return(
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Add {lastName} as {position} to {team}?
          </Text>
           
          <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => callback(playerId,lastName,position,team)}>

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

