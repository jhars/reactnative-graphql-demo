import { useMutation } from "@apollo/client";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { REMOVE_PLAYER_FROM_TEAM } from "../../../data/mutations";
import { Position, Roster, RosterSpot } from "../../../data/types";

interface DropPlayerConfirmationProps {
  rosterSpot: RosterSpot;
  playerId: string;
  lastName: string;
  position: Position;
  roster: Roster;
  modalCallback: () => void;
  cancelCallback: () => void;
  failedToDropPlayerCallback: () => void;
}

const DropPlayerConfirmationModal = ({
  rosterSpot,
  playerId,
  lastName,
  position,
  roster,
  modalCallback,
  cancelCallback,
  failedToDropPlayerCallback,
}: DropPlayerConfirmationProps) => {
  // const [dropPlayerFromTeam, { data, loading, error }] = useMutation(
  const [dropPlayerFromTeam, { error }] = useMutation(REMOVE_PLAYER_FROM_TEAM, {
    onCompleted(data) {
      console.log("Drop Player Request Complete, Data: " + data);
      modalCallback();
    },
    errorPolicy: "all",
    onError(err) {
      console.log("Apollo err");
      console.log(err);
      failedToDropPlayerCallback();
    },
  });

  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>
          Drop ({position}){lastName} as your {rosterSpot} from{" "}
          {roster?.teamInfo?.name}?
        </Text>

        <View style={styles.actionButtons}>
          <TouchableOpacity
            testID={"dropPlayerConfirmationButtonTestID"}
            style={[styles.button, styles.buttonConfirm]}
            onPress={() => {
              dropPlayerFromTeam({
                variables: {
                  leagueId: Number(roster?.teamInfo?.league?.id),
                  playerId: Number(playerId),
                  rosterSpot: rosterSpot,
                  rosterId: roster.id,
                },
              });
            }}
          >
            <Text style={styles.textStyle}>Confirm Drop</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.buttonCancel]}
            onPress={() => cancelCallback()}
          >
            <Text style={styles.textStyle}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default memo(DropPlayerConfirmationModal);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
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
    margin: 10,
  },
  buttonConfirm: {
    backgroundColor: "darkred",
  },
  buttonCancel: {
    backgroundColor: "goldenrod",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 15,
  },
  actionButtons: {
    flexDirection: "row",
  },
});
