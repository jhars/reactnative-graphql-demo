import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Player } from "../../../data/types";
import { ButtonStyles, RowStyles } from "../../../styles/index";

interface PlayerRowProps {
  player: Player;
  addPlayerButton: boolean;
  addPlayerCallback: (player: Player) => void;
}

const PlayerRow = ({
  player,
  addPlayerButton,
  addPlayerCallback,
}: PlayerRowProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id, lastName, position, statistics } = player;

  return (
    <View testID={"playerRowContainerID"} style={styles.container}>
      <View style={RowStyles.positionColumn}>
        <Text style={styles.columnText}>{position}</Text>
      </View>

      <View style={RowStyles.nameColumn}>
        <Text style={styles.nameColumnText}>{lastName}</Text>
      </View>
      <View style={RowStyles.pointsColumn}>
        <Text style={styles.pointsColumnText}>
          {statistics?.statLineLastSeason.points}
        </Text>
      </View>

      {addPlayerButton && (
        <View
          style={RowStyles.dropAddPlayerColumn}
          testID={"addPlayerButtonTestID"}
        >
          <TouchableOpacity
            style={ButtonStyles.addButton}
            onPress={() => addPlayerCallback(player)}
          >
            <Text style={ButtonStyles.addDropButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default memo(PlayerRow);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    height: 50,
    paddingTop: 15,
    paddingBottom: 15,
  },
  columnText: {
    alignSelf: "center",
  },
  nameColumnText: {},
  pointsColumnText: {
    alignSelf: "center",
  },
});
