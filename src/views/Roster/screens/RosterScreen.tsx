import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Modal,
  ScrollView,
  Text,
  View,
} from "react-native";
import DropPlayerConfirmationModal from "../components/DropPlayerConfirmationModal";
import RosterRow from "../components/RosterRow";
import RosterTableHeader from "../components/RosterTableHeader";
//==== GraphQL ========
import { useQuery } from "@apollo/client";
import { GET_TEAM_ROSTER } from "../../../data/queries";
import {
  DropPlayerRequestObject,
  Position,
  RosterData,
  RosterSpot,
} from "../../../data/types";
//=====================
import { RosterScreenRouteProps } from "../../../navigation/navTypes";

export default function RosterScreen() {
  const navigation = useNavigation();
  const route = useRoute<RosterScreenRouteProps>();

  const [dropPlayer, setDropPlayer] = useState<DropPlayerRequestObject | null>(
    null,
  );
  const [modalVisible, setModalVisible] = useState(false);

  const { team, myTeam } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: team?.name,
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, []),
  );

  const selectPlayerToDrop = (player: DropPlayerRequestObject) => {
    setDropPlayer(player);
    setModalVisible(true);
  };

  const dropPlayerFromRosterRowCallback = useCallback(
    (player: DropPlayerRequestObject) => {
      selectPlayerToDrop(player);
    },
    [],
  );

  const modalCallback = useCallback(() => {
    refetch();
    setModalVisible(false);
  }, []);

  const cancelModalCallback = useCallback(() => {
    setModalVisible(false);
  }, []);

  const failedToDropPlayerCallback = useCallback(() => {
    showFailureAlert();
  }, []);

  const showFailureAlert = () => {
    setModalVisible(false);
    Alert.alert(
      "Unable to Drop Player",
      "Player may have started games this week or there may be network issues",
      [
        {
          text: "OK",
        },
      ],
    );
  };

  const { loading, error, data, refetch } = useQuery<RosterData>(
    GET_TEAM_ROSTER,
    {
      variables: { teamId: Number(team?.id) },
    },
  );

  const roster = data?.roster;

  if (loading)
    return <ActivityIndicator testID="loading" size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={{ height: "100vh", flex: 1 }}>
      <RosterTableHeader myTeam={myTeam} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        {dropPlayer && roster && (
          <DropPlayerConfirmationModal
            rosterSpot={dropPlayer.rosterSpot}
            playerId={dropPlayer.playerInfo.id}
            lastName={dropPlayer.playerInfo.lastName}
            position={dropPlayer.playerInfo.position}
            roster={roster}
            modalCallback={modalCallback}
            cancelCallback={cancelModalCallback}
            failedToDropPlayerCallback={failedToDropPlayerCallback}
          />
        )}
      </Modal>

      {roster && (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <RosterRow
            dropPlayerCallback={dropPlayerFromRosterRowCallback}
            rosterId={roster.id}
            rosterSpot={RosterSpot.GOALIE}
            position={Position.G}
            playerInfo={roster.goalie}
            myTeam={myTeam}
            teamInfo={roster?.teamInfo}
          />
          <RosterRow
            dropPlayerCallback={dropPlayerFromRosterRowCallback}
            rosterId={roster.id}
            rosterSpot={RosterSpot.DEFENSE1}
            position={Position.D}
            playerInfo={roster.defense1}
            myTeam={myTeam}
            teamInfo={roster?.teamInfo}
          />
          <RosterRow
            dropPlayerCallback={dropPlayerFromRosterRowCallback}
            rosterId={roster.id}
            rosterSpot={RosterSpot.DEFENSE2}
            position={Position.D}
            playerInfo={roster.defense2}
            myTeam={myTeam}
            teamInfo={roster?.teamInfo}
          />
          <RosterRow
            dropPlayerCallback={dropPlayerFromRosterRowCallback}
            rosterId={roster.id}
            rosterSpot={RosterSpot.LSM}
            position={Position.LSM}
            playerInfo={roster.lsm}
            myTeam={myTeam}
            teamInfo={roster?.teamInfo}
          />
          <RosterRow
            dropPlayerCallback={dropPlayerFromRosterRowCallback}
            rosterId={roster.id}
            rosterSpot={RosterSpot.SSDM}
            position={Position.SSDM}
            playerInfo={roster.ssdm}
            myTeam={myTeam}
            teamInfo={roster?.teamInfo}
          />
          <RosterRow
            dropPlayerCallback={dropPlayerFromRosterRowCallback}
            rosterId={roster.id}
            rosterSpot={RosterSpot.FO}
            position={Position.FO}
            playerInfo={roster.fo}
            myTeam={myTeam}
            teamInfo={roster?.teamInfo}
          />
          <RosterRow
            dropPlayerCallback={dropPlayerFromRosterRowCallback}
            rosterId={roster.id}
            rosterSpot={RosterSpot.MIDFIELD1}
            position={Position.M}
            playerInfo={roster.midfield1}
            myTeam={myTeam}
            teamInfo={roster?.teamInfo}
          />
          <RosterRow
            dropPlayerCallback={dropPlayerFromRosterRowCallback}
            rosterId={roster.id}
            rosterSpot={RosterSpot.MIDFIELD2}
            position={Position.M}
            playerInfo={roster.midfield2}
            myTeam={myTeam}
            teamInfo={roster?.teamInfo}
          />
          <RosterRow
            dropPlayerCallback={dropPlayerFromRosterRowCallback}
            rosterId={roster.id}
            rosterSpot={RosterSpot.ATTACK1}
            position={Position.A}
            playerInfo={roster.attack1}
            myTeam={myTeam}
            teamInfo={roster?.teamInfo}
          />
          <RosterRow
            dropPlayerCallback={dropPlayerFromRosterRowCallback}
            rosterId={roster.id}
            rosterSpot={RosterSpot.ATTACK2}
            position={Position.A}
            playerInfo={roster.attack2}
            myTeam={myTeam}
            teamInfo={roster?.teamInfo}
          />
        </ScrollView>
      )}
    </View>
  );
}
